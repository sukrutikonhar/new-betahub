import { ArrowRight, Bot, Target, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      expertise: "AI Strategy & Enterprise Leadership"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: "Multi-Agent Systems & Platform Architecture"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      expertise: "Machine Learning & Agent Intelligence"
    },
    {
      name: "James Park",
      role: "VP of Enterprise Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: "Enterprise Implementation & Customer Success"
    },
    {
      name: "Lisa Thompson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=face",
      expertise: "Product Strategy & User Experience"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      expertise: "Agent Development & System Integration"
    }
  ];

  const values = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agents First",
      description: "We're obsessed with intelligent agents that adapt, learn, and embed seamlessly into enterprise workflows."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Adoption Over Hype",
      description: "Success is not a mere demo. Success is when your entire organization uses agents every day."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact That Lasts",
      description: "From faster rollouts to better decisions, our mission is to make AI a long-term growth engine."
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #F0D7F9 20%, #F8E4FC 40%, #FCF0FF 60%, #FEF8FF 80%, #FFFFFF 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #A96BF5 50%, #8116EC 100%)', opacity: 0.2 }}></div>
          <div className="absolute top-32 left-10 w-80 h-80 rounded-full blur-2xl" style={{ background: 'linear-gradient(135deg, #A96BF5 0%, #DD2BC2 50%, #E8CAF7 100%)', opacity: 0.15 }}></div>
          <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(135deg, #8116EC 0%, #A96BF5 50%, #E8CAF7 100%)', opacity: 0.1 }}></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-gray-800">About</span>
              <span className="bg-gradient-to-r from-#A96BF5 via-#8116EC to-#DD2BC2 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #A96BF5 0%, #8116EC 50%, #DD2BC2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> BetaHub</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              BetaHub enables enterprises to turn AI vision into reality with a powerful multi-agent platform - helping every team automate repetitive work, accelerate decisions, scale workflows across systems, and build custom agents that deliver long-term business impact.
            </p>
          </div>
        </div>
      </section>


      {/* Why We Exist Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="section-container section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
              Why We Exist
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Enterprises have invested billions in GenAI, but 95% of projects stall before creating real impact. Why? Because tools alone don't transform businesses—execution does.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              BetaHub was founded to fix this. We combine ready-to-deploy AI agents with expert services so companies stop experimenting and start winning with AI.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#343f52' }}>
                  {value.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate leaders driving AI transformation across enterprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center p-6 rounded-3xl bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-100 group-hover:border-purple-300 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#343f52' }}>
                  {member.name}
                </h3>
                <p className="text-purple-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision & Promise Section */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                To make AI agents the backbone of every enterprise - agents that eliminate the monotonous, scale intelligent workflows, and create compounding advantages over time.
              </p>
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
                Our Promise
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're not just building AI agents. We're building successful AI agentic systems that make enterprises unstoppable in the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #DD2BC2 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's build the agents that will power your enterprise success.
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI agents that actually work?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-purple-700 px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center">
                <span>Talk to Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center">
                <span>Schedule Demo</span>
                <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}