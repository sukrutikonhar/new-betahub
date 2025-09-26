import { Check, Star, Zap, Users, Building } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "per month",
      description: "Perfect for small teams getting started with AI agents",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Up to 5 AI Agents",
        "Basic Process Automation",
        "Email Support",
        "Standard Integrations",
        "Monthly Reports",
        "5GB Data Storage"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "per month",
      description: "Ideal for growing enterprises with advanced needs",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Up to 25 AI Agents",
        "Advanced Process Automation",
        "Priority Support",
        "Custom Integrations",
        "Real-time Analytics",
        "100GB Data Storage",
        "Custom Agent Development",
        "API Access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "Tailored solutions for large organizations",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Unlimited AI Agents",
        "Full Process Transformation",
        "24/7 Dedicated Support",
        "White-label Solutions",
        "Advanced Analytics & BI",
        "Unlimited Data Storage",
        "Custom Agent Development",
        "Full API Access",
        "On-premise Deployment",
        "SLA Guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding-lg">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-core-purple mb-6">
              Simple, Transparent <span className="text-bright-pink">Pricing</span>
            </h1>
            <p className="text-xl text-dark-gray max-w-3xl mx-auto mb-8">
              Choose the plan that fits your enterprise needs. All plans include our core AI agents 
              and come with a 30-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full section-soft-lavender">
        <div className="section-container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`card relative ${plan.popular ? 'ring-2 ring-bright-pink scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-bright-pink text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-2">{plan.name}</h3>
                  <p className="text-muted-purple mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-core-purple">{plan.price}</span>
                    <span className="text-muted-purple ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-bright-pink flex-shrink-0" />
                      <span className="text-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${plan.popular ? 'btn-primary bg-bright-pink text-white hover:bg-pink-600' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="w-full section-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">Enterprise Features</h2>
            <p className="text-xl text-muted-purple max-w-3xl mx-auto">
              All plans include enterprise-grade security, compliance, and support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-core-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">SOC 2 Compliant</h3>
              <p className="text-muted-purple text-sm">Enterprise-grade security standards</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bright-pink rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">99.9% Uptime SLA</h3>
              <p className="text-muted-purple text-sm">Guaranteed reliability and availability</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-strong-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">GDPR Ready</h3>
              <p className="text-muted-purple text-sm">Full data privacy compliance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-muted-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-dark-gray mb-2">24/7 Support</h3>
              <p className="text-muted-purple text-sm">Round-the-clock expert assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full section-soft-lavender">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Can I change plans anytime?</h3>
              <p className="text-muted-purple">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">What's included in the free trial?</h3>
              <p className="text-muted-purple">
                The 30-day free trial includes access to all features of the Starter plan, 
                with no credit card required to get started.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">Do you offer custom pricing?</h3>
              <p className="text-muted-purple">
                Yes, we offer custom pricing for Enterprise plans based on your specific needs, 
                volume requirements, and deployment preferences.
              </p>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-dark-gray mb-4">What integrations are available?</h3>
              <p className="text-muted-purple">
                We support 50+ enterprise integrations including SAP, Oracle, Microsoft Dynamics, 
                Salesforce, and many more. Custom integrations are available.
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
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Start your free trial today and see how AI agents can revolutionize your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-core-purple hover:bg-soft-lavender">
                Start Free Trial
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-core-purple">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

