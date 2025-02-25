import Image from "next/image"
import { IoMailOutline } from "react-icons/io5"

const Subscribe = () => {
  return (
    <main className="relative py-[100px] px-[5%] special-font" id="contact">
      <section className="relative p-4 md:p-8 rounded-lg rounded-tl-3xl flex flex-col gap-10 items-center justify-center bg-background-light h-[300px] z-10 border border-primary/20">
        <p
          className="text-xl md:text-3xl font-bold text-accent w-full md:w-[75%] text-center relative z-10"
          data-aos="fade-down"
        >
          Subscribe to get updates on our latest projects and tech insights
        </p>

        <div className="flex items-center justify-center gap-2 w-full relative z-10" data-aos="fade-down">
          <label htmlFor="" className="relative w-full md:w-[50%]">
            <input
              type="text"
              placeholder="Your email"
              className="relative border-none outline-none bg-background/50 text-accent rounded-lg py-3 pl-12 pr-4 w-full text-[15px] font-normal"
            />
            <IoMailOutline className="absolute text-primary text-3xl top-2 left-2" />
          </label>
          <button className="bg-secondary text-[15px] py-3 px-5 text-white font-medium rounded-lg hover:bg-secondary-dark transition-colors duration-300">
            Subscribe
          </button>
        </div>

        <Image
          src="/img/ring-bottom.png"
          width={300}
          height={300}
          alt="img"
          className="absolute bottom-0 left-[-60px]"
        />
        <Image src="/img/ring-top.png" width={180} height={180} alt="img" className="absolute top-0 right-0" />
        <Image
          src="/img/sub.png"
          width={40}
          height={40}
          alt="img"
          className="absolute top-[-15px] right-[-15px]"
          data-aos="slide-right"
        />
      </section>

      <Image
        src="/img/grid-bottom.png"
        width={80}
        height={80}
        alt="img"
        className="absolute bottom-[60px] right-0 md:right-[20px]"
      />
    </main>
  )
}

export default Subscribe

