import { motion } from "framer-motion";

const items = [
  "AWS Lambda", "Python", "Terraform", "Serverless", "EventBridge",
  "DynamoDB", "Bedrock", "Node.js", "Step Functions", "Glue",
  "Redshift", "Snowflake", "CI/CD", "Docker", "REST APIs",
  "AWS Lambda", "Python", "Terraform", "Serverless", "EventBridge",
  "DynamoDB", "Bedrock", "Node.js", "Step Functions", "Glue",
  "Redshift", "Snowflake", "CI/CD", "Docker", "REST APIs",
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <motion.div
        className="marquee-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="sep" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
