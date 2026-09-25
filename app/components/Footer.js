"use client";
import {useState} from 'react';
import {ArrowRight,Instagram,Facebook,Mail,MapPin,Phone,Sparkles,CheckCircle2} from 'lucide-react';
export default function Footer(){
 const [email,setEmail]=useState(''); const [joined,setJoined]=useState(false);
 const submit=e=>{e.preventDefault();if(email.trim())setJoined(true)};
 return <footer className="siteFooter">
  <div className="footerGlow"/>
  <div className="footerTop container"><div><span className="footerKicker"><Sparkles size={13}/> THE LUMIÈRE JOURNAL</span><h2>Small notes for a <i>better-kept home.</i></h2><p>Occasional cleaning tips, seasonal reminders and service updates — kept useful and never noisy.</p></div><form className="footerSignup" onSubmit={submit}><label htmlFor="footer-email">Email address</label><div><input id="footer-email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/><button type="submit">Subscribe <ArrowRight size={16}/></button></div>{joined&&<small><CheckCircle2 size={14}/> Thanks — you’re on the list in this demo.</small>}</form></div>
  <div className="footerMain container">
   <div className="footerLead"><a className="brand footerBrand" href="/"><span className="brandMark"><span>L</span><Sparkles size={10}/></span><span><b>LUMIÈRE</b><small>HOME CLEANING</small></span></a><p>A refined cleaning experience designed around thoughtful details, dependable service and a home that feels beautifully cared for.</p><a className="footerQuote" href="/book">Get an Instant Quote <ArrowRight size={16}/></a><div className="socials"><a href="/contact" aria-label="Instagram contact"><Instagram size={17}/></a><a href="/contact" aria-label="Facebook contact"><Facebook size={17}/></a><a href="mailto:hello@example.com" aria-label="Email"><Mail size={17}/></a></div></div>
   <div><h4>Services</h4><a href="/services/recurring-cleaning">Recurring Cleaning</a><a href="/services/deep-cleaning">Deep Cleaning</a><a href="/services/move-in-move-out">Move In / Move Out</a><a href="/services/airbnb-cleaning">Airbnb / Vacation Rental</a></div>
   <div><h4>Explore</h4><a href="/about">About Us</a><a href="/how-it-works">How It Works</a><a href="/reviews">Reviews</a><a href="/gallery">Gallery</a><a href="/blog">Cleaning Journal</a><a href="/faq">FAQ</a></div>
   <div><h4>Contact</h4><a href="tel:+10000000000"><Phone size={15}/> Call Us</a><a href="mailto:hello@example.com"><Mail size={15}/> hello@example.com</a><span><MapPin size={15}/> Service area coverage</span><span><Sparkles size={15}/> Mon — Sat · 8am — 6pm</span></div>
  </div>
  <div className="footerBottom container"><span>© 2026 Lumière Home Cleaning. All rights reserved.</span><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cancellation-policy">Cancellation Policy</a></div></div>
 </footer>
}
