import Image from "next/image"
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <main className="px-[5%] py-[40px] bg-background-light special-font">
      <section className="" data-aos="fade-down">
        <div className="flex justify-between flex-wrap gap-2">
          <div className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start">
            <Image
              src="/img/duality-domain-1.png"
              width={150}
              height={100}
              alt="Duality Domain Logo"
            />
            <p className="text-[12px] text-muted font-semibold w-full md:max-w-[200px] text-center md:text-left">
              Transformando ideas en soluciones digitales poderosas que impulsan el crecimiento empresarial.
            </p>
          </div>

          <div className="grid gap-4">
            <h1 className="text[18px] text-accent font-extrabold">Empresa</h1>

            <div className="text-[15px] text-muted font-semibold flex flex-col gap-2">
              <a href="#about" className="hover:text-primary transition-colors duration-200">
                Nosotros
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Carreras
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Blog
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <h1 className="text[18px] text-accent font-extrabold">Contacto</h1>

            <div className="text-[15px] text-muted font-semibold flex flex-col gap-2">
              <a href="#contact" className="hover:text-primary transition-colors duration-200">
                Ayuda/FAQ
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Prensa
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Socios
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <h1 className="text[18px] text-accent font-extrabold">Servicios</h1>

            <div className="text-[15px] text-muted font-semibold flex flex-col gap-2">
              <a href="#services" className="hover:text-primary transition-colors duration-200">
                Desarrollo Web
              </a>
              <a href="#services" className="hover:text-primary transition-colors duration-200">
                Aplicaciones Móviles
              </a>
              <a href="#services" className="hover:text-primary transition-colors duration-200">
                Soluciones en la Nube
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full md:w-auto mt-5 md:mt-0">
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/dualitydomain/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl p-2 text-primary bg-background rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300" />
              </a>
              <a href="https://wa.me/5493546501537" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-4xl p-2 text-primary bg-background rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300" />
              </a>
              <a href="mailto:dualitydomainoficial@gmail.com">
                <FaEnvelope className="text-4xl p-2 text-primary bg-background rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300" />
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-muted">
                <FaMapMarkerAlt className="text-primary" />
                <p className="text-[14px]">Villa del dique, Córdoba, Argentina</p>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:dualitydomainoficial@gmail.com"
                  className="text-[14px] hover:text-primary transition-colors duration-200"
                >
                  dualitydomainoficial@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <FaWhatsapp className="text-primary" />
                <a
                  href="https://wa.me/5493546501537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] hover:text-primary transition-colors duration-200"
                >
                  +54 9 3546 50-1537
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[14px] text-muted text-center font-normal mt-5 ">
          Todos los derechos reservados © 2024{" "}
          <a href="https://dualitydomain.com" className="hover:text-primary transition-colors duration-200">
            dualitydomain.com
          </a>
        </p>
      </section>
    </main>
  )
}

export default Footer

