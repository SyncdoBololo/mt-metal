import {chromium} from '@playwright/test';
const b=await chromium.launch({executablePath:process.env.CHROME_PATH});
const p=await b.newPage({viewport:{width:390,height:844}});await p.emulateMedia({reducedMotion:'reduce'});
await p.goto('http://127.0.0.1:4322/');await p.waitForTimeout(1500);
const r=await p.evaluate(()=>{
 const out={small:{},targets:[],form:[]};
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=w.nextNode()){const t=n.textContent.trim();if(!t)continue;const el=n.parentElement;if(el.closest('[aria-hidden=true],.sr-only,script,style'))continue;const cs=getComputedStyle(el);if(cs.display==='none'||cs.visibility==='hidden')continue;const fs=parseFloat(cs.fontSize);if(fs<12){const k=fs+'px '+cs.color;out.small[k]=out.small[k]||[];if(out.small[k].length<4)out.small[k].push(t.slice(0,40));}}
 document.querySelectorAll('a,button,input,select,textarea,summary').forEach(e=>{const r=e.getBoundingClientRect();if(r.width===0)return;const cs=getComputedStyle(e);if(cs.visibility==='hidden')return;if(r.height<24||r.width<24)out.targets.push(e.tagName+' '+Math.round(r.width)+'x'+Math.round(r.height)+' '+(e.textContent||e.getAttribute('aria-label')||'').trim().slice(0,30));});
 document.querySelectorAll('#quote-form input,#quote-form select,#quote-form textarea').forEach(e=>out.form.push([e.name,e.type,e.getAttribute('autocomplete'),e.getAttribute('inputmode'),e.required,!!e.labels?.length].join('|')));
 return out;});
console.log(JSON.stringify(r,null,1));
// submit empty form
await p.locator('#quote-form button[type=submit], #quote-form .button').first().click();await p.waitForTimeout(300);
console.log('focus after empty submit:',await p.evaluate(()=>document.activeElement?.name||document.activeElement?.tagName));
await b.close();
