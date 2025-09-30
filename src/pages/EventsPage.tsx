import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink, Award, Building } from 'lucide-react';

const EventsPage: React.FC = () => {

    const actionCards = [
        {
            icon: Calendar,
            title: "Book a Meeting",
            description: "Walk away with a tailored AI roadmap",
            color: "purple",
            action: "Schedule Now"
        },
        {
            icon: Users,
            title: "Attend Our Session",
            description: "Scaling beyond AI Pilot: Experiment to enterprise impact",
            color: "pink",
            action: "Learn More"
        },
        {
            icon: Building,
            title: "Visit Our Booth",
            description: "Experience hands-on demos and meet our product experts",
            color: "blue",
            action: "Get Directions"
        }
    ];

    const teamMembers = [
        {
            name: "Manish Singh",
            role: "Founder & CEO",
            expertise: "AI Strategy & Leadership",
            image: "https://arreglio.com/images/team/manish.webp",
            linkedin: "#"
        },
        {
            name: "Morten Vinge-Maigaard",
            role: "Head of Sales",
            expertise: "Enterprise Solutions",
            image: "https://arreglio.com/images/team/morten.webp",
            linkedin: "#"
        },
        {
            name: "Kruthik Ramachandar",
            role: "Sales Lead",
            expertise: "Client Relations",
            image: "https://arreglio.com/images/team/kruthik.webp",
            linkedin: "#"
        },
        {
            name: "Paras Lokhande",
            role: "Solutions Specialist",
            expertise: "Technical Implementation",
            image: "https://arreglio.com/images/team/paras.webp",
            linkedin: "#"
        },
        {
            name: "Susanne Gallo Ravn",
            role: "Sales Director",
            expertise: "Market Development",
            image: "https://arreglio.com/images/team/Sussane.webp",
            linkedin: "#"
        }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
                <div className="section-container section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div>
                            {/* Platinum Sponsor Badge */}
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-full mb-6 border border-gray-300">
                                <Award className="w-4 h-4 text-gray-600" />
                                <span className="text-sm font-semibold">Platinum Sponsor</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: '#343f52' }}>
                                Meet us at Gartner IT Symposium XPO
                            </h1>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Building className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold" style={{ color: '#343f52' }}>Booth: 308</div>
                                        <div className="text-sm" style={{ color: '#60697b' }}>Exhibition Hall</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                        <Calendar className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold" style={{ color: '#343f52' }}>November 10-13</div>
                                        <div className="text-sm" style={{ color: '#60697b' }}>4 Days of Innovation</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-bright-pink to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold" style={{ color: '#343f52' }}>Barcelona, Spain</div>
                                        <div className="text-sm" style={{ color: '#60697b' }}>Fira Barcelona</div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => window.location.href = 'mailto:events@betahub.com'}
                                    className="group text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-3 justify-center shadow-lg hover:opacity-90 cursor-pointer"
                                    style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
                                >
                                    <Calendar className="w-5 h-5" />
                                    <span>Book a Meeting</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                                <button
                                    onClick={() => window.location.href = '/contact'}
                                    className="group border-2 px-8 py-4 rounded-2xl font-semibold hover:text-white transition-all duration-300 flex items-center gap-3 justify-center cursor-pointer"
                                    style={{ borderColor: '#3c1470', color: '#3c1470' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                                >
                                    <Building className="w-5 h-5" />
                                    <span>Visit Our Booth</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                            </div>
                        </div>

                        {/* Right Side - Event Image */}
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                    alt="Gartner IT Symposium XPO Event"
                                    className="w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Cards Section */}
            <section className="w-full relative overflow-hidden bg-white">
                <div className="section-container section-padding">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
                            What You Can Do
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            Make the most of your visit with these exclusive opportunities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {actionCards.map((card, index) => (
                            <div key={index} className="group rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-300/50 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                {/* Background decorative element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-16 translate-x-16"></div>

                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <card.icon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white">
                                        {card.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-white/90">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="w-full relative overflow-hidden bg-white">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
                            Meet the Team
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            Connect with our experts who will be at the event
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group bg-white rounded-3xl p-4 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-400 to-purple-600' : 'from-pink-400 to-pink-600'
                                    }`}></div>

                                {/* Profile Image */}
                                <div className="relative mb-6">
                                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Member Info */}
                                <h3 className="text-md font-semibold mb-1" style={{ color: '#343f52' }}>
                                    {member.name}
                                </h3>

                                <p className="text-sm font-semibold" style={{ color: '#60697b' }}>
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Session Section */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Content */}
                            <div>
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-6 border border-purple-200">
                                    <Award className="w-4 h-4" />
                                    <span className="text-sm font-semibold">Featured Session</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Scaling beyond AI pilot
                                </h2>

                                <h3 className="text-xl font-semibold text-purple-600 mb-8">
                                    Experiment to enterprise impact
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-50 to-purple-200 rounded-full flex items-center justify-center">
                                            <Clock className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold" style={{ color: '#343f52' }}>Thursday, Nov 7</div>
                                            <div className="text-sm" style={{ color: '#60697b' }}>11:15 AM - 11:45 AM CET</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                                            <MapPin className="w-5 h-5 text-pink-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold" style={{ color: '#343f52' }}>Barcelona, Spain</div>
                                            <div className="text-sm" style={{ color: '#60697b' }}>Fira Barcelona</div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-md leading-relaxed mb-8" style={{ color: '#60697b' }}>
                                    This session explores a systematic approach to scaling AI from pilots to enterprise-wide platforms. We'll share a four-phase scaling methodology, showcase real use cases and success stories, and feature live demonstrations of AI agents.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => window.location.href = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Gartner%20IT%20Symposium&dates=20251110T090000Z/20251113T170000Z&details=Join%20us%20at%20Gartner%20IT%20Symposium%20in%20Barcelona&location=Fira%20Barcelona'}
                                        className="text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90 cursor-pointer"
                                        style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Add to Calendar
                                    </button>
                                    <button
                                        onClick={() => window.location.href = 'https://www.gartner.com/en/conferences/emea/symposium'}
                                        className="border-2 px-8 py-4 rounded-2xl font-semibold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                        style={{ borderColor: '#3c1470', color: '#3c1470' }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="relative">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center"
                                        alt="AI Conference Session"
                                        className="w-full h-96 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <div className="text-sm font-semibold mb-1">Live AI Demonstration</div>
                                        <div className="text-xs opacity-90">Interactive session with real-time AI agent showcases</div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60"></div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventsPage;
