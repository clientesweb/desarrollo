import Image from "next/image"
import Link from "next/link"
import { IoIosPlay } from "react-icons/io"

const Hero = () => {
  return (
    <main className="relative w-full flex flex-col md:flex-row items-center justify-between py-[80px] md:py-[100px] px-[5%] bg bg-right-top bg-no-repeat bg-contain">
      <section className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center md:justify-start gap-3">
        <p className="text-[14px] text-primary font-bold special-font" data-aos="fade-down">
          BEST SOLUTIONS FOR YOUR BUSINESS
        </p>
        <h1
          className="text-4xl md:text-5xl xl:text-6xl text-accent font-extrabold w-full lg:w-[80%] text-center md:text-left"
          data-aos="fade-down"
        >
          Transform,
          <span className="relative w-full px-1">
            <span className="relative z-10 w-full gradient-text">innovate</span>
            <Image
              src="/img/line-decore.png"
              width={100}
              height={100}
              alt="line-decore"
              className="absolute bottom-2 right-0 w-full"
              loading="eager"
            />
          </span>
          and elevate your digital presence
        </h1>
        <p
          className="text-[14px] text-muted font-bold w-full lg:w-[80%] xl:w-[65%] text-center md:text-left special-font"
          data-aos="fade-up"
        >
          We craft cutting-edge solutions that blend creativity with technical excellence. Our team of experts delivers
          custom software that drives your business forward.
        </p>

        <div className="flex items-center gap-4 special-font" data-aos="fade-up">
          <a
            href="#category"
            className="py-3 px-5 rounded-md bg-secondary text-white text-[14px] font-bold flex items-center hover:bg-secondary-dark transition-colors duration-300"
          >
            Explore Services
          </a>
          <Link
            href="/"
            className="py-3 px-5 rounded-md text-accent text-[14px] font-bold flex items-center gap-2 hover:shadow-md hover:bg-background-light transition-colors duration-300"
          >
            <IoIosPlay className="text-2xl text-white p-[7px] rounded-full bg-primary" /> Watch Demo
          </Link>
        </div>
      </section>

      <section className="relative mt-5 md:mt-0">
        <Image
          src="/img/hero-image.png"
          width={500}
          height={500}
          alt="heroimg"
          className="dangling-picture"
          loading="eager"
        />
      </section>
    </main>
  )
}

export default Hero

