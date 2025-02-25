"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const Sponsors = () => {
  interface SponsorsLogo {
    img: string
  }

  const sponsorsLogo: SponsorsLogo[] = [
    { img: "/img/axon.png" },
    { img: "/img/jetstar.png" },
    { img: "/img/expedia.png" },
    { img: "/img/qantas.png" },
    { img: "/img/alitalia.png" },
  ]

  const trackRef = useRef<HTMLDivElement>(null)
  const duplicateRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const setupAnimation = () => {
      if (!trackRef.current || !duplicateRef.current) return

      // Clone the original items to the duplicate track for seamless scrolling
      const cloneItems = () => {
        if (!trackRef.current || !duplicateRef.current) return
        duplicateRef.current.innerHTML = trackRef.current.innerHTML
      }

      cloneItems()

      // Set up the animation
      const animate = () => {
        if (!trackRef.current || !duplicateRef.current) return

        if (trackRef.current.offsetWidth <= 0) return

        const trackWidth = trackRef.current.offsetWidth
        let currentPosition = 0

        const step = () => {
          if (!trackRef.current || !duplicateRef.current) return

          currentPosition -= 1

          // Reset position for infinite loop
          if (currentPosition <= -trackWidth) {
            currentPosition = 0
          }

          // Apply the transform
          trackRef.current.style.transform = `translateX(${currentPosition}px)`
          duplicateRef.current.style.transform = `translateX(${currentPosition}px)`

          requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
      }

      animate()
    }

    setupAnimation()
  }, [])

  return (
    <main className="py-[60px] px-[5%] overflow-hidden">
      <div className="sponsors-container">
        <div className="sponsors-track" ref={trackRef}>
          {sponsorsLogo.map((sponsor, index) => (
            <div
              key={`original-${index}`}
              className="inline-block p-4 mx-8 bg-background-light rounded-xl border border-primary/10 shadow-sm"
              data-aos="zoom-in"
            >
              <Image
                src={sponsor.img || "/placeholder.svg"}
                width={120}
                height={80}
                alt="Sponsor logo"
                className="h-[60px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="sponsors-track-duplicate" ref={duplicateRef}></div>
      </div>
    </main>
  )
}

export default Sponsors

