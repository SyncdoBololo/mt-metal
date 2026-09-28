import {test,expect} from '@playwright/test';
for(const size of [{width:375,height:812},{width:768,height:1024},{width:1440,height:900},{width:320,height:812}]){
 for(const reducedMotion of ['no-preference','reduce'] as const){
  for(const route of ['/','/servicos/armacao/']){
   test(`${route} ${size.width} ${reducedMotion}`,async({page})=>{
    const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
    await page.setViewportSize(size);await page.emulateMedia({reducedMotion});await page.goto(route);await page.waitForLoadState('networkidle');await page.waitForTimeout(1200);
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
    const name=`${route==='/'?'home':'armacao'}-${size.width}-${reducedMotion}`;
    await page.screenshot({path:`tests/screenshots/${name}-top.png`});
    await page.evaluate(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=650){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,80));}});
    await page.waitForTimeout(900);await page.screenshot({path:`tests/screenshots/${name}-full.png`,fullPage:true});
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();expect(errors).toEqual([]);
   });
  }
 }
}
test('WhatsApp, filtros, menu e retorno',async({page})=>{
 await page.setViewportSize({width:375,height:812});await page.goto('/');await page.waitForTimeout(1800);
 await page.getByRole('button',{name:'Abrir menu'}).click();await expect(page.locator('#mobile-menu')).toBeVisible();await page.keyboard.press('Escape');await expect(page.locator('#mobile-menu')).not.toBeVisible();
 await page.locator('[data-filter="armacao"]').click();await expect(page.locator('.portfolio-item:visible')).toHaveCount(1);await page.locator('[data-filter="all"]').click();await expect(page.locator('.portfolio-item:visible')).toHaveCount(6);
 await page.getByLabel('Seu nome',{exact:true}).fill('Teste de orçamento');await page.getByLabel('Telefone / WhatsApp',{exact:true}).fill('65993298833');await page.getByLabel('Cidade',{exact:true}).fill('Várzea Grande');await page.getByLabel('Serviço',{exact:true}).selectOption({label:'Armação e ferragem'});await page.getByLabel('Conte sobre a obra').fill('Corte e dobra para a fundação.');
 await page.evaluate(()=>{window.open=(url?:string|URL)=>{(window as Window & {captured?:string}).captured=String(url);return null;};});await page.getByRole('button',{name:'Enviar pelo WhatsApp'}).click();const captured=await page.evaluate(()=>(window as Window & {captured?:string}).captured||'');expect(captured).toContain('5565993298833');expect(decodeURIComponent(captured)).toContain('Corte e dobra para a fundação.');
 await page.goto('/');await page.waitForTimeout(1200);await page.locator('.service-body .text-link').first().click();await expect(page).toHaveURL(/servicos\/armacao/);await page.goBack();await page.waitForTimeout(1000);expect(await page.locator('.transition-doors').evaluate(e=>Array.from(e.children).every(c=>c.getBoundingClientRect().bottom<=1))).toBeTruthy();
});
test('hero vídeo e redução de movimento',async({page})=>{await page.goto('/');await page.waitForTimeout(2200);expect(await page.locator('video').evaluate((v:HTMLVideoElement)=>v.muted&&v.loop&&v.playsInline&&!v.paused)).toBeTruthy();await page.locator('#motion-toggle').click();expect(await page.locator('video').evaluate((v:HTMLVideoElement)=>v.paused)).toBeTruthy();await page.emulateMedia({reducedMotion:'reduce'});await page.reload();await page.waitForTimeout(1200);expect(await page.locator('video').evaluate((v:HTMLVideoElement)=>v.paused&&!v.getAttribute('src'))).toBeTruthy();});
test('sans JavaScript',async({browser})=>{const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:375,height:812}});const page=await context.newPage();await page.goto('http://127.0.0.1:4322/');await expect(page.locator('h1')).toBeVisible();await expect(page.locator('.service-card')).toHaveCount(6);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();await context.close();});

