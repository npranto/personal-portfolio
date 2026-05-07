#!/usr/bin/env node
/**
 * Content Validation Script
 * Validates all content JSON files without depending on the Next.js runtime.
 * Run: node ./src/scripts/validate-content.mjs
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..', '..');
const contentDir = join(rootDir, 'src', 'content');

let hasError = false;
const errors = [];

function readJson(filename) {
  try {
    const raw = readFileSync(join(contentDir, filename), 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    errors.push({
      file: `src/content/${filename}`,
      path: '(root)',
      issue: `failed to parse JSON: ${e.message}`,
    });
    hasError = true;
    return null;
  }
}

function fail(file, path, issue) {
  errors.push({ file, path, issue });
  hasError = true;
}

function isValidUrl(str) {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidSlug(str) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);
}

/* ── Validate profile.json ──────────────────────────────────────────────── */
const profileData = readJson('profile.json');
if (profileData) {
  const p = profileData.profile;
  if (!p?.author?.trim())
    fail(
      'src/content/profile.json',
      'profile.author',
      'missing required author'
    );
  if (!p?.email?.trim())
    fail('src/content/profile.json', 'profile.email', 'missing required email');
  if (!p?.currentRole?.trim())
    fail(
      'src/content/profile.json',
      'profile.currentRole',
      'missing required currentRole'
    );
}

/* ── Validate socials.json ──────────────────────────────────────────────── */
const socialsData = readJson('socials.json');
if (socialsData) {
  const s = socialsData.socials;
  for (const [key, val] of Object.entries(s ?? {})) {
    if (key === 'id') continue;
    if (val?.href && !isValidUrl(val.href)) {
      fail(
        'src/content/socials.json',
        `socials.${key}.href`,
        `invalid URL: "${val.href}"`
      );
    }
  }
}

/* ── Validate nav.json ──────────────────────────────────────────────────── */
const navData = readJson('nav.json');
if (navData) {
  const links = navData.nav?.links ?? [];
  if (links.length === 0)
    fail('src/content/nav.json', 'nav.links', 'links array is empty');
  links.forEach((link, i) => {
    if (!link.text?.trim())
      fail(
        'src/content/nav.json',
        `nav.links[${i}].text`,
        'missing required text'
      );
    if (!link.href?.trim())
      fail(
        'src/content/nav.json',
        `nav.links[${i}].href`,
        'missing required href'
      );
  });
}

/* ── Validate experience.json ──────────────────────────────────────────── */
const experienceData = readJson('experience.json');
if (experienceData) {
  const items = experienceData.experience?.items ?? [];
  if (items.length === 0)
    fail(
      'src/content/experience.json',
      'experience.items',
      'items array is empty'
    );
  items.forEach((item, i) => {
    const base = `experience.items[${i}]`;
    if (!item.position?.trim())
      fail(
        'src/content/experience.json',
        `${base}.position`,
        'missing required position'
      );
    if (!item.company?.trim())
      fail(
        'src/content/experience.json',
        `${base}.company`,
        'missing required company'
      );
    if (!Array.isArray(item.description))
      fail(
        'src/content/experience.json',
        `${base}.description`,
        'must be an array'
      );
    if (!Array.isArray(item.technologies))
      fail(
        'src/content/experience.json',
        `${base}.technologies`,
        'must be an array'
      );
  });
}

/* ── Validate projects.json ─────────────────────────────────────────────── */
const projectsData = readJson('projects.json');
if (projectsData) {
  const items = projectsData.projects?.items ?? [];
  if (items.length === 0)
    fail('src/content/projects.json', 'projects.items', 'items array is empty');

  const slugsSeen = new Set();
  const validCategories = ['web-app', 'library', 'tool', 'other'];

  items.forEach((p, i) => {
    const base = `projects.items[${i}]`;
    if (!p.name?.trim())
      fail(
        'src/content/projects.json',
        `${base}.name`,
        'missing required name'
      );
    if (!p.slug?.trim())
      fail(
        'src/content/projects.json',
        `${base}.slug`,
        'missing required slug'
      );
    else {
      if (!isValidSlug(p.slug))
        fail(
          'src/content/projects.json',
          `${base}.slug`,
          `invalid slug: "${p.slug}"`
        );
      if (slugsSeen.has(p.slug))
        fail(
          'src/content/projects.json',
          `${base}.slug`,
          `duplicate slug: "${p.slug}"`
        );
      slugsSeen.add(p.slug);
    }
    if (!p.category)
      fail(
        'src/content/projects.json',
        `${base}.category`,
        'missing required category'
      );
    else if (!validCategories.includes(p.category)) {
      fail(
        'src/content/projects.json',
        `${base}.category`,
        `invalid category "${p.category}"`
      );
    }
    if (!Array.isArray(p.technologies))
      fail(
        'src/content/projects.json',
        `${base}.technologies`,
        'must be an array'
      );

    (p.links ?? []).forEach((link, li) => {
      if (!link.url)
        fail(
          'src/content/projects.json',
          `${base}.links[${li}].url`,
          'missing URL'
        );
      else if (!isValidUrl(link.url))
        fail(
          'src/content/projects.json',
          `${base}.links[${li}].url`,
          `invalid URL: "${link.url}"`
        );
      if (!link.label)
        fail(
          'src/content/projects.json',
          `${base}.links[${li}].label`,
          'missing label'
        );
    });
  });
}

