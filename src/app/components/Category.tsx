import Image from "next/image"

const Category = () => {
  interface Category {
    img: string
    header: string
    subheader: string
  }

  const category: Category[] = [
    {
      img: "/img/weather.png",
      header: "Advanced Analytics",
      subheader: "Data-driven insights to help you make informed decisions and optimize your business processes",
    },
    {
      img: "/img/flight.png",
      header: "Custom Development",
      subheader: "Tailored software solutions designed to address your unique business challenges",
    },
    {
      img: "/img/event.png",
      header: "Cloud Solutions",
      subheader: "Scalable and secure cloud infrastructure to power your applications and services",
    },
    {
      img: "/img/settings.png",
      header: "AI Integration",
      subheader: "Cutting-edge artificial intelligence solutions to automate and enhance your operations",
    },
  ]
  return (
    <main className="relative w-full py-[100px] px-[5%] grid grid-cols-1 gap-4" id="services">
      <section className="flex flex-col items-center text-center gap-4">
        <p className="text-[18px] text-primary font-bold special-font" data-aos="fade-down">
          SERVICES
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-accent" data-aos="fade-down">
          We Offer Expert Solutions
        </h1>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center items-stretch gap-6 lg:gap-10 special-font">
        {category.map((categories, index) => (
          <div className="relative parent" key={index}>
            <div className="first-child relative flex flex-col items-center p-10 sm:p-4 xl:p-10 rounded-3xl gap-4 z-10 bg-background-light h-full border border-primary/20">
              <div>
                <Image
                  src={categories.img || "/placeholder.svg"}
                  width={100}
                  height={100}
                  alt="img"
                  data-aos="fade-down"
                />
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-[20px] text-primary font-bold" data-aos="fade-down">
                  {categories.header}
                </h2>
                <p className="text-[16px] text-muted" data-aos="fade-down">
                  {categories.subheader}
                </p>
              </div>
            </div>
            <div className="second-child hidden p-6 lg:p-8 bg-secondary rounded-tl-3xl rounded-br-lg absolute bottom-[-18px] lg:bottom-[-25px] left-[-15px] lg:left-[-20px]"></div>
          </div>
        ))}
      </section>

      <Image
        src="/img/grid.png"
        width={100}
        height={100}
        alt="grid"
        className="w-[18%] md:w-[8%] absolute top-[70px] right-5 lg:right-20"
      />
    </main>
  )
}

export default Category

