"use client"

import { FaWhatsapp } from "react-icons/fa"
import { useState, useEffect } from "react"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <a
      href="https://wa.me/5493546501537"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  )
}

export default WhatsAppButton

