export default function Hero() {
    return (
        <section
            className="relative w-full bg-cover bg-center"
            style={{ backgroundImage: "url('./hero.jpg')" }} // <-- big background image
        >

            <div className=" absolute inset-0 bg-black/20"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-16 flex flex-col md:flex-row items-center md:items-start gap-8">

                <div className="flex-1"></div>

                {/* Right side card */}
                <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-md space-y-5">
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800">
                        Finding the perfect yacht is easy
                    </h2>
                    <p className="text-gray-600 text-sm">
                        Choose from our premium selection of yachts available in Greece and Cyprus
                    </p>


                    <div className="relative">
                        <select
                            className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-gray-700 focus:outline-none"
                        >
                            <option>Select Location</option>
                            <option>Greece</option>
                            <option>Cyprus</option>
                        </select>

                        <img
                            src="./icons/location.png"
                            alt="location"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
                        />
                    </div>



                    <input
                        type="text"
                        placeholder="When?"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none"
                    />


                    <div className="flex gap-4">
                        <button className="flex-1 border border-gray-300 rounded-md py-2 hover:bg-gray-100">
                            <img src="./icons/motor.png" alt="motor" className="inline w-4 h-4 mr-3" />
                            Motor
                        </button>
                        <button className="flex-1 border border-gray-300 rounded-md py-2 hover:bg-gray-100">
                            <img src="./icons/sailboat.png" alt="sailboat" className="inline w-4 h-4 mr-3" />
                            Sailboat
                        </button>
                    </div>


                    <button className="w-full bg-[var(--color-third)] text-gray-800 font-medium rounded-md py-2 hover:bg-[#c1c933] flex justify-center items-center gap-2">
                        <img src="./icons/search.png" alt="search" className="w-4 h-4" />
                        Search
                    </button>


                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                        <div className="flex gap-1">
                            <img src="./icons/star.png" alt="star" className="w-4 h-4" />
                            <img src="./icons/star.png" alt="star" className="w-4 h-4" />
                            <img src="./icons/star.png" alt="star" className="w-4 h-4" />
                            <img src="./icons/star.png" alt="star" className="w-4 h-4" />
                            <img src="./icons/star.png" alt="star" className="w-4 h-4" />
                        </div>
                        <span className="font-semibold">4.9/5</span>
                        <span className="text-gray-500">Based on 2,456 reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
