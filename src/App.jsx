import { useState } from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./styles/editorial.css";

const email = "mohammedsazeed2@gmail.com";
const linkedin = "https://www.linkedin.com/in/mohammed-sazeed-a2b209165/";

const work = [
  {
    number: "01",
    category: "DATA ENGINEERING / IN PROGRESS",
    title: "A better foundation for logistics data.",
    client: "ICAT Logistics — Universal Data Lake",
    description: "Mapping operational data from the UDM raw layer into a governed curated model, translating business rules into reliable transformations on Aurora PostgreSQL.",
    technologies: ["Aurora PostgreSQL", "SQL", "AWS DMS", "Data Modeling", "ETL"],
    architecture: ["Operational sources", "UDM raw", "Business rules", "UDM curated"],
    context: "Multiple operational systems need a consistent data model without every downstream consumer rewriting the same transformation logic.",
    contribution: "Developing source-to-target mappings, SQL transformations and validation logic for raw-to-curated datasets, with attention to data integrity, reconciliation and downstream usability.",
    distinction: "Current implementation work. No unverified throughput, savings or production completion claims."
  },
  {
    number: "02",
    category: "ARCHITECTURE / PROPOSAL",
    title: "Rethinking the path to analytics.",
    client: "WorldTrack — Warehouse Re-architecture",
    description: "A proposed incremental export architecture that derives analytical facts from curated data instead of maintaining a second business-logic pipeline.",
    technologies: ["Aurora PostgreSQL", "Step Functions", "Amazon S3", "Snowflake", "EventBridge"],
    architecture: ["UDM curated", "Change tracking", "Fact rebuild", "S3 + Snowflake"],
    context: "The legacy analytical path reconstructs denormalized business objects separately from the governed data model, complicating maintenance and reconciliation.",
    contribution: "Contributed to a phased design for change capture, affected-key rebuilding, secure exports, validation against the existing warehouse and controlled rollback.",
    distinction: "Design proposal, not a completed migration. Architecture shown here is deliberately simplified to avoid disclosing internal implementation details."
  },
  {
    number: "03",
    category: "PLATFORM ENGINEERING / 2026",
    title: "One consistent view of master data.",
    client: "ICAT Logistics — Master Data Management",
    description: "Consolidating customer, vendor and sales-representative records from heterogeneous systems into centrally governed master-data services.",
    technologies: ["AWS Lambda", "Aurora", "SQS", "SNS", "Step Functions", "Snowflake"],
    architecture: ["Source systems", "CDC + scheduled ingestion", "Unified master", "Consumers"],
    context: "A multi-system logistics environment needs common identifiers, consistent attributes and dependable synchronization.",
    contribution: "Worked across ingestion pipelines, schema design, validations, source-specific mappings and deployment planning for shared master-data services.",
    distinction: "Public overview only; source-system identifiers, account details and internal mappings are excluded."
  },
  {
    number: "04",
    category: "EVENT-DRIVEN SYSTEMS / 2023–2025",
    title: "Keeping shipments and systems in sync.",
    client: "Omni Logistics — B2B Integrations",
    description: "Backend integrations spanning shipment lifecycles, electronic data interchange, billing, milestone processing and operational events.",
    technologies: ["AWS Lambda", "Node.js", "Amazon SQS", "DynamoDB", "S3", "EDI / X12"],
    architecture: ["External events", "Integration APIs", "Queue + processing", "ERP / partners"],
    context: "Shipment and finance integrations must tolerate partial failures, retries and differences in partner-system contracts.",
    contribution: "Developed and supported event-driven interfaces, transformation pipelines, document flows and production troubleshooting.",
    distinction: "Representative work across multiple integrations, not an individual client's private implementation."
  },
  {
    number: "05",
    category: "INDEPENDENT PRODUCT / IN DEVELOPMENT",
    title: "Software for work on the ground.",
    client: "Bilty Maker — Logistics Documents",
    description: "An independent web product for lorry receipts, invoices and measurements, designed around real transport-business workflows.",
    technologies: ["React", "TypeScript", "PocketBase", "Oracle Cloud", "UI Engineering"],
    architecture: ["Business input", "Validation", "Documents", "Print / export"],
    context: "Small logistics operators need practical document workflows that don't get buried under unnecessary complexity.",
    contribution: "Designed and developed a responsive document-building product, with an emphasis on printable output, business rules and lightweight infrastructure.",
    distinction: "An evolving product; not presented as a finished, fully validated production service."
  }
];

