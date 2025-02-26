import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa" // Hamburger Icon from React Icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = _event => {
      if (isOpen) {
        closeMenu()
      }
    }

    window.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      <div className="absolute top-0 justify-left z-20 w-full">
        {/* Lighter Smokey Transparent Background with Blur */}
        <div className="flex justify-between items-center p-2 md:p-3 md:px-6 bg-white bg-opacity-40 backdrop-blur-md">
          {/* Logo */}
          <a href="/" className="flex flex-row items-center">
            {/* Desktop Navigation - Align beside Logo */}
            <nav className="hidden md:flex md:items-center space-x-6 ml-6 pl-6">
              <NavLink
                to={"/"}
                className="text-sm md:text-base text-black-500 hover:text-black-600"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <div className="pt-20"></div>
              <NavLink
                to={"/about-us"}
                className="text-sm md:text-base text-black-500 hover:text-black-600"
              >
                About us
              </NavLink>
              <div className="pt-20"></div>

              <NavLink
                to={"/careers"}
                className="text-sm md:text-base text-black-500 hover:text-black-600"
              >
                Careers
              </NavLink>
              <div className="pt-20"></div>
              <NavLink
                to={"/login"}
                className="text-sm md:text-base text-black-500 hover:text-black-600"
              >
                Log In
              </NavLink>
              <div className="pt-20"></div>
            </nav>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={e => {
                e.stopPropagation()
                toggleMenu()
              }}
              className="text-black hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-0 left-0 right-0 bg-transparent z-20 w-full h-[auto] py-6 transition-all duration-300`}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex flex-col items-center justify-center space-y-4 bg-white bg-opacity-90 rounded-lg shadow-lg mx-4 py-4">
          <NavLink
            to={"/"}
            className="text-lg font-semibold text-gray-700 hover:text-primary-500"
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about-us"}
            className="text-lg font-semibold text-gray-700 hover:text-primary-500"
            onClick={toggleMenu}
          >
            About us
          </NavLink>
          <NavLink
            to={"/publication"}
            className="text-lg font-semibold text-gray-700 hover:text-primary-500"
            onClick={toggleMenu}
          >
            Publication
          </NavLink>
          <NavLink
            to={"/careers"}
            className="text-lg font-semibold text-gray-700 hover:text-primary-500"
            onClick={toggleMenu}
          >
            Careers
          </NavLink>
          <NavLink
            to={"/login"}
            className="text-lg font-semibold text-gray-700 hover:text-primary-500"
            onClick={toggleMenu}
          >
            Log In
          </NavLink>
        </div>
      </div>
    </>
  )
}
