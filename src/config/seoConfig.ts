export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  "/": {
    title: "BetaHub - AI Agents for Enterprise Transformation | Autonomous AI Solutions",
    description: "Bridge the gap between AI vision and enterprise execution with BetaHub. Discover pre-built AI agents for workflow automation, knowledge management, and technical excellence. Transform your business with intelligent, scalable AI solutions.",
    keywords: "AI agents, enterprise AI, artificial intelligence, workflow automation, business automation, AI transformation, autonomous agents, ProcessFlow AI, SkillForgeX, CodeDocIQ, enterprise technology, AI solutions, intelligent automation, digital transformation",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/about": {
    title: "About BetaHub - Leading AI Innovation & Enterprise Solutions",
    description: "Meet the visionary team behind BetaHub. Learn about our mission to revolutionize enterprise operations with autonomous AI agents. Founded by industry experts with decades of experience in Microsoft, Amazon, and enterprise technology.",
    keywords: "about BetaHub, AI company, enterprise AI solutions, AI innovation, technology leadership, Manish Singh, Sudhie Siddautam, AI experts, enterprise transformation team",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/agents": {
    title: "AI Agents - ProcessFlow, SkillForgeX, CodeDocIQ | BetaHub",
    description: "Explore BetaHub's comprehensive suite of AI agents for enterprise: ProcessFlow AI for workflow automation, TestForge AI for QA, SkillForgeX for training, CodeDocIQ for documentation, and more. Pre-built solutions for immediate implementation.",
    keywords: "AI agents, ProcessFlow AI, TestForge AI, SkillForgeX, CodeDocIQ, RetrievX, HelpDeskX, ResolvIQ, FinOptima IQ, Fit-Gap AI, Config AI, workflow automation, QA automation, training agents, documentation agents",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/contact": {
    title: "Contact BetaHub - Get Started with AI Transformation Today",
    description: "Ready to transform your enterprise with AI? Contact BetaHub for a personalized consultation. Book a demo, schedule a call, or reach out to our team of AI experts. Let's turn your AI vision into measurable results.",
    keywords: "contact BetaHub, AI consultation, book demo, enterprise AI contact, AI solutions inquiry, schedule demo, get in touch, AI experts contact",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/gartner-2025": {
    title: "Meet BetaHub at Gartner IT Symposium 2025 Barcelona | Booth 308",
    description: 'Join BetaHub at Gartner IT Symposium XPO 2025 in Barcelona, November 10-13. Visit Booth 308 to explore AI agents, attend our session "Scaling beyond AI Pilot", and meet our expert team. Book a meeting today!',
    keywords: "Gartner IT Symposium 2025, Gartner Barcelona, AI conference, BetaHub Gartner, enterprise AI event, IT symposium, AI agents showcase, technology conference, Barcelona tech event",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/privacy-policy": {
    title: "Privacy Policy - BetaHub Data Protection & Privacy Rights",
    description: "Learn how BetaHub protects your personal information and privacy rights. Our comprehensive privacy policy covers data collection, usage, sharing, and your rights under GDPR and other privacy laws.",
    keywords: "privacy policy, data protection, GDPR, personal information, privacy rights, data security, BetaHub privacy, user privacy, data collection, privacy compliance",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/terms-of-service": {
    title: "Terms of Service - BetaHub Legal Terms & Conditions",
    description: "Read BetaHub's Terms of Service to understand your rights and obligations when using our AI agent platform. Comprehensive legal terms covering service usage, intellectual property, and user responsibilities.",
    keywords: "terms of service, legal terms, user agreement, service conditions, BetaHub terms, legal compliance, user obligations, service usage, terms and conditions",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/cookie-policy": {
    title: "Cookie Policy - BetaHub Cookie Usage & Management",
    description: "Learn about BetaHub's use of cookies and similar technologies. Our cookie policy explains what cookies we use, how we use them, and how you can manage your cookie preferences.",
    keywords: "cookie policy, cookies, tracking, website analytics, cookie management, BetaHub cookies, privacy settings, cookie consent, web tracking",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
};

export function getSEOConfig(pathname: string): PageSEO {
  return seoConfig[pathname] || seoConfig["/"];
}
