

function Navbar() {
    return (
        <div className="flex flex-col w-full">
            <div className="bg-[var(--color-primary)] px-16 py-1 flex justify-between">

                <div className="flex gap-4">
                    <img src="./icons/fb.png" className="w-3 h-4" />
                    <img src="./icons/insta.png" className="w-4 h-4" />
                    <img src="./icons/Vector.png" className="w-4 h-4" />
                </div>
                <div className="flex gap-2 text-white font-light text-[0.75rem]">
                    <div className="flex gap-1 items-center"><img src="./icons/email.png" /><p>info@luxuryyachts.com</p></div>
                    <div className="flex gap-1 items-center"><img src="./icons/email.png" /><p>info@luxuryyachts.com</p></div>
                </div>

            </div>
            <div className="py-4 w-full flex justify-between px-18">
                <h1 className="font-bold text-[var(--color-primary)] text-xl"><span className="text-[var(--color-secondary)]">Luxury</span> Yachts</h1>
                <div >
                    <ul className="flex gap-6 text-sm text-[var(--color-primary)]">
                        <li>Home</li>
                        <li>Yachts</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <button className="flex gap-2 items-center bg-[var(--color-secondary)] px-5 py-2 rounded-md text-white">
                    <img src="./icons/user.png" className="h-4 w-4" alt="" />
                    Sign In
                </button>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;