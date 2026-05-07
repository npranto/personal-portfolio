import { readFile } from 'node:fs/promises';
import path from 'node:path';

const CONTENT_DIR = path.resolve(process.cwd(), 'src/content');

const REQUIRED_FILES = [
  ['config.json', [['theme', 'string']]],
  ['nav.json', [['nav.links', 'array']]],
  [
    'profile.json',
    [
      ['profile.author', 'string'],
      ['profile.email', 'string'],
    ],
  ],
  ['about.json', [['about.header', 'string']]],
  ['work.json', [['work.items', 'array']]],
  ['projects.json', [['projects.items', 'array']]],
  ['education.json', [['education.items', 'array']]],
  ['socials.json', [['socials.github.href', 'string']]],
  ['blog-posts.json', [['posts', 'array']]],
  ['video-posts.json', [['posts', 'array']]],
];

function getByPath(obj, pointer) {
  return pointer
    .split('.')
    .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function checkType(value, expected) {
  if (expected === 'array') return Array.isArray(value);
  return typeof value === expected;
}

async function validateFile(fileName, checks) {
  const filePath = path.join(CONTENT_DIR, fileName);
  const raw = await readFile(filePath, 'utf8');
  const json = JSON.parse(raw);
  const errors = [];

  checks.forEach(([fieldPath, expectedType]) => {
    const value = getByPath(json, fieldPath);
    if (!checkType(value, expectedType)) {
      errors.push(`${fileName}:${fieldPath} expected ${expectedType}`);
    }
  });

  return errors;
}

async function run() {
  console.log('Running content validation...');
  const allErrors = [];

  for (const [fileName, checks] of REQUIRED_FILES) {
    try {
      const errors = await validateFile(fileName, checks);
      allErrors.push(...errors);
    } catch (error) {
      allErrors.push(`${fileName}: failed to parse (${error.message})`);
    }
  }

  if (allErrors.length > 0) {
    console.error('\nContent validation failed:');
    allErrors.forEach((error) => console.error(`- ${error}`));
    process.exit(1);
  }

  console.log('Content validation passed for all JSON files.');
}

run();