const specialties = [
  {
    n: "01",
    heading: "Cloud architecture",
    description: "Serverless systems, event-driven integrations, infrastructure as code and reliable AWS operations.",
    items: "Lambda / API Gateway / Step Functions / SQS / SNS / Terraform"
  },
  {
    n: "02",
    heading: "Data engineering",
    description: "Raw-to-curated mapping, transformation rules, change data capture and analytical data delivery.",
    items: "Aurora PostgreSQL / SQL / DMS / Snowflake / S3"
  },
  {
    n: "03",
    heading: "Production engineering",
    description: "Debugging the real failures: integration drift, data exceptions, performance and deployment safety.",
    items: "CloudWatch / SQL Server / CI/CD / Root Cause Analysis"
  }
];

const credentials = [
  { label: "Solutions Architect — Professional", issuer: "AWS", date: "2026", href: "https://www.credly.com/badges/4fa07386-a5e3-4d66-9b66-05eb532a7b01/public_url" },
  { label: "Data Analytics — Specialty", issuer: "AWS", date: "2024", href: "https://www.credly.com/badges/f40ccb1d-0371-419d-8304-f612c5bb5791/linked_in_profile" },
  { label: "Solutions Architect — Associate", issuer: "AWS", date: "2023", href: "https://www.credly.com/badges/8c73cc28-175f-4659-a14c-50c16f17ce50/linked_in_profile" }
];

