export default function ContactPage() {
    return (
        <div className="flex flex-col items-center">
            <section className="w-full section-white">
                <div className="section-container section-padding-lg">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-core-purple mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                            Get in touch with our team. We'd love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full section-soft-lavender">
                <div className="section-container section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-gray mb-6">Get in Touch</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-core-purple mb-2">Email</h3>
                                    <p className="text-dark-gray">hello@betahub.com</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-core-purple mb-2">Phone</h3>
                                    <p className="text-dark-gray">+1 (555) 123-4567</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-core-purple mb-2">Address</h3>
                                    <p className="text-dark-gray">123 Innovation Street<br />Tech City, TC 12345</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="text-2xl font-semibold text-dark-gray mb-6">Send us a Message</h3>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="form-input w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="form-input w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="form-input w-full"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    className="form-input w-full h-32 resize-none"
                                ></textarea>
                                <button type="submit" className="form-submit w-full">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
