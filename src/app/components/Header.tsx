"use client"

import Link from "next/link"
import Image from "next/image"
import { IoMenu } from "react-icons/io5"
import { IoClose } from "react-icons/io5"
import { useState, useEffect, useCallback } from "react"

const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const [headerBackground, setHeaderBackground] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    if (scrollY > 0) {
      setHeaderBackground("bg-navy/95 backdrop-blur-sm shadow-lg")
    } else {
      setHeaderBackground("")
    }
  }, [scrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`py-4 px-[5%] top-0 w-full fixed flex items-center justify-between z-20 transition-all duration-300 ${headerBackground}`}
    >
      <Link href="/" className="w-[120px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-duality-domain-2ZIFufXwTKd3Fzj0u77wZHwmsPcHRg.png"
          width={120}
          height={60}
          alt="Duality Domain"
          className="w-full"
          priority
        />
      </Link>

      <section
        className={`${isMenuOpen ? "left-0" : "left-[-100%]"} nav-transition md:transition-none absolute top-[72px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] font-medium bg-navy/95 md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto backdrop-blur-sm md:backdrop-blur-none`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-6 lg:gap-8">
          <a href="#destination" className="text-gray-200 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            Destinations
          </a>
          <a href="#" className="text-gray-200 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            Hotels
          </a>
          <a href="#" className="text-gray-200 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            Flights
          </a>
          <a href="#bookings" className="text-gray-200 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            Bookings
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-6 lg:gap-8 mt-6 md:mt-0">
          <a href="#" className="text-gray-200 hover:text-cyan-400 transition-colors" onClick={toggleMenu}>
            Login
          </a>
          <a
            href="#"
            className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded hover:bg-orange-500 hover:text-white transition-colors"
            onClick={toggleMenu}
          >
            Sign up
          </a>

          <select className="bg-transparent text-gray-200 border-none outline-none cursor-pointer">
            <option value="EN" className="bg-navy text-gray-200">
              EN
            </option>
            <option value="AR" className="bg-navy text-gray-200">
              AR
            </option>
            <option value="SP" className="bg-navy text-gray-200">
              SP
            </option>
          </select>
        </div>
      </section>

      {isMenuOpen ? (
        <IoClose className="block md:hidden text-4xl text-orange-500 cursor-pointer" onClick={toggleMenu} />
      ) : (
        <IoMenu className="block md:hidden text-4xl text-orange-500 cursor-pointer" onClick={toggleMenu} />
      )}
    </nav>
  )
}

export default Header

