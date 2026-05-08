import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.resolve(__dirname, '../content');

const ALLOWED_PROJECT_CATEGORIES = new Set([
  'web-app',
  'library',
  'tool',
  'other',
]);
const ALLOWED_LINK_TYPES = new Set([
  'github',
  'demo',
  'npm',
  'docs',
  'video',
  'other',
]);
const ALLOWED_SKILL_LEVELS = new Set(['core', 'proficient', 'familiar']);
const SOCIAL_KEYS = [
  'github',
  'linkedin',
  'twitter',
  'devto',
  'medium',
  'youtube',
  'substack',
];

const errors = [];

function addError(file, keyPath, message) {
  errors.push({ file, keyPath, message });
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidUrl(value) {
  if (!isNonEmptyString(value)) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidSlug(value) {
  return typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function expectObject(value, file, keyPath) {
  if (!isObject(value)) {
    addError(file, keyPath, 'Expected an object');
    return false;
  }
  return true;
}

function expectArray(value, file, keyPath) {
  if (!Array.isArray(value)) {
    addError(file, keyPath, 'Expected an array');
    return false;
  }
  return true;
}

function expectNonEmptyString(value, file, keyPath) {
  if (!isNonEmptyString(value)) {
    addError(file, keyPath, 'Expected a non-empty string');
    return false;
  }
  return true;
}

function expectBoolean(value, file, keyPath) {
  if (typeof value !== 'boolean') {
    addError(file, keyPath, 'Expected a boolean');
    return false;
  }
  return true;
}

function validateConfig(data, file) {
  const keyPath = 'root';
  if (!expectObject(data, file, keyPath)) return;

  const keys = [
    'showJumbotron',
    'showAbout',
    'showExperience',
    'showProjects',
    'showContent',
    'showEducation',
    'showContact',
  ];

  for (const key of keys) {
    expectBoolean(data[key], file, key);
  }
}

function validateNav(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.nav, file, 'nav')) return;
  if (!expectArray(data.nav.links, file, 'nav.links')) return;

  data.nav.links.forEach((link, idx) => {
    const base = `nav.links[${idx}]`;
    if (!expectObject(link, file, base)) return;
    expectNonEmptyString(link.id, file, `${base}.id`);
    expectNonEmptyString(link.text, file, `${base}.text`);
    if (
      expectNonEmptyString(link.href, file, `${base}.href`) &&
      !link.href.startsWith('#')
    ) {
      addError(
        file,
        `${base}.href`,
        'Expected an in-page anchor href starting with "#"'
      );
    }
  });
}

function validateProfile(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.profile, file, 'profile')) return;

  const p = data.profile;
  const requiredStrings = [
    'id',
    'description',
    'title',
    'author',
    'currentRole',
    'location',
    'resumeHref',
    'contactHref',
    'email',
    'nickname',
  ];
  requiredStrings.forEach((key) =>
    expectNonEmptyString(p[key], file, `profile.${key}`)
  );

  if (expectObject(p.picture, file, 'profile.picture')) {
    ['id', 'sm', 'md', 'lg'].forEach((key) =>
      expectNonEmptyString(p.picture[key], file, `profile.picture.${key}`)
    );
  }

  if (expectArray(p.highlightedRoles, file, 'profile.highlightedRoles')) {
    p.highlightedRoles.forEach((role, idx) =>
      expectNonEmptyString(role, file, `profile.highlightedRoles[${idx}]`)
    );
  }
}

function validateAbout(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.about, file, 'about')) return;

  const about = data.about;
  expectNonEmptyString(about.header, file, 'about.header');

  if (expectArray(about.mainContent, file, 'about.mainContent')) {
    about.mainContent.forEach((section, idx) =>
      validateAboutSection(section, file, `about.mainContent[${idx}]`)
    );
  }

  if (expectArray(about.secondaryContent, file, 'about.secondaryContent')) {
    about.secondaryContent.forEach((section, idx) =>
      validateAboutSection(section, file, `about.secondaryContent[${idx}]`)
    );
  }
}

function validateAboutSection(section, file, base) {
  if (!expectObject(section, file, base)) return;
  if ('id' in section) expectNonEmptyString(section.id, file, `${base}.id`);
  if ('header' in section && section.header !== undefined) {
    expectNonEmptyString(section.header, file, `${base}.header`);
  }
  if (!expectArray(section.paragraphs, file, `${base}.paragraphs`)) return;
  section.paragraphs.forEach((paragraph, idx) => {
    const pBase = `${base}.paragraphs[${idx}]`;
    if (!expectObject(paragraph, file, pBase)) return;
    expectNonEmptyString(paragraph.body, file, `${pBase}.body`);
  });
}

