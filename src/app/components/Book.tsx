import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"

const Book = () => {
  return (
    <main className="px-[5%] py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-6" id="about">
      <section className="grid grid-cols-1 gap-4">
        <p className="text-[16px] text-primary font-bold text-center md:text-left special-font" data-aos="fade-down">
          Simple & Efficient
        </p>
        <h1
          className="text-accent text-3xl md:text-5xl text-center md:text-left font-extrabold w-full md:max-w-[500px]"
          data-aos="fade-down"
        >
          Our Development Process in 3 Easy Steps
        </h1>

        <div className="flex items-center gap-2 special-font">
          <div>
            <Image src="/img/choose.png" width={40} height={40} alt="img" data-aos="fade-down" />
          </div>
          <div>
            <h2 className="text-[16px] text-primary font-bold" data-aos="fade-down">
              Discovery & Planning
            </h2>
            <p className="text-[16px] text-muted font-normal max-w-[300px]" data-aos="fade-down">
              We analyze your requirements and create a detailed roadmap for your project's success.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 special-font">
          <div>
            <Image src="/img/make.png" width={40} height={40} alt="img" data-aos="fade-down" />
          </div>
          <div>
            <h2 className="text-[16px] text-primary font-bold" data-aos="fade-down">
              Development & Testing
            </h2>
            <p className="text-[16px] text-muted font-normal max-w-[300px]" data-aos="fade-down">
              Our expert team builds your solution with rigorous quality assurance at every stage.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 special-font">
          <div>
            <Image src="/img/reach.png" width={40} height={40} alt="img" data-aos="fade-down" />
          </div>
          <div>
            <h2 className="text-[16px] text-primary font-bold" data-aos="fade-down">
              Deployment & Support
            </h2>
            <p className="text-[16px] text-muted font-normal max-w-[300px]" data-aos="fade-down">
              We launch your project and provide ongoing maintenance to ensure optimal performance.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mt-20 md-mt-0 special-font">
        <div
          className="p-4 rounded-2xl shadow-md w-[90%] md:max-w-[70%] grid grid-cols-1 gap-4 relative z-10 bg-background-light border border-primary/20"
          data-aos="zoom-in"
        >
          <div className="w-full">
            <Image src="/img/trip.jpg" width={300} height={300} alt="img" className="w-full" />
          </div>

          <div className="grid gap-2 relative bg-background-light w-full">
            <h2 className="text-accent text-[18px] font-bold">Project Dashboard</h2>
            <div className="flex items-center gap-2 text-[16px] text-muted">
              <p>Real-time Updates</p>
              <p>by Duality Domain</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-background p-3 rounded-full">
                <Image src="/img/leaf.png" width={10} height={10} alt="img" className="cursor-pointer" />
              </div>
              <div className="bg-background p-3 rounded-full">
                <Image src="/img/map.png" width={10} height={10} alt="img" className="cursor-pointer" />
              </div>
              <div className="bg-background p-3 rounded-full">
                <Image src="/img/send.png" width={10} height={10} alt="img" className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src="/img/building.png" width={15} height={15} alt="img" />
                <p className="text-[16px] text-muted">24 active projects</p>
              </div>

              <FaRegHeart className="text-lg text-secondary cursor-pointer" />
            </div>

            <div
              className="p-4 rounded-2xl shadow-md max-w-[500px] absolute right-[-60px] bottom-6 bg-background-light border border-primary/20"
              data-aos="slide-right"
            >
              <div className="flex items-start justify-start gap-2">
                <div>
                  <Image src="/img/ongoing.png" width={30} height={30} alt="img" className="rounded-full" />
                </div>
                <div>
                  <p className="text-[14px] text-muted">In Progress</p>
                  <h2 className="text-[18px] text-accent font-bold">E-Commerce Platform</h2>

                  <div>
                    <p className="text-[14px] text-accent font-bold">
                      <span className="text-primary">75%</span> completed
                    </p>

                    <div className="h-[6px] bg-background w-full rounded-2xl">
                      <div className="bg-primary h-[6px] rounded-2xl w-[75%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/img/blue-shadow.png"
          width={600}
          height={600}
          alt="img"
          className="absolute top-[-100px] md:top-[-130px] right-[-20px] md:right-0"
        />
      </section>
    </main>
  )
}

export default Book

