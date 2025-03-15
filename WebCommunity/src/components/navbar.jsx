import '../App.css'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-evenly gap-4 md:gap-13 lg:gap-10 items-center px-6 md:px-12 lg:px-24 py-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1884FF] whitespace-nowrap">
          Himit<span className="text-[#0050AA]">Community</span>
        </h2>

        <ul className="hidden md:flex gap-8 lg:gap-14 font-medium text-lg">
          <li className=' hover:text-blue-700'><Link to="/">Beranda</Link></li>
          <li className=' hover:text-blue-700'><Link to="/KomunitasTeknologi">Komunitas Teknologi</Link></li>
          <li className=' hover:text-blue-700'><Link to="/KomunitasOlahraga">Komunitas Olahraga</Link></li>
          <li className=' hover:text-blue-700'><Link to="/Event">Event</Link></li>
        </ul>

        <button className="md:hidden text-3xl" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <ul
        className={`md:hidden flex flex-col items-center gap-6 py-6 bg-white/90 backdrop-blur-md absolute w-full top-16 left-0 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li><Link to="/" onClick={toggleMenu}>Beranda</Link></li>
        <li><Link to="/KomunitasTeknologi" onClick={toggleMenu}>Komunitas Teknologi</Link></li>
        <li><Link to="/KomunitasOlahraga" onClick={toggleMenu}>Komunitas Olahraga</Link></li>
        <li><Link to="/Event" onClick={toggleMenu}>Event</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
