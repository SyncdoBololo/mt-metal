import lighthouse from 'lighthouse';
import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
import {existsSync} from 'node:fs';
const windowsChrome='C:/Program Files/Google/Chrome/Application/chrome.exe';
const executablePath=process.env.CHROME_PATH||(existsSync(windowsChrome)?windowsChrome:undefined);
const browser=await chromium.launch({executablePath,headless:true,args:['--remote-debugging-port=9223']});
try{const result=await lighthouse('http://127.0.0.1:4322/',{port:9223,output:['html','json'],logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo']});await fs.writeFile('tests/lighthouse.html',result.report[0]);await fs.writeFile('tests/lighthouse.json',result.report[1]);console.log(JSON.stringify({scores:Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,v.score*100])),metrics:Object.fromEntries(['largest-contentful-paint','cumulative-layout-shift','total-blocking-time'].map(k=>[k,result.lhr.audits[k].displayValue]))},null,2));}finally{await browser.close();}
