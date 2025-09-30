import { Bot, Zap, BookOpen, Code, Settings, BarChart3, ArrowRight, Users, Building, TrendingUp, Shield } from 'lucide-react';

export default function AgentsPage() {
  const agents = [
    // Process Acceleration Agents
    {
      name: "ProcessFlow AI",
      description: "Turn complex business requirements into streamlined BPMN workflows and actionable insights.",
      industries: ["Manufacturing", "Banking", "Insurance", "Healthcare"],
      teams: ["Business Analysts", "Process Owners", "IT Transformation"],
      category: "Process Acceleration",
      icon: <Zap className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "TestForge AI",
      description: "Accelerate testing cycles with AI-powered test case generation and automation.",
      industries: ["Technology", "Retail", "Financial Services", "Telecom"],
      teams: ["QA", "Product Engineering", "DevOps"],
      category: "Process Acceleration",
      icon: <Settings className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Fit-Gap AI",
      description: "Identify ERP gaps and align processes to maximize system efficiency.",
      industries: ["ERP-driven enterprises (Manufacturing, Distribution, Retail, Pharma)"],
      teams: ["ERP Implementation", "Consulting", "CIO Office"],
      category: "Process Acceleration",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Confg AI",
      description: "Simplify Dynamics 365 setup and automate workflows for faster CRM adoption.",
      industries: ["Professional Services", "Retail", "Financial Services"],
      teams: ["CRM Admins", "Sales Ops", "IT Transformation"],
      category: "Process Acceleration",
      icon: <Building className="w-6 h-6" />,
      color: "purple"
    },
    // Knowledge & Training Agents
    {
      name: "SkillForgeX",
      description: "Transform knowledge into engaging, interactive learning experiences.",
      industries: ["Education", "IT Services", "Consulting", "Healthcare"],
      teams: ["HR", "L&D", "Onboarding", "Training Managers"],
      category: "Knowledge & Training",
      icon: <BookOpen className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "RetrievX",
      description: "Deliver instant, context-aware answers with AI-powered knowledge retrieval.",
      industries: ["Legal", "Healthcare", "Consulting", "Support Services"],
      teams: ["Knowledge Management", "AI Ops", "Research", "IT Support"],
      category: "Knowledge & Training",
      icon: <Bot className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "HelpDeskX",
      description: "Automate ticketing, incident management, and support with AI-driven efficiency.",
      industries: ["SaaS", "Telecom", "Retail", "IT Services"],
      teams: ["IT Helpdesk", "Customer Service", "Support Operations"],
      category: "Knowledge & Training",
      icon: <Users className="w-6 h-6" />,
      color: "pink"
    },
    // Code & Technical Intelligence Agents
    {
      name: "CodeDocIQ",
      description: "Auto-generate documentation and boost developer productivity instantly.",
      industries: ["Software Development", "IT Services", "Startups"],
      teams: ["Developers", "Engineering", "DevOps", "Documentation Teams"],
      category: "Code & Technical",
      icon: <Code className="w-6 h-6" />,
      color: "blue"
    },
    {
      name: "ResolvIQ",
      description: "Turn data into competitive insights with AI-powered market intelligence.",
      industries: ["Consulting", "Financial Services", "Tech", "Market Research"],
      teams: ["Strategy", "Product Marketing", "Business Analysts"],
      category: "Code & Technical",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "blue"
    },
    {
      name: "FinOptima IQ",
      description: "Optimize cloud spend and track budgets with AI-driven financial intelligence.",
      industries: ["SaaS", "Cloud Providers", "FinTech", "Enterprises"],
      teams: ["Finance", "CloudOps", "IT Infrastructure", "CIO Office"],
      category: "Code & Technical",
      icon: <Shield className="w-6 h-6" />,
      color: "blue"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #F0D7F9 20%, #F8E4FC 40%, #FCF0FF 60%, #FEF8FF 80%, #FFFFFF 100%)' }}>
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #A96BF5 50%, #8116EC 100%)', opacity: 0.2 }}></div>
          <div className="absolute top-32 left-10 w-80 h-80 rounded-full blur-2xl" style={{ background: 'linear-gradient(135deg, #A96BF5 0%, #DD2BC2 50%, #E8CAF7 100%)', opacity: 0.15 }}></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, #8116EC 0%, #A96BF5 50%, #E8CAF7 100%)', opacity: 0.1 }}></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full blur-2xl animate-pulse" style={{ background: 'linear-gradient(135deg, #DD2BC2 0%, #A96BF5 50%, #E8CAF7 100%)', opacity: 0.15 }}></div>
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full animate-bounce" style={{ background: '#A96BF5', opacity: 0.6 }}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 rounded-full animate-bounce" style={{ background: '#DD2BC2', opacity: 0.7, animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#E8CAF7', opacity: 0.5, animationDelay: '2s' }}></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gray-800">Discover a suite of</span>
              <span className="bg-gradient-to-r from-#A96BF5 via-#8116EC to-#DD2BC2 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #A96BF5 0%, #8116EC 50%, #DD2BC2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> real agents</span><br />
              <span className="text-gray-800">delivering</span>
              <span className="bg-gradient-to-r from-#DD2BC2 via-#A96BF5 to-#8116EC bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #DD2BC2 0%, #A96BF5 50%, #8116EC 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> real results</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Each agent is designed to solve specific business challenges. Explore our catalog, pick the agents that match your needs, and configure them to work the way you do.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #8116EC 0%, #A96BF5 100%)' }}>
                <span>Explore Agents</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group border-2 border-purple-500 text-purple-700 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                <span>Book a Demo</span>
                <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Agents */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
              Why Choose Our Agents?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-muted-purple/10 to-muted-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-muted-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Instant Value</h3>
              <p className="text-lg" style={{ color: '#60697b' }}>
                Pre-built and ready to deploy, so you can start fast.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-bright-pink/10 to-bright-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-bright-pink" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Fully Configurable</h3>
              <p className="text-lg" style={{ color: '#60697b' }}>
                Adapt each agent to fit your workflows, systems, and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-muted-purple/10 to-bright-pink/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-muted-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Proven Impact</h3>
              <p className="text-lg" style={{ color: '#60697b' }}>
                Not concepts, but tested agents delivering measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All AI Agents */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
              Our AI Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive suite of AI agents, each designed to solve specific business challenges and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-8">
            {agents.map((agent, agentIndex) => {
              const isEven = agentIndex % 2 === 0;

              return (
                <div key={agentIndex} className={`group bg-white rounded-3xl p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${isEven ? 'border-2 border-muted-purple/20 hover:border-muted-purple/40' : 'border-2 border-bright-pink/20 hover:border-bright-pink/40'}`}>
                  {/* Background decorative elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${isEven ? 'from-muted-purple/5 to-bright-pink/5' : 'from-bright-pink/5 to-muted-purple/5'} rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500`}></div>
                    <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br ${isEven ? 'from-bright-pink/5 to-muted-purple/5' : 'from-muted-purple/5 to-bright-pink/5'} rounded-full blur-2xl translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500`}></div>
                  </div>


                  {/* Enhanced Category Badge */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${isEven ? 'bg-gradient-to-r from-muted-purple/20 to-muted-purple/10 text-muted-purple border-2 border-muted-purple/30' : 'bg-gradient-to-r from-bright-pink/20 to-bright-pink/10 text-bright-pink border-2 border-bright-pink/30'} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <div className={`w-2 h-2 rounded-full ${isEven ? 'bg-muted-purple' : 'bg-bright-pink'} animate-pulse`}></div>
                      <span className="uppercase tracking-wide">{agent.category}</span>
                    </div>
                  </div>

                  {/* Agent Info with enhanced typography */}
                  <div className="relative z-10 mb-8">
                    <h3 className={`text-2xl font-bold mb-4 group-hover:${isEven ? 'text-bright-pink' : 'text-muted-purple'} transition-colors duration-300`} style={{ color: '#343f52' }}>
                      {agent.name}
                    </h3>

                    <p className="text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300" style={{ color: '#60697b' }}>
                      {agent.description}
                    </p>
                  </div>

                  {/* Workflows Section with alternating colors */}
                  <div className="mb-6">
                    <h4 className={`text-xs font-bold mb-4 ${isEven ? 'text-muted-purple' : 'text-bright-pink'} uppercase tracking-wide flex items-center gap-2`}>
                      <div className={`w-2 h-2 rounded-full ${isEven ? 'bg-muted-purple' : 'bg-bright-pink'}`}></div>
                      Workflows
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.industries.map((industry, index) => (
                        <span key={index} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isEven ? 'bg-muted-purple/10 text-muted-purple hover:bg-muted-purple/20' : 'bg-bright-pink/10 text-bright-pink hover:bg-bright-pink/20'} transition-all duration-300 group-hover:shadow-sm border ${isEven ? 'border-muted-purple/20' : 'border-bright-pink/20'}`}>
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Teams Section with alternating colors */}
                  <div className="mb-8">
                    <h4 className={`text-xs font-bold mb-4 ${isEven ? 'text-bright-pink' : 'text-muted-purple'} uppercase tracking-wide flex items-center gap-2`}>
                      <div className={`w-2 h-2 rounded-full ${isEven ? 'bg-bright-pink' : 'bg-muted-purple'}`}></div>
                      Teams
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.teams.map((team, index) => (
                        <span key={index} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${isEven ? 'bg-bright-pink/10 text-bright-pink hover:bg-bright-pink/20' : 'bg-muted-purple/10 text-muted-purple hover:bg-muted-purple/20'} transition-all duration-300 group-hover:shadow-sm border ${isEven ? 'border-bright-pink/20' : 'border-muted-purple/20'}`}>
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <button className="w-full py-3 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm text-white hover:shadow-lg group-hover:shadow-xl group-hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #8116EC 0%, #A96BF5 100%)' }}>
                    <span>Deploy Agent</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Subtle border glow on hover */}
                  <div className={`absolute inset-0 rounded-3xl border border-transparent group-hover:${isEven ? 'border-muted-purple/20' : 'border-bright-pink/20'} transition-all duration-500 pointer-events-none`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-12 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #9B59B6 50%, #E8CAF7 100%)' }}>
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Deploy Your AI Workforce?
                </h2>
                <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Start with our most popular agents or build custom solutions tailored to your specific needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="group bg-white text-purple-700 px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                  <button className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center">
                    <span>Schedule Demo</span>
                    <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}