import {chromium} from '@playwright/test';
import {existsSync} from 'node:fs';
const windowsChrome='C:/Program Files/Google/Chrome/Application/chrome.exe';
const executablePath=process.env.CHROME_PATH||(existsSync(windowsChrome)?windowsChrome:undefined);
const browser=await chromium.launch({executablePath,headless:true});
try{
 const page=await browser.newPage({viewport:{width:1200,height:630},reducedMotion:'reduce'});
 await page.goto(process.env.PREVIEW_URL||'http://127.0.0.1:4322/');await page.evaluate(()=>document.fonts.ready);
 const media=await page.evaluate(()=>({photo:document.querySelector('.hero-media img').currentSrc,logo:document.querySelector('.brand-logo').src}));
 await page.evaluate(({photo,logo})=>{document.body.innerHTML=`<section style="height:630px;position:relative;background:#0b0c0e;overflow:hidden"><img src="${photo}" style="position:absolute;width:1200px;height:630px;object-fit:cover;opacity:.65"><div style="position:absolute;inset:0;background:linear-gradient(90deg,#0b0c0e,transparent)"></div><div style="position:relative;padding:48px 54px;color:#eeeae2"><img src="${logo}" width="224" height="60" alt="MT METAL Metalúrgica"><div style="font-size:106px;line-height:.95;font-weight:900;font-variation-settings:'wdth' 70;letter-spacing:-3px;margin-top:42px">AÇO QUE<br>SUSTENTA<br>A OBRA<span style="color:#ffcc29">.</span></div><div style="font-size:14px;margin-top:32px;letter-spacing:2px">ARMAÇÃO · ESTRUTURAS · VÁRZEA GRANDE, MT</div></div></section>`},media);
 await page.evaluate(()=>Promise.all(Array.from(document.images,img=>img.decode())));
 await page.screenshot({path:'public/og.jpg',type:'jpeg',quality:90});
}finally{await browser.close();}
