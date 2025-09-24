import { useState } from 'react';
import { Star, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function YachtCharterBooking() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const navigate = useNavigate()
  const GotoCheckout = () => {
    navigate('/checkout')
}
  return (
    <div className="bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[var(--color-secondary)] mb-6">
          <span className="hover:underline cursor-pointer">Boat rentals</span>
          <span className="text-gray-400">›</span>
          <span className="text-[var(--color-secondary)]">Charter a boat in Cyprus</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Title and Rating */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                Yacht charter in Latsi - Parker — Bow Rider 630 (2025)
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[var(--color-third)] text-[var(--color-third)]" />
                  ))}
                </div>

                <span className="text-sm text-gray-600">(50 reviews)</span>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    With or without a skipper
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    Professional
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    Latsi Harbour
                  </span>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 mb-6 h-120">
              {/* Main large image */}
              <div className="col-span-2 row-span-2 relative">
                <img
                  src="./yatch/img1.png"
                  alt="Yacht main view"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Four small images */}
              <div className="col-span-1">
                <img
                  src="./yatch/img2.png"
                  alt="Yacht interior"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="./yatch/img3.png"
                  alt="Yacht in action"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="./yatch/img4.png"
                  alt="Yacht deck"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <img
                  src="./yatch/img5.png"
                  alt="People enjoying"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Skipper Info */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-[var(--color-third)]" />
              <span>With or without a skipper</span>
            </div>
          </div>

          {/* Right Sidebar - Booking Panel */}
          <div className="lg:col-span-1 lg:sticky md:top-16 md:mt-24">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Add dates section */}
              <div className="mb-6">
                <h3 className="text-base font-semibold mb-3 text-[var(--color-primary)]">
                  Add dates for prices
                </h3>

                {/* Rating display */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-3 h-3 fill-[var(--color-third)] text-[var(--color-third)]" />
                  <span className="font-medium text-sm">4.9</span>
                  <span className="text-gray-600 text-sm">(500)</span>
                </div>

                {/* Date inputs */}
                <div className="space-y-3 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dates:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Check-in"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Check-out"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full px-3 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Check Availability Button */}
                <button className="w-full bg-[var(--color-secondary)] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg mb-4 transition-colors">
                  Check Availability
                </button>

                {/* OR divider */}
                <div className="text-center text-gray-400 text-sm mb-4">OR</div>

                {/* Book Button */}
                <button onClick={GotoCheckout} className="w-full bg-[var(--color-third)] hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg mb-4 transition-colors">
                  Book
                </button>

                {/* Disclaimer */}
                <p className="text-xs text-[var(--color-primary)] text-center mb-6">
                  You will only be charged if the request is accepted
                </p>

                {/* Price link */}
                <div className="text-center">
                  <a href="#" className="text-[var(--color-third)] text-sm hover:underline">
                    See the price list
                  </a>
                </div>

                {/* Payment options */}
                <div className="border-t pt-4 mt-6">
                  <p className="text-xs text-[var(--color-primary)] mb-3">
                    Pay in 3 or 4 installments without fees with
                  </p>
                  <div className="flex items-center justify-between text-[var(--color-primary)] text-xs">
                    <div className="font-medium p-2 bg-slate-100 rounded-md">Klarna</div>
                    <div className="font-medium p-2 bg-slate-100 rounded-md">PayPal</div>
                    <div className="font-medium p-2 bg-slate-100 rounded-md">Alma</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> {/* end grid */}
      </div>
    </div>
  );
}

export default YachtCharterBooking;
