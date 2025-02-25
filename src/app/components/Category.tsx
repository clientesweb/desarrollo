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
      header: "Analítica Avanzada",
      subheader:
        "Información basada en datos para ayudarte a tomar decisiones informadas y optimizar tus procesos de negocio",
    },
    {
      img: "/img/flight.png",
      header: "Desarrollo Personalizado",
      subheader: "Soluciones de software a medida diseñadas para abordar los desafíos únicos de tu negocio",
    },
    {
      img: "/img/event.png",
      header: "Soluciones en la Nube",
      subheader: "Infraestructura en la nube escalable y segura para potenciar tus aplicaciones y servicios",
    },
    {
      img: "/img/settings.png",
      header: "Integración de IA",
      subheader: "Soluciones de inteligencia artificial de vanguardia para automatizar y mejorar tus operaciones",
    },
  ]
  return (
    <main className="relative w-full py-[100px] px-[5%] grid grid-cols-1 gap-4" id="services">
      <section className="flex flex-col items-center text-center gap-4">
        <p className="text-[18px] text-primary font-bold special-font" data-aos="fade-down">
          SERVICIOS
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-accent" data-aos="fade-down">
          Ofrecemos Soluciones Expertas
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

