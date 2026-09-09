const fs = require('fs');

const stringsXml = fs.readFileSync('temp_xlsx/xl/sharedStrings.xml', 'utf8');
const sheetXml = fs.readFileSync('temp_xlsx/xl/worksheets/sheet1.xml', 'utf8');

const sstMatches = [...stringsXml.matchAll(/<si>(.*?)<\/si>/gs)];
const parsedStrings = sstMatches.map(m => {
  const tMatch = [...m[1].matchAll(/<t[^>]*>(.*?)<\/t>/gs)].map(x => x[1]).join('');
  return tMatch;
});

console.log('=== SHARED STRINGS ===');
parsedStrings.forEach((s, i) => console.log(`${i}: ${s}`));

console.log('\n=== SHEET ROWS ===');
const rows = [...sheetXml.matchAll(/<row\s+r="(\d+)"[^>]*>(.*?)<\/row>/gs)];
for (const r of rows) {
  const rowNum = r[1];
  const cells = [...r[2].matchAll(/<c\s+r="([A-Z]+)\d+"(?:[^>]*?t="([^"]+)")?[^>]*>(?:<v>(.*?)<\/v>)?/gs)];
  const line = cells.map(c => {
    const col = c[1];
    const type = c[2];
    const val = c[3];
    let text = val;
    if (type === 's' && val !== undefined) {
      text = parsedStrings[parseInt(val, 10)];
    }
    return `${col}: ${text || ''}`;
  }).join(' | ');
  console.log(`Row ${rowNum}: ${line}`);
}

try {
  const relsXml = fs.readFileSync('temp_xlsx/xl/drawings/_rels/drawing1.xml.rels', 'utf8');
  const drawingXml = fs.readFileSync('temp_xlsx/xl/drawings/drawing1.xml', 'utf8');

  const relMap = {};
  const relMatches = [...relsXml.matchAll(/Id="([^"]+)"[^>]*Target="([^"]+)"/g)];
  for (const m of relMatches) {
    relMap[m[1]] = m[2];
  }

  console.log('\n=== DRAWING EMBEDS ===');
  const anchors = [...drawingXml.matchAll(/<xdr:twoCellAnchor[^>]*>(.*?)<\/xdr:twoCellAnchor>/gs)];
  for (const a of anchors) {
    const fromColMatch = a[1].match(/<xdr:from>.*?<xdr:col>(\d+)<\/xdr:col>.*?<xdr:row>(\d+)<\/xdr:row>/s);
    const blipMatch = a[1].match(/<a:blip[^>]*r:embed="([^"]+)"/s);
    if (fromColMatch && blipMatch) {
      const col = fromColMatch[1];
      const row = fromColMatch[2];
      const rId = blipMatch[1];
      const target = relMap[rId];
      console.log(`Anchor at Col ${col}, Row ${row} -> rId: ${rId}, target: ${target}`);
    }
  }
} catch(e) {
  console.log('Error parsing drawings:', e.message);
}

