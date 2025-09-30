import { ArrowRight, Bot, Zap, Users, CheckCircle, Building2, Rocket, Target, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DemoForm from '../components/DemoForm';

export default function HomePage() {
    const [activeCategory, setActiveCategory] = useState('process');
    const [showDemoForm, setShowDemoForm] = useState(false);
    const navigate = useNavigate();

    const agentCategories = {
        process: {
            title: 'Process Acceleration',
            icon: Zap,
            description: 'Streamline your workflows with intelligent automation and process optimization tools.',
            agents: [
                {
                    name: 'ProcessFlow AI',
                    link: '/agents/processflow-ai',
                    tags: ['Requirements Gathering', 'BPMN process Flow', 'Business Analysis']
                },
                {
                    name: 'TestForge AI',
                    link: '/agents/testforge-ai',
                    tags: ['QA Automation', 'Test Management', 'Test Case Generation']
                },
                {
                    name: 'Fit-Gap AI',
                    link: '/agents/fit-gap-ai',
                    tags: ['ERP Assessment', 'Process Alignment', 'Gap Analysis']
                },
                {
                    name: 'Config AI',
                    link: '/agents/config-ai',
                    tags: ['CRM Setup', 'Dynamics 365', 'Workflow Automation']
                }
            ]
        },
        knowledge: {
            title: 'Knowledge & Training',
            icon: Users,
            description: 'Empower your team with comprehensive learning and knowledge management solutions.',
            agents: [
                {
                    name: 'SkillForgeX',
                    link: '/agents/skillforgex',
                    tags: ['Training documentation', 'Knowledge Transfer', 'Interactive Learning']
                },
                {
                    name: 'RetrievX',
                    link: '/agents/retrievx',
                    tags: ['Retrieval-Augmented Generation', 'Knowledge Base Search', 'Contextual AI']
                },
                {
                    name: 'HelpDeskX',
                    link: '/agents/helpdeskx',
                    tags: ['Helpdesk Automation', 'Customer Service', 'Incident Management']
                }
            ]
        },
        technical: {
            title: 'Code & Technical',
            icon: Bot,
            description: 'Enhance your development workflow with intelligent coding and technical support tools.',
            agents: [
                {
                    name: 'CodeDocIQ',
                    link: '/agents/codedociq',
                    tags: ['Auto Documentation', 'Developer Productivity', 'Knowledge Sharing']
                },
                {
                    name: 'ResolvIQ',
                    link: '/agents/resolviq',
                    tags: ['Market Intelligence', 'Competitive Analysis', 'Data-Driven Insights']
                },
                {
                    name: 'FinOptima IQ',
                    link: '/agents/finoptima-iq',
                    tags: ['Cloud Cost Optimization', 'Financial Operations', 'Budget Tracking']
                }
            ]
        }
    };

    const getCategoryButtonClasses = (category: string) => {
        const baseClasses = "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 text-lg";
        const isActive = activeCategory === category;

        if (isActive) {
            return `${baseClasses} text-white shadow-lg hover:shadow-xl`;
        } else {
            return `${baseClasses} bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-md`;
        }
    };

    return (
        <div className="flex flex-col items-center">

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-800 via-purple-700 to-purple-300"></div>
                {/* <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-bright-pink opacity-20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-muted-purple opacity-20 rounded-full blur-xl"></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-soft-lavender opacity-30 rounded-full blur-lg"></div>
                </div> */}

                <div className="section-container pt-32 pb-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-8">
                        <div className="lg:col-span-8">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>
                                Bridge the Gap between AI Vision & Enterprise Execution
                            </h1>
                            <p className="text-xl text-white mb-8 max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                With Betahub, enterprises get more than just AI Agents - they get trusted expertise to turn AI investments into ROI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                >
                                    Book a Demo
                                </button>
                                <button
                                    onClick={() => navigate('/agents')}
                                    className="border-2 border-white text-white hover:bg-white hover:text-purple-800 px-8 py-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                                >
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
                                            <span className="text-white text-sm font-medium">See results in</span>
                                            <span className="text-[#EC89DD] text-sm font-bold">Weeks not Months</span>
                                        </div>
                                        <div className="w-full bg-white/20 rounded-full h-2">
                                            <div className="h-2 rounded-full w-3/4" style={{ background: 'linear-gradient(135deg, #A7439F 0%, #E8CAF7 100%)' }}></div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => navigate('/agents')}
                                        className="w-full bg-white text-purple-800 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    >
                                        Try Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Client Logos Section */}
            <section className="w-full bg-white relative overflow-hidden">
                {/* Glowing Bubbles Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-blue-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-purple-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-300/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-500"></div>
                            <div className="px-6">
                                <span className="text-purple-800 text-sm font-semibold uppercase tracking-wider">Trusted by Industry Leaders</span>
                            </div>
                            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-300 to-purple-500"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {[
                                { name: 'Microsoft', logo: '/brands/Logos-01.webp' },
                                { name: 'Google', logo: '/brands/Logos-02.webp' },
                                { name: 'Amazon', logo: '/brands/Logos-03.webp' },
                                { name: 'Salesforce', logo: '/brands/Logos-04.webp' },
                                { name: 'IBM', logo: '/brands/Logos-05.webp' }
                            ].map((company) => (
                                <div key={company.name} className="group">
                                    <div className="h-16 flex items-center justify-center">
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="w-full h-full object-contain scale-125"
                                        />
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
                    <div className="grid grid-cols-1 lg:grid-cols-9 gap-16 items-center mb-32 max-w-6xl mx-auto">
                        {/* Left Side - Title and Content (4 columns) */}
                        <div className="lg:col-span-4">
                            <div className="max-w-2xl pr-8 lg:pr-12">
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#343f52' }}>
                                    Solving the AI Value Gap
                                </h2>

                                <p className="text-xl mb-8 leading-relaxed" style={{ color: '#60697b' }}>
                                    Enterprises know AI has potential, but they struggle to move from ideas to impact. Most tools don't integrate, don't adapt, and don't scale.
                                </p>

                                <div className="relative mb-8">
                                    <p className="text-2xl font-bold bg-gradient-to-r from-core-purple to-bright-pink bg-clip-text text-transparent">
                                        Beta Hub was built to solve this.
                                    </p>
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

                        {/* Right Side - Feature Cards (5 columns) */}
                        <div className="lg:col-span-5 space-y-6 pl-8 lg:pl-12">
                            {/* Feature 1 */}
                            <div className="group p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray leading-tight group-hover:text-bright-pink transition-colors">
                                            Proven expertise in enterprise transformation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Rocket className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray pe-12 leading-tight group-hover:text-bright-pink transition-colors">
                                            Trusted tools that deliver quick wins
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray leading-tight group-hover:text-bright-pink transition-colors">
                                            Scalable solutions designed for long-term growth
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Approach Section - Custom Purple Background */}
                    <div className="rounded-3xl p-12 shadow-2xl border border-purple-300/30 relative overflow-hidden mt-16" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/15 rounded-full blur-2xl"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">

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
                                    <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-bright-pink transition-colors" style={{ color: '#343f52' }}>Products</h3>
                                    <p className="text-center leading-relaxed text-base" style={{ color: '#60697b' }}>
                                        Seamless AI agents for all verticals. Plug in and deliver value from day one.
                                    </p>
                                </div>

                                {/* Services Card */}
                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-200/50">
                                    <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Users className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-bright-pink transition-colors" style={{ color: '#343f52' }}>Services</h3>
                                    <p className="text-center leading-relaxed text-base" style={{ color: '#60697b' }}>
                                        Strategy, advisory, and tailored integration to embed AI into your workflows.
                                    </p>
                                </div>

                                {/* Outcomes Card */}
                                <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-200/50">
                                    <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <CheckCircle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 text-center group-hover:text-bright-pink transition-colors" style={{ color: '#343f52' }}>Outcomes</h3>
                                    <p className="text-center leading-relaxed text-base" style={{ color: '#60697b' }}>
                                        Faster time to value, measurable ROI, and a foundation for scaling enterprise AI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* Meet the Agents */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>Meet Your AI Workforce</h2>
                        <p className="text-xl max-w-4xl mx-auto" style={{ color: '#60697b' }}>
                            Specialized AI agents designed to seamlessly integrate into your enterprise workflows and drive unparalleled efficiency.
                        </p>
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        {Object.entries(agentCategories).map(([key, category]) => {
                            const IconComponent = category.icon;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={getCategoryButtonClasses(key)}
                                    style={activeCategory === key ? { background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' } : {}}
                                >
                                    <IconComponent className="w-6 h-6" />
                                    {category.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Category Content */}
                    <div className="">
                        {/* Agent Cards Grid */}
                        <div className="flex justify-center">
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${activeCategory === 'process' ? 'lg:grid-cols-4 max-w-7xl' : 'lg:grid-cols-3 max-w-5xl'}`}>
                                {agentCategories[activeCategory as keyof typeof agentCategories].agents.map((agent) => (
                                    <a
                                        key={agent.name}
                                        href={agent.link}
                                        className="group rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                        style={{ background: 'linear-gradient(135deg, #3a3a3a 0%, #3c1470 50%, #5a2a8a 100%)' }}
                                    >
                                        <div className="text-left">
                                            <h4 className="text-xl font-bold mb-4 group-hover:text-pink-400 transition-colors duration-200 text-white">
                                                {agent.name}
                                            </h4>

                                            {/* Tags */}
                                            <div className="flex flex-col gap-2">
                                                {agent.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 text-xs rounded border border-white/30 backdrop-blur-sm text-white"
                                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center pb-16">
                    <button
                        onClick={() => setShowDemoForm(true)}
                        className="text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90 cursor-pointer"
                        style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
                    >
                        Book a Demo
                    </button>
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
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>Upcoming Events</h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            Join us at industry-leading events and discover how AI agents are transforming enterprise operations.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
                            {/* Microsoft Event */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Event Image */}
                                <div className="relative h-48 overflow-hidden" style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-core-purple transition-colors mb-2" style={{ color: '#343f52' }}>
                                            Reimagine Dynamics Implementations
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 mb-6">
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Microsoft HQ, Stockholm</span>
                                        </div>
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">Oct 30, 2025</span>
                                        </div>
                                    </div>

                                    <button className="mx-auto text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                        RSVP Now
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Gartner Event */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Event Image */}
                                <div className="relative h-48 overflow-hidden" style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-core-purple transition-colors mb-2" style={{ color: '#343f52' }}>
                                            Gartner<br />IT Symposium
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 mb-6">
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Barcelona</span>
                                        </div>
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">Nov 10-13, 2025</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => navigate('/events')}
                                        className="mx-auto text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90 cursor-pointer"
                                        style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Customize CTA */}
            < section className="w-full bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" >
                {/* Background decorative elements */}
                < div className="absolute inset-0 overflow-hidden" >
                    <div className="absolute top-10 right-10 w-64 h-64 bg-core-purple/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-bright-pink/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-strong-blue/5 rounded-full blur-3xl"></div>
                </div >

                <div className="section-container section-padding relative z-10">

                    {/* CTA Block */}
                    <div className="rounded-3xl p-12 relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                            <div className="absolute top-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/15 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-20 left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                            {/* Pink accent elements */}
                            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-pink-400/15 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-20 bg-gradient-to-br from-bright-pink to-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Bot className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                                Customize your AI Agents
                            </h3>

                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Build the agents your business needs. Betahub makes it simple to transform ideas into enterprise-ready automation.</p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                                <button
                                    onClick={() => navigate('/agents')}
                                    className="bg-white text-core-purple px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                                >
                                    <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    Start Building
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={() => navigate('/contact')}
                                    className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-core-purple transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                                >
                                    <Users className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    Talk to Us
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </section >

            {/* Demo Form Popup */}
            <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />
        </div >
    );
}
