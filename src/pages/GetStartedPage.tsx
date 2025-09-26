import { CheckCircle, Calendar, MessageCircle, Bot, Zap, Users, Award } from 'lucide-react';

export default function GetStartedPage() {
  const steps = [
    {
      number: "01",
      title: "Book a Demo",
      description: "Schedule a personalized demo with our AI experts to see how our agents can transform your business.",
      icon: <Calendar className="w-8 h-8" />,
      features: ["30-minute personalized demo", "Custom use case analysis", "ROI projection", "Implementation roadmap"]
    },
    {
      number: "02",
      title: "Start Free Trial",
      description: "Deploy your first AI agents with our 30-day free trial. No credit card required.",
      icon: <Bot className="w-8 h-8" />,
      features: ["Full access to Starter plan", "5 AI agents included", "Email support", "Standard integrations"]
    },
    {
      number: "03",
      title: "Get Expert Support",
      description: "Work with our implementation team to customize agents for your specific needs.",
      icon: <Users className="w-8 h-8" />,
      features: ["Dedicated success manager", "Custom agent development", "Training for your team", "Ongoing optimization"]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Deploy your first agents in under 24 hours"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven ROI",
      description: "Average 300% ROI within the first 6 months"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "Dedicated team to ensure your success"
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
              Get Started with <span className="text-bright-pink">AI Agents</span>
            </h1>
            <p className="text-xl text-white opacity-90 mb-8 max-w-4xl mx-auto">
              Transform your enterprise operations with intelligent AI agents. Start your journey today
              with our proven implementation process and expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-bright-pink text-white hover:bg-pink-600">
                Book a Demo
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-strong-blue">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">Why Choose BetaHub?</h2>
            <p className="text-xl text-muted-purple max-w-3xl mx-auto">
              Join hundreds of enterprises already transforming their operations with our AI agents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-dark-gray mb-4">{benefit.title}</h3>
                <p className="text-muted-purple">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full section-soft-lavender">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">How It Works</h2>
            <p className="text-xl text-muted-purple max-w-3xl mx-auto">
              Our proven 3-step process ensures successful AI agent implementation
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-core-purple">{step.number}</span>
                      <h3 className="text-3xl font-bold text-dark-gray">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-purple mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-bright-pink flex-shrink-0" />
                        <span className="text-dark-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-card">
                    <div className="aspect-video bg-gradient-to-br from-core-purple to-bright-pink rounded-lg flex items-center justify-center">
                      <Bot className="w-16 h-16 text-white opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Options */}
      <section className="w-full section-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-purple max-w-3xl mx-auto">
              Choose the option that works best for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Book a Demo</h3>
              <p className="text-muted-purple mb-6">
                See our AI agents in action with a personalized demo tailored to your business needs.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bright-pink" />
                  <span className="text-sm text-dark-gray">30-minute personalized demo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bright-pink" />
                  <span className="text-sm text-dark-gray">Custom use case analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bright-pink" />
                  <span className="text-sm text-dark-gray">ROI projection</span>
                </li>
              </ul>
              <button className="btn-primary w-full">
                Schedule Demo
              </button>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-gray mb-4">Start Free Trial</h3>
              <p className="text-muted-purple mb-6">
                Deploy your first AI agents immediately with our 30-day free trial. No credit card required.
              </p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bright-pink" />
                  <span className="text-sm text-dark-gray">Full access to Starter plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bright-pink" />
                  <span className="text-sm text-dark-gray">5 AI agents included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-bright-pink" />
                  <span className="text-sm text-dark-gray">Email support</span>
                </li>
              </ul>
              <button className="btn-primary w-full">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full section-strong-blue">
        <div className="section-container section-padding">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Our team of AI experts is here to help you every step of the way.
              Get in touch for personalized guidance and support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-bright-pink text-white hover:bg-pink-600">
                Contact Sales
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-strong-blue">
                <MessageCircle className="w-4 h-4 mr-2" />
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}