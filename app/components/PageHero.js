"use client";
import {useEffect,useMemo,useState} from 'react';
import {ArrowLeft,ArrowRight,CheckCircle2,Sparkles} from 'lucide-react';

const extraHeroSets={
  services:[
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=2200&q=90',
    'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=2200&q=90'
  ],
  about:[
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90'
  ],
  gallery:[
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=2200&q=90',
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2200&q=90'
  ],
  contact:[
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90'
  ],
  booking:[
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90'
  ],
  default:[
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90'
  ]
};

function themeFor(eyebrow=''){
  const value=eyebrow.toLowerCase();
  if(value.includes('services')) return 'services';
  if(value.includes('about')) return 'about';
  if(value.includes('gallery')) return 'gallery';
  if(value.includes('contact')) return 'contact';
  if(value.includes('book')) return 'booking';
  return 'default';
}

export default function PageHero({eyebrow='LUMIÈRE HOME CLEANING',title,italic,description,cta='/book',ctaLabel='Book a Cleaning',image}){
 const images=useMemo(()=>[image,...(extraHeroSets[themeFor(eyebrow)]||extraHeroSets.default)].filter(Boolean),[image,eyebrow]);
 const [slide,setSlide]=useState(0);
 useEffect(()=>{setSlide(0)},[eyebrow]);
 useEffect(()=>{const id=window.setInterval(()=>setSlide(v=>(v+1)%images.length),6200);return()=>window.clearInterval(id)},[images.length]);
 const current=images[slide];
 return <section className="pageHero">
   <div key={current} className="pageHeroImage" style={{backgroundImage:`url(${current})`}}/>
   <div className="pageHeroShade"/>
   <div className="pageHeroInner container">
     <div className="eyebrow light"><Sparkles size={15}/> {eyebrow}</div>
     <h1>{title} {italic&&<><br/><i>{italic}</i></>}</h1>
     <p>{description}</p>
     <div className="heroMiniTrust"><span><CheckCircle2 size={16}/> Thoughtful service</span><span><CheckCircle2 size={16}/> Clear booking</span><span><CheckCircle2 size={16}/> Flexible options</span></div>
     <a className="btn gold" href={cta}>{ctaLabel}<ArrowRight size={17}/></a>
   </div>
   <div className="pageHeroControls" aria-label="Page hero slides">
     <button type="button" onClick={()=>setSlide((slide-1+images.length)%images.length)} aria-label="Previous image"><ArrowLeft size={17}/></button>
     <div className="pageHeroDots">{images.map((_,i)=><button key={i} type="button" className={i===slide?'active':''} onClick={()=>setSlide(i)} aria-label={`Show hero image ${i+1}`}/>)}</div>
     <button type="button" onClick={()=>setSlide((slide+1)%images.length)} aria-label="Next image"><ArrowRight size={17}/></button>
   </div>
   <div className="pageHeroCounter">0{slide+1} <span>/ 0{images.length}</span></div>
 </section>
}
