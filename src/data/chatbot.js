export const botProfile = {
  name: "Nimbus",
  tagline: "Sazeed's Cloud Assistant",
  greeting: "Hey! I'm Nimbus ☁️ — Sazeed's AI assistant. Ask me anything about his experience, projects, skills, or certifications.",
};

export const knowledgeBase = [
  {
    keywords: ["who", "about", "introduce", "tell me about", "yourself", "sazeed", "background"],
    answer: [
      { type: "text", content: "Mohammed Sazeed is an AWS-certified Cloud & AI Engineer with 3.5+ years of experience." },
      { type: "heading", content: "Highlights" },
      { type: "list", items: [
        "Production-grade serverless systems & data pipelines on AWS",
        "100K+ daily events processed at 99.7%+ uptime",
        "35% cloud cost reduction through architecture optimization",
        "Zero-downtime migrations across 15+ microservices",
      ]},
    ],
  },
  {
    keywords: ["experience", "years", "work history", "career", "how long"],
    answer: [
      { type: "heading", content: "Work Experience — 3.5+ Years" },
      { type: "list", items: [
        "🏢 BizCloud Experts (Sep 2022–Present) — Software Engineer, Cloud & AI",
        "→ GTS AI Operations Platform — Cloud & AI Lead",
        "→ ICAT Logistics — Cloud Optimisation Lead",
        "→ Omni Logistics — Backend & Data Engineer",
        "📋 RNDC (Feb–Apr 2025) — Contract, EDI Pipeline",
      ]},
    ],
  },
  {
    keywords: ["gts", "current", "ai operations", "platform"],
    answer: [
      { type: "heading", content: "GTS AI Operations Platform" },
      { type: "text", content: "Jan 2026–Present · Python, AWS SAM, Lambda, Aurora, Bedrock, Textract, Cognito" },
      { type: "list", items: [
        "5 divisions, 200+ employees, 40+ API endpoints",
        "99.9% uptime, 10K+ weekly transactions",
        "35% cost reduction via Aurora auto-scaling",
        "p99 latency: 2.5s → 800ms (68% improvement)",
        "LLM doc processing with Bedrock + Textract — saved 20 hrs/week",
      ]},
    ],
  },
  {
    keywords: ["omni", "logistics", "microservice", "backend", "edi"],
    answer: [
      { type: "heading", content: "Omni Logistics (Jan 2023–Jun 2025)" },
      { type: "text", content: "Built 53+ serverless microservices for B2B EDI integrations." },
      { type: "heading", content: "Key Clients" },
      { type: "list", items: [
        "Toyota, Lenovo, Bio-Rad, Danaher",
        "Cogistics, Collins & Goodrich (consolidated invoicing)",
        "FourKites, Project44 (real-time tracking)",
      ]},
      { type: "heading", content: "Impact" },
      { type: "list", items: [
        "100K+ daily shipment updates at 99.7% uptime",
        "15+ REST API integrations with B2B EDI systems",
        "40+ production incidents resolved (MTTR < 1hr)",
        "20% cloud cost reduction via Terraform right-sizing",
      ]},
    ],
  },
  {
    keywords: ["icat", "migration", "snowflake", "data lake"],
    answer: [
      { type: "heading", content: "ICAT Logistics (Jun 2025–Jan 2026)" },
      { type: "text", content: "Led cloud optimisation and zero-downtime migration." },
      { type: "list", items: [
        "30-hour zero-downtime cutover across 15+ microservices",
        "Zero data loss during production migration",
        "Pipeline error rate: 8% → 0.5%",
        "Query latency reduced 45% via DMS partitioning + S3 Parquet",
      ]},
    ],
  },
  {
    keywords: ["skill", "tech", "stack", "language", "tools", "what do you use", "technologies"],
    answer: [
      { type: "heading", content: "Tech Stack" },
      { type: "list", items: [
        "💻 Languages — Python, Node.js, SQL",
        "☁️ Cloud — Lambda, EventBridge, Step Functions, DynamoDB, S3/SQS/SNS",
        "📊 Data — Glue/Spark, Redshift/Snowflake, DMS",
        "⚙️ DevOps — Terraform, GitHub Actions CI/CD, Docker",
        "🤖 AI/ML — Bedrock, Textract",
      ]},
    ],
  },
  {
    keywords: ["cert", "certification", "aws certified", "professional", "associate"],
    answer: [
      { type: "heading", content: "AWS Certifications" },
      { type: "list", items: [
        "🏆 Solutions Architect — Professional (2026–2029)",
        "📊 Data Analytics — Specialty (2024–2027)",
        "☁️ Solutions Architect — Associate (2023–2029)",
        "🤖 Generative AI Essentials (2024)",
      ]},
    ],
  },
  {
    keywords: ["kiro", "mcp", "ide", "ai development", "agent", "hook"],
    answer: [
      { type: "heading", content: "AI-Powered Dev with Kiro IDE" },
      { type: "text", content: "Set up MCP servers and custom hooks for autonomous AI development on the GTS project." },
      { type: "list", items: [
        "🔌 Playwright MCP — AI navigates frontend autonomously",
        "🛡️ DB Write Guard — blocks destructive SQL without permission",
        "📡 Bastion SSH Tunnel — queries Aurora PostgreSQL in private VPC",
        "🔄 OpenAPI Sync — auto-reminds to update API spec",
        "📋 Schema Migration — auto-updates database-schema.json",
        "🧭 Steering Files — project context always in AI context",
      ]},
    ],
  },
  {
    keywords: ["education", "degree", "college", "university", "school"],
    answer: [
      { type: "heading", content: "Education" },
      { type: "list", items: [
        "🎓 B.Tech, Mechanical Engineering",
        "Kakatiya Institute of Technology and Science, Warangal",
        "Jun 2016 – Apr 2020",
      ]},
      { type: "text", content: "Transitioned into cloud engineering and has been building on AWS ever since." },
    ],
  },
  {
    keywords: ["contact", "email", "phone", "reach", "hire", "available"],
    answer: [
      { type: "heading", content: "Get in Touch" },
      { type: "text", content: "Sazeed is currently available for opportunities." },
      { type: "list", items: [
        "📧 mohammedsazeed2@gmail.com",
        "📱 +91-8686286289",
        "🔗 linkedin.com/in/mohammed-sazeed-a2b209165",
      ]},
    ],
  },
  {
    keywords: ["project", "portfolio", "built", "what have you built"],
    answer: [
      { type: "heading", content: "Key Projects" },
      { type: "list", items: [
        "1. GTS AI Operations Platform — serverless infra, Bedrock + Textract",
        "2. ICAT Logistics — zero-downtime Snowflake migration",
        "3. Omni B2B EDI & Invoicing — 53+ microservices (Toyota, Lenovo, Bio-Rad)",
        "4. Omni Real-Time Tracking — 100K+ daily events via pub/sub",
        "5. Omni Data Warehouse — Redshift + Glue ETL pipelines",
        "6. Omni WMS & Client Integrations — warehouse management APIs",
      ]},
    ],
  },
  {
    keywords: ["cost", "saving", "reduce", "optimization", "optimise"],
    answer: [
      { type: "heading", content: "Cost Optimization Track Record" },
      { type: "list", items: [
        "35% infra cost reduction on GTS — Aurora auto-scaling + S3 event-driven Lambda",
        "20% cloud cost reduction at Omni — Terraform-managed serverless + right-sizing",
      ]},
    ],
  },
  {
    keywords: ["uptime", "reliability", "incident", "production"],
    answer: [
      { type: "heading", content: "Reliability & Uptime" },
      { type: "list", items: [
        "99.9% uptime on GTS AI Operations Platform",
        "99.7% uptime on Omni Logistics backend",
        "40+ production incidents resolved at Omni (MTTR < 1hr)",
        "Pipeline error rate at ICAT: 8% → 0.5%",
      ]},
    ],
  },
  {
    keywords: ["recommendation", "testimonial", "review", "what do people say"],
    answer: [
      { type: "heading", content: "Client Testimonials" },
      { type: "text", content: "Alejandra Salaices (B2B Integration Project Leader, Omni):" },
      { type: "quote", content: "A key player in our AWS-API integrations, consistently delivering outstanding results while maintaining a collaborative attitude." },
      { type: "text", content: "Sally Trejo (Director of Integrations, ICAT Logistics):" },
      { type: "quote", content: "An exceptional AWS DevOps Developer who consistently delivers high-impact solutions with precision and innovation." },
    ],
  },
];

export const suggestedQuestions = [
  "Who is Sazeed?",
  "What's his tech stack?",
  "Tell me about his projects",
  "AWS certifications?",
  "Work experience",
  "How to contact him?",
];

export const fallbackAnswer = [
  { type: "text", content: "I don't have specific info on that." },
  { type: "heading", content: "Try asking about" },
  { type: "list", items: [
    "Projects & architecture",
    "Skills & tech stack",
    "AWS certifications",
    "Work experience",
    "Kiro IDE & MCP setup",
    "Contact info",
  ]},
];
