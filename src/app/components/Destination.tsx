import Image from "next/image"
import { TiLocationArrow } from "react-icons/ti"
import Link from "next/link"

const Destination = () => {
  interface Destination {
    img: string
    location: string
    amount: string
    days: string
    sideImg: string
  }

  const destination: Destination[] = [
    {
      img: "/img/project1.jpg",
      location: "Desarrollo Web",
      amount: "Personalizado",
      days: "Soluciones Full-stack",
      sideImg: "",
    },
    {
      img: "/img/project2.jpg",
      location: "Aplicaciones Móviles",
      amount: "Nativas",
      days: "Opciones Multiplataforma",
      sideImg: "",
    },
    {
      img: "/img/project3.jpg",
      location: "Soluciones Empresariales",
      amount: "Escalables",
      days: "Integración Completa",
      sideImg: "/img/Decore2.png",
    },
    {
      img: "/img/project4.jpg",
      location: "E-Commerce",
      amount: "Optimizado",
      days: "Experiencia de Compra Fluida",
      sideImg: "",
    },
    {
      img: "/img/project5.jpg",
      location: "Plataforma Educativa",
      amount: "Interactiva",
      days: "Aprendizaje Personalizado",
      sideImg: "",
    },
  ]
  return (
    <main className="relative w-full py-[80px] px-[5%] grid grid-cols-1 gap-6" id="projects">
      <section className="flex flex-col items-center text-center gap-4">
        <p className="text-[18px] text-primary font-bold special-font" data-aos="fade-down">
          TRABAJOS DESTACADOS
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-accent" data-aos="fade-down">
          Nuestros Proyectos
        </h1>
      </section>

      <div className="relative w-full mt-8">
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar" data-aos="fade-up">
          {destination.map((destinations, index) => (
            <div className="relative flex-shrink-0 w-[280px] md:w-[320px] snap-start" key={index}>
              <div className="relative z-10 h-full flex flex-col rounded-2xl shadow-sm overflow-hidden">
                <div className="h-[320px] w-[320px]">
                  <Image
                    src={destinations.img || "/placeholder.svg"}
                    width={1080}
                    height={1080}
                    alt="Proyecto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 gap-2 p-4 bg-background-light flex-grow">
                  <div className="text-[18px] text-accent font-medium flex items-center justify-between gap-4">
                    <p>{destinations.location}</p> <p className="text-primary">{destinations.amount}</p>
                  </div>
                  <div className="text-[16px] text-muted font-medium flex items-center gap-1">
                    <TiLocationArrow className="text-secondary text-xl" /> <p>{destinations.days}</p>
                  </div>
                </div>
              </div>

              {destinations.sideImg && (
                <Image
                  src={destinations.sideImg || "/placeholder.svg"}
                  width={80}
                  height={80}
                  alt="Decoración"
                  className="absolute right-[-15px] bottom-[90px]"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="#"
            className="px-8 py-3 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors duration-300 font-medium special-font"
          >
            Ver Todos los Proyectos
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Destination

