export const projects = [
  {
    title: "GTS AI Operations Platform",
    description:
      "Serverless cloud infrastructure supporting 5 divisions, 200+ employees. 40+ API endpoints, LLM document processing with Bedrock + Textract, 99.9% uptime.",
    tags: ["Python", "AWS Lambda", "Bedrock", "Textract", "Aurora", "Cognito"],
    gradient: "linear-gradient(135deg, #6c63ff, #e563ff)",
    image: "/projects/gts-architecture.png",
  },
  {
    title: "ICAT Logistics Data Platform",
    description:
      "Multi-source data lake migration to Snowflake. 30-hour zero-downtime cutover across 15+ microservices. Reduced query latency 45%.",
    tags: ["PySpark", "AWS Glue", "DMS", "Snowflake", "Terraform", "EventBridge"],
    gradient: "linear-gradient(135deg, #63ffd9, #6c63ff)",
    image: "/projects/icat-architecture.png",
  },
  {
    title: "Omni B2B EDI & Invoicing Engine",
    description:
      "Built 53+ serverless microservices powering B2B EDI integrations for clients like Toyota, Lenovo, Bio-Rad, and Danaher. Consolidated invoicing across Cogistics, Collins & Goodrich with automated cost finalisation.",
    tags: ["Node.js", "Lambda", "DynamoDB", "SQS", "S3", "EDI/X12"],
    gradient: "linear-gradient(135deg, #ff6363, #ff63d9)",
    image: "/projects/omni-edi-architecture.png",
  },
  {
    title: "Omni Real-Time Tracking & Events",
    description:
      "Event-driven pub/sub system processing 100K+ daily shipment updates from FourKites, Project44, and carrier APIs. Real-time DynamoDB streams feeding Redshift analytics.",
    tags: ["Node.js", "EventBridge", "DynamoDB Streams", "SQS", "Redshift", "Batch"],
    gradient: "linear-gradient(135deg, #ffd963, #ff6363)",
    image: "/projects/omni-architecture.png",
  },
  {
    title: "Omni Data Warehouse & Analytics",
    description:
      "Redshift-based warehouse ingesting data from 15+ sources via Glue ETL pipelines. Customer data pipelines, Salesforce sync, and automated reporting reduced turnaround from days to minutes.",
    tags: ["Redshift", "AWS Glue", "PySpark", "S3", "Salesforce", "QuickSight"],
    gradient: "linear-gradient(135deg, #63b3ff, #6c63ff)",
    image: "/projects/datawarehouse-architecture.png",
  },
  {
    title: "Omni WMS & Client Integrations",
    description:
      "Warehouse Management System APIs handling order lifecycle — ASN, receipts, status updates. Plus dedicated backends for Toyota, Lenovo, NetSuite, and CargoBase integrations.",
    tags: ["Node.js", "Lambda", "API Gateway", "DynamoDB", "Step Functions", "S3"],
    gradient: "linear-gradient(135deg, #ff63b3, #ffd963)",
    image: "/projects/omni-wms-architecture.png",
  },
];
