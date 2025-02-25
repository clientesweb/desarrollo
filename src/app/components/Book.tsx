import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"
import { Search, Code, Rocket, Building2, Map, Send } from "lucide-react"

const Book = () => {
  const steps = [
    {
      icon: Search,
      title: "Descubrimiento y Planificación",
      description: "Analizamos tus requisitos y creamos una hoja de ruta detallada para el éxito de tu proyecto.",
    },
    {
      icon: Code,
      title: "Desarrollo y Pruebas",
      description: "Nuestro equipo de expertos construye tu solución con un riguroso control de calidad en cada etapa.",
    },
    {
      icon: Rocket,
      title: "Implementación y Soporte",
      description:
        "Lanzamos tu proyecto y proporcionamos mantenimiento continuo para garantizar un rendimiento óptimo.",
    },
  ]

  return (
    <main className="px-[5%] py-20 grid grid-cols-1 lg:grid-cols-2 items-start gap-6" id="about">
      <section className="grid grid-cols-1 gap-6">
        <div>
          <p className="text-[16px] text-primary font-bold text-center lg:text-left special-font" data-aos="fade-down">
            Simple y Eficiente
          </p>
          <h1
            className="text-accent text-3xl md:text-5xl text-center lg:text-left font-extrabold w-full md:max-w-[500px] mt-2"
            data-aos="fade-down"
          >
            Nuestro Proceso de Desarrollo en 3 Pasos
          </h1>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4 special-font" data-aos="fade-up">
            <div className="mt-1">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-[18px] text-primary font-bold">{step.title}</h2>
              <p className="text-[16px] text-muted font-normal mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative mt-20 lg:mt-0 special-font">
        <div
          className="p-4 rounded-2xl shadow-md w-full lg:max-w-[90%] grid grid-cols-1 gap-4 relative z-10 bg-background-light border border-primary/20"
          data-aos="zoom-in"
        >
          <div className="w-full h-[300px] md:h-[600px] lg:h-[1080px]">
            <Image
              src="/img/trip.jpg"
              width={1080}
              height={1080}
              alt="Panel de Proyecto"
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>

          <div className="grid gap-2 relative bg-background-light w-full p-4">
            <h2 className="text-accent text-[18px] font-bold">Panel de Proyecto</h2>
            <div className="flex items-center gap-2 text-[16px] text-muted">
              <p>Actualizaciones en tiempo real</p>
              <p>por Duality Domain</p>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="bg-background p-3 rounded-full">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-background p-3 rounded-full">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <div className="bg-background p-3 rounded-full">
                <Send className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <p className="text-[16px] text-muted">24 proyectos activos</p>
              </div>

              <FaRegHeart className="text-lg text-secondary cursor-pointer" />
            </div>

            <div
              className="p-4 rounded-2xl shadow-md max-w-[500px] absolute right-[-20px] bottom-6 bg-background border border-primary/20"
              data-aos="slide-right"
            >
              <div className="flex items-start justify-start gap-2">
                <div>
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-[14px] text-muted">En Progreso</p>
                  <h2 className="text-[18px] text-accent font-bold">Plataforma E-Commerce</h2>

                  <div>
                    <p className="text-[14px] text-accent font-bold">
                      <span className="text-primary">75%</span> completado
                    </p>

                    <div className="h-[6px] bg-background w-full rounded-2xl mt-1">
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

