import ServiceCard from "./serviceCard"


function ServicesSection() {
    const services = [
        {
            icon: "./our-service/rentals.png",
            title: "Yacht Rentals",
            description:
                "Choose from our extensive fleet of luxury motor yachts and sailboats for day charters or extended voyages.",
            points: [
                "Variety of yacht sizes from 40ft to 120ft",
                "Professional captain and crew",
                "Flexible rental periods from 4 hours to multiple weeks",
            ],
            buttonText: "Explore Our Fleet",
            buttonColor: "bg-[var(--color-third)]",
        },
        {
            icon: "./our-service/club.png",
            title: "Yacht Club",
            description:
                "Join our exclusive wake club for premium benefits, priority bookings, and special member events.",
            points: [
                "Discounted charter rates for members",
                "Exclusive access to member-only events",
                "Priority booking during peak seasons",
            ],
            buttonText: "Join Our Club",
            buttonColor: "bg-[var(--color-third)]",
        },
        {
            icon: "./our-service/events.png",
            title: "Private Events",
            description:
                "Host unforgettable celebrations, corporate events, or special occasions aboard our luxury vessels.",
            points: [
                "Wedding ceremonies and receptions",
                "Corporate retreats and team building",
                "Milestone celebrations and anniversaries",
            ],
            buttonText: "Plan Your Event",
            buttonColor: "bg-[var(--color-third)]",
        },
        {
            icon: "./our-service/charterd.png",
            title: "Chartered Cruises",
            description:
                "Explore Greece and Cyprus with our fully crewed, all-inclusive packages tailored to your preferences.",
            points: [
                "Customized itineraries based on your interests",
                "Gourmet dining prepared by onboard chef",
                "Access to secluded beaches and private coves",
            ],
            buttonText: "Explore Cruises",
            buttonColor: "bg-[var(--color-third)]",
        },
    ]

    return (
        <section className="bg-white py-16 ">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Your Gateway to Exceptional <br /> Boating Experiences
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        At LuxuryYachts, we offer a comprehensive range of services designed to make your time on the water truly exceptional.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="bg-slate-50 py-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
            </div>
        </section>
    )
}

export default ServicesSection
