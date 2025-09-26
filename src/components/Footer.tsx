import { Link } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../router/routes";
import { Bot, Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";

export default function Footer() {
    const footerLinks = [
        { path: ROUTES.HOME, label: ROUTE_LABELS[ROUTES.HOME] },
        { path: ROUTES.ABOUT, label: ROUTE_LABELS[ROUTES.ABOUT] },
        { path: ROUTES.AGENTS, label: ROUTE_LABELS[ROUTES.AGENTS] },
        { path: ROUTES.SERVICES, label: ROUTE_LABELS[ROUTES.SERVICES] },
        { path: ROUTES.PRICING, label: ROUTE_LABELS[ROUTES.PRICING] },
        { path: ROUTES.RESOURCES, label: ROUTE_LABELS[ROUTES.RESOURCES] },
        { path: ROUTES.GET_STARTED, label: ROUTE_LABELS[ROUTES.GET_STARTED] },
    ];

    const companyLinks = [
        { label: "About Us", path: ROUTES.ABOUT },
        { label: "Our Team", path: "#" },
        { label: "Careers", path: "#" },
        { label: "Press", path: "#" },
    ];

    const supportLinks = [
        { label: "Help Center", path: "#" },
        { label: "Documentation", path: "#" },
        { label: "API Reference", path: "#" },
        { label: "Status", path: "#" },
    ];

    const legalLinks = [
        { label: "Privacy Policy", path: "#" },
        { label: "Terms of Service", path: "#" },
        { label: "Cookie Policy", path: "#" },
        { label: "GDPR", path: "#" },
    ];

    return (
        <footer className="w-full relative overflow-hidden" style={{ background: '#1e1e1e' }}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-64 h-64 bg-core-purple/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-bright-pink/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-strong-blue/10 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container section-padding relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Company Info - Takes 5 columns */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-bright-pink to-pink-400 rounded-2xl flex items-center justify-center">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>BetaHub</h3>
                        </div>

                        <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-md" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                            Building the future with innovative AI solutions and cutting-edge technology. Transform your business with intelligent automation.
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white mb-4" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Why Choose BetaHub?</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-bright-pink flex-shrink-0" />
                                    <span className="text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Enterprise-grade security</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-bright-pink flex-shrink-0" />
                                    <span className="text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>24/7 expert support</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-bright-pink flex-shrink-0" />
                                    <span className="text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Scalable AI solutions</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold text-white mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Quick Links</h4>
                        <ul className="space-y-4">
                            {footerLinks.slice(0, 4).map(({ path, label }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className="text-gray-300 hover:text-bright-pink transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold text-white mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Company</h4>
                        <ul className="space-y-4">
                            {companyLinks.map(({ path, label }) => (
                                <li key={label}>
                                    <Link
                                        to={path}
                                        className="text-gray-300 hover:text-bright-pink transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Takes 3 columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold text-white mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Get in Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-bright-pink mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>123 Innovation Street</p>
                                    <p className="text-white/90" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Tech City, TC 12345</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-bright-pink flex-shrink-0" />
                                <a href="tel:+15551234567" className="text-white/90 hover:text-bright-pink transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                                    +1 (555) 123-4567
                                </a>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-bright-pink flex-shrink-0" />
                                <a href="mailto:hello@betahub.com" className="text-white/90 hover:text-bright-pink transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                                    hello@betahub.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="bg-gradient-to-r from-bright-pink to-pink-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">
                                Get Started
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="text-gray-400 text-center lg:text-left">
                            <p>&copy; 2024 BetaHub. All rights reserved.</p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
                            {legalLinks.map(({ path, label }) => (
                                <Link
                                    key={label}
                                    to={path}
                                    className="text-gray-400 hover:text-bright-pink transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
