"use client"

import { GoDotFill } from "react-icons/go"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import Image from "next/image"
import { useState } from "react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  interface TestimonialData {
    img: string
    review: string
    name: string
    company: string
  }

  const testimonialsData: TestimonialData[] = [
    {
      img: "/img/user1.png",
      review:
        "Duality Domain transformó nuestro negocio con sus soluciones innovadoras. La experiencia de su equipo y su dedicación superaron nuestras expectativas en cada etapa.",
      name: "Miguel Torres",
      company: "CTO, TechVision Inc.",
    },
    {
      img: "/img/user2.png",
      review:
        "Trabajar con Duality Domain fue un cambio radical para nuestra empresa. Su conocimiento técnico y atención al detalle entregaron resultados excepcionales.",
      name: "Carlos Tomás",
      company: "CEO de Red Button",
    },
    {
      img: "/img/user3.png",
      review:
        "El soporte al cliente es sobresaliente. Fueron receptivos, profesionales y nos ayudaron a navegar por desafíos técnicos complejos con facilidad.",
      name: "Juan Sánchez",
      company: "CEO de Energize Your Life Co",
    },
  ]

  const handleArrowUpClick = () => {
    if (currentIndex > 0) {
      const newTestimonialsData = [...testimonialsData]
      ;[newTestimonialsData[currentIndex], newTestimonialsData[currentIndex - 1]] = [
        newTestimonialsData[currentIndex - 1],
        newTestimonialsData[currentIndex],
      ]
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleArrowDownClick = () => {
    if (currentIndex < testimonialsData.length - 1) {
      const newTestimonialsData = [...testimonialsData]
      ;[newTestimonialsData[currentIndex], newTestimonialsData[(currentIndex + 1) % testimonialsData.length]] = [
        newTestimonialsData[(currentIndex + 1) % testimonialsData.length],
        newTestimonialsData[currentIndex],
      ]
      setCurrentIndex((currentIndex + 1) % testimonialsData.length)
    }
  }

  const handleDotClick = (index: any) => {
    setCurrentIndex(index)
  }

  return (
    <main className="px-[5%] py-[100px] grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="grid gap-4">
        <p
          className="text-[18px] text-primary font-semibold special-font text-center md:text-left"
          data-aos="fade-down"
        >
          Testimonios
        </p>
        <h1
          className="text-3xl md:text-5xl font-extrabold w-full md:max-w-[70%] text-center md:text-left text-accent"
          data-aos="fade-down"
        >
          Lo Que Dicen Nuestros Clientes.
        </h1>

        <div className="flex items-center gap-2 justify-center md:justify-start" data-aos="slide-right">
          <GoDotFill
            className={`text-2xl ${currentIndex === 0 ? "text-primary" : "text-muted"} cursor-pointer`}
            onClick={() => handleDotClick(0)}
          />
          <GoDotFill
            className={`text-2xl ${currentIndex === 1 ? "text-primary" : "text-muted"} cursor-pointer`}
            onClick={() => handleDotClick(1)}
          />
          <GoDotFill
            className={`text-2xl ${currentIndex === 2 ? "text-primary" : "text-muted"} cursor-pointer`}
            onClick={() => handleDotClick(2)}
          />
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 mt-10 md:mt-0 special-font">
        <div className="relative">
          <div
            className="p-4 rounded-xl shadow-lg bg-primary/10 w-[85%] md:w-[70%] grid gap-3 relative z-10 border border-primary/20"
            data-aos="fade-down"
          >
            <Image
              src={testimonialsData[currentIndex].img || "/placeholder.svg"}
              width={50}
              height={50}
              alt="img"
              className="absolute top-[-30px] left-[100px] md:left-[-20px]"
            />
            <p className="text-[13px] md:text-[15px] text-muted">{testimonialsData[currentIndex].review}</p>

            <h1 className="text-[16px] md:text-[18px] text-primary font-semibold">
              {testimonialsData[currentIndex].name}
            </h1>
            <p className="text-[12px] md:text-[14px] text-muted">{testimonialsData[currentIndex].company}</p>
          </div>

          <div
            className="p-4 rounded-xl shadow-sm border border-primary/10 bg-primary/5 w-[85%] md:w-[70%] grid gap-3 absolute left-[50px] top-[70px]"
            data-aos="fade-down"
          >
            <Image
              src={testimonialsData[(currentIndex + 1) % testimonialsData.length].img || "/placeholder.svg"}
              width={50}
              height={50}
              alt="img"
              className="absolute top-[-30px] left-[100px] md:left-[-20px]"
            />
            <p className="text-[13px] md:text-[15px] text-muted">
              {testimonialsData[(currentIndex + 1) % testimonialsData.length].review}
            </p>

            <h1 className="text-[16px] md:text-[18px] text-primary font-semibold">
              {testimonialsData[(currentIndex + 1) % testimonialsData.length].name}
            </h1>
            <p className="text-[12px] md:text-[14px] text-muted">
              {testimonialsData[(currentIndex + 1) % testimonialsData.length].company}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4" data-aos="slide-right">
          <IoIosArrowUp
            className={`text-2xl ${currentIndex === 0 ? "text-muted" : "text-primary"} cursor-pointer`}
            onClick={handleArrowUpClick}
          />

          <IoIosArrowDown
            className={`text-2xl ${
              currentIndex === testimonialsData.length - 1 ? "text-muted" : "text-primary"
            } cursor-pointer`}
            onClick={handleArrowDownClick}
          />
        </div>
      </section>
    </main>
  )
}

export default Testimonials

