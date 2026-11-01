'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Code2, Cpu, Bot, Clapperboard, Radio, Lightbulb, Menu, X, Github, Youtube, Linkedin, Instagram, Phone, MessageCircle, ExternalLink, Sparkles, CircuitBoard, MonitorPlay, Layers3, ChevronUp } from 'lucide-react';

const socials = [
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UC87H5Vyt4PkJrD6QIPxLv5g', icon: Youtube, handle: 'Videos & tech stories' },
  { name: 'Facebook', url: 'https://www.facebook.com/share/19y4E2w9yG/?mibextid=wwXIfr', icon: Radio, handle: 'Updates & community' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/omar-mohamed-7177a0372/', icon: Linkedin, handle: 'Professional journey' },
  { name: 'Instagram', url: 'https://www.instagram.com/omarmohamedibrahem_76/', icon: Instagram, handle: 'Moments & creativity' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@omarmohamed_67', icon: Clapperboard, handle: 'Short tech videos' },
];
const interests = [
  { n: '01', title: 'Programming', desc: 'Exploring code, software development, and building useful digital experiences.', icon: Code2, tag: 'SOFTWARE' },
  { n: '02', title: 'Electronics', desc: 'Experimenting with circuits, microcontrollers, and embedded systems.', icon: Cpu, tag: 'HARDWARE' },
  { n: '03', title: 'Robotics', desc: 'Exploring hardware, automation, sensors, and interactive systems.', icon: Bot, tag: 'BUILD & TEST' },
  { n: '04', title: 'Video Editing', desc: 'Creating engaging visual stories through editing, transitions, and motion.', icon: Clapperboard, tag: 'VISUAL STORY' },
  { n: '05', title: 'Tech Content', desc: 'Sharing technology-related ideas, digital tools, and useful discoveries.', icon: MonitorPlay, tag: 'CREATE & SHARE' },
  { n: '06', title: 'Innovation', desc: 'Learning, experimenting, solving problems, and developing new ideas.', icon: Lightbulb, tag: 'WHAT IF?' },
];
const skillGroups = [
  { title: 'Programming & Development', icon: Code2, items: ['Programming', 'Web Development'] },
  { title: 'Electronics & Hardware', icon: CircuitBoard, items: ['Electronics', 'Embedded Systems', 'Robotics'] },
  { title: 'Creative Skills', icon: Layers3, items: ['Video Editing', 'Visual Storytelling', 'Digital Content Creation'] },
];
const work = [
  { no: '01', title: 'Programming Projects', desc: 'A space for selected software, web experiments, and useful things I build.', tags: ['Code', 'Web', 'Experiments'], icon: Code2 },
  { no: '02', title: 'Electronics & Robotics', desc: 'Hardware experiments, embedded systems, circuits, and hands-on learning.', tags: ['Electronics', 'Embedded', 'Robotics'], icon: Cpu },
  { no: '03', title: 'Video Editing', desc: 'A growing collection of edits, transitions, and visual storytelling work.', tags: ['Editing', 'Motion', 'Storytelling'], icon: Clapperboard },
  { no: '04', title: 'Technology Content', desc: 'Ideas, explainers, and short-form content about tools and technology.', tags: ['Content', 'Technology', 'Video'], icon: MonitorPlay },
];
const nav = [['Home', 'home'], ['About', 'about'], ['Interests', 'interests'], ['Skills', 'skills'], ['My Work', 'work'], ['Socials', 'socials'], ['Contact', 'contact']];

export default function Portfolio() {
  const [intro, setIntro] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const seen = window.sessionStorage.getItem('omar-intro-seen');
    if (seen || reduceMotion) setIntro(false);
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = nav.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
      let current = 'home';
      sections.forEach((section) => { if (window.scrollY >= section.offsetTop - 150) current = section.id; });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduceMotion]);

  const dismissIntro = () => { window.sessionStorage.setItem('omar-intro-seen', '1'); setIntro(false); };
  const enter = { hidden: { opacity: 0, y: reduceMotion ? 0 : 22 }, show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.65, ease: 'easeOut' as const } } };

  return <>
    {intro && <motion.div className="intro" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="intro-grid"/><div className="intro-orb orb-one"/><div className="intro-orb orb-two"/>
      <motion.div className="intro-content" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: reduceMotion ? 0 : 0.16, delayChildren: 0.2 } } }}>
        <motion.div variants={enter} className="intro-kicker"><span className="status-dot"/> PERSONAL PORTFOLIO / 2026</motion.div>
        <div className="intro-name"><motion.span variants={enter}>OMAR</motion.span><motion.span variants={enter} className="intro-last">MOHAMED<span className="cyan-dot">.</span></motion.span></div>
        <motion.div variants={enter} className="intro-line"/>
        <motion.p variants={enter}>Programming <i>•</i> Electronics <i>•</i> Creativity</motion.p>
        <motion.div variants={enter} className="intro-photo"><Image src="/images/omar-mohamed.jpg" alt="Omar Mohamed" fill priority sizes="110px"/></motion.div>
      </motion.div>
      <button className="skip-intro" onClick={dismissIntro}>Skip intro <ArrowRight size={15}/></button>
      <motion.div className="intro-progress" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduceMotion ? 0 : 2.4, ease: 'easeInOut' }} onAnimationComplete={dismissIntro}/>
    </motion.div>}

    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#home" className="brand" aria-label="Omar Mohamed home"><span className="brand-mark">OM<span>.</span></span><span className="brand-name">OMAR MOHAMED<small>PERSONAL PORTFOLIO</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>{label}</a>)}</nav>
      <a className="header-cta" href="#contact">Let's talk <ArrowDownRight size={16}/></a>
      <button className="mobile-toggle" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
      {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}>{label}<ArrowRight size={16}/></a>)}</nav>}
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid"/><div className="hero-glow"/>
        <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: intro ? 2.45 : 0.1 } } }}>
          <motion.div variants={enter} className="eyebrow"><span className="eyebrow-line"/> WELCOME TO MY PERSONAL PORTFOLIO</motion.div>
          <motion.h1 variants={enter}>Hi, I’m <span>Omar<br className="desktop-break"/> Mohamed.</span></motion.h1>
          <motion.p variants={enter} className="hero-description">I’m passionate about programming, electronics, robotics, and creative digital experiences. I enjoy learning, experimenting with technology, and turning ideas into reality.</motion.p>
          <motion.div variants={enter} className="hero-tagline">THINK<span>.</span> CREATE<span>.</span> INNOVATE<span>.</span></motion.div>
          <motion.div variants={enter} className="hero-actions"><a href="#interests" className="button-primary">Explore my world <ArrowDownRight size={17}/></a><a href="#contact" className="button-ghost">Get in touch <ArrowRight size={16}/></a></motion.div>
          <motion.div variants={enter} className="hero-footnote"><span className="tiny-bars"><i/><i/><i/><i/></span> ALWAYS LEARNING. ALWAYS BUILDING.</motion.div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: intro ? 2.6 : 0.2 }}>
          <div className="photo-backdrop"/><div className="photo-frame"><Image src="/images/omar-mohamed.jpg" alt="Omar Mohamed sitting at a table, holding a phone" fill priority sizes="(max-width: 800px) 85vw, 42vw"/></div>
          <div className="photo-index"><span>OM / 001</span><span>THE CREATOR</span></div>
          <div className="floating-chip chip-code"><Code2 size={16}/><span>CODE<br/><b>& CREATE</b></span></div>
          <div className="floating-chip chip-circuit"><Cpu size={17}/><span>HARDWARE<br/><b>& IDEAS</b></span></div>
          <div className="visual-cross cross-one">+</div><div className="visual-cross cross-two">+</div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></a>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({ length: 2 }).map((_, i) => <div className="ticker-set" key={i}>{['PROGRAMMING','ELECTRONICS','ROBOTICS','VIDEO EDITING','TECH CONTENT','INNOVATION'].map((item) => <span key={item}>{item}<i>✳</i></span>)}</div>)}</div></section>

      <section className="section section-wrap about-section" id="about">
        <motion.div className="section-heading" variants={enter} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}><div className="eyebrow"><span className="eyebrow-line"/> A LITTLE ABOUT ME</div><h2>Curiosity is where<br/>everything <span>starts.</span></h2></motion.div>
        <motion.div className="about-copy" variants={enter} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}><p className="lead">I’m Omar Mohamed, a technology enthusiast with a curious mind and a hands-on approach.</p><p>I enjoy exploring programming, electronics, robotics, and digital creativity. From experimenting with hardware and software to creating engaging content, I’m always looking for opportunities to learn new skills, develop ideas, and build something meaningful.</p><div className="about-signature"><span className="signature-mark">OM.</span><span>Think boldly.<br/>Build thoughtfully.</span></div></motion.div>
        <div className="about-stamp"><Sparkles size={18}/><span>MADE OF<br/>CURIOSITY</span></div>
      </section>

      <section className="section interests-section" id="interests"><div className="section-wrap"><motion.div className="section-topline" variants={enter} initial="hidden" whileInView="show" viewport={{ once: true }}><div><div className="eyebrow"><span className="eyebrow-line"/> WHAT I’M INTO</div><h2>My <span>interests.</span></h2></div><p className="section-note">Different disciplines. One curious mind.<br/>Always exploring what’s possible.</p></motion.div>
        <div className="interest-grid">{interests.map((item, idx) => <motion.article className="interest-card" key={item.title} variants={enter} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ delay: idx * 0.06 }}><div className="card-top"><span>{item.n} / 06</span><item.icon size={20} strokeWidth={1.6}/></div><div className="interest-icon"><item.icon size={25} strokeWidth={1.5}/></div><h3>{item.title}</h3><p>{item.desc}</p><div className="card-bottom"><span>{item.tag}</span><ArrowDownRight size={17}/></div></motion.article>)}</div>
      </div></section>

      <section className="section section-wrap skills-section" id="skills"><div className="section-topline"><div><div className="eyebrow"><span className="eyebrow-line"/> MY TOOLKIT</div><h2>Skills & <span>curiosity.</span></h2></div><p className="section-note">A growing toolkit — built through<br/>practice, projects, and exploration.</p></div>
        <div className="skills-layout"><div className="skills-intro"><span className="big-bracket">{`{ }`}</span><p>I believe the best way to learn is to make things, test ideas, and keep asking questions.</p><span className="small-mono">LEARNING IS A PROCESS_</span></div><div className="skill-groups">{skillGroups.map((group, idx) => <motion.div className="skill-group" key={group.title} variants={enter} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.08 }}><div className="skill-group-title"><group.icon size={19}/><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}<i>↗</i></span>)}</div></motion.div>)}</div></div>
      </section>

      <section className="section work-section" id="work"><div className="section-wrap"><div className="section-topline"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED DIRECTIONS</div><h2>Things I <span>create.</span></h2></div><p className="section-note">A living collection of experiments,<br/>creative work, and things to come.</p></div><div className="work-grid">{work.map((item, idx) => <motion.article className="work-card" key={item.no} variants={enter} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} transition={{ delay: idx * 0.07 }}><div className="work-card-top"><span>{item.no} — CATEGORY</span><item.icon size={21}/></div><div className="work-art"><div className="work-art-grid"/><item.icon size={58} strokeWidth={1}/><span className="art-orbit orbit-a"/><span className="art-orbit orbit-b"/></div><h3>{item.title}</h3><p>{item.desc}</p><div className="work-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="work-placeholder"><span><i/> PERSONAL COLLECTION</span><span>ADD WORK SOON</span></div></motion.article>)}</div><p className="placeholder-note"><span>*</span> These are portfolio categories, not claims of completed projects. Specific work will be added as it’s ready to share.</p></div></section>

      <section className="section section-wrap socials-section" id="socials"><div className="section-topline"><div><div className="eyebrow"><span className="eyebrow-line"/> THE INTERNET IS A BIG PLACE</div><h2>Find me <span>online.</span></h2></div><p className="section-note">Follow my journey through technology,<br/>creativity, and digital content.</p></div><div className="social-grid">{socials.map((social, idx) => <motion.a className="social-card" href={social.url} target="_blank" rel="noreferrer noopener" key={social.name} variants={enter} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: idx * 0.06 }} aria-label={`Visit Omar Mohamed on ${social.name} (opens in a new tab)`}><span className="social-icon"><social.icon size={22}/></span><span className="social-info"><b>{social.name}</b><small>{social.handle}</small></span><ExternalLink size={16} className="social-external"/></motion.a>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-grid-bg"/><div className="section-wrap contact-inner"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line"/> HAVE SOMETHING IN MIND?</div><h2>Let’s make<br/>something <span>matter.</span></h2><p>Have an idea, a collaboration, or something interesting to discuss? Feel free to reach out.</p><div className="contact-deco">OPEN TO IDEAS <span>✳</span> OPEN TO LEARNING <span>✳</span></div></div><div className="contact-options"><a className="contact-option" href="tel:+201558791003"><span className="contact-option-icon"><Phone size={21}/></span><span><small>GIVE ME A CALL</small><b>+20 15 58791003</b></span><ArrowDownRight size={20} className="contact-arrow"/></a><a className="contact-option whatsapp-option" href="https://wa.me/201558791003" target="_blank" rel="noreferrer noopener"><span className="contact-option-icon"><MessageCircle size={22}/></span><span><small>QUICK MESSAGE</small><b>Message me on WhatsApp</b></span><ArrowDownRight size={20} className="contact-arrow"/></a><div className="contact-footnote"><span className="status-dot"/> GOOD CONVERSATIONS START WITH A HELLO.</div></div></div></section>
    </main>

    <footer className="footer"><div className="section-wrap footer-main"><a href="#home" className="brand footer-brand"><span className="brand-mark">OM<span>.</span></span><span className="brand-name">OMAR MOHAMED<small>PROGRAMMING • ELECTRONICS • ROBOTICS • CREATIVITY</small></span></a><div className="footer-socials">{socials.map(s => <a key={s.name} href={s.url} target="_blank" rel="noreferrer noopener" aria-label={s.name}><s.icon size={17}/></a>)}<a href="https://wa.me/201558791003" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp"><MessageCircle size={17}/></a></div></div><div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} Omar Mohamed. All rights reserved.</span><a href="#home">BACK TO TOP <ChevronUp size={14}/></a><span>BUILT WITH CURIOSITY <i>✳</i></span></div></footer>
  </>;
}
