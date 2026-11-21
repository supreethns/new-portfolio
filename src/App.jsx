const RESUME = '/Supreeth_Nelamane_Srikantaiah_Resume.pdf'

const experience = [
  {
    period: 'Jan 2026 — Present',
    role: 'Full Stack Developer',
    company: 'Vyoma Linguistic Labs Foundation',
    summary: 'Building Digital Sanskrit Guru (DSG 2.0), a full-stack e-commerce platform, and Sandhi, a Sanskrit learning web app.',
    points: [
      'React.js interfaces and Node.js/Express APIs for products, cart & checkout, orders, wishlist, digital library, inventory and admin.',
      'Razorpay payment workflows: verification, webhooks, orphan-payment reconciliation, refunds, returns and financial ledger reporting.',
      'Security hardening: API ownership checks, session and wishlist isolation, rate limiting and protection against client-side price tampering.',
      'A 61-test automated suite (node:test) covering financial helpers, coupons, payment signatures, pricing, currency and delivery.',
      'WhatsApp Cloud API order notifications, plus AWS S3 + CloudFront media migration with deduplication, dry runs and rollback.',
      'Deployments on AWS Lightsail (Nginx, PM2, Node.js 20) automated with GitHub Actions.',
      'Built the Sandhi PWA for iOS and Android, including demo slot booking, plus GTM, GA4 and Meta Ads tracking.',
    ],
  },
  {
    period: 'Jun 2024 — Jun 2025',
    role: 'Frontend Development Intern',
    company: 'Sam Megh Technologies',
    summary: 'Built and updated user-facing web interfaces with React.js, HTML, CSS and JavaScript, improving presentation and usability.',
  },
  {
    period: 'Earlier',
    role: 'Mechanical Engineering Intern',
    company: 'Hindustan Springs, Mysuru',
    summary: 'Industrial internship during my engineering degree.',
  },
]

const skills = [
  { title: 'Frontend', text: 'React.js, JavaScript, HTML5, CSS3, responsive UI, PWAs, Vite, Material UI, Tailwind CSS.' },
  { title: 'Backend', text: 'Node.js, Express.js, REST APIs, authentication, webhook processing.' },
  { title: 'Data & payments', text: 'MongoDB, MongoDB Atlas, PostgreSQL, Razorpay, WhatsApp Cloud API, Google Calendar API.' },
  { title: 'Cloud & DevOps', text: 'AWS Lightsail, S3, CloudFront, Nginx, PM2, Git, GitHub Actions, CI/CD.' },
  { title: 'Testing & security', text: 'node:test, API hardening, HMAC verification, session isolation.' },
  { title: 'AI & analytics', text: 'Python, PyTorch fundamentals, tokenization, embeddings, LLMs · GTM, GA4, Meta Ads.' },
]

const projects = [
  { number: '01', stack: 'Next.js · TypeScript', name: 'InvoiceFlow', mark: 'IF', featured: true, description: 'A GST-compliant invoicing platform for Indian businesses, with billing documents, customer management, PDF exports, subscriptions, and Razorpay payments.', url: 'https://github.com/supreethns/invoice-flow' },
  { number: '02', stack: 'React · Vite', name: 'Gemini Clone', mark: 'Gc', description: 'A modern AI-inspired frontend interface built with React and Vite.', url: 'https://github.com/supreethns/gemini-clone-front-end-' },
  { number: '03', stack: 'HTML · CSS · JS', name: 'Calculator', mark: 'C+', description: 'A clean browser-based calculator built with core web technologies.', url: 'https://github.com/supreethns/calculator-using-JS' },
  { number: '04', stack: 'JavaScript', name: 'TextUtils', mark: 'Tu', description: 'A useful text utility application for everyday text transformations.', url: 'https://github.com/supreethns/Textutils' },
]

const contacts = [
  { label: 'Email', value: 'supreethns2001@gmail.com', href: 'mailto:supreethns2001@gmail.com' },
  { label: 'LinkedIn', value: 'supreeth-ns', href: 'https://www.linkedin.com/in/supreeth-ns-509358194' },
  { label: 'GitHub', value: 'supreethns', href: 'https://github.com/supreethns' },
]

