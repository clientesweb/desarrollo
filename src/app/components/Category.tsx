import Image from "next/image"

const Category = () => {
  interface Category {
    img: string
    header: string
    subheader: string
  }

  const category: Category[] = [
    {
      img: "/img/desarrolloweb.png",
      header: "Desarrollo Web a Medida",
      subheader:
        "Creamos soluciones web personalizadas que se adaptan a las necesidades únicas de tu negocio, desde sitios informativos hasta plataformas complejas.",
    },
    {
      img: "/img/diseñoweb.png",
      header: "Diseño Web Responsivo",
      subheader:
        "Desarrollamos sitios web con diseño adaptativo que garantizan una experiencia óptima en cualquier dispositivo y pantalla.",
    },
    {
      img: "/img/frontend.png",
      header: "Desarrollo Front-End & Back-End",
      subheader:
        "Implementamos tecnologías modernas para crear interfaces atractivas y funcionalidades robustas, asegurando un rendimiento rápido y una experiencia de usuario fluida.",
    },
    {
      img: "/img/ecommerce.png",
      header: "E-Commerce Personalizado",
      subheader:
        "Creamos tiendas online únicas, adaptadas a tus necesidades, con integración de pagos seguros y una experiencia de compra sencilla y efectiva.",
    },
    {
      img: "/img/seo.png",
      header: "Optimización Web y SEO",
      subheader:
        "Mejoramos la velocidad de carga, rendimiento y visibilidad de tu sitio web para asegurar una excelente experiencia de usuario y un alto posicionamiento en los motores de búsqueda.",
    },
    {
      img: "/img/api.png",
      header: "Integración de APIs y Plataformas",
      subheader:
        "Conectamos tu sitio con plataformas y servicios externos mediante integraciones eficientes que amplían las funcionalidades de tu página.",
    },
    {
      img: "/img/consultoria.png",
      header: "Consultoría Digital",
      subheader:
        "Asesoramos sobre las mejores soluciones digitales para tu negocio, ayudándote a crear una estrategia sólida para alcanzar tus objetivos en línea.",
    },
    {
      img: "/img/mantenimiento.png",
      header: "Mantenimiento Web",
      subheader:
        "Ofrecemos soporte continuo y actualizaciones para asegurar que tu sitio web esté siempre funcionando al máximo, con mejoras y actualizaciones de seguridad.",
    },
    {
      img: "/img/aplicación.png",
      header: "Desarrollo de Aplicaciones Web",
      subheader:
        "Creamos aplicaciones web interactivas y funcionales que mejoran la interacción con tus usuarios y optimizan procesos internos.",
    },
    {
      img: "/img/ui.png",
      header: "Investigación y Mejora de UX",
      subheader:
        "Estudiamos el comportamiento de tus usuarios para crear soluciones que mejoren la navegación y la satisfacción general de los visitantes en tu sitio web.",
    },
  ]
  return (
    <main className="relative w-full py-[100px] px-[5%] grid grid-cols-1 gap-4" id="services">
      <section className="flex flex-col items-center text-center gap-4">
        <p className="text-[18px] text-primary font-bold special-font" data-aos="fade-down">
          SERVICIOS
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-accent" data-aos="fade-down">
          Servicios Ofrecidos por Duality Domain
        </h1>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center items-stretch gap-6 lg:gap-8 special-font mt-8">
        {category.map((categories, index) => (
          <div className="relative parent" key={index}>
            <div className="first-child relative flex flex-col items-center p-6 sm:p-4 xl:p-6 rounded-3xl gap-4 z-10 bg-background-light h-full border border-primary/20">
              <div>
                <Image
                  src={categories.img || "/placeholder.svg"}
                  width={60}
                  height={60}
                  alt="img"
                  data-aos="fade-down"
                />
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <h2 className="text-[18px] text-primary font-bold" data-aos="fade-down">
                  {categories.header}
                </h2>
                <p className="text-[14px] text-muted" data-aos="fade-down">
                  {categories.subheader}
                </p>
              </div>
            </div>
            <div className="second-child hidden p-6 lg:p-6 bg-secondary rounded-tl-3xl rounded-br-lg absolute bottom-[-18px] lg:bottom-[-25px] left-[-15px] lg:left-[-20px]"></div>
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

