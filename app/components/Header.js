"use client";
import {useEffect,useState} from 'react';
import {ArrowRight,ChevronDown,Menu,Phone,X,Sparkles} from 'lucide-react';

const services=[
 ['Recurring Cleaning','/services/recurring-cleaning'],
 ['Deep Cleaning','/services/deep-cleaning'],
 ['Move In / Move Out','/services/move-in-move-out'],
 ['Airbnb / Vacation Rental','/services/airbnb-cleaning']
];
const links=[['About','/about'],['How It Works','/how-it-works'],['Reviews','/reviews'],['Gallery','/gallery'],['FAQ','/faq'],['Contact','/contact']];

export default function Header(){
 const [open,setOpen]=useState(false),[servicesOpen,setServicesOpen]=useState(false),[scrolled,setScrolled]=useState(false);
 useEffect(()=>{const on=()=>setScrolled(window.scrollY>18);on();window.addEventListener('scroll',on);return()=>window.removeEventListener('scroll',on)},[]);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 const close=()=>{setOpen(false);setServicesOpen(false)};
 return <>
  <div className="offerbar"><span><Sparkles size={13}/> NEW CLIENTS SAVE <b>15%</b> ON THEIR FIRST CLEANING</span><a href="/offers">View offer <ArrowRight size={13}/></a></div>
  <header className={scrolled?'siteHeader scrolled':'siteHeader'}>
   <a className="brand" href="/" onClick={close} aria-label="Lumière Home Cleaning home"><span className="brandMark"><span>L</span><Sparkles size={10}/></span><span><b>LUMIÈRE</b><small>HOME CLEANING</small></span></a>
   <nav className={open?'mainNav open':'mainNav'} aria-label="Primary navigation">
    <div className={servicesOpen?'navDropdown active':'navDropdown'}>
      <button className="navDropBtn" type="button" onClick={()=>setServicesOpen(v=>!v)} aria-expanded={servicesOpen}>Services <ChevronDown size={14}/></button>
      <div className="dropdownMenu">{services.map(([n,u])=><a key={u} href={u} onClick={close}><span>{n}</span><ArrowRight size={14}/></a>)}<a className="dropdownAll" href="/services" onClick={close}>View all services <ArrowRight size={14}/></a></div>
    </div>
    {links.map(([n,u])=><a key={u} href={u} onClick={close}>{n}</a>)}
    <a className="navCta" href="/book" onClick={close}>Book a Cleaning <ArrowRight size={16}/></a>
   </nav>
   <div className="headerActions"><a className="call" href="tel:+10000000000"><Phone size={16}/> <span>Call Us</span></a><button aria-label="Toggle menu" className="menuBtn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </header>
 </>
}
