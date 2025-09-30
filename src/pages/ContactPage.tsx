import { Mail, Phone, MapPin, Clock, ArrowRight, User, Building } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        areaOfInterest: '',
        message: '',
        phoneNumber: '',
        acceptTerms: false
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);

        // Simulate form submission
        setIsSubmitted(true);

        // Reset form after 3 seconds (optional)
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                companyName: '',
                areaOfInterest: '',
                message: '',
                phoneNumber: '',
                acceptTerms: false
            });
        }, 5000);
    };
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
                            How can we help?
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            Get in touch with our team to learn how BetaHub can transform your enterprise with AI agents.
                        </p>
                    </div>

                    {/* Contact Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {/* Contact Sales */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Contact Sales</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Provide your contact info and a sales representative will reach out to you shortly.
                            </p>
                            <button className="w-full text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                Contact Sales
                            </button>
                        </div>

                        {/* Watch Product Tour */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                <ArrowRight className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Watch Product Tour</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Experience the many capabilities of BetaHub's AI agent platform in our product tour.
                            </p>
                            <button className="w-full border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-200 hover:text-white transition-all duration-300">
                                Watch Product Tour
                            </button>
                        </div>

                        {/* Book a Demo */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Book a Demo</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Schedule a personalized demo to learn more about BetaHub AI agents.
                            </p>
                            <button className="w-full text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                Book a Demo
                            </button>
                        </div>

                        {/* Get Support */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Get Support</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Email our Support Team to request additional customizations or to resolve issues.
                            </p>
                            <button className="w-full border-2 border-purple-300 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-200 hover:text-white transition-all duration-300">
                                Get Support
                            </button>
                        </div>
                    </div>

                    {/* Contact Form or Success Message */}
                    <div className="max-w-4xl mx-auto mb-16">
                        {!isSubmitted ? (
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#343f52' }}>
                                        Get in Touch
                                    </h3>
                                    <p className="text-lg" style={{ color: '#60697b' }}>
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                                First Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                                Last Name *
                                            </label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email and Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                                Email Address *
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your email address"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Company and Area of Interest */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="companyName" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                                Company Name *
                                            </label>
                                            <div className="relative">
                                                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your company name"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="areaOfInterest" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                                Area of Interest *
                                            </label>
                                            <select
                                                id="areaOfInterest"
                                                name="areaOfInterest"
                                                value={formData.areaOfInterest}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                            >
                                                <option value="">Select an area of interest</option>
                                                <option value="process-acceleration">Process Acceleration</option>
                                                <option value="knowledge-training">Knowledge & Training</option>
                                                <option value="code-technical">Code & Technical</option>
                                                <option value="general-inquiry">General Inquiry</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="support">Support</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#343f52' }}>
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                                            placeholder="Tell us about your project or how we can help you..."
                                        />
                                    </div>

                                    {/* Terms Acceptance */}
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="acceptTerms"
                                            name="acceptTerms"
                                            checked={formData.acceptTerms}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-300"
                                        />
                                        <label htmlFor="acceptTerms" className="text-sm" style={{ color: '#60697b' }}>
                                            I agree to the{' '}
                                            <a href="/privacy-policy" className="text-purple-600 hover:text-purple-700 font-semibold">
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="/terms-of-service" className="text-purple-600 hover:text-purple-700 font-semibold">
                                                Terms of Service
                                            </a>
                                            . By submitting this form, I consent to BetaHub contacting me about their products and services.
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="text-center pt-4">
                                        <button
                                            type="submit"
                                            className="text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:opacity-90"
                                            style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
                                        >
                                            Send Message
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 max-w-2xl mx-auto">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-center" style={{ color: '#343f52' }}>
                                    Thanks for reaching out — we'll get back to you as soon as possible!
                                </h3>
                                <p className="text-sm text-center" style={{ color: '#60697b' }}>
                                    By submitting, you agree to our Privacy Policy.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Our Offices Section */}
            <section className="w-full relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
                            Our Global Presence
                        </h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            BetaHub is a global team, with offices all around the world — from San Francisco to Bangalore
                        </p>
                    </div>

                    {/* Office Locations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* San Francisco, CA | HQ */}
                        <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-200" style={{ color: '#343f52' }}>
                                San Francisco, CA | HQ
                            </h3>
                            <p className="text-sm mb-4" style={{ color: '#60697b' }}>
                                221 Main Street<br />
                                Suite 780<br />
                                San Francisco, CA 94105
                            </p>
                            <div className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
                                Headquarters
                            </div>
                        </div>

                        {/* New York City, NY */}
                        <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors duration-200" style={{ color: '#343f52' }}>
                                New York City, NY
                            </h3>
                            <p className="text-sm mb-4" style={{ color: '#60697b' }}>
                                915 Broadway, Suite 503<br />
                                New York, NY 10010
                            </p>
                            <div className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full inline-block">
                                East Coast
                            </div>
                        </div>

                        {/* Austin, TX */}
                        <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-200" style={{ color: '#343f52' }}>
                                Austin, TX
                            </h3>
                            <p className="text-sm mb-4" style={{ color: '#60697b' }}>
                                515 Congress Ave<br />
                                Suite 1212<br />
                                Austin, TX 78701
                            </p>
                            <div className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
                                Tech Hub
                            </div>
                        </div>

                        {/* Toronto, ON, Canada */}
                        <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors duration-200" style={{ color: '#343f52' }}>
                                Toronto, ON, Canada
                            </h3>
                            <p className="text-sm mb-4" style={{ color: '#60697b' }}>
                                129 Spadina Ave<br />
                                Suite 404<br />
                                Toronto, ON M5V 2L3
                            </p>
                            <div className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full inline-block">
                                North America
                            </div>
                        </div>

                        {/* Bangalore, India */}
                        <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-200" style={{ color: '#343f52' }}>
                                Bangalore, India
                            </h3>
                            <p className="text-sm mb-4" style={{ color: '#60697b' }}>
                                Pebble Beach<br />
                                Embassy Golf Links Business Park<br />
                                Bengaluru, Karnataka 560071
                            </p>
                            <div className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full inline-block">
                                Asia Pacific
                            </div>
                        </div>

                        {/* London, UK */}
                        <div className="group bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600"></div>
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors duration-200" style={{ color: '#343f52' }}>
                                London, UK
                            </h3>
                            <p className="text-sm mb-4" style={{ color: '#60697b' }}>
                                123 Business Street<br />
                                Suite 200<br />
                                London, UK SW1A 1AA
                            </p>
                            <div className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full inline-block">
                                Europe
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full relative overflow-hidden bg-white">
                <div className="section-container section-padding pt-0">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-3xl p-12 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
                            {/* Background decorative elements */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                            </div>

                            <div className="relative z-10">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                                    Join thousands of companies already using BetaHub to transform their business with AI agents.
                                    Start your journey today and see the difference AI can make.
                                </p>

                                {/* Enhanced CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                    <button className="group bg-white text-purple-700 px-10 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center">
                                        <span>Start Free Trial</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                    </button>
                                    <button className="group border-2 border-white text-white px-10 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center">
                                        <span>Contact Sales</span>
                                        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}