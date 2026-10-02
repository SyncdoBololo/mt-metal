const video=document.querySelector<HTMLVideoElement>('#hero-video');
if(video){
 // Vídeo do hero sempre em reprodução automática e loop infinito. Só pausa
 // enquanto está fora da tela ou com a aba oculta, e retoma sozinho depois.
 const start=()=>{if(!video.src){const size=innerWidth<768?'mobile':'desktop';const mp4=video.canPlayType('video/mp4; codecs="avc1.64001F"')!=='';video.src=`${import.meta.env.BASE_URL.replace(/\/$/,'')}/media/hero-${size}.${mp4?'mp4':'webm'}`;}video.muted=true;video.play().then(()=>video.classList.add('playing')).catch(()=>{});};
 let visible=true;
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else video.pause();}).observe(video);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else if(visible)start();});
 // Alguns celulares (modo economia de energia) bloqueiam o autoplay até o primeiro toque.
 const retry=()=>{if(video.paused&&visible)start();};
 ['touchstart','pointerdown','scroll','keydown'].forEach(ev=>window.addEventListener(ev,retry,{once:true,passive:true}));
 if(document.readyState==='complete')start();else window.addEventListener('load',start,{once:true});
}
const aboutVideo=document.querySelector<HTMLVideoElement>('#about-video');
if(aboutVideo){
 let visible=false;
 const sync=()=>{if(!visible||document.hidden)aboutVideo.pause();else aboutVideo.play().catch(()=>{});};
 new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync();},{rootMargin:'120px 0px'}).observe(aboutVideo);
 document.addEventListener('visibilitychange',sync);
}
const menu=document.querySelector<HTMLDialogElement>('#mobile-menu');
const menuToggle=document.querySelector<HTMLButtonElement>('.menu-toggle');
menuToggle?.addEventListener('click',()=>{menu?.showModal();menuToggle.setAttribute('aria-expanded','true');});
menu?.querySelector('.menu-close')?.addEventListener('click',()=>menu.close());
menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.close()));
menu?.addEventListener('close',()=>{menuToggle?.setAttribute('aria-expanded','false');menuToggle?.focus();});
const header=document.querySelector<HTMLElement>('.header');const floating=document.querySelector<HTMLElement>('.floating-wa');let lastY=0;let scheduled=false;
window.addEventListener('scroll',()=>{if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{const y=scrollY;header?.classList.toggle('scrolled',y>100);if(header)header.style.transform=y>lastY&&y>500&&!header.contains(document.activeElement)?'translateY(-100%)':'';if(floating)floating.style.visibility=y>(document.querySelector('.hero')?.clientHeight||650)?'visible':'hidden';lastY=y;scheduled=false;});},{passive:true});
header?.addEventListener('focusin',()=>header.style.transform='');
const form=document.querySelector<HTMLFormElement>('#quote-form');
form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const text=`Olá! Gostaria de solicitar um orçamento à MT METAL.\n\nNome: ${String(data.get('nome')).trim()}\nTelefone: ${String(data.get('telefone')).trim()}\nCidade: ${String(data.get('cidade')).trim()}\nServiço: ${data.get('servico')}\n\n${String(data.get('mensagem')).trim()}`;const url=`https://wa.me/${data.get('destinatario') || form.dataset.whatsapp}?text=${encodeURIComponent(text)}`;window.open(url,'_blank','noopener,noreferrer');const status=document.querySelector('#form-status');if(status){status.textContent='Sua mensagem está pronta. ';const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener';a.textContent='Abrir no WhatsApp ↗︎';a.className='text-link';status.append(a);}});
document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.dispatchEvent(new Event('mt-filter-before'));document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll<HTMLElement>('.portfolio-item').forEach(item=>item.hidden=button.dataset.filter!=='all'&&item.dataset.category!==button.dataset.filter);document.dispatchEvent(new Event('mt-filter-after'));}));
const init=()=>import('./anim/index');
const schedule=()=>{if('requestIdleCallback' in window)window.requestIdleCallback(init,{timeout:1800});else setTimeout(init,500);};
if(document.readyState==='complete')schedule();else window.addEventListener('load',schedule,{once:true});

