import gsap from 'gsap';
import {DrawSVGPlugin} from 'gsap/DrawSVGPlugin';
gsap.registerPlugin(DrawSVGPlugin);
export function drawings(){gsap.utils.toArray<SVGPathElement>('.draw-line').forEach(line=>gsap.from(line,{drawSVG:'0%',duration:1.2,ease:'power3.out',scrollTrigger:{trigger:line.closest('section'),start:'top 65%',once:true}}));gsap.to('.map-pulse',{scale:1.5,transformOrigin:'center',opacity:0,duration:2,repeat:-1,ease:'power2.out',scrollTrigger:{trigger:'.area-map',start:'top bottom',end:'bottom top',toggleActions:'play pause resume pause'}});const foot=document.querySelector('.footer-fill');if(foot)gsap.fromTo(foot,{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',ease:'none',scrollTrigger:{trigger:'.footer-word',start:'top 95%',end:'bottom 85%',scrub:true}});}
