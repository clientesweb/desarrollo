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
      setHeaderBackground("bg-background/95 backdrop-blur-sm shadow-lg")
    } else {
      setHeaderBackground("bg-transparent")
    }
  }, [scrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav
      className={`py-5 px-[5%] top-0 w-full fixed flex items-center justify-between z-20 ${headerBackground} transition-all duration-300 special-font`}
    >
      <Link href="/" className="w-[80px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-duality-domain-r6m55SQWTLflCkvPu7WmEi9dgTru6x.png"
          width={80}
          height={80}
          alt="Duality Domain Logo"
          className="w-full"
          loading="eager"
        />
      </Link>

      <section
        className={`${isMenuOpen ? "left-0" : "left-[-100%]"} nav-transition md:transition-none absolute top-[68px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] text-accent font-bold bg-background/95 md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto backdrop-blur-sm md:backdrop-blur-none`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8">
          <a href="#services" className="hover:text-primary transition-colors duration-200">
            Servicios
          </a>
          <a href="#projects" className="hover:text-primary transition-colors duration-200">
            Proyectos
          </a>
          <a href="#about" className="hover:text-primary transition-colors duration-200">
            Nosotros
          </a>
          <a href="#contact" className="hover:text-primary transition-colors duration-200">
            Contacto
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 mt-4 md:mt-0">
          <a
            href="#"
            className="px-6 py-2 bg-primary text-background hover:bg-primary-dark transition-colors duration-200 rounded-md"
          >
            Comenzar
          </a>
        </div>
      </section>

      {isMenuOpen ? (
        <IoClose className="block md:hidden text-4xl text-primary cursor-pointer" onClick={toggleMenu} />
      ) : (
        <IoMenu className="block md:hidden text-4xl text-primary cursor-pointer" onClick={toggleMenu} />
      )}
    </nav>
  )
}

export default Header

