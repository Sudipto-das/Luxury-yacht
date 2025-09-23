

function SubFooter() {
    const renderStars = (rating: any) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`text-xl ${index < rating ? 'text-white' : 'text-gray-300'}`}
            >
                ★
            </span>
        ));
    };
    return (
        <div className="bg-[var(--color-secondary)] w-full p-5">
            <div className="flex flex-col items-center">
                
                <img src="./icons/tripadvisor.png" className=" w-32 h-16" alt="" />
                <p className="text-white text-xl font-bold">Find us on TripAdvisor</p>
                <div className="flex gap-1">
                    {renderStars(5)}
                </div>
                <p className="text-sm text-white">Rated "Excelent" Based on 300+ reviews</p>
            </div>
        </div>
    )
}

export default SubFooter