"use client";
import {ArrowRight,Camera,CheckCircle2,Sparkles} from 'lucide-react';
import {useMemo,useState} from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';

const imgs=[
 ['Kitchen reset','Kitchen','https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85'],
 ['Living room refresh','Living','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85'],
 ['Bathroom detail','Bath','https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85'],
 ['Bedroom finish','Bedroom','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85'],
 ['Quiet kitchen details','Kitchen','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85'],
 ['Polished living space','Living','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85']
];
const filters=['All','Kitchen','Living','Bath','Bedroom'];

export default function Page(){
 const [filter,setFilter]=useState('All');
 const visible=useMemo(()=>filter==='All'?imgs:imgs.filter(([,category])=>category===filter),[filter]);
 return <main>
  <PageHero eyebrow="05 — GALLERY" title="Spaces that feel" italic="beautifully cared for." description="A visual showcase for approved before-and-after work, room categories and project highlights." image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"/>
  <section className="section">
   <Reveal><div className="centerHead"><div className="sectionLabel"><Camera size={15}/> VISUAL JOURNAL</div><h2>A glimpse of the <i>standard.</i></h2><p>Explore the rooms and details that define the Lumière presentation. Approved business photography can replace these editorial placeholders without changing the layout.</p></div></Reveal>
   <div className="galleryFilters" role="tablist" aria-label="Gallery categories">{filters.map(item=><button key={item} type="button" className={filter===item?'galleryFilter active':'galleryFilter'} onClick={()=>setFilter(item)}>{item}</button>)}</div>
   <div className="galleryGrid">{visible.map(([t,category,u],i)=><Reveal key={t} delay={i*60}><div className="galleryItem"><img src={u} alt={t}/><div className="galleryCaption"><div className="galleryMeta"><span>{category}</span><span><CheckCircle2 size={13}/> Detail focus</span></div><strong>{t}</strong></div></div></Reveal>)}</div>
  </section>
  <section className="galleryShowcase section">
   <div className="galleryShowcaseInner">
    <Reveal><div><div className="sectionLabel light"><Sparkles size={15}/> THE DETAIL MATTERS</div><h2>Beautifully presented.<br/><i>Thoughtfully maintained.</i></h2><p>A premium gallery should do more than fill space. It should show consistency, create trust and make the quality of the service easy to imagine before the first booking.</p><a className="btn gold" href="/book">Plan your clean <ArrowRight size={17}/></a></div></Reveal>
    <Reveal delay={100}><div className="galleryStats"><div><strong>01</strong><span>Room-focused presentation</span></div><div><strong>02</strong><span>Detail-led storytelling</span></div><div><strong>03</strong><span>Production-ready gallery</span></div></div></Reveal>
   </div>
  </section>
  <section className="section softSection"><div className="center"><Sparkles color="var(--gold)"/><h2>Ready for your <i>real project photos?</i></h2><p>Once approved business photography is available, it can be added to these categories without redesigning the page.</p><a className="btn gold" href="/contact">Ask about a project <ArrowRight size={17}/></a></div></section>
 </main>
}
