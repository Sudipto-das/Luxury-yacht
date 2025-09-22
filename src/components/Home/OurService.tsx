export default function OurService() {

    const serviceData = [{
        title: 'Yacht Rentals', description: 'Choose from our extensive fleet of luxury motor yachts and sailboats for day charters or extended voyages.', icon: './icons/rental.png'
    },
    { title: 'Yacht Club', description: 'Join our exclusive yacht club for premium benefits, priority bookings, and special member events.', icon: './icons/club.png' },
    { title: 'Private Events', description: 'Host unforgettable celebrations, corporate events, or special occasions aboard our luxury vessels.', icon: './icons/events.png' },
    { title: 'Chartered Cruises', description: 'Explore the beautiful coastlines of Greece and Cyprus with our fully crewed, all-inclusive charter packages.', icon: './icons/chartered.png' }]
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">

                <h5 className="text-sm font-medium tracking-widest text-[var(--color-third)]">OUR SERVICES</h5>
                <div className="text-2xl sm:text-3xl font-bold mt-2 text-[var(--color-primary)]">
                    <p>Your Gateway to Exceptional</p>
                    <p>Boating Experiences</p>
                </div>
            </div>


            <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row gap-8 px-4 sm:px-8">
                {/* Left Image */}
                <div className="lg:w-1/2">
                    <img
                        src="./ourservices.jpg"
                        alt="our services"
                        className="w-full h-full object-cover rounded-lg shadow"
                    />
                </div>

                {/* Right Services */}
                <div className="lg:w-1/2 flex flex-col gap-8">
                    {/* Item 1 */}

                    {serviceData.map((data) => (

                        <div className="flex gap-4">
                            <img src={data.icon} alt="" className="w-12 h-12 shrink-0" />
                            <div className="text-left">
                                <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                                <p className="text-gray-600 mt-1">
                                    {data.description}
                                </p>
                                <button className="mt-2 text-blue-700 font-medium hover:underline">
                                    Read more ...
                                </button>
                            </div>
                        </div>

                    ))}




                </div>
            </div>
        </section>
    );
}
