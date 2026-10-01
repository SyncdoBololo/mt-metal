import {test,expect} from '@playwright/test';

test('contatos oficiais, acervo e PDF',async({page,request})=>{
 await page.goto('/');
 await expect(page.locator('.brand-logo')).toBeVisible();
 await expect(page.locator('.contact-channels a[href^="https://wa.me/5565996011432"]')).toHaveCount(1);
 await expect(page.locator('.contact-channels a[href^="https://wa.me/5565993330619"]')).toHaveCount(1);
 await expect(page.locator('a[href*="5565993298833"]')).toHaveCount(0);
 await expect(page.locator('.portfolio-item')).toHaveCount(38);
 await expect(page.locator('.portfolio-item')).not.toContainText(['Imagem ilustrativa']);
 await expect(page.locator('.portfolio-item img')).toHaveCount(38);
 for(const button of await page.locator('[data-filter]').all()){
  await button.click();await expect(page.locator('.portfolio-item:visible').first()).toBeVisible();
 }
 await page.locator('[data-filter=all]').click();
 for(const img of await page.locator('.portfolio-item img').all()){await img.scrollIntoViewIfNeeded();await expect.poll(()=>img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBeTruthy();}
 const download=await page.locator('.portfolio-download').getAttribute('href');
 const pdf=await request.get(download!);expect(pdf.status()).toBe(200);expect(pdf.headers()['content-type']).toContain('pdf');
});

test('cada serviço exibe apenas seu portfólio correspondente',async({page})=>{
 const galerias:Record<string,number>={
  armacao:2,
  'estruturas-metalicas':21,
  reservatorios:2,
  'construcao-civil':4,
  'terraplenagem-infraestrutura':2,
  andaimes:7,
 };
 for(const [slug,total] of Object.entries(galerias)){
  await page.goto(`/servicos/${slug}/`);
  await expect(page.locator('.service-portfolio-grid figure')).toHaveCount(total);
  await expect(page.locator('.service-portfolio-download')).toBeVisible();
  for(const img of await page.locator('.service-portfolio-grid img').all()){
   await img.scrollIntoViewIfNeeded();
   await expect.poll(()=>img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBeTruthy();
  }
 }
 await page.goto('/servicos/andaimes/');
 await expect(page.locator('.service-portfolio-grid')).toContainText('Locação de andaimes');
 await expect(page.locator('.service-portfolio-grid')).not.toContainText('Reservatório metálico');
});

test('formulário encaminha para a área técnica',async({page})=>{
 await page.goto('/');
 await page.getByLabel('Com quem deseja falar?',{exact:true}).selectOption('5565993330619');
 await page.getByLabel('Seu nome',{exact:true}).fill('Teste técnico');
 await page.getByLabel('Telefone / WhatsApp',{exact:true}).fill('65999990000');
 await page.getByLabel('Cidade',{exact:true}).fill('Cuiabá');
 await page.getByLabel('Serviço',{exact:true}).selectOption({label:'Estruturas metálicas'});
 await page.getByLabel('Conte sobre a obra').fill('Avaliação de cobertura.');
 await page.evaluate(()=>{window.open=(url?:string|URL)=>{(window as Window & {destino?:string}).destino=String(url);return null;};});
 await page.getByRole('button',{name:'Enviar pelo WhatsApp'}).click();
 const destino=await page.evaluate(()=>(window as Window & {destino?:string}).destino||'');
 expect(destino).toContain('https://wa.me/5565993330619?text=');expect(decodeURIComponent(destino)).toContain('Avaliação de cobertura.');
});
