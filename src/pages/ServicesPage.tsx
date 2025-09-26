export default function ServicesPage() {
    return (
        <div className="flex flex-col items-center">
            <section className="w-full section-white">
                <div className="section-container section-padding-lg">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-core-purple mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-dark-gray max-w-3xl mx-auto">
                            Comprehensive solutions designed to help you succeed in the digital world.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full section-soft-lavender">
                <div className="section-container section-padding">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-dark-gray mb-8">Coming Soon</h2>
                        <p className="text-xl text-muted-purple">We're working on something amazing!</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
