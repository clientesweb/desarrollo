"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Aperture, Cpu, Database, Globe, Layers, Shield } from "lucide-react"

const Sponsors = () => {
  interface SponsorLogo {
    icon: React.ElementType
    name: string
  }

  const sponsorsLogo: SponsorLogo[] = [
    { icon: Aperture, name: "TechVision" },
    { icon: Cpu, name: "CoreSystems" },
    { icon: Database, name: "DataSphere" },
    { icon: Globe, name: "WebWorks" },
    { icon: Layers, name: "StackInnovate" },
    { icon: Shield, name: "SecureNet" },
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
              className="inline-block p-6 mx-8 bg-background-light rounded-xl border border-primary/10 shadow-sm"
              data-aos="zoom-in"
            >
              <div className="flex flex-col items-center justify-center">
                <sponsor.icon className="w-16 h-16 text-primary" />
                <span className="mt-2 text-sm font-medium text-accent">{sponsor.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="sponsors-track-duplicate" ref={duplicateRef}></div>
      </div>
    </main>
  )
}

export default Sponsors

