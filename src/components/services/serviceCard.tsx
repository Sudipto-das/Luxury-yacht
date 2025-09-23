type ServiceCardProps = {
    icon: string
    title: string
    description: string
    points: string[]
    buttonText: string
    buttonColor?: string
}

function ServiceCard({ icon, title, description, points, buttonText, buttonColor = "bg-green-600" }: ServiceCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
            {/* Icon */}

            <img src={icon} alt={title} className="w-12 h-12" />


            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

            {/* Bullet Points */}
            <ul className="space-y-2 text-sm text-gray-700">
                {points.map((point, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <img src="./our-service/tick.png" alt="" className="w-5 h-5" />
                        {point}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <div>
                <button
                    className={`${buttonColor} px-4 py-2 mt-4 rounded-md font-medium hover:opacity-90 transition text-[var(--color-primary)] text-sm`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default ServiceCard
