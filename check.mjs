import{readFile,readdir,stat}from'node:fs/promises';import path from'node:path';import assert from'node:assert/strict';
async function walk(dir){const all=[];for(const n of await readdir(dir)){const p=path.join(dir,n);all.push(...((await stat(p)).isDirectory()?await walk(p):[p]))}return all}
const files=await walk('dist');let checked=0;
for(const file of files.filter(f=>f.endsWith('.html'))){const html=await readFile(file,'utf8');assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' needs one h1');assert(html.includes('lang="en-AU"'));for(const [,url]of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)){const target=path.join('dist',url,url.endsWith('/')?'index.html':'');assert(files.includes(target),`${file}: broken local link ${url}`);checked++}}
console.log(`Passed: ${files.filter(f=>f.endsWith('.html')).length} HTML pages, ${checked} internal asset/navigation references.`);
