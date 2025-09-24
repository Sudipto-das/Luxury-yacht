import { useState } from 'react';

function CXreview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Emma M.",
      rating: 5,
      text: "Perfect day out with friends! The yacht was luxurious and comfortable, and the captain knew all the best spots to visit along the coast."
    },
    {
      id: 2,
      name: "Michael R.",
      rating: 4,
      text: "An unforgettable experience! The crew was professional and friendly, making our family celebration truly special. Will definitely book again."
    },
    {
      id: 3,
      name: "Sarah K.",
      rating: 5,
      text: "Absolutely amazing! The service was top-notch and the views were breathtaking. Highly recommend for special occasions."
    },
    {
      id: 4,
      name: "David L.",
      rating: 5,
      text: "Exceeded all expectations. The yacht was pristine and the crew went above and beyond to make our trip memorable."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const getVisibleReviews = () => {
    if (window.innerWidth < 768) {
      // Mobile: only 1 review
      return [reviews[currentSlide]];
    } else {
      // Desktop: 2 reviews
      const first = currentSlide % reviews.length;
      const second = (currentSlide + 1) % reviews.length;
      return [reviews[first], reviews[second]];
    }
  };

  return (
    <div className="bg-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="./icons/locate.png" alt="" />
            <h2 className="text-white text-2xl font-semibold">Customer Reviews</h2>
          </div>
        </div>

        {/* Reviews Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>

          {/* Review Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {getVisibleReviews().map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-6 w-full sm:max-w-md shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>
                
                {/* Customer Name */}
                <div className="mb-4">
                  <span className="font-semibold text-gray-800 text-lg">
                    {review.name}
                  </span>
                </div>
                
                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: reviews.length }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CXreview;
