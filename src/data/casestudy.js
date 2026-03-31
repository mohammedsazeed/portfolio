export const caseStudy = {
  title: "AI-Powered Development with Kiro IDE",
  subtitle: "How I gave an AI agent full autonomy over a production codebase",
  intro:
    "On the GTS AI Operations Platform, I set up Kiro IDE with MCP (Model Context Protocol) servers and custom hooks to give the AI agent direct access to the database, browser, and codebase — turning it into a true development partner.",
  sections: [
    {
      icon: "🔌",
      title: "MCP Server Setup",
      description:
        "Installed Playwright MCP server so the AI can navigate the frontend, click through flows, take screenshots, fill forms, and debug UI issues autonomously — all through a persistent browser profile that survives restarts.",
    },
    {
      icon: "🛡️",
      title: "DB Write Guard Hook",
      description:
        "Created a preToolUse hook that intercepts every shell command. If it detects SQL with INSERT, UPDATE, DELETE, or DDL statements, it forces the agent to ask for explicit permission. SELECT queries are auto-approved.",
    },
    {
      icon: "📡",
      title: "Bastion SSH Tunnel",
      description:
        "Wrote a db-query.sh script that SSHs into the bastion host and runs psql against Aurora PostgreSQL in a private VPC. The AI agent uses this to query production data, validate schema changes, and debug issues.",
    },
    {
      icon: "🔄",
      title: "OpenAPI Sync Hook",
      description:
        "A fileEdited hook watches backend Lambda handlers and frontend API services. When API-related files change, it reminds the agent to check if openapi.yaml needs updating — keeping the spec as the single source of truth.",
    },
    {
      icon: "📋",
      title: "Schema Migration Hook",
      description:
        "When new SQL migration files are created, a hook triggers the agent to read the migration and automatically update the database-schema.json reference file — no manual sync needed.",
    },
    {
      icon: "🧭",
      title: "Steering Files",
      description:
        "Project context and response rules are auto-included in every conversation via .kiro/steering/ files. The agent always knows the DB connection details, frontend routes, API spec location, and coding standards.",
    },
  ],
  outcome:
    "Result: The AI agent can autonomously navigate the app, query the database, write code, run tests, and keep documentation in sync — while guardrails prevent destructive operations without approval.",
};

export const testimonials = [
  {
    name: "Alejandra Salaices",
    role: "B2B Integration Project Leader",
    company: "Omni Logistics",
    quote:
      "I've seen firsthand his ability to handle multiple high-priority projects simultaneously without letting productivity dip. He was a key player in our AWS-API integrations, consistently delivering outstanding results while maintaining a collaborative attitude that kept the team's momentum high. Whether we were working on a complex integration or tight deadlines, he remained a professional partner and team player. I highly recommend him for any technical team looking for a developer who truly delivers.",
  },
  {
    name: "Sally Trejo",
    role: "Director of Integrations",
    company: "ICAT Logistics",
    quote:
      "An exceptional AWS DevOps Developer who consistently delivers high-impact solutions with both precision and innovation. His expertise in cloud architecture, CI/CD pipelines, and infrastructure as code has significantly improved deployment efficiency and system reliability across our projects. What truly sets him apart is his ability to collaborate across teams, communicate complex ideas clearly, and mentor others. He brings a strong sense of ownership and accountability to everything he does.",
  },
];
