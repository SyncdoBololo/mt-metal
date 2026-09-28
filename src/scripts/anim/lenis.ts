import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
export function smoothScroll(){const lenis=new Lenis({duration:1.05,anchors:true});lenis.on('scroll',ScrollTrigger.update);const tick=(t:number)=>lenis.raf(t*1000);gsap.ticker.add(tick);gsap.ticker.lagSmoothing(0);return()=>{gsap.ticker.remove(tick);lenis.destroy();};}
