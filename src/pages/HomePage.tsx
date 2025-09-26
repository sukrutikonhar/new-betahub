import { ArrowRight, Bot, Zap, Users, CheckCircle, Building2, Rocket, Target } from 'lucide-react';

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

            {/* Hero Section */}
            <section className="w-full section-gradient-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-strong-blue via-strong-blue to-core-purple opacity-90"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-bright-pink opacity-20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-muted-purple opacity-20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-soft-lavender opacity-30 rounded-full blur-lg"></div>
                </div>

                <div className="section-container section-padding-lg relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>
                                Bridge the Gap between AI Vision & Enterprise Execution
                            </h1>
                            <p className="text-xl text-white mb-8 max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                With Betahub, enterprises get more than just AI Agents - they get trusted expertise to turn AI investments into ROI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn-primary bg-bright-pink text-white hover:bg-pink-600">
                                    Book a Demo
                                </button>
                                <button className="btn-secondary border-white text-white hover:bg-white hover:text-strong-blue">
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
                                        <h3 className="text-2xl font-bold text-white mb-2">AI Agents Ready to Deploy</h3>
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
                                            <span className="text-bright-pink text-sm font-bold">24 Hours</span>
                                        </div>
                                        <div className="w-full bg-white/20 rounded-full h-2">
                                            <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                                        </div>
                                    </div>

                                    <button className="w-full btn-primary bg-bright-pink text-white hover:bg-pink-600 text-sm">
                                        View All Agents
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Client Logos & Problem Statement - Combined Section */}
            <section className="w-full bg-gradient-to-b from-white via-purple-50/30 to-purple-100/60 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-core-purple/10 to-bright-pink/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-strong-blue/5 to-muted-purple/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-4 left-10 w-2 h-2 bg-bright-pink rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-20 w-1 h-1 bg-muted-purple rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-6 left-1/4 w-1.5 h-1.5 bg-soft-lavender rounded-full animate-pulse delay-500"></div>
                    <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-strong-blue rounded-full animate-pulse delay-700"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    {/* Client Logos Section */}
                    <div className="text-center mb-32">
                        <p className="text-muted-purple text-sm uppercase tracking-wider font-medium mb-4">Trusted by leading enterprises</p>
                        <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-12"></div>

                        {/* Logo grid */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-20">
                            {[
                                { name: 'Microsoft', color: 'bg-blue-50 border-blue-200 text-blue-600' },
                                { name: 'Google', color: 'bg-red-50 border-red-200 text-red-600' },
                                { name: 'Amazon', color: 'bg-orange-50 border-orange-200 text-orange-600' },
                                { name: 'Salesforce', color: 'bg-blue-50 border-blue-200 text-blue-600' },
                                { name: 'IBM', color: 'bg-gray-50 border-gray-200 text-gray-600' }
                            ].map((company) => (
                                <div key={company.name} className="group">
                                    <div className={`h-16 border-2 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg ${company.color}`}>
                                        <span className="font-bold text-sm tracking-wide">{company.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Problem Statement Section */}
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
                                        <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
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
                            <div className="group card !p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="w-7 h-7 text-core-purple" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray mb-2 leading-tight group-hover:text-core-purple transition-colors">
                                            Proven expertise in enterprise transformation
                                        </p>
                                        {/* <div className="w-8 h-0.5 bg-core-purple rounded-full"></div> */}
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group card !p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Rocket className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray mb-2 leading-tight group-hover:text-bright-pink transition-colors">
                                            Trusted tools that deliver quick wins
                                        </p>
                                        {/* <div className="w-8 h-0.5 bg-bright-pink rounded-full"></div> */}
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group card !p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-7 h-7 text-strong-blue" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray mb-2 leading-tight group-hover:text-strong-blue transition-colors">
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
                                    <span className="text-white text-sm font-semibold uppercase tracking-wider">Our Strategy</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Approach: One Partner. Complete Transformation.</h2>
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
            <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #204a9b 0%, #1a3d85 50%, #204a9b 100%)' }}>
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-core-purple/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-bright-pink/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-strong-blue/10 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/20">
                            <div className="w-2 h-2 bg-bright-pink rounded-full mr-2"></div>
                            <span className="text-white text-sm font-semibold uppercase tracking-wider">AI Agents</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>Meet Your AI Workforce</h2>
                        <p className="text-xl text-white/95 max-w-4xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                            Specialized AI agents designed to seamlessly integrate into your enterprise workflows and drive unparalleled efficiency.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Process Acceleration Card */}
                        <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-bright-pink to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Process Acceleration</h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-lg font-semibold text-white mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>ProcessFlow AI</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-bright-pink/30 text-bright-pink text-sm rounded-full">Workflow Automation</span>
                                        <span className="px-3 py-1 bg-muted-purple/30 text-muted-purple text-sm rounded-full">Process Optimization</span>
                                        <span className="px-3 py-1 bg-soft-lavender/30 text-soft-lavender text-sm rounded-full">Real-time Monitoring</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-lg font-semibold text-white mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>TestForge AI</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-bright-pink/30 text-bright-pink text-sm rounded-full">Automated Testing</span>
                                        <span className="px-3 py-1 bg-muted-purple/30 text-muted-purple text-sm rounded-full">Quality Assurance</span>
                                        <span className="px-3 py-1 bg-soft-lavender/30 text-soft-lavender text-sm rounded-full">CI/CD Integration</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Knowledge & Training Card */}
                        <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-core-purple to-muted-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Knowledge & Training</h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-lg font-semibold text-white mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>SkillForgeX</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-bright-pink/30 text-bright-pink text-sm rounded-full">Training & Adoption</span>
                                        <span className="px-3 py-1 bg-muted-purple/30 text-muted-purple text-sm rounded-full">Learning</span>
                                        <span className="px-3 py-1 bg-soft-lavender/30 text-soft-lavender text-sm rounded-full">Multi-format Content</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-lg font-semibold text-white mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>RetrievX</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-bright-pink/30 text-bright-pink text-sm rounded-full">Knowledge Management</span>
                                        <span className="px-3 py-1 bg-muted-purple/30 text-muted-purple text-sm rounded-full">Search & Discovery</span>
                                        <span className="px-3 py-1 bg-soft-lavender/30 text-soft-lavender text-sm rounded-full">Document Intelligence</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Code & Technical Card */}
                        <div className="group bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-gradient-to-br from-strong-blue to-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Bot className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Code & Technical</h3>
                            <div className="space-y-4">
                                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-lg font-semibold text-white mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>CodeDocIQ</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-bright-pink/30 text-bright-pink text-sm rounded-full">Code Documentation</span>
                                        <span className="px-3 py-1 bg-muted-purple/30 text-muted-purple text-sm rounded-full">Technical Writing</span>
                                        <span className="px-3 py-1 bg-soft-lavender/30 text-soft-lavender text-sm rounded-full">API Documentation</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                                    <h4 className="text-lg font-semibold text-white mb-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>ResolvIQ</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-bright-pink/30 text-bright-pink text-sm rounded-full">Issue Resolution</span>
                                        <span className="px-3 py-1 bg-muted-purple/30 text-muted-purple text-sm rounded-full">Debugging</span>
                                        <span className="px-3 py-1 bg-soft-lavender/30 text-soft-lavender text-sm rounded-full">Technical Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-bright-pink to-pink-400 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                See All Agents
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="w-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Microsoft Event */}
                        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-core-purple to-muted-purple rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">MS</span>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center px-3 py-1 bg-bright-pink/10 text-bright-pink text-sm font-semibold rounded-full mb-2">
                                        <div className="w-2 h-2 bg-bright-pink rounded-full mr-2"></div>
                                        Live Event
                                    </div>
                                    <p className="text-sm text-gray-500">Oct 30, 2025</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-core-purple transition-colors">
                                Reimagine Dynamics Implementations - Powered by AI Agents
                            </h3>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Building2 className="w-5 h-5" />
                                    <span className="font-medium">Microsoft HQ</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="w-5 h-5" />
                                    <span>500+ Attendees</span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Discover how AI agents are revolutionizing Dynamics implementations and learn best practices from industry experts.
                            </p>

                            <button className="w-full bg-gradient-to-r from-core-purple to-bright-pink text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                RSVP Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Gartner Event */}
                        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-strong-blue to-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">G</span>
                                </div>
                                <div className="text-right">
                                    <div className="inline-flex items-center px-3 py-1 bg-strong-blue/10 text-strong-blue text-sm font-semibold rounded-full mb-2">
                                        <div className="w-2 h-2 bg-strong-blue rounded-full mr-2"></div>
                                        Conference
                                    </div>
                                    <p className="text-sm text-gray-500">Nov 10-13, 2025</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-strong-blue transition-colors">
                                Gartner IT Symposium
                            </h3>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Building2 className="w-5 h-5" />
                                    <span className="font-medium">Barcelona</span>
                                </div>
                                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="w-5 h-5" />
                                    <span>2000+ Attendees</span>
                                </div>
                            </div>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Join us at the world's premier IT conference to explore the future of enterprise technology and AI innovation.
                            </p>

                            <button className="w-full bg-gradient-to-r from-strong-blue to-blue-400 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customize CTA */}
            <section className="w-full bg-gradient-to-br from-core-purple via-purple-600 to-bright-pink relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-8 border border-white/30">
                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                            <span className="text-white text-sm font-semibold uppercase tracking-wider">Get Started</span>
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Ready to Transform Your Business?
                        </h2>

                        <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed">
                            Build the AI agents your business needs. BetaHub makes it simple to transform ideas into enterprise-ready automation that delivers real results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <button className="bg-white text-core-purple px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group">
                                <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Start Building
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-core-purple transition-all duration-300 flex items-center gap-3 group">
                                <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                Talk to Experts
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
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
            </section>
        </div>
    );
}