function validateExperience(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.experience, file, 'experience')) return;
  expectNonEmptyString(data.experience.header, file, 'experience.header');
  if (!expectArray(data.experience.items, file, 'experience.items')) return;

  data.experience.items.forEach((item, idx) => {
    const base = `experience.items[${idx}]`;
    if (!expectObject(item, file, base)) return;
    [
      'id',
      'position',
      'company',
      'location',
      'duration',
      'employmentType',
    ].forEach((key) => expectNonEmptyString(item[key], file, `${base}.${key}`));

    if (expectObject(item.image, file, `${base}.image`)) {
      ['id', 'sm', 'md', 'lg'].forEach((key) =>
        expectNonEmptyString(item.image[key], file, `${base}.image.${key}`)
      );
    }

    if (expectArray(item.description, file, `${base}.description`)) {
      item.description.forEach((line, i) =>
        expectNonEmptyString(line, file, `${base}.description[${i}]`)
      );
    }

    if (expectArray(item.technologies, file, `${base}.technologies`)) {
      item.technologies.forEach((tech, i) =>
        expectNonEmptyString(tech, file, `${base}.technologies[${i}]`)
      );
    }

    expectBoolean(item.isCurrent, file, `${base}.isCurrent`);
  });
}

function validateProjects(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.projects, file, 'projects')) return;
  expectNonEmptyString(data.projects.header, file, 'projects.header');
  if (!expectArray(data.projects.items, file, 'projects.items')) return;

  const seenSlugs = new Set();

  data.projects.items.forEach((item, idx) => {
    const base = `projects.items[${idx}]`;
    if (!expectObject(item, file, base)) return;

    ['id', 'slug', 'name', 'category'].forEach((key) =>
      expectNonEmptyString(item[key], file, `${base}.${key}`)
    );

    if (isNonEmptyString(item.slug)) {
      if (!isValidSlug(item.slug)) {
        addError(file, `${base}.slug`, 'Slug must be lowercase and hyphenated');
      }
      if (seenSlugs.has(item.slug)) {
        addError(file, `${base}.slug`, 'Duplicate project slug');
      }
      seenSlugs.add(item.slug);
    }

    if (
      isNonEmptyString(item.category) &&
      !ALLOWED_PROJECT_CATEGORIES.has(item.category)
    ) {
      addError(
        file,
        `${base}.category`,
        `Invalid category. Allowed: ${Array.from(ALLOWED_PROJECT_CATEGORIES).join(', ')}`
      );
    }

    if (!expectArray(item.technologies, file, `${base}.technologies`)) return;
    item.technologies.forEach((tech, i) =>
      expectNonEmptyString(tech, file, `${base}.technologies[${i}]`)
    );

    if ('summary' in item && item.summary !== undefined) {
      if (
        expectNonEmptyString(item.summary, file, `${base}.summary`) &&
        item.summary.length > 160
      ) {
        addError(
          file,
          `${base}.summary`,
          'Summary should be <= 160 characters'
        );
      }
    }

    if ('description' in item && item.description !== undefined) {
      expectNonEmptyString(item.description, file, `${base}.description`);
    }

    if (expectObject(item.image, file, `${base}.image`)) {
      ['sm', 'md', 'lg'].forEach((key) =>
        expectNonEmptyString(item.image[key], file, `${base}.image.${key}`)
      );
    }

    if (
      'githubUrl' in item &&
      item.githubUrl !== undefined &&
      !isValidUrl(item.githubUrl)
    ) {
      addError(file, `${base}.githubUrl`, 'Expected a valid http/https URL');
    }

    if (
      'demoUrl' in item &&
      item.demoUrl !== undefined &&
      !isValidUrl(item.demoUrl)
    ) {
      addError(file, `${base}.demoUrl`, 'Expected a valid http/https URL');
    }

    if (expectArray(item.links, file, `${base}.links`)) {
      if (item.links.length === 0) {
        addError(
          file,
          `${base}.links`,
          'At least one project link is required'
        );
      }
      item.links.forEach((link, i) => {
        const linkBase = `${base}.links[${i}]`;
        if (!expectObject(link, file, linkBase)) return;
        expectNonEmptyString(link.label, file, `${linkBase}.label`);
        if (
          expectNonEmptyString(link.url, file, `${linkBase}.url`) &&
          !isValidUrl(link.url)
        ) {
          addError(file, `${linkBase}.url`, 'Expected a valid http/https URL');
        }
        if (
          expectNonEmptyString(link.type, file, `${linkBase}.type`) &&
          !ALLOWED_LINK_TYPES.has(link.type)
        ) {
          addError(
            file,
            `${linkBase}.type`,
            `Invalid link type. Allowed: ${Array.from(ALLOWED_LINK_TYPES).join(', ')}`
          );
        }
      });
    }

    if ('metrics' in item && item.metrics !== undefined) {
      if (expectArray(item.metrics, file, `${base}.metrics`)) {
        item.metrics.forEach((metric, i) => {
          const mBase = `${base}.metrics[${i}]`;
          if (!expectObject(metric, file, mBase)) return;
          expectNonEmptyString(metric.label, file, `${mBase}.label`);
          expectNonEmptyString(metric.value, file, `${mBase}.value`);
        });
      }
    }
  });
}

function validateEducation(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.education, file, 'education')) return;
  expectNonEmptyString(data.education.header, file, 'education.header');
  if (!expectArray(data.education.items, file, 'education.items')) return;

  data.education.items.forEach((item, idx) => {
    const base = `education.items[${idx}]`;
    if (!expectObject(item, file, base)) return;
    ['id', 'institution', 'duration', 'location', 'description'].forEach(
      (key) => expectNonEmptyString(item[key], file, `${base}.${key}`)
    );
  });
}

