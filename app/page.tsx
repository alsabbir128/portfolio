'use client'

import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Code2,
  Database,
  ExternalLink,
  GitBranch,
  Layers3,
  Network,
  Mail,
  Menu,
  MonitorSmartphone,
  Palette,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

const skillGroups = [
  { title: 'Web development', icon: Code2, skills: ['Next.js 16', 'React 19', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS v4', 'HTML5 / CSS3'] },
  { title: 'Languages & systems', icon: Database, skills: ['Python', 'C / C++', 'SQL fundamentals', 'NoSQL fundamentals', 'Data structures', 'API architecture'] },
  { title: 'Design & tools', icon: Palette, skills: ['Adobe Photoshop', 'UI / UX layout', 'Git & GitHub', 'MS Office', 'Visual systems', 'Responsive design'] },
  { title: 'How I work', icon: Sparkles, skills: ['Problem solving', 'Creative thinking', 'Technical communication', 'Rapid execution', 'Curiosity', 'Ownership'] },
]

const navItems = ['About', 'Skills', 'Projects', 'Services', 'Contact']

const portfolioImages = {
  portrait: 'https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/683340064_2460066581103893_6469692543993781279_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1536x2048&ctp=s1536x2048&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeENMOU6H52-oehxThjaq2U-63-w2XFv5aDrf7DZcW_loOBBlInemgMfIHCjFBetTb_dzGH2tJPfw2PywLXmroC9&_nc_ohc=hoqIIKtJWBEQ7kNvwE3S2VT&_nc_oc=AdrI1DFnh0QfKXRA8JAnzq7JAUWxmmw6imWzZme_1AohjRznHH5I5QGzad68Y0JhR9E&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=XJIH8Pv3bo9RXHVcppAJeg&_nc_ss=7b2a8&oh=00_AQKu6iaQ6huQT9t25ppudxOt0l0Kxe6VjF1TGawChpksOw&oe=6ABD459F',
  editorial: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/607081174_18189138625344107_4561944510352091255_n-Ko8FyV4Av6tNoo1uBkyBHbybbtb1Bi.jpg',
  studio: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/674540390_2454400165003868_7527806826564423987_n-SU5aaxRHBmLJFHYibY0enJqvdISmco.jpg',
  relaxed: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/727800244_18208113184344107_650255405308333925_n-bBkLOiIp78A6xyfeNhXB9YSbkv3inQ.jpg',
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <main className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Alsabbir.dev home"><img src="/images/abdullah-portrait.jpg" alt="Abdullah Al Sabbir smiling in a white shirt" /><b>alsabbir<span>.dev</span></b></a>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          {navItems.map((item) => { const sectionId = item.toLowerCase(); return <a key={item} href={`#${sectionId}`} className={activeSection === sectionId ? 'is-active' : ''} aria-current={activeSection === sectionId ? 'page' : undefined} onClick={() => { setActiveSection(sectionId); setMenuOpen(false) }}>{item}</a> })}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <div className="content-wrap">
        <section id="home" className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for creative collaborations</p>
            <h1>Building thoughtful <em>digital</em> experiences.</h1>
            <p className="hero-lede">Hi, I&apos;m <strong>Abdullah Al Sabbir</strong> — a CSE undergrad and web developer turning ideas from the classroom into things people can actually use.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowUpRight aria-hidden="true" /></a><a className="button button-ghost" href="#contact">Contact me <Mail aria-hidden="true" /></a></div>
            <div className="social-row"><a href="https://github.com/alsabbir128" target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" /> GitHub</a><a href="https://linkedin.com/in/abdullah-al-sabbir-54b05b294" target="_blank" rel="noreferrer"><Network aria-hidden="true" /> LinkedIn</a><a href="mailto:abdullahals128@gmail.com"><Mail aria-hidden="true" /> Email</a></div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="profile-card"><img className="profile-photo" src="/images/abdullah-portrait.jpg" alt="Abdullah Al Sabbir smiling in a white shirt" /><span className="profile-label">CSE / WEB DEV</span><span className="profile-line" /><p>“Theory is a starting point.<br />Building is the real test.”</p></div>
            <div className="floating-note note-top"><span>01</span><b>Learn</b><small>every day</small></div><div className="floating-note note-bottom"><span>02</span><b>Build</b><small>with intention</small></div>
          </div>
        </section>

        <section id="about" className="section about-section"><div className="section-heading"><p className="eyebrow">01 / About me</p><h2>A developer with a<br /><em>creative edge.</em></h2></div><div className="about-content"><p className="lead">I&apos;m currently studying Computer Science &amp; Engineering at <strong>North South University</strong>, where I&apos;m sharpening my foundations in software engineering, algorithms, and systems.</p><p>Outside the curriculum, I enjoy making the web feel a little more human — pairing clean code with considered interfaces, visual storytelling, and practical problem solving.</p><div className="credential-grid"><div><span className="credential-icon">CS</span><div><b>Python Programming</b><small>Bangladesh Students&apos; Programming &amp; Robotics Club</small></div></div><div><span className="credential-icon">EN</span><div><b>IELTS Certified</b><small>Confident global communication &amp; collaboration</small></div></div></div></div><div className="about-gallery"><figure className="gallery-large"><img src={portfolioImages.editorial} alt="Abdullah sitting on outdoor steps" /><figcaption>Outside the screen</figcaption></figure><figure><img src={portfolioImages.relaxed} alt="Abdullah in a white shirt" /><figcaption>Curious by nature</figcaption></figure></div></section>

        <section id="skills" className="section"><div className="section-heading inline-heading"><div><p className="eyebrow">02 / The toolkit</p><h2>Skills that turn<br /><em>ideas into shipped work.</em></h2></div><p className="section-aside">A growing collection of technologies, habits, and creative tools I use to move from first sketch to final polish.</p></div><div className="skills-grid">{skillGroups.map(({ title, icon: Icon, skills }) => <article className="skill-card" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>

        <section id="projects" className="section projects-section"><div className="section-heading inline-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Things I&apos;ve been<br /><em>building lately.</em></h2></div><a className="text-link" href="https://github.com/alsabbir128" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight aria-hidden="true" /></a></div><article className="project-feature"><div className="project-visual"><div className="project-window"><div className="window-bar"><span /><span /><span /><b>fitlog / dashboard</b></div><div className="dashboard-preview"><div className="dash-copy"><small>Good morning, Abdullah</small><strong>Ready to move?</strong><div className="dash-progress"><i /><span>68%</span></div></div><div className="dash-chart"><div className="bars"><i /><i /><i /><i /><i /><i /><i /></div><small>WEEKLY ACTIVITY</small></div><div className="dash-pill"><Check aria-hidden="true" /> Today&apos;s plan</div></div></div></div><div className="project-details"><div className="project-kicker"><span>Featured project</span><span>2026</span></div><h3>Fit<span>Log</span></h3><p>Interactive workout library &amp; training log web app. A focused fitness management platform for planning better sessions and tracking progress in the moment.</p><ul><li><Check aria-hidden="true" /> Responsive workout library with smart sorting</li><li><Check aria-hidden="true" /> Live plan metrics and five-lift workflow</li><li><Check aria-hidden="true" /> Polished UX with persistent saved tabs</li></ul><div className="tag-list project-tags">{['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'FitLog API'].map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a className="button button-primary" href="https://fitloglibrarya6.vercel.app/" target="_blank" rel="noreferrer">Live demo <ExternalLink aria-hidden="true" /></a><a className="button button-ghost" href="https://github.com/alsabbir128/FitLog-workout-library_A-6" target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" /> Repository</a></div></div></article><div className="future-projects"><div><span>More in progress</span><h3>Next up: more useful<br />things for the web.</h3></div><Layers3 aria-hidden="true" /><span className="future-arrow">↗</span></div></section>

        <section className="section project-secondary" aria-labelledby="dev-stack-title"><div className="section-heading inline-heading"><div><p className="eyebrow">04 / Recent build</p><h2 id="dev-stack-title">Explore. Compare.<br /><em>Build your stack.</em></h2></div><a className="text-link" href="https://dev-stack-programming-hero-a-5.vercel.app/" target="_blank" rel="noreferrer">Open project <ArrowUpRight aria-hidden="true" /></a></div><article className="project-feature"><div className="project-visual"><div className="project-window"><div className="window-bar"><span /><span /><span /><b>dev stack / builder</b></div><div className="dashboard-preview dev-stack-preview"><div className="dash-copy"><small>Explore your toolkit</small><strong>Build a stack that fits.</strong><div className="dash-progress"><i /><span>12 tools</span></div></div><div className="dash-chart"><div className="stack-orbit"><Layers3 aria-hidden="true" /><span>REACT</span><span>TS</span><span>TAILWIND</span></div><small>YOUR STACK</small></div><div className="dash-pill"><Check aria-hidden="true" /> Stack saved</div></div></div></div><div className="project-details"><div className="project-kicker"><span>Dev Stack</span><span>2025</span></div><h3>Dev <span>Stack</span></h3><p>A clean, interactive technology stack builder for exploring modern tools, comparing options quickly, and creating a custom stack for upcoming builds.</p><ul><li><Check aria-hidden="true" /> Browse frontend, backend, database, and tooling options</li><li><Check aria-hidden="true" /> Add, remove, or reset technologies in real time</li><li><Check aria-hidden="true" /> Responsive UX with loading and toast feedback</li></ul><div className="tag-list project-tags">{['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'React Toastify'].map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-links"><a className="button button-primary" href="https://dev-stack-programming-hero-a-5.vercel.app/" target="_blank" rel="noreferrer">Live demo <ExternalLink aria-hidden="true" /></a><a className="button button-ghost" href="https://github.com/alsabbir128/DEV-Stack_Programming-hero-A-5" target="_blank" rel="noreferrer"><GitBranch aria-hidden="true" /> GitHub</a></div></div></article></section>

        <section id="services" className="section services-section"><div className="section-heading"><p className="eyebrow">04 / What I do</p><h2>From blank canvas<br />to <em>built &amp; shipped.</em></h2></div><div className="services-grid"><article><span>01</span><MonitorSmartphone aria-hidden="true" /><h3>Web development</h3><p>Fast, responsive web applications built with modern React, Next.js, and TypeScript.</p></article><article><span>02</span><Palette aria-hidden="true" /><h3>UI / UX &amp; web design</h3><p>Clean visual systems with strong attention to hierarchy, responsiveness, and experience.</p></article><article><span>03</span><Database aria-hidden="true" /><h3>Application architecture</h3><p>Thoughtful logic, storage integration, and scalable workflows that stay easy to evolve.</p></article></div></section>

        <section id="contact" className="contact-section"><div className="contact-intro"><p className="eyebrow">05 / Start a conversation</p><h2>Let&apos;s build something<br /><em>great together.</em></h2><p>Have a project, an idea, or just want to say hello? My inbox is always open.</p><div className="contact-links"><a href="mailto:abdullahals128@gmail.com"><Mail aria-hidden="true" /> abdullahals128@gmail.com</a><a href="https://linkedin.com/in/abdullah-al-sabbir-54b05b294" target="_blank" rel="noreferrer"><Network aria-hidden="true" /> LinkedIn profile</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Subject<input required name="subject" placeholder="What&apos;s on your mind?" /></label><label>Message<textarea required name="message" rows={4} placeholder="Tell me a little about it..." /></label><button className="button button-primary" type="submit">{sent ? 'Message sent' : 'Send message'} {sent ? <Check aria-hidden="true" /> : <Send aria-hidden="true" />}</button></form></section>
      </div>
      <footer className="site-footer"><a href="#home" className="brand"><img src="/images/abdullah-portrait.jpg" alt="Abdullah Al Sabbir smiling in a white shirt" /><b>alsabbir<span>.dev</span></b></a><p>© 2026 Abdullah Al Sabbir. Designed &amp; built with intention.</p><div><a href="https://github.com/alsabbir128" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/abdullah-al-sabbir-54b05b294" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:abdullahals128@gmail.com">Email</a></div></footer>
    </main>
  )
}
