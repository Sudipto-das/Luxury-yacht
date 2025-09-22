import React from 'react';


interface CharterOption {
    title: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonColor: string;
}

const CharterPricing: React.FC = () => {
    const charterOptions: CharterOption[] = [
        {
            title: "Day Charter",
            price: "€2,500",
            period: "/ day",
            description: "Perfect for day trips and special occasions",
            features: [
                "Up to 8 hours of sailing",
                "Professional captain",
                "Fuel included",
                "Snorkeling equipment",
                "Water and soft drinks"
            ],
            buttonColor: "bg-[var(--color-secondary)] hover:bg-blue-700"
        },
        {
            title: "Weekend Escape",
            price: "€8,500",
            period: "/ weekend",
            description: "Ideal for short getaways and exploration",
            features: [
                "2 days / 1 night onboard",
                "Professional captain and crew",
                "All meals and drinks included",
                "Water sports equipment",
                "Island hopping itinerary",
                "Overnight anchorage"
            ],
            isPopular: true,
            buttonColor: "bg-[var(--color-third)] hover:bg-lime-600"
        },
        {
            title: "Weekly Charter",
            price: "€25,000",
            period: "/ week",
            description: "The ultimate luxury vacation experience",
            features: [
                "7 days / 6 nights onboard",
                "Professional captain and crew",
                "Gourmet chef for all meals",
                "Premium open bar",
                "Customized itinerary",
                "Complete water sports package",
                "Airport transfers"
            ],
            buttonColor: "bg-[var(--color-secondary)] hover:bg-blue-700"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-[var(--color-third)] text-sm font-semibold mb-3 tracking-widest uppercase">
                        PRICING
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        Select Your Perfect Charter
                    </h1>
                    <div className="text-[var(--color-primary)] text-base leading-relaxed">
                        <p>Choose from our range of charter options to suit your needs. All prices include a</p>
                        <p>professional crew, fuel, and amenities to ensure a memorable experience.</p>

                    </div>
                </div>

                {/* Charter Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {charterOptions.map((option, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl shadow-xl p-8 ${option.isPopular
                                ? 'border-2 border-[var(--color-third)] transform '
                                : 'border border-gray-200'
                                }`}
                        >
                            {/* Most Popular Badge */}
                            {option.isPopular && (
                                <div className="absolute -top-0 right-0">
                                    <div className="bg-[var(--color-third)] text-gray-900 px-6 py-2 text-sm font-bold  shadow-md  rounded-tr-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card Content */}
                            <div className=" mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    {option.title}
                                </h3>

                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-blue-600">
                                        {option.price}
                                    </span>
                                    <span className="text-gray-500 text-base ml-2">
                                        {option.period}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-8">
                                    {option.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4 mb-5">
                                {option.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center">

                                        <span className="text-gray-700 text-sm">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Book Now Button */}
                            <button
                                className={`w-full py-4 px-6 rounded-lg text-white font-semibold text-base transition-colors duration-200 ${option.buttonColor}`}
                            >
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharterPricing;