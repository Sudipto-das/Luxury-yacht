import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (route: string) => {
    navigate(route);
    setMenuOpen(false); // close mobile menu after click
  };

  // Menu items
  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Yachts", route: "/yachts" },
    { name: "Services", route: "/services" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact-us" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Top Bar */}
      <div className="bg-[var(--color-primary)] px-4 sm:px-16 py-1 flex justify-between items-center">
        <div className="flex gap-3 sm:gap-4">
          <img src="./icons/fb.png" className="w-3 h-4" />
          <img src="./icons/insta.png" className="w-4 h-4" />
          <img src="./icons/Vector.png" className="w-4 h-4" />
        </div>
        <div className="hidden sm:flex gap-4 text-white font-light text-[0.75rem]">
          <div className="flex gap-1 items-center">
            <img src="./icons/email.png" />
            <p>info@luxuryyachts.com</p>
          </div>
          <div className="flex gap-1 items-center">
            <img src="./icons/email.png" />
            <p>support@luxuryyachts.com</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="py-4 w-full flex justify-between items-center px-4 sm:px-16">
        {/* Logo */}
        <h1 className="font-bold text-[var(--color-primary)] text-xl cursor-pointer" onClick={() => handleNavigate("/")}>
          <span className="text-[var(--color-secondary)]">Luxury</span> Yachts
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-6 text-sm text-[var(--color-primary)]">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-[var(--color-secondary)]"
                onClick={() => handleNavigate(item.route)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex gap-2 items-center bg-[var(--color-secondary)] px-5 py-2 rounded-md text-white">
          <img src="./icons/user.png" className="h-4 w-4" alt="" />
          Sign In
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-[var(--color-primary)]"></span>
          <span className="w-6 h-0.5 bg-[var(--color-primary)]"></span>
          <span className="w-6 h-0.5 bg-[var(--color-primary)]"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white shadow">
          <ul className="flex flex-col gap-3 text-sm text-[var(--color-primary)]">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="cursor-pointer hover:text-[var(--color-secondary)]"
                onClick={() => handleNavigate(item.route)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          <button className="flex gap-2 items-center bg-[var(--color-secondary)] px-5 py-2 rounded-md text-white w-max">
            <img src="./icons/user.png" className="h-4 w-4" alt="" />
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
