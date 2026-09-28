import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
await fs.mkdir('tests/screenshots',{recursive:true});
for(const width of [1440,375]){
 const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
 await page.goto('http://127.0.0.1:4323/');await page.waitForLoadState('networkidle');await page.evaluate(()=>document.fonts.ready);
 await page.screenshot({path:`tests/screenshots/cliente-hero-${width}.png`});
 for(const [section,label] of [['#portfolio','portfolio'],['#contato','contato']]){
  await page.locator(section).scrollIntoViewIfNeeded();await page.evaluate(sel=>{const el=document.querySelector(sel);window.scrollTo(0,el.getBoundingClientRect().top+scrollY-90)},section);await page.waitForFunction(()=>Array.from(document.querySelectorAll('img')).filter(img=>{const r=img.getBoundingClientRect();return r.bottom>0&&r.top<innerHeight}).every(img=>img.complete&&img.naturalWidth>0));
  await page.screenshot({path:`tests/screenshots/cliente-${label}-${width}.png`});
 }
 if(width===375){await page.locator('.contact-channels').scrollIntoViewIfNeeded();await page.screenshot({path:'tests/screenshots/cliente-contatos-375.png'});}
 await page.close();
}
await browser.close();
