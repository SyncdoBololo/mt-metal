import fs from 'node:fs';import zlib from 'node:zlib';
const files=fs.readdirSync('dist/_astro').filter(f=>f.endsWith('.js'));let sum=0;for(const file of files){const size=zlib.gzipSync(fs.readFileSync('dist/_astro/'+file)).length;sum+=size;console.log(file,size);}console.log('total gzip',sum);