function Brand() { return <a className="brand" href="#home" aria-label="Supreeth home">S<span>.</span></a> }
function Section({ id, label, children, className = '' }) { return <section id={id} className={`section ${className}`}><p className="section-label">{label}</p>{children}</section> }

function App() {
  return <>
    <header className="site-header">
      <Brand />
      <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
      <a className="header-cta" href={RESUME} target="_blank" rel="noreferrer">Resume ↗</a>
    </header>
    <main>
      <section className="hero" id="home">
        <div>
          <p className="eyebrow">Full-stack developer · Mysuru, India</p>
          <h1>Building web apps with <em>purpose</em> and precision.</h1>
          <p className="intro">I'm Supreeth Nelamane Srikantaiah — a software developer building full-stack web applications, e-commerce workflows, payment integrations and cloud deployments with React, Node.js and AWS.</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">See my experience ↓</a><a className="text-link" href="#contact">Let's connect →</a></div>
        </div>
        <div className="hero-visual"><div className="orbit one" /><div className="orbit two" /><div className="image-frame"><img src="/supreeth.png" alt="Supreeth Nelamane Srikantaiah" /></div><p className="availability"><i /> Open to opportunities</p></div>
      </section>

      <Section id="about" label="01 / About me">
        <div className="section-content">
          <h2>Engineer turned<br />developer.</h2>
          <div>
            <p className="body-large">I'm a Full Stack Developer at Vyoma Linguistic Labs Foundation, where I ship production features for Digital Sanskrit Guru — payment reconciliation, refunds, inventory controls, session security, automated testing and media migration.</p>
            <p>I studied Mechanical Engineering at PES College of Engineering, Mandya (2019–2023) and moved into software, bringing a practical, systems-minded approach with me. Right now I'm also building foundations in AI engineering: Python, PyTorch, tokenization, embeddings and LLMs.</p>
          </div>
        </div>
      </Section>

      <Section id="experience" label="02 / Experience">
        <div className="section-content">
          <h2>Where I've<br />worked.</h2>
          <div className="timeline">
            {experience.map((job) => <article key={job.company} className="job">
              <p className="job-period">{job.period}</p>
              <h3>{job.role}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-summary">{job.summary}</p>
              {job.points && <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </article>)}
          </div>
        </div>
      </Section>

      <Section id="skills" label="03 / Toolkit" className="skills">
        <div className="section-content">
          <h2>Skills &amp;<br />stack.</h2>
          <div className="skill-grid">
            {skills.map((skill, i) => <article key={skill.title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{skill.title}</h3><p>{skill.text}</p></article>)}
          </div>
        </div>
      </Section>

      <Section id="projects" label="04 / Selected work">
        <div className="section-content">
          <h2>Things I’ve<br />built.</h2>
          <div className="projects-grid">{projects.map((project) => <a key={project.name} className={`project-card ${project.featured ? 'featured' : ''}`} href={project.url} target="_blank" rel="noreferrer"><div><p className="project-number">{project.number} / {project.stack}</p><h3>{project.name}</h3><p>{project.description}</p><b>View source ↗</b></div><strong>{project.mark[0]}<span>{project.mark.slice(1)}</span></strong></a>)}</div>
        </div>
      </Section>

      <Section id="contact" label="05 / Contact" className="contact">
        <div className="contact-content">
          <div>
            <h2>Let’s make<br /><em>something useful.</em></h2>
            <ul className="contact-links">{contacts.map((c) => <li key={c.label}><span>{c.label}</span><a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.value} ↗</a></li>)}</ul>
          </div>
          <a className="button button-light" href={RESUME} target="_blank" rel="noreferrer">Download resume ↗</a>
        </div>
      </Section>
    </main>
    <footer><Brand /><p>Designed &amp; built by Supreeth N. S.</p><a href="#home">Back to top ↑</a></footer>
  </>
}

export default App
