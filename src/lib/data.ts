export const projects = [
  {
    slug: "ai-document-analyzer",
    title: "AI Document Analyzer",
    shortDescription: "Automated OCR and data extraction system that reduces manual processing time by 80%.",
    description: "Built a microservices-based system to extract structured data from unstructured scanned documents using OCR and LLMs. The system processes thousands of documents per day with high reliability.",
    problem: "The client was manually reviewing thousands of scanned invoices and receipts, leading to human errors and massive delays in supply chain processing.",
    solution: "Developed an automated pipeline that ingests PDFs, runs them through OCR, and uses OpenAI's API to extract key fields (Date, Total, Vendor, line items) into a structured Postgres database.",
    architecture: "Next.js frontend for uploading and viewing results. FastAPI backend handling the heavy lifting. Redis for queue management and PostgreSQL for final data storage. Dockerized for deployment.",
    challenges: "Handling rate limits from the OpenAI API and dealing with extremely poor-quality scans. Implemented exponential backoff and a pre-processing image enhancement step using OpenCV.",
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "OpenAI", "Docker"],
    impact: "Processed 10,000+ documents with 99% accuracy. Reduced manual entry time from 5 minutes per document to 10 seconds.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    slug: "scalable-ecommerce-api",
    title: "Scalable E-Commerce API",
    shortDescription: "High-performance backend API supporting real-time inventory management and secure payments.",
    description: "A robust backend service designed to power a modern e-commerce platform. Handles user authentication, product catalog, complex inventory logic, and payment processing.",
    problem: "Standard monolithic CMS systems were too slow for the client's flash-sale model, resulting in over-selling inventory during traffic spikes.",
    solution: "Architected a custom API using Node.js and Express. Used Redis for distributed locking during checkout to prevent race conditions on inventory.",
    architecture: "Node.js/Express API. MongoDB for product catalog due to flexible schemas. Redis for caching and locking. Stripe API for payments. Deployed on AWS EC2.",
    challenges: "Preventing race conditions during checkout (double-spending inventory). Solved by implementing Redis Distributed Locks and atomic database operations.",
    stack: ["Node.js", "Express", "Redis", "MongoDB", "Stripe API"],
    impact: "Handles 5,000+ concurrent requests securely. Successfully survived 3 major flash-sale events with zero downtime.",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    slug: "realtime-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    shortDescription: "A streaming data visualization platform tracking user metrics with websockets.",
    description: "An internal tool for marketing teams to track live website traffic, conversion funnels, and user geographic data across multiple active campaigns.",
    problem: "Marketing teams were relying on daily batched reports, meaning they couldn't adjust ad spend fast enough if a campaign was failing or succeeding rapidly.",
    solution: "Built a live dashboard using Next.js and WebSockets, taking streaming events from a Go microservice attached to a message broker.",
    architecture: "Go backend ingesting events into TimescaleDB (PostgreSQL). WebSocket server broadcasting aggregated metrics to a Next.js frontend using Recharts for visualization.",
    challenges: "Frontend performance was dropping due to too many DOM updates per second. Implemented requestAnimationFrame and data throttling on the client to ensure smooth 60fps rendering.",
    stack: ["Next.js", "Tailwind", "Go", "WebSockets", "TimescaleDB"],
    impact: "Sub-200ms latency on live data rendering. Enabled the marketing team to optimize ad spend in real-time, saving ~15% in daily budget.",
    demoUrl: "#",
    repoUrl: "#"
  }
];

export const experience = [
  {
    id: 1,
    role: "Backend Engineering Intern",
    company: "TechNova Solutions",
    period: "Jun 2023 - Dec 2023",
    description: "Optimized legacy database queries reducing load time by 30%. Developed internal REST APIs using Node.js and PostgreSQL for the HR team."
  },
  {
    id: 2,
    role: "Information Technology Student",
    company: "State University",
    period: "2020 - 2024",
    description: "Graduated with Cum Laude. Led the university coding club and won 2nd place at the National Hackathon 2023. Specialized in backend systems and cloud computing."
  }
];