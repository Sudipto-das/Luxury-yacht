type CardProps = {
    cardData: {
      img: string
      title: string
      subtitle: string
      size: string
      member: number
      location: string
      rating: number
      price: number
    }
  }
  
  export default function Card({ cardData }: CardProps) {
    return (
      <div className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden flex flex-col ">
        {/* Image */}
        <img src={cardData.img} alt={cardData.title} className="w-full h-48 object-cover" />
  
        
        <div className="p-4 flex flex-col gap-3 flex-1">
          {/* Title */}
          <div className="flex items-center gap-2">
            <h1 className="text-sm font-bold uppercase text-gray-800">{cardData.title}</h1>
            <p className="text-sm text-gray-600">"{cardData.subtitle}"</p>
          </div>
  
          {/* Size / Guests */}
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
              <img src="./icons/scale.png" className="w-4 h-4" alt="size" />
              {cardData.size}
            </div>
            <div className="flex items-center gap-1">
              <img src="./icons/guest.png" className="w-4 h-4" alt="guests" />
              {cardData.member} Guests
            </div>
          </div>
  
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <img src="./icons/location.png" className="w-4 h-4" alt="location" />
            {cardData.location}
          </div>
  
          {/* Rating */}
          <div className="flex items-center gap-1 text-sm text-gray-700">
            {Array.from({ length: 5 }).map((_, i) => (
              <img key={i} src="./icons/star.png" className="w-4 h-4" alt="star" />
            ))}
            <span className="ml-1">{cardData.rating}/5</span>
          </div>
  
          {/* Price + Button */}
          <div className="flex items-center justify-between mt-auto">
            <p className="text-[var(--color-third)] font-bold">€{cardData.price} <span className="text-gray-500 font-normal">/ hr</span></p>
            <button className="bg-[var(--color-secondary)] hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-md">
              More Info
            </button>
          </div>
        </div>
      </div>
    )
  }
  