import { useState } from 'react';
import { MapPin, ChevronDown, Filter } from 'lucide-react';
import Card from '../common/Card';

function YachtListingPage() {
    // @ts-ignore
    const [selectedLocation, setSelectedLocation] = useState('All Locations');
    // @ts-ignore
    const [selectedYachtType, setSelectedYachtType] = useState('Yacht Type');
    // @ts-ignore
    const [selectedPriceRange, setSelectedPriceRange] = useState('Price: Low to High');

    

    const yachtsData = [
        {
            img: "./yatchs-list/yt1.jpg",
            title: "ATHENA",
            subtitle: "Luxury Motor Yacht",
            size: "75 ft",
            member: 10,
            location: "Athens, Greece",
            rating: 4.8,
            price: 1200
        },
        {
            img: "./yatchs-list/yt2.jpg",
            title: "POSEIDON",
            subtitle: "Sport Cruiser",
            size: "62 ft",
            member: 8,
            location: "Limassol, Cyprus",
            rating: 4.9,
            price: 900
        },
        {
            img: "./yatchs-list/yt3.jpg",
            title: "CALYPSO",
            subtitle: "Prestige Yacht",
            size: "85 ft",
            member: 12,
            location: "Mykonos, Greece",
            rating: 4.7,
            price: 1500
        },
        {
            img: "./yatchs-list/yt4.jpg",
            title: "HELIOS",
            subtitle: "Mega Yacht",
            size: "110 ft",
            member: 16,
            location: "Paphos, Cyprus",
            rating: 5.0,
            price: 2200
        },
        {
            img: "./yatchs-list/yt1.jpg",
            title: "NEPTUNE",
            subtitle: "Power Catamaran",
            size: "65 ft",
            member: 12,
            location: "Santorini, Greece",
            rating: 4.7,
            price: 1100
        },
        {
            img: "./yatchs-list/yt2.jpg",
            title: "ARTEMIS",
            subtitle: "Luxury Sailboat",
            size: "80 ft",
            member: 8,
            location: "Rhodes, Greece",
            rating: 4.9,
            price: 1300
        }
    ];

    return (
        <div className="min-h-screen">


            {/* Top Filter Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    {/* Filters Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Location Filter - Left */}
                        <div className="relative flex gap-1 items-center w-full md:w-auto">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <button className="flex justify-between items-center gap-2 w-full md:w-auto px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:border-gray-400 transition-colors">
                                <span className="text-sm">{selectedLocation}</span>
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>

                        {/* Yacht Type + Price Filters - Right */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto">
                            {/* Yacht Type */}
                            <div className="relative flex gap-1 items-center w-full sm:w-auto">
                                <Filter className="w-4 h-4 text-blue-500" />
                                <button className="flex justify-between items-center gap-2 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:border-gray-400 transition-colors">
                                    <span className="text-sm">{selectedYachtType}</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>

                            {/* Price Range */}
                            <div className="relative flex gap-1 items-center w-full sm:w-auto">
                                <img src="./icons/price.png" alt="" className="h-4 w-4" />
                                <button className="flex justify-between items-center gap-2 w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-sm text-gray-700 hover:border-gray-400 transition-colors">
                                    <span className="text-sm">{selectedPriceRange}</span>
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Cards Section */}
            <div className="bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="mb-6">
                        <p className="text-gray-600 text-sm">
                            {yachtsData.length} yachts available for your search criteria
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {yachtsData.map((yacht) => (
                            <Card cardData={yacht} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YachtListingPage;