function validateSkills(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectArray(data.skillGroups, file, 'skillGroups')) return;

  data.skillGroups.forEach((group, idx) => {
    const base = `skillGroups[${idx}]`;
    if (!expectObject(group, file, base)) return;
    expectNonEmptyString(group.id, file, `${base}.id`);
    expectNonEmptyString(group.label, file, `${base}.label`);
    if (!expectArray(group.skills, file, `${base}.skills`)) return;
    group.skills.forEach((skill, i) => {
      const sBase = `${base}.skills[${i}]`;
      if (!expectObject(skill, file, sBase)) return;
      expectNonEmptyString(skill.name, file, `${sBase}.name`);
      if ('level' in skill && skill.level !== undefined) {
        if (expectNonEmptyString(skill.level, file, `${sBase}.level`)) {
          if (!ALLOWED_SKILL_LEVELS.has(skill.level)) {
            addError(
              file,
              `${sBase}.level`,
              `Invalid level. Allowed: ${Array.from(ALLOWED_SKILL_LEVELS).join(', ')}`
            );
          }
        }
      }
    });
  });
}

function validateSocials(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectObject(data.socials, file, 'socials')) return;

  for (const key of SOCIAL_KEYS) {
    const base = `socials.${key}`;
    if (!expectObject(data.socials[key], file, base)) continue;
    expectBoolean(
      data.socials[key].hideByDefault,
      file,
      `${base}.hideByDefault`
    );
    if (expectNonEmptyString(data.socials[key].href, file, `${base}.href`)) {
      if (!isValidUrl(data.socials[key].href)) {
        addError(file, `${base}.href`, 'Expected a valid http/https URL');
      }
    }
  }
}

function validateBlogPosts(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectArray(data.posts, file, 'posts')) return;

  data.posts.forEach((post, idx) => {
    const base = `posts[${idx}]`;
    if (!expectObject(post, file, base)) return;
    ['link', 'title', 'uploadedTime', 'description'].forEach((key) =>
      expectNonEmptyString(post[key], file, `${base}.${key}`)
    );
    if (isNonEmptyString(post.link) && !isValidUrl(post.link)) {
      addError(file, `${base}.link`, 'Expected a valid http/https URL');
    }
    if (
      'coverImage' in post &&
      isNonEmptyString(post.coverImage) &&
      !isValidUrl(post.coverImage)
    ) {
      addError(
        file,
        `${base}.coverImage`,
        'Expected a valid http/https URL when provided'
      );
    }
    if (expectArray(post.tags, file, `${base}.tags`)) {
      post.tags.forEach((tag, i) =>
        expectNonEmptyString(tag, file, `${base}.tags[${i}]`)
      );
    }
  });
}

function validateVideoPosts(data, file) {
  if (!expectObject(data, file, 'root')) return;
  if (!expectArray(data.posts, file, 'posts')) return;

  data.posts.forEach((post, idx) => {
    const base = `posts[${idx}]`;
    if (!expectObject(post, file, base)) return;
    ['videoId', 'title', 'description', 'publishedAt', 'link'].forEach((key) =>
      expectNonEmptyString(post[key], file, `${base}.${key}`)
    );
    if (isNonEmptyString(post.link) && !isValidUrl(post.link)) {
      addError(file, `${base}.link`, 'Expected a valid http/https URL');
    }
    if (
      'thumbnail' in post &&
      isNonEmptyString(post.thumbnail) &&
      !isValidUrl(post.thumbnail)
    ) {
      addError(
        file,
        `${base}.thumbnail`,
        'Expected a valid http/https URL when provided'
      );
    }
  });
}

const validators = {
  'config.json': validateConfig,
  'nav.json': validateNav,
  'profile.json': validateProfile,
  'about.json': validateAbout,
  'experience.json': validateExperience,
  'projects.json': validateProjects,
  'education.json': validateEducation,
  'skills.json': validateSkills,
  'socials.json': validateSocials,
  'blog-posts.json': validateBlogPosts,
  'video-posts.json': validateVideoPosts,
};

async function readJson(fileName) {
  const absolutePath = path.join(CONTENT_DIR, fileName);
  try {
    const content = await fs.readFile(absolutePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    addError(fileName, 'root', `Unable to read/parse JSON: ${error.message}`);
    return null;
  }
}

async function validateContent() {
  console.log('Validating content files...');

  for (const [fileName, validate] of Object.entries(validators)) {
    const data = await readJson(fileName);
    if (data !== null) {
      validate(data, fileName);
    }
  }

  if (errors.length > 0) {
    console.error('\n❌ Content Validation Status: FAILED 🚨\n');
    errors.forEach((error) => {
      console.error(`- ${error.file} :: ${error.keyPath} :: ${error.message}`);
    });
    process.exit(1);
  }

  console.log('✅ Content Validation Status: PASSED 🎉');
}

validateContent().catch((error) => {
  console.error('Unexpected validation error:', error);
  process.exit(1);
});
