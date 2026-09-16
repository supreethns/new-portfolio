const projects = [
  { number: '01', stack: 'Next.js · TypeScript', name: 'InvoiceFlow', mark: 'IF', featured: true, description: 'A GST-compliant invoicing platform for Indian businesses, with billing documents, customer management, PDF exports, subscriptions, and Razorpay payments.', url: 'https://github.com/supreethns/invoice-flow' },
  { number: '02', stack: 'React · Vite', name: 'Gemini Clone', mark: 'Gc', description: 'A modern AI-inspired frontend interface built with React and Vite.', url: 'https://github.com/supreethns/gemini-clone-front-end-' },
  { number: '03', stack: 'HTML · CSS · JS', name: 'Calculator', mark: 'C+', description: 'A clean browser-based calculator built with core web technologies.', url: 'https://github.com/supreethns/calculator-using-JS' },
  { number: '04', stack: 'JavaScript', name: 'TextUtils', mark: 'Tu', description: 'A useful text utility application for everyday text transformations.', url: 'https://github.com/supreethns/Textutils' },
]

function Brand() { return <a className="brand" href="#home" aria-label="Supreeth home">S<span>.</span></a> }
function Section({ id, label, children, className = '' }) { return <section id={id} className={`section ${className}`}><p className="section-label">{label}</p>{children}</section> }

function App() {
  return <>
    <header className="site-header"><Brand /><nav aria-label="Primary navigation"><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav><a className="header-cta" href="/supreeth_new_resume_27-11-2023.pdf" target="_blank" rel="noreferrer">Resume ↗</a></header>
    <main>
      <section className="hero" id="home"><div><p className="eyebrow">Mechanical engineer · Web developer</p><h1>Building ideas with <em>purpose</em> and precision.</h1><p className="intro">I'm Supreeth Nealamane Srikantaiah — a curious engineer who enjoys turning problems into useful, thoughtful digital experiences.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View my work ↓</a><a className="text-link" href="#contact">Let's connect →</a></div></div><div className="hero-visual"><div className="orbit one" /><div className="orbit two" /><div className="image-frame"><img src="/supreeth.png" alt="Supreeth Nealamane Srikantaiah" /></div><p className="availability"><i /> Available for opportunities</p></div></section>
      <Section id="about" label="01 / About me"><div className="section-content"><h2>Always learning,<br />always making.</h2><div><p className="body-large">I am a Mechanical Engineering graduate from PES College of Engineering, Mandya. I bring a practical engineering mindset, a willingness to learn, and a genuine interest in technology.</p><p>My goal is to grow in a challenging team where I can contribute my skills, learn continuously, and help build work that makes a difference.</p></div></div></Section>
      <Section id="skills" label="02 / Toolkit" className="skills"><div className="section-content"><h2>Skills &amp;<br />background.</h2><div className="skill-grid"><article><span>01</span><h3>Web fundamentals</h3><p>HTML, CSS and JavaScript — crafting clean, responsive interfaces for the web.</p></article><article><span>02</span><h3>Engineering</h3><p>Bachelor of Engineering in Mechanical Engineering, 2019–2023.</p></article><article><span>03</span><h3>Collaboration</h3><p>Mechatronics workshops, technical quizzes, debate, and college music band experience.</p></article></div></div></Section>
      <Section id="projects" label="03 / Selected work"><div className="section-content"><h2>Things I’ve<br />built.</h2><div className="projects-grid">{projects.map((project) => <a key={project.name} className={`project-card ${project.featured ? 'featured' : ''}`} href={project.url} target="_blank" rel="noreferrer"><div><p className="project-number">{project.number} / {project.stack}</p><h3>{project.name}</h3><p>{project.description}</p><b>View source ↗</b></div><strong>{project.mark[0]}<span>{project.mark.slice(1)}</span></strong></a>)}</div></div></Section>
      <Section id="contact" label="04 / Contact" className="contact"><div className="contact-content"><h2>Let’s make<br /><em>something useful.</em></h2><a className="button button-light" href="/supreeth_new_resume_27-11-2023.pdf" target="_blank" rel="noreferrer">Download resume ↗</a></div></Section>
    </main>
    <footer><Brand /><p>Designed &amp; built by Supreeth N. S.</p><a href="#home">Back to top ↑</a></footer>
  </>
}

export default App
