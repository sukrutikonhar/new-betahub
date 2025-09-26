import { Bot, Zap, BookOpen, Code, Settings, BarChart3, ArrowRight } from 'lucide-react';

export default function AgentsPage() {
  const agentCategories = [
    {
      title: "Process Acceleration Agents",
      icon: <Zap className="w-8 h-8" />,
      agents: [
        {
          name: "ProcessFlow AI",
          description: "Revolutionary workflow automation that adapts to your business processes in real-time.",
          tags: ["Workflow Automation", "Process Optimization", "Real-time Monitoring"],
          status: "Available"
        },
        {
          name: "TestForge AI",
          description: "Automated testing and quality assurance with CI/CD integration.",
          tags: ["Automated Testing", "Quality Assurance", "CI/CD Integration"],
          status: "Available"
        },
        {
          name: "Fit-Gap AI",
          description: "Intelligent analysis and optimization of business process gaps.",
          tags: ["Process Analysis", "Gap Identification", "Optimization"],
          status: "Coming Soon"
        },
        {
          name: "Config AI",
          description: "Automated system configuration and deployment management.",
          tags: ["Configuration Management", "Deployment", "System Setup"],
          status: "Beta"
        }
      ]
    },
    {
      title: "Knowledge & Training Agents",
      icon: <BookOpen className="w-8 h-8" />,
      agents: [
        {
          name: "SkillForgeX",
          description: "Comprehensive training and skill development platform for enterprise teams.",
          tags: ["Training & Adoption", "Learning", "Multi-format Content"],
          status: "Available"
        },
        {
          name: "RetrievX",
          description: "Advanced knowledge management and intelligent search capabilities.",
          tags: ["Knowledge Management", "Search & Discovery", "Document Intelligence"],
          status: "Available"
        },
        {
          name: "HelpDeskX",
          description: "Intelligent customer support and help desk automation.",
          tags: ["Customer Support", "Ticket Management", "Automated Responses"],
          status: "Available"
        }
      ]
    },
    {
      title: "Code & Technical Intelligence Agents",
      icon: <Code className="w-8 h-8" />,
      agents: [
        {
          name: "CodeDocIQ",
          description: "Automated code documentation and technical writing assistance.",
          tags: ["Code Documentation", "Technical Writing", "API Documentation"],
          status: "Available"
        },
        {
          name: "ResolvIQ",
          description: "Intelligent issue resolution and debugging assistance.",
          tags: ["Issue Resolution", "Debugging", "Technical Support"],
          status: "Available"
        },
        {
          name: "FinOptima IQ",
          description: "Financial optimization and analysis for enterprise systems.",
          tags: ["Financial Analysis", "Cost Optimization", "Budget Planning"],
          status: "Coming Soon"
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full section-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-strong-blue via-strong-blue to-core-purple opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-bright-pink opacity-20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-muted-purple opacity-20 rounded-full blur-xl"></div>
        </div>
        
        <div className="section-container section-padding-lg relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Your <span className="text-bright-pink">AI Workforce</span>
            </h1>
            <p className="text-xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
              Deploy intelligent agents that work 24/7 to automate processes, accelerate decisions, 
              and scale your enterprise operations across all departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-bright-pink text-white hover:bg-pink-600">
                Deploy Agents Now
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-strong-blue">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Categories */}
      {agentCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`w-full ${categoryIndex % 2 === 0 ? 'section-white' : 'section-soft-lavender'}`}>
          <div className="section-container section-padding">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  {category.icon}
                </div>
                <h2 className="text-4xl font-bold text-dark-gray">{category.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.agents.map((agent, agentIndex) => (
                <div key={agentIndex} className="card group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-dark-gray group-hover:text-core-purple transition-colors">
                      {agent.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      agent.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : agent.status === 'Beta'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  
                  <p className="text-muted-purple mb-6 leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {agent.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-soft-lavender text-muted-purple text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full btn-primary group-hover:bg-bright-pink group-hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Agent Spotlight */}
      <section className="w-full section-strong-blue">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Agent Spotlight</h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              See how our most popular agents are transforming enterprise operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">ProcessFlow AI v2.0</h3>
                  <p className="text-bright-pink">Most Popular Agent</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-bright-pink" />
                  <span className="text-white">95% reduction in manual process time</span>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-bright-pink" />
                  <span className="text-white">Real-time workflow adaptation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-bright-pink" />
                  <span className="text-white">Enterprise-grade security</span>
                </div>
              </div>
              
              <button className="btn-primary bg-bright-pink text-white hover:bg-pink-600 w-full">
                Deploy ProcessFlow AI
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Customer Success Story</h4>
                <p className="text-white/80 text-sm mb-4">
                  "ProcessFlow AI reduced our invoice processing time from 3 days to 2 hours. 
                  The ROI was visible within the first month."
                </p>
                <p className="text-bright-pink text-sm font-medium">- Sarah Chen, CFO, TechCorp</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-2">Integration Ready</h4>
                <p className="text-white/80 text-sm">
                  Seamlessly integrates with SAP, Oracle, Microsoft Dynamics, and 50+ other enterprise systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full section-gradient-primary">
        <div className="section-container section-padding">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Deploy Your AI Workforce?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Start with our most popular agents or build custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-core-purple hover:bg-soft-lavender">
                Start Free Trial
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-core-purple">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

