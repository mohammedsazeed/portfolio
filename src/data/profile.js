export const profile = {
  name: "Mohammed Sazeed",
  title: "AWS Solutions Architect Professional | Cloud & AI Engineer",
  tagline:
    "I design and deliver cloud-native, event-driven solutions that scale to 100K+ daily events at 99.7%+ uptime.",
  email: "mohammedsazeed2@gmail.com",
  phone: "+91-8686286289",
  location: "Hyderabad, India",
  avatar: "/headshot.png",
  banner: "/banner/linkedin-banner.png",
  socials: {
    linkedin:
      "https://www.linkedin.com/in/mohammed-sazeed-a2b209165/",
  },
  about: `AWS-certified Cloud & AI Engineer with 3.5+ years designing production-grade serverless systems, data pipelines, and AI/ML integrations on AWS. I've built infrastructure processing 100K+ daily events at 99.7%+ uptime, reduced cloud costs by 35%, and led zero-downtime migrations across 15+ microservices. Passionate about clean architecture, event-driven design, and turning complex business problems into reliable, scalable solutions.`,
  relocation: "Open to relocation to Germany · Eligible for EU Blue Card (IT Specialist)",
};

export const skills = [
  // Languages & Scripting
  { name: "Python", level: 95, category: "Languages" },
  { name: "PySpark", level: 80, category: "Languages" },
  { name: "Node.js", level: 85, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "Bash / Shell", level: 78, category: "Languages" },
  { name: "AWS CLI & SDKs", level: 85, category: "Languages" },

  // Cloud Compute & Serverless
  { name: "AWS Lambda", level: 95, category: "Cloud" },
  { name: "EC2", level: 82, category: "Cloud" },
  { name: "API Gateway", level: 90, category: "Cloud" },
  { name: "Step Functions", level: 88, category: "Cloud" },
  { name: "Elastic Load Balancer", level: 80, category: "Cloud" },
  { name: "EventBridge", level: 90, category: "Cloud" },
  { name: "S3 / SQS / SNS", level: 92, category: "Cloud" },
  { name: "Kinesis", level: 78, category: "Cloud" },

  // Databases & Data Warehouse
  { name: "DynamoDB", level: 90, category: "Databases" },
  { name: "Aurora Serverless v2", level: 88, category: "Databases" },
  { name: "RDS (PostgreSQL/MySQL)", level: 85, category: "Databases" },
  { name: "Redshift", level: 80, category: "Databases" },
  { name: "Athena", level: 75, category: "Databases" },

  // Data Engineering
  { name: "AWS Glue / EMR", level: 85, category: "Data" },
  { name: "AWS DMS", level: 85, category: "Data" },
  { name: "ETL Pipelines", level: 88, category: "Data" },
  { name: "Data Lakes / S3 Parquet", level: 85, category: "Data" },
  { name: "Real-time Streaming", level: 80, category: "Data" },

  // Infrastructure as Code
  { name: "Terraform", level: 82, category: "DevOps" },
  { name: "AWS SAM", level: 85, category: "DevOps" },
  { name: "CloudFormation", level: 80, category: "DevOps" },

  // DevOps & CI/CD
  { name: "GitHub Actions", level: 82, category: "DevOps" },
  { name: "Jenkins", level: 75, category: "DevOps" },
  { name: "CodePipeline / CodeBuild", level: 78, category: "DevOps" },
  { name: "Flyway (DB Migrations)", level: 80, category: "DevOps" },
  { name: "Docker", level: 78, category: "DevOps" },
  { name: "Kubernetes / EKS", level: 60, category: "DevOps" },

  // Monitoring & Security
  { name: "CloudWatch / CloudTrail", level: 88, category: "Security" },
  { name: "IAM / Cognito", level: 88, category: "Security" },
  { name: "VPC / VPN", level: 82, category: "Security" },
  { name: "WAF / KMS", level: 75, category: "Security" },
  { name: "Direct Connect", level: 70, category: "Security" },

  // AI/ML
  { name: "AWS Bedrock (Claude, Nova)", level: 85, category: "AI/ML" },
  { name: "AWS Textract", level: 85, category: "AI/ML" },
  { name: "Prompt Engineering", level: 82, category: "AI/ML" },
  { name: "LLM Validation Patterns", level: 80, category: "AI/ML" },

  // Architecture & Practices
  { name: "Microservices", level: 88, category: "Architecture" },
  { name: "Event-Driven Design", level: 90, category: "Architecture" },
  { name: "Blue/Green Deployments", level: 85, category: "Architecture" },
  { name: "Disaster Recovery", level: 80, category: "Architecture" },
  { name: "Agile / Scrum", level: 85, category: "Architecture" },
];

