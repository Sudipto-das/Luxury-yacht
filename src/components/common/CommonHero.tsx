type HeroProps = {
    img: string;
    title: string;
    subtitle: string
}

function CommonHero({ img, title, subtitle }: HeroProps) {
    return (
        <div className="relative w-full bg-cover bg-center h-[50vh] flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${img})` }}
        >
           
            <div className="absolute inset-0 bg-black/50"></div>

           
            <div className="relative z-10 text-center">
                <h1 className="text-3xl font-bold text-white">{title}</h1>
                <p className="text-sm font-light text-white mt-2">{subtitle}</p>
            </div>
        </div>
    )
}

export default CommonHero