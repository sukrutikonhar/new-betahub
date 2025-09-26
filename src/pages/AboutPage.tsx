import { Bot, Target, Users, Lightbulb, Award, TrendingUp, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding-lg">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-core-purple mb-6">
              About BetaHub
            </h1>
            <p className="text-xl text-dark-gray max-w-4xl mx-auto mb-8">
              Betahub enables enterprises to turn AI vision into reality with a powerful multi-agent platform - helping every team automate repetitive work, accelerate decisions, scale workflows across systems, and build custom agents that deliver long-term business impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="w-full section-soft-lavender">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-dark-gray mb-6">Why We Exist</h2>
              <p className="text-lg text-dark-gray mb-6">
                Enterprises have invested billions in GenAI, but 95% of projects stall before creating real impact. Why? Because tools alone don't transform businesses—execution does.
              </p>
              <p className="text-lg text-dark-gray mb-6">
                Betahub was founded to fix this. We combine ready-to-deploy AI agents with expert services so companies stop experimenting and start winning with AI.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-card">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Bot className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-dark-gray mb-2">AI-First Approach</h3>
                <p className="text-muted-purple">
                  We believe in the power of intelligent agents to transform enterprise workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-core-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Agents First</h3>
              <p className="text-dark-gray">
                We're obsessed with intelligent agents that adapt, learn, and embed seamlessly into enterprise workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-bright-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Adoption Over Hype</h3>
              <p className="text-dark-gray">
                Success is not a mere demo. Success is when your entire organization uses agents every day.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-strong-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mb-4">Impact That Lasts</h3>
              <p className="text-dark-gray">
                From faster rollouts to better decisions, our mission is to make AI a long-term growth engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full section-strong-blue">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
              The passionate people behind BetaHub who make everything possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Alex Johnson</h3>
              <p className="text-bright-pink mb-4">CEO & Founder</p>
              <p className="text-white/80 text-sm">
                Visionary leader with 15+ years in enterprise AI. Former Microsoft AI researcher who believes in the power of intelligent automation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👩‍💻</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sarah Chen</h3>
              <p className="text-bright-pink mb-4">CTO</p>
              <p className="text-white/80 text-sm">
                Technical genius who leads our engineering team. Expert in scalable AI architecture and multi-agent systems design.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👨‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mike Rodriguez</h3>
              <p className="text-bright-pink mb-4">Head of Design</p>
              <p className="text-white/80 text-sm">
                Creative director who ensures our products are not just functional, but beautiful and intuitive for enterprise users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Promise Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-core-purple rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-dark-gray">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-purple">
                To make AI agents the backbone of every enterprise - agents that eliminate the monotonous, scale intelligent workflows, and create compounding advantages over time.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-bright-pink rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-dark-gray">Our Promise</h3>
              </div>
              <p className="text-lg text-muted-purple">
                We're not just building AI agents. We're building successful AI agentic systems that make enterprises unstoppable in the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full section-gradient-primary">
        <div className="section-container section-padding">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's build the agents that will power your enterprise success.
            </h2>
            <button className="btn-primary bg-white text-core-purple hover:bg-soft-lavender">
              Talk to Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