export const certifications = [
  {
    name: "AWS Solutions Architect – Professional",
    period: "Jan 2026 – Jan 2029",
    badge: "/certs/sa-professional.png",
    url: "https://www.credly.com/badges/4fa07386-a5e3-4d66-9b66-05eb532a7b01/public_url",
  },
  {
    name: "AWS Data Analytics – Specialty",
    period: "Sep 2024 – Sep 2027",
    badge: "/certs/data-analytics.png",
    url: "https://www.credly.com/badges/f40ccb1d-0371-419d-8304-f612c5bb5791/linked_in_profile",
  },
  {
    name: "AWS Solutions Architect – Associate",
    period: "Jan 2023 – Jan 2029",
    badge: "/certs/sa-associate.png",
    url: "https://www.credly.com/badges/8c73cc28-175f-4659-a14c-50c16f17ce50/linked_in_profile",
  },
  {
    name: "AWS Generative AI Essentials",
    period: "2024",
    badge: "/certs/gen-ai.png",
    url: "https://www.credly.com/badges/640da6d4-ce0d-427c-ae43-d5b6337ef05c/public_url",
  },
];

export const experience = [
  {
    role: "Software Engineer – Cloud & AI Infrastructure",
    company: "BizCloud Experts",
    period: "Sep 2022 – Present",
    location: "Hyderabad, India",
    highlights: [
      {
        project: "GTS AI Operations Platform – Cloud & AI Lead",
        period: "Jan 2026 – Present",
        stack: "Python, AWS SAM, Lambda, Aurora PostgreSQL, Bedrock, Textract, Cognito",
        points: [
          "Architected serverless infrastructure supporting 5 divisions and 200+ employees — 10K+ weekly transactions at 99.9% uptime",
          "Reduced infra costs 35% via Aurora auto-scaling and S3 event-driven Lambda workflows",
          "Cut p99 latency from 2.5s to 800ms (68%) through cold-start tuning and PostgreSQL index optimisation",
          "Built end-to-end LLM document processing pipeline using Bedrock + Textract, eliminating 20 hrs/week manual effort",
          "Designed 40+ RESTful API endpoints with Cognito JWT auth and role-based access control",
        ],
      },
      {
        project: "ICAT Logistics – Cloud Optimisation Lead",
        period: "Jun 2025 – Jan 2026",
        stack: "Python, Lambda, DynamoDB, EventBridge, DMS, S3, Terraform, Snowflake",
        points: [
          "Led 30-hour zero-downtime production cutover across 15+ microservices — zero data loss",
          "Dropped pipeline error rate from 8% to under 0.5% by resolving 12 critical defects",
          "Reduced analytics query latency 45% via DMS table partitioning and S3 Parquet compression",
        ],
      },
      {
        project: "Omni Logistics – Backend & Data Engineer",
        period: "Jan 2023 – Jun 2025",
        stack: "Node.js, Python, Lambda, DynamoDB, Redshift, Glue, Terraform",
        points: [
          "Engineered event-driven backend processing 100K+ daily shipment updates at 99.7% uptime",
          "Integrated 15+ REST APIs with B2B EDI systems; resolved 40+ production incidents (MTTR < 1hr)",
          "Reduced cloud costs 20% through Terraform-managed serverless infra and right-sizing",
        ],
      },
    ],
  },
  {
    role: "Software Engineer (Contract)",
    company: "RNDC",
    period: "Feb 2025 – Apr 2025",
    location: "",
    highlights: [
      {
        project: "EDI Pipeline",
        period: "Feb – Apr 2025",
        stack: "Python, AWS Lambda, S3, B2B EDI",
        points: [
          "Delivered EDI-to-JSON Lambda pipeline for 10K+ daily B2B transactions at 99.5% success rate",
          "Cut processing latency from 3s to under 1s (67% improvement)",
        ],
      },
    ],
  },
];

export const education = {
  degree: "B.Tech, Mechanical Engineering",
  school: "Kakatiya Institute of Technology and Science, Warangal",
  period: "Jun 2016 – Apr 2020",
};

export const stats = [
  { number: "3.5+", label: "Years Experience" },
  { number: "100K+", label: "Daily Events Processed" },
  { number: "99.7%", label: "Uptime Achieved" },
  { number: "35%", label: "Cost Reduction" },
];
