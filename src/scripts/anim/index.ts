import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {Flip} from 'gsap/Flip';
import {smoothScroll} from './lenis';
import {reveal} from './reveal';
import {hero} from './hero';
import {horizontal,marquee} from './horizontal';
import {drawings} from './drawings';
import {cursor} from './cursor';
import {sparks} from './sparks';
import {preloader} from './preloader';
import {transition} from './transition';
gsap.registerPlugin(ScrollTrigger,Flip);
let context:gsap.Context|undefined;
function start(){context=gsap.context(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{const clean=[reveal(),marquee(),sparks()];drawings();preloader();return()=>clean.forEach(f=>f?.());});mm.add('(min-width:1024px) and (prefers-reduced-motion: no-preference)',()=>{const clean=[smoothScroll(),horizontal(),hero()];return()=>clean.forEach(f=>f?.());});mm.add('(hover:hover) and (pointer:fine) and (prefers-reduced-motion: no-preference)',cursor);});document.fonts.ready.then(()=>ScrollTrigger.refresh());}
start();transition();
window.addEventListener('mt-motion',e=>{if((e as CustomEvent<boolean>).detail){context?.revert();context=undefined;}else if(!context)start();});
document.addEventListener('mt-filter-before',()=>{(window as Window & {mtFlip?:unknown}).mtFlip=Flip.getState('.portfolio-item:not([hidden])');});
document.addEventListener('mt-filter-after',()=>{const state=(window as Window & {mtFlip?:ReturnType<typeof Flip.getState>}).mtFlip;if(state&&!matchMedia('(prefers-reduced-motion: reduce)').matches)Flip.from(state,{duration:.6,ease:'power3.out',absolute:true,onComplete:()=>ScrollTrigger.refresh()});else ScrollTrigger.refresh();});

