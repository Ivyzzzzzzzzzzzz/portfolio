import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const textValue = value => typeof value === 'string' ? value : value.map(run => run.text).join('');
const normalize = value => value.replace(/\s+/g, ' ').trim();

function* blocks(value) {
  if (!value || typeof value !== 'object') return;
  if (Array.isArray(value)) { for (const child of value) yield* blocks(child); return; }
  if (value.type) yield value;
  for (const [key, child] of Object.entries(value)) if (key !== 'text') yield* blocks(child);
}

for (let number = 1; number <= 4; number++) {
  const { content } = await import(`../src/content/project-${number}/content.js`);
  const { layout } = await import(`../src/content/project-${number}/layout.js`);
  const baseline = JSON.parse(await readFile(new URL(`tests/fixtures/project-${number}.json`, root), 'utf8'));
  const all = [...blocks(content)];

  test(`project ${number}: every original text block and media reference survives migration`, { skip: !process.env.VERIFY_MIGRATION }, () => {
    const hero = content.hero;
    const text = [hero.title, hero.period, ...hero.disciplines, hero.subtitle, hero.description,
      ...(hero.link ? [hero.link.text] : []), ...content.sections.map(section => section.title),
      ...all.filter(block => block.text !== undefined).map(block => block.text),
    ].map(textValue).map(normalize).sort();
    const media = all.filter(block => ['image', 'video'].includes(block.type)).map(block => block.src).sort();
    assert.deepEqual(text, baseline.text);
    assert.deepEqual(media, baseline.media);
  });

  test(`project ${number}: images and videos resolve locally, with accessible descriptions and intrinsic sizes`, async () => {
    for (const block of all.filter(block => ['image', 'video'].includes(block.type))) {
      await access(new URL(block.src.slice(1), root));
      assert.ok(block.decorative || block.alt?.trim(), `Missing description: ${block.src}`);
      if (block.type === 'image') {
        assert.ok(block.width > 0 && block.height > 0, `Missing dimensions: ${block.src}`);
      }
    }
  });

  test(`project ${number}: stable section/block identifiers and no orphaned presentation rules`, () => {
    const ids = [...content.sections.map(section => section.id), ...all.map(block => block.id).filter(Boolean)];
    assert.equal(new Set(ids).size, ids.length, 'Duplicate identifiers make section links and editing ambiguous');
    for (const id of Object.keys(layout)) assert.ok(ids.includes(id), `Unused layout rule: ${id}`);
  });
}
