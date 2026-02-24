import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const SRC_DIR = join(process.cwd(), 'src');
const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx']);

function collectSourceFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      files.push(...collectSourceFiles(fullPath));
      continue;
    }

    const extension = entry.slice(entry.lastIndexOf('.'));
    if (SOURCE_EXTENSIONS.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function collectViolations() {
  const files = collectSourceFiles(SRC_DIR);
  const violations = [];
  let combinedSource = '';

  const dynamicTailwindPattern =
    /(?:^|[\s"'`])(?:hover:|focus:|active:)?(?:bg|text|border|from|to|via|ring|stroke|fill)-\$\{/;
  const deadHashPattern = /href=["']#["']/;
  const buttonAnalyzePattern = /<button[^>]*>\s*Analyze My Idea\s*<\/button>/s;
  const buttonDemoPattern = /<button[^>]*>\s*View Demo\s*<\/button>/s;

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    const filePath = relative(process.cwd(), file);
    combinedSource += `\n${content}`;

    if (dynamicTailwindPattern.test(content)) {
      violations.push({
        file: filePath,
        message: 'Dynamic Tailwind interpolation detected. Use explicit class maps.'
      });
    }

    if (deadHashPattern.test(content)) {
      violations.push({
        file: filePath,
        message: 'Dead CTA detected (`href="#"`). Use a real route or section anchor.'
      });
    }

    if (buttonAnalyzePattern.test(content)) {
      violations.push({
        file: filePath,
        message: '"Analyze My Idea" is rendered as a <button>; wire it as a navigable link.'
      });
    }

    if (buttonDemoPattern.test(content)) {
      violations.push({
        file: filePath,
        message: '"View Demo" is rendered as a <button>; wire it to the demo section anchor.'
      });
    }
  }

  if (!combinedSource.includes('id="demo"')) {
    violations.push({
      file: 'src/components/Demo.tsx',
      message: 'Demo section id is missing. Expected `id="demo"` for CTA target.'
    });
  }

  if (!combinedSource.includes('href="#demo"')) {
    violations.push({
      file: 'src/components/Hero.tsx',
      message: 'Hero demo CTA is missing `href="#demo"`.'
    });
  }

  if (!combinedSource.includes('to="/contact"') && !combinedSource.includes('href="/contact"')) {
    violations.push({
      file: 'src/components',
      message: 'Primary analyze CTA route (`/contact`) is missing.'
    });
  }

  return violations;
}

const violations = collectViolations();

if (violations.length > 0) {
  console.error('Quality validation failed:\n');
  for (const violation of violations) {
    console.error(`- ${violation.file}: ${violation.message}`);
  }
  process.exit(1);
}

console.log('Quality validation passed: CTA wiring and Tailwind class rules are clean.');
