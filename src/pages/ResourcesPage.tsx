import { BookOpen, ArrowRight, Tag } from 'lucide-react';

export default function ResourcesPage() {
  const blogPosts = [
    {
      title: "The Future of Enterprise AI: Multi-Agent Systems",
      excerpt: "Explore how multi-agent systems are revolutionizing enterprise operations and what this means for your business.",
      author: "Sarah Chen",
      date: "Oct 15, 2024",
      readTime: "5 min read",
      category: "AI Insights",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
    },
    {
      title: "ProcessFlow AI: A Complete Implementation Guide",
      excerpt: "Step-by-step guide to implementing ProcessFlow AI in your organization for maximum efficiency gains.",
      author: "Alex Johnson",
      date: "Oct 10, 2024",
      readTime: "8 min read",
      category: "Implementation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
    },
    {
      title: "ROI Calculator: Measuring AI Agent Impact",
      excerpt: "Learn how to calculate and measure the return on investment for your AI agent implementations.",
      author: "Mike Rodriguez",
      date: "Oct 5, 2024",
      readTime: "6 min read",
      category: "Business Impact",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
    },
    {
      title: "Security Best Practices for AI Agents",
      excerpt: "Essential security considerations when deploying AI agents in enterprise environments.",
      author: "Sarah Chen",
      date: "Sep 28, 2024",
      readTime: "7 min read",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop"
    },
    {
      title: "Integrating AI Agents with Legacy Systems",
      excerpt: "Practical strategies for integrating modern AI agents with existing enterprise systems.",
      author: "Alex Johnson",
      date: "Sep 20, 2024",
      readTime: "9 min read",
      category: "Integration",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop"
    },
    {
      title: "The Psychology of AI Adoption in Enterprises",
      excerpt: "Understanding human factors that influence successful AI adoption in large organizations.",
      author: "Mike Rodriguez",
      date: "Sep 15, 2024",
      readTime: "6 min read",
      category: "Change Management",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    }
  ];

  const glossaryTerms = [
    {
      term: "AI Agent",
      definition: "An autonomous software entity that can perceive its environment, make decisions, and take actions to achieve specific goals."
    },
    {
      term: "Process Automation",
      definition: "The use of technology to execute business processes with minimal human intervention."
    },
    {
      term: "Multi-Agent System",
      definition: "A system composed of multiple interacting intelligent agents working together to solve complex problems."
    },
    {
      term: "Workflow Orchestration",
      definition: "The coordination and management of multiple tasks and processes to achieve a desired outcome."
    },
    {
      term: "API Integration",
      definition: "The process of connecting different software applications through their APIs to share data and functionality."
    },
    {
      term: "Machine Learning Pipeline",
      definition: "A series of data processing steps that transform raw data into a machine learning model."
    }
  ];

  const categories = ["All", "AI Insights", "Implementation", "Business Impact", "Security", "Integration", "Change Management"];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding-lg">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-core-purple mb-6">
              Resources & <span className="text-bright-pink">Knowledge</span>
            </h1>
            <p className="text-xl text-dark-gray max-w-3xl mx-auto mb-8">
              Stay informed with the latest insights, guides, and best practices for enterprise AI implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full section-soft-lavender">
        <div className="section-container section-padding">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-dark-gray">Latest Blog Posts</h2>
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0
                      ? 'bg-core-purple text-white'
                      : 'bg-white text-muted-purple hover:bg-core-purple hover:text-white'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="card group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-core-purple to-bright-pink flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white opacity-50" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-bright-pink" />
                  <span className="text-bright-pink text-sm font-medium">{post.category}</span>
                </div>

                <h3 className="text-xl font-bold text-dark-gray mb-3 group-hover:text-core-purple transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-purple mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-purple mb-4">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-purple">{post.readTime}</span>
                  <button className="text-core-purple text-sm font-medium hover:underline flex items-center gap-1">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Glossary Section */}
      <section className="w-full section-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-gray mb-6">AI Glossary</h2>
            <p className="text-xl text-muted-purple max-w-3xl mx-auto">
              Understand the key terms and concepts in enterprise AI and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {glossaryTerms.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-bold text-core-purple mb-3">{item.term}</h3>
                <p className="text-muted-purple leading-relaxed">{item.definition}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-secondary">
              View Full Glossary
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full section-strong-blue">
        <div className="section-container section-padding">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Get the latest insights, case studies, and best practices delivered to your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 text-dark-gray"
                />
                <button className="btn-primary bg-bright-pink text-white hover:bg-pink-600">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">
                No spam. Unsubscribe at any time.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Explore our resources and start your AI transformation journey today.
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