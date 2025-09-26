import { ArrowRight, Bot, Zap, Users, CheckCircle, Building2, Rocket, Target, Calendar } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="flex flex-col items-center">
            {/* Top Banner */}
            {/* <section className="w-full bg-strong-blue text-white py-2">
                <div className="section-container">
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-strong-blue text-xs">📺</span>
                        </div>
                        <span>Deep Dive on NVIDIA Blackwell with Dylan Patel (Semianalysis) and Ian Buck (NVIDIA) on 10/1</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </section> */}

            {/* Hero Section with Client Logos */}
            <section className="w-full relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(179deg, #2E394D 0%, #204A9B 25%, #204A9B 50%, #204A9B 65%, #5A4FCF 75%, #8B5CF6 85%, #A78BFA 95%, #C4B5FD 100%)' }}></div>
                {/* <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-bright-pink opacity-20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-muted-purple opacity-20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-soft-lavender opacity-30 rounded-full blur-lg"></div>
                </div> */}

                <div className="section-container section-padding-lg relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
                        <div className="lg:col-span-8">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>
                                Bridge the Gap between AI Vision & Enterprise Execution
                            </h1>
                            <p className="text-xl text-white mb-8 max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                With Betahub, enterprises get more than just AI Agents - they get trusted expertise to turn AI investments into ROI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-white text-strong-blue hover:bg-gray-100 px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                    Book a Demo
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-strong-blue px-8 py-2 rounded-xl font-semibold transition-all duration-300">
                                    Explore Agents
                                </button>
                            </div>
                        </div>

                        {/* Additional Details Panel */}
                        <div className="lg:col-span-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Bot className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Agent Spotlight</h3>
                                        <p className="text-white/80 text-sm">
                                            Pre-built agents for immediate implementation
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-bright-pink rounded-full"></div>
                                            <span className="text-white text-sm">ProcessFlow AI - Workflow Automation</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-muted-purple rounded-full"></div>
                                            <span className="text-white text-sm">SkillForgeX - Training & Development</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-soft-lavender rounded-full"></div>
                                            <span className="text-white text-sm">CodeDocIQ - Technical Documentation</span>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-white text-sm font-medium">Implementation Time</span>
                                            <span className="text-bright-pink text-sm font-bold">Few Minutes</span>
                                        </div>
                                        <div className="w-full bg-white/20 rounded-full h-2">
                                            <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-white text-strong-blue hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                                        View All Agents
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Logos Section */}
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-8 border border-white/30">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            <span className="text-white text-sm font-semibold uppercase tracking-wider">Trusted by Industry Leaders</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {[
                                { name: 'Microsoft', color: 'bg-white/20 border-white/30 text-white' },
                                { name: 'Google', color: 'bg-white/20 border-white/30 text-white' },
                                { name: 'Amazon', color: 'bg-white/20 border-white/30 text-white' },
                                { name: 'Salesforce', color: 'bg-white/20 border-white/30 text-white' },
                                { name: 'IBM', color: 'bg-white/20 border-white/30 text-white' }
                            ].map((company) => (
                                <div key={company.name} className="group">
                                    <div className={`h-16 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${company.color}`}>
                                        <span className="font-bold text-sm tracking-wide">{company.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>


            {/* Problem Statement Section */}
            <section className="w-full bg-white relative overflow-hidden">
                <div className="section-container section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center mb-32">
                        {/* Left Side - Title and Content (3 columns) */}
                        <div className="lg:col-span-3">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center px-4 py-2 bg-soft-lavender/20 rounded-full mb-6 border border-soft-lavender/30">
                                    <div className="w-2 h-2 bg-core-purple rounded-full mr-2"></div>
                                    <span className="text-core-purple text-sm font-semibold uppercase tracking-wider">Betahub</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    Solving the AI Value Gap
                                </h2>

                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Enterprises know AI has potential, but they struggle to move from ideas to impact. Most tools don't integrate, don't adapt, and don't scale.
                                </p>

                                <div className="relative mb-8">
                                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-core-purple to-bright-pink rounded-full shadow-lg">
                                        <div className="w-2 h-2 bg-white rounded-sm mr-3 animate-pulse"></div>
                                        <p className="text-xl font-bold text-white">
                                            Beta Hub was built to solve this.
                                        </p>
                                    </div>
                                </div>

                                {/* <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="btn-primary bg-gradient-to-r from-core-purple to-bright-pink hover:from-core-purple/90 hover:to-bright-pink/90 shadow-lg hover:shadow-xl transition-all duration-300">
                                        Learn More
                                    </button>
                                    <button className="btn-secondary border-2 border-gray-300 text-gray-700 hover:border-core-purple hover:text-core-purple hover:bg-core-purple/5 transition-all duration-300">
                                        View Solutions
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* Right Side - Feature Cards (2 columns) */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Feature 1 */}
                            <div className="group card !p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray mb-2 leading-tight group-hover:text-bright-pink transition-colors">
                                            Proven expertise in enterprise transformation
                                        </p>
                                        {/* <div className="w-8 h-0.5 bg-core-purple rounded-full"></div> */}
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group card !p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Rocket className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray pe-12 mb-2 leading-tight group-hover:text-bright-pink transition-colors">
                                            Trusted tools that deliver quick wins
                                        </p>
                                        {/* <div className="w-8 h-0.5 bg-bright-pink rounded-full"></div> */}
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group card !p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray mb-2 leading-tight group-hover:text-bright-pink transition-colors">
                                            Scalable solutions designed for long-term growth
                                        </p>
                                        {/* <div className="w-8 h-0.5 bg-strong-blue rounded-full"></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Approach Section - Custom Purple Background */}
                    <div className="rounded-3xl p-12 shadow-2xl border border-purple-300/30 relative overflow-hidden mt-16" style={{ backgroundColor: '#743CAC' }}>
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/15 rounded-full blur-2xl"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6 border border-white/30">
                                    <div className="w-2 h-2 bg-bright-pink rounded-full mr-2"></div>
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Our Approach</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">One Partner. Complete Transformation.</h2>
                                <p className="text-xl text-white/90 max-w-4xl mx-auto">
                                    Unlike point solutions, Beta Hub combines AI products for speed with services for fit:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Products Card */}
                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-200/50">
                                    <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Bot className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-bright-pink transition-colors">Products</h3>
                                    <p className="text-gray-600 text-center leading-relaxed text-base">
                                        Seamless AI agents for all verticals. Plug in and deliver value from day one.
                                    </p>
                                </div>

                                {/* Services Card */}
                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-200/50">
                                    <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-bright-pink transition-colors">Services</h3>
                                    <p className="text-gray-600 text-center leading-relaxed text-base">
                                        Strategy, advisory, and tailored integration to embed AI into your workflows.
                                    </p>
                                </div>

                                {/* Outcomes Card */}
                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-200/50">
                                    <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-bright-pink transition-colors">Outcomes</h3>
                                    <p className="text-gray-600 text-center leading-relaxed text-base">
                                        Faster time to value, measurable ROI, and a foundation for scaling enterprise AI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Meet the Agents */}
            <section className="w-full bg-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-20 right-20 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-1/3 w-56 h-56 bg-purple-300/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 bg-pink-100/50 rounded-full mb-6 border border-pink-200/50">
                            <div className="w-2 h-2 bg-bright-pink rounded-full mr-2"></div>
                            <span className="text-bright-pink text-sm font-semibold uppercase tracking-wider">AI Agents</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-dark-gray mb-6">Meet Your AI Workforce</h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Specialized AI agents designed to seamlessly integrate into your enterprise workflows and drive unparalleled efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Process Acceleration Card */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 relative">
                            <div className="absolute -top-6 left-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#A96BF5' }}>
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="pt-6">
                                <h3 className="text-xl font-bold text-dark-gray mb-4 text-left">Process Acceleration</h3>
                                <p className="text-gray-600 text-sm mb-6 text-left leading-relaxed">
                                    Streamline your workflows with intelligent automation and process optimization tools.
                                </p>
                                <div className="space-y-4">
                                    <a href="/agents/processflow-ai" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">ProcessFlow AI</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Workflow Automation</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Process Optimization</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Efficiency Boost</span>
                                        </div>
                                    </a>
                                    <a href="/agents/testforge-ai" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">TestForge AI</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Automated Testing</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Quality Assurance</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Bug Detection</span>
                                        </div>
                                    </a>
                                    <a href="/agents/fit-gap-ai" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">Fit-Gap AI</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Gap Analysis</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Process Assessment</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Optimization</span>
                                        </div>
                                    </a>
                                    <a href="/agents/confg-ai" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">Confg AI</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Configuration</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Setup Automation</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>System Management</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Knowledge & Training Card */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 relative">
                            <div className="absolute -top-6 left-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#A96BF5' }}>
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="pt-6">
                                <h3 className="text-xl font-bold text-dark-gray mb-4 text-left">Knowledge & Training</h3>
                                <p className="text-gray-600 text-sm mb-6 text-left leading-relaxed">
                                    Empower your team with comprehensive learning and knowledge management solutions.
                                </p>
                                <div className="space-y-4">
                                    <a href="/agents/skillforgex" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">SkillForgeX</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Training & Adoption</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Learning</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Multi-format Content Creation</span>
                                        </div>
                                    </a>
                                    <a href="/agents/retrievx" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">RetrievX</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Knowledge Retrieval</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Search & Discovery</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Information Access</span>
                                        </div>
                                    </a>
                                    <a href="/agents/helpdeskx" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">HelpDeskX</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Support Automation</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Ticket Management</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Customer Service</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Code & Technical Card */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 relative">
                            <div className="absolute -top-6 left-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#A96BF5' }}>
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="pt-6">
                                <h3 className="text-xl font-bold text-dark-gray mb-4 text-left">Code & Technical</h3>
                                <p className="text-gray-600 text-sm mb-6 text-left leading-relaxed">
                                    Enhance your development workflow with intelligent coding and technical support tools.
                                </p>
                                <div className="space-y-4">
                                    <a href="/agents/codedociq" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">CodeDocIQ</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Code Documentation</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Technical Writing</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Code Analysis</span>
                                        </div>
                                    </a>
                                    <a href="/agents/resolviq" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">ResolvIQ</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Issue Resolution</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Technical Support</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Problem Solving</span>
                                        </div>
                                    </a>
                                    <a href="/agents/finoptima-iq" className="group/agent block bg-gray-50 hover:bg-gray-100 rounded-xl p-4 transition-colors duration-200 border border-gray-200 hover:border-purple-200">
                                        <h4 className="text-lg font-semibold text-dark-gray group-hover/agent:text-purple-600 mb-2 text-left transition-colors duration-200">FinOptima IQ</h4>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Financial Analysis</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#e8caf7', color: '#771af3' }}>Optimization</span>
                                            <span className="px-3 py-1 text-xs rounded-full" style={{ backgroundColor: '#f9d1ef', color: '#b1229b' }}>Data Intelligence</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-purple-300 to-purple-400 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                See All Agents
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border-2 border-purple-300 text-purple-300 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-300 hover:text-white transition-all duration-300">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="w-full relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-core-purple/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-bright-pink/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-strong-blue/5 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 bg-core-purple/10 rounded-full mb-6 border border-core-purple/20">
                            <div className="w-2 h-2 bg-core-purple rounded-full mr-2"></div>
                            <span className="text-core-purple text-sm font-semibold uppercase tracking-wider">Events</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Join us at industry-leading events and discover how AI agents are transforming enterprise operations.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
                            {/* Microsoft Event */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Event Image */}
                                <div className="relative h-48 bg-gradient-to-br from-core-purple to-muted-purple overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className="inline-flex items-center px-3 py-1 bg-bright-pink/90 text-white text-sm font-semibold rounded-full">
                                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                            Live Event
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">MS</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-core-purple transition-colors mb-2">
                                            Reimagine Dynamics Implementations
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 mb-6">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Microsoft HQ</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">Oct 30, 2025</span>
                                        </div>
                                    </div>

                                    <button className="mx-auto bg-gradient-to-r from-purple-300 to-purple-400 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                        RSVP Now
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Gartner Event */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Event Image */}
                                <div className="relative h-48 bg-gradient-to-br from-core-purple to-muted-purple overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className="inline-flex items-center px-3 py-1 bg-bright-pink/90 text-white text-sm font-semibold rounded-full">
                                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                            Conference
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                            <span className="text-white font-bold text-xl">G</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-core-purple transition-colors mb-2">
                                            Gartner IT Symposium
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 mb-6">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Barcelona</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">Nov 10-13, 2025</span>
                                        </div>
                                    </div>

                                    <button className="mx-auto bg-gradient-to-r from-purple-300 to-purple-400 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                        Learn More
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customize CTA */}
            <section className="w-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-core-purple/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-bright-pink/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-strong-blue/5 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">

                    {/* CTA Block */}
                    <div className="bg-gradient-to-br from-core-purple via-purple-600 to-bright-pink rounded-3xl p-12 relative overflow-hidden shadow-2xl">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-4 left-4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                    <Bot className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                Ready to Build Your AI Agents?
                            </h3>

                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Build the agents your business needs. Betahub makes it simple to transform ideas into enterprise-ready automation.</p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                <button className="bg-white text-core-purple px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group">
                                    <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    Start Building
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-core-purple transition-all duration-300 flex items-center gap-3 group">
                                    <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    Talk to Us
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                    <span className="font-medium">No Setup Fees</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                    <span className="font-medium">30-Day Free Trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                    <span className="font-medium">24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
