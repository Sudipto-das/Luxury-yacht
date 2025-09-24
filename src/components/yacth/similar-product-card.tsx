import { MapPin, Users, Clock } from "lucide-react"

interface ProductProps {
    image: string
    title: string
    size: number
    place: string
    time: string
    price: string
}

const ProductCard = ({ image, title, size, place, time, price }: ProductProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full">
            {/* Image */}
            <img src={image} alt={title} className="h-48 w-full object-cover" />

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-center text-[var(--color-primary)]">{title}</h2>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1 flex-col">
                        <img src="./icons/love.png" className="h-3 w-3" alt="" />
                        <span>{size} ft</span>
                    </div>
                    <div className="flex items-center gap-1 flex-col">
                        <Users size={16} /> <span>10 Guests</span>
                    </div>
                    <div className="flex items-center gap-1 flex-col">
                        <Clock size={16} /> <span>{time}</span>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-sm text-gray-600 justify-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{place}</span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-3">
                    <span className="text-[var(--color-third)] font-bold">{price}</span>
                    <button className="bg-[var(--color-third)]  hover:bg-lime-600  text-sm px-4 py-2 rounded-md text-[var(--color-primary)]">
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function SimilarProductCard() {
    const products: ProductProps[] = [
        {
            image: "./boat1.jpg",
            title: `DORAL "Mia Boat"`,
            size: 28,
            place: "Cancun, Mexico",
            time: "4 hr / 8 hrs",
            price: "€500  "
        },
        {
            image: "./boat2.jpg",
            title: `Sea Ray "Makech Boat"`,
            size: 28,
            place: "Cancun, Mexico",
            time: "4 hr / 8 hrs",
            price: "€500  "
        },
        {
            image: "./boat3.jpg",
            title: `Sea Ray "Mia Boat"`,
            size: 28,
            place: "Cancun, Mexico",
            time: "4 hr / 8 hrs",
            price: "€500 "
        }
    ]

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-6">
            <h1 className="text-lg font-semibold">Check availability of similar boats</h1>
            {/* Grid layout for equal width */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
            <div className="flex justify-center mb-5">

                <button className="p-3 text-sm rounded-md bg-[var(--color-third)] text-[var--color-primary] ">View more boats</button>
            </div>
        </div>
    )
}