function Arrow({ diagonal = false }) {
  return <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d={diagonal ? "M4.5 15.5 15.5 4.5M6 4.5h9.5V14" : "M3 10h13M10 4l6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Wordmark() {
  return <a href="#top" className="wordmark" aria-label="Mohammed Sazeed — home"><span className="wordmark-icon">S<span>.</span></span><span className="wordmark-text">MOHAMMED<br />SAZEED</span></a>;
}

function PipelineIllustration() {
  return (
    <svg className="pipeline-art" viewBox="0 0 670 490" role="img" aria-label="Conceptual data flow diagram: operational systems into governed data for consumers">
      <defs>
        <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#b8c3a7" opacity=".45" /></pattern>
      </defs>
      <rect x="0" y="0" width="670" height="490" fill="url(#dots)" />
      <path d="M80 137H258M80 237H258M80 337H258M386 237H559" stroke="#748b78" strokeWidth="1.3" strokeDasharray="5 6"/>
      <path d="M259 137V337M385 137V337" stroke="#748b78" strokeWidth="1.2" strokeDasharray="5 6"/>
      <g fill="#e6eddd" stroke="#9caa96" strokeWidth="1.3">
        <rect x="35" y="106" width="145" height="62" rx="2"/><rect x="35" y="206" width="145" height="62" rx="2"/><rect x="35" y="306" width="145" height="62" rx="2"/>
        <rect x="491" y="206" width="145" height="62" rx="2"/>
      </g>
      <rect x="248" y="115" width="149" height="244" rx="3" fill="#172d26" stroke="#172d26"/>
      <rect x="264" y="131" width="117" height="212" fill="none" stroke="#58766b" strokeDasharray="3 5"/>
      <g fontFamily="Space Grotesk, sans-serif" fill="#172d26" fontSize="13" fontWeight="600">
        <text x="53" y="132">SOURCE 01</text><text x="53" y="232">SOURCE 02</text><text x="53" y="332">SOURCE 03</text>
        <text x="510" y="232">CONSUMERS</text>
      </g>
      <g fontFamily="Inter, sans-serif" fill="#577167" fontSize="10"><text x="53" y="150">OPERATIONAL</text><text x="53" y="250">EVENT STREAM</text><text x="53" y="350">SYSTEM DATA</text><text x="510" y="251">TRUSTED OUTPUT</text></g>
      <text x="282" y="165" fill="#d9f29c" fontFamily="Space Grotesk, sans-serif" fontSize="12" letterSpacing="1">GOVERNED</text>
      <text x="282" y="183" fill="#d9f29c" fontFamily="Space Grotesk, sans-serif" fontSize="12" letterSpacing="1">DATA LAYER</text>
      <circle cx="322" cy="249" r="35" fill="none" stroke="#dcf2aa" strokeWidth="1.5"/>
      <path d="M305 249h34m-17-17v34" stroke="#dcf2aa" strokeWidth="1.5"/>
      <circle cx="322" cy="249" r="5.5" fill="#d9f29c"/>
      <g fill="#d6f38f"><circle cx="259" cy="137" r="5"/><circle cx="259" cy="237" r="5"/><circle cx="259" cy="337" r="5"/><circle cx="385" cy="237" r="5"/></g>
      <g fill="#577167" fontFamily="Inter, sans-serif" fontSize="11"><text x="35" y="70">01 — INGEST</text><text x="249" y="70">02 — TRANSFORM</text><text x="490" y="70">03 — SERVE</text><text x="35" y="431">CONCEPTUAL ARCHITECTURE</text><text x="534" y="431">NOT TO SCALE</text></g>
      <path d="M35 442h601" stroke="#91a38b" strokeWidth="1"/>
    </svg>
  );
}

function ArchitectureSteps({ items }) {
  return (
    <div className="architecture-steps" aria-label="High level architecture">
      {items.map((step, i) => (
        <div className="architecture-step" key={step}>
          <span className="architecture-index">{String(i + 1).padStart(2, "0")}</span>
          <strong>{step}</strong>
          {i !== items.length - 1 && <span className="step-connector" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

function WorkItem({ project, index }) {
  return (
    <article className="work-item">
      <div className="work-count">{project.number}<span>/05</span></div>
      <div className="work-copy">
        <div className="micro-label"><span className="accent-dot" />{project.category}</div>
        <h3>{project.title}</h3>
        <p className="work-client">{project.client}</p>
        <p className="work-description">{project.description}</p>
        <div className="work-tags">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div>
        <details className="case-expand">
          <summary>Read the project notes <Arrow diagonal /></summary>
          <div className="case-expanded-content">
            <div><h4>The challenge</h4><p>{project.context}</p></div>
            <div><h4>My involvement</h4><p>{project.contribution}</p></div>
            <p className="case-disclaimer">{project.distinction}</p>
          </div>
        </details>
      </div>
      <div className={"work-visual visual-" + (index % 3)} aria-label={project.client + " conceptual architecture"}>
        <span className="work-visual-label">SYSTEM NOTE / {project.number}</span>
        <ArchitectureSteps items={project.architecture} />
        <span className="work-visual-bottom">DESIGNED FOR REAL-WORLD COMPLEXITY <span aria-hidden="true">↗</span></span>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <nav className={menuOpen ? "site-nav is-open" : "site-nav"} id="site-navigation" aria-label="Primary navigation">
            <a href="#work" onClick={closeMenu}>Selected work</a>
            <a href="#expertise" onClick={closeMenu}>Expertise</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>Get in touch <Arrow diagonal /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="layout-width">
            <div className="eyebrow-row"><span><span className="status-pulse" /> CLOUD ENGINEER / DATA SYSTEMS</span><span>PORTFOLIO · 2026</span></div>
            <div className="hero-grid">
              <div className="hero-main">
                <p className="hero-overline">Hello, I'm Mohammed Sazeed.</p>
                <h1 id="hero-title">I build systems<br />that <em>connect</em><br />the dots<span className="period">.</span></h1>
                <p className="hero-intro">From raw operational data to dependable platforms — I turn complicated infrastructure and business rules into systems people can rely on.</p>
                <div className="hero-links">
                  <a className="primary-link" href="#work">Explore selected work <Arrow diagonal /></a>
                  <a className="underlined-link" href="mailto:mohammedsazeed2@gmail.com">Let's talk <Arrow diagonal /></a>
                </div>
              </div>
              <div className="hero-aside">
                <div className="hero-image"><img src="/headshot.png" alt="Portrait of Mohammed Sazeed" fetchPriority="high" /></div>
                <p className="image-caption"><span>FIG. 01</span> ENGINEER, ARCHITECT, PROBLEM SOLVER.</p>
                <div className="hero-aside-note"><span>BASED IN INDIA</span><strong>Working across cloud architecture, data engineering and enterprise logistics.</strong></div>
              </div>
            </div>
            <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>01 / SYSTEMS & STORIES</span><span className="hero-bottom-mark">↓</span></div>
          </div>
        </section>

        <section className="statement" aria-label="Working philosophy">
          <div className="layout-width statement-grid">
            <div className="section-index">A / THE APPROACH</div>
            <p>Good engineering isn't about adding more layers.<br /><em>It's about making every layer count.</em></p>
          </div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="layout-width">
            <div className="section-heading"><div><span className="section-index">B / SELECTED WORK</span><h2 id="work-title">Work that<br /><em>does the work.</em></h2></div><p>A selection of platforms, data systems and integrations. Clear roles, real constraints, and no inflated impact claims.</p></div>
            <div className="work-list">{work.map((project, index) => <WorkItem key={project.number} project={project} index={index} />)}</div>
          </div>
        </section>

        <section className="blueprint-section" aria-label="Data engineering approach">
          <div className="layout-width blueprint-grid">
            <div className="blueprint-copy">
              <span className="section-index">A CLOSER LOOK / DATA</span>
              <h2>From scattered signals to <em>a single source of understanding.</em></h2>
              <p>The work I enjoy most sits between software systems and business reality: making data consistent, traceable and useful without losing sight of the operational details.</p>
              <div className="blueprint-meta"><span>INPUT</span><strong>Business events, records, rules</strong><span>OUTPUT</span><strong>Reliable, reusable datasets</strong></div>
            </div>
            <div className="blueprint-figure"><PipelineIllustration /></div>
          </div>
        </section>

        <section id="expertise" className="expertise-section" aria-labelledby="expertise-title">
          <div className="layout-width">
            <div className="expertise-header"><span className="section-index">C / WHAT I BRING</span><h2 id="expertise-title">Depth over<br /><em>buzzwords.</em></h2></div>
            <div className="expertise-list">{specialties.map(s => <article className="expertise-item" key={s.n}><span>{s.n}</span><div><h3>{s.heading}</h3><p>{s.description}</p><small>{s.items}</small></div></article>)}</div>
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="layout-width about-grid">
            <div><span className="section-index">D / THE PERSON BEHIND THE SYSTEMS</span><h2 id="about-title">Curiosity.<br />Ownership.<br /><em>Follow-through.</em></h2></div>
            <div className="about-body">
              <p>I'm a cloud and data engineer at BizCloud Experts, working across logistics platforms, enterprise integrations, and production infrastructure. I spend my time in the details — from PostgreSQL transformations and CDC pipelines to serverless APIs, architecture reviews and incident resolution.</p>
              <p>My current focus includes ICAT's Universal Data Lake and the evolution of its analytics architecture. Earlier work spans Omni Logistics integrations and master-data engineering. I also build independent products to sharpen how I think about the end user.</p>
              <a href="/Mohammed_Sazeed_Resume.pdf" className="underlined-link" target="_blank" rel="noopener noreferrer">View résumé (existing edition) <Arrow diagonal /></a>
              <div className="credentials">
                <h3>Selected certifications</h3>
                {credentials.map(c => <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"><span>{c.issuer} · {c.label}</span><span>{c.date} <Arrow diagonal /></span></a>)}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="layout-width">
            <div className="contact-top"><span className="section-index">E / GET IN TOUCH</span><span>HAVE AN INTERESTING PROBLEM?</span></div>
            <h2 id="contact-title">Let's build<br /><em>something useful.</em></h2>
            <a className="contact-email" href={"mailto:" + email}>{email} <Arrow diagonal /></a>
            <div className="contact-footer"><span>MOHAMMED SAZEED © 2026</span><span>CLOUD / DATA / ENGINEERING</span><div><a href={linkedin} target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><a href="https://github.com/mohammedsazeed" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="#top">BACK TO TOP ↑</a></div></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
