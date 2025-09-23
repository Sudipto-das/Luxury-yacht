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
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, reviews.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.max(1, reviews.length - 1)) % Math.max(1, reviews.length - 1));
  };

  const renderStars = (rating:any) => {
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
    if (reviews.length <= 2) return reviews;
    
    const visible = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentSlide + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Review Cards */}
          <div className="flex gap-6 justify-center">
            {getVisibleReviews().map((review, index) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg"
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
          {Array.from({ length: Math.max(1, reviews.length - 1) }, (_, index) => (
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