/* ── Validate education.json ────────────────────────────────────────────── */
const educationData = readJson('education.json');
if (educationData) {
  const items = educationData.education?.items ?? [];
  items.forEach((item, i) => {
    const base = `education.items[${i}]`;
    if (!item.institution?.trim())
      fail(
        'src/content/education.json',
        `${base}.institution`,
        'missing required institution'
      );
    if (!item.duration?.trim())
      fail(
        'src/content/education.json',
        `${base}.duration`,
        'missing required duration'
      );
  });
}

/* ── Validate blog-posts.json ───────────────────────────────────────────── */
const blogData = readJson('blog-posts.json');
if (blogData) {
  const posts = blogData.posts ?? [];
  posts.forEach((post, i) => {
    const base = `posts[${i}]`;
    if (!post.title?.trim())
      fail(
        'src/content/blog-posts.json',
        `${base}.title`,
        'missing required title'
      );
    if (!post.link?.trim())
      fail(
        'src/content/blog-posts.json',
        `${base}.link`,
        'missing required link'
      );
    else if (!isValidUrl(post.link))
      fail(
        'src/content/blog-posts.json',
        `${base}.link`,
        `invalid URL: "${post.link}"`
      );
    if (!Array.isArray(post.tags))
      fail('src/content/blog-posts.json', `${base}.tags`, 'must be an array');
  });
}

/* ── Validate video-posts.json ──────────────────────────────────────────── */
const videoData = readJson('video-posts.json');
if (videoData) {
  const posts = videoData.posts ?? [];
  posts.forEach((post, i) => {
    const base = `posts[${i}]`;
    if (!post.videoId?.trim())
      fail(
        'src/content/video-posts.json',
        `${base}.videoId`,
        'missing required videoId'
      );
    if (!post.title?.trim())
      fail(
        'src/content/video-posts.json',
        `${base}.title`,
        'missing required title'
      );
    if (!post.link?.trim())
      fail(
        'src/content/video-posts.json',
        `${base}.link`,
        'missing required link'
      );
    else if (!isValidUrl(post.link))
      fail(
        'src/content/video-posts.json',
        `${base}.link`,
        `invalid URL: "${post.link}"`
      );
  });
}

/* ── Validate skills.json ───────────────────────────────────────────────── */
const skillsData = readJson('skills.json');
if (skillsData) {
  const groups = skillsData.skillGroups ?? [];
  if (groups.length === 0)
    fail(
      'src/content/skills.json',
      'skillGroups',
      'skillGroups array is empty'
    );
  groups.forEach((group, i) => {
    const base = `skillGroups[${i}]`;
    if (!group.label?.trim())
      fail(
        'src/content/skills.json',
        `${base}.label`,
        'missing required label'
      );
    if (!Array.isArray(group.skills))
      fail('src/content/skills.json', `${base}.skills`, 'must be an array');
    else if (group.skills.length === 0)
      fail(
        'src/content/skills.json',
        `${base}.skills`,
        'skills array is empty'
      );
  });
}

/* ── Report ─────────────────────────────────────────────────────────────── */
if (hasError) {
  console.error('\n❌ Content validation failed.\n');
  errors.forEach((e) => {
    console.error(`[content validation failed]`);
    console.error(`  file: ${e.file}`);
    console.error(`  path: ${e.path}`);
    console.error(`  issue: ${e.issue}\n`);
  });
  process.exit(1);
} else {
  console.log('\n✅ Content validation passed.');
  console.log('Validated:');
  console.log('  - profile');
  console.log('  - socials');
  console.log('  - navigation');
  console.log('  - experience');
  console.log('  - projects');
  console.log('  - education');
  console.log('  - blog');
  console.log('  - videos');
  console.log('  - skills');
  console.log('');
}
