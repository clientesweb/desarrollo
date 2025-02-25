import Image from "next/image"
import { FaFacebookF, FaTwitter } from "react-icons/fa6"
import { CiInstagram } from "react-icons/ci"

const Footer = () => {
  return (
    <main className="px-[5%] py-[40px] bg-background-light special-font">
      <section className="" data-aos="fade-down">
        <div className="flex justify-between flex-wrap gap-2">
          <div className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-duality-domain-r6m55SQWTLflCkvPu7WmEi9dgTru6x.png"
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
              <FaFacebookF className="text-4xl p-2 text-primary bg-background rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300" />
              <CiInstagram className="text-4xl p-2 text-primary bg-background rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300" />
              <FaTwitter className="text-4xl p-2 text-primary bg-background rounded-full shadow-md cursor-pointer hover:bg-primary hover:text-background transition-colors duration-300" />
            </div>

            <p className="text-[20px] text-accent font-bold">Descarga nuestra app</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center gap-1 bg-background py-2 px-5 rounded-full cursor-pointer hover:bg-primary/10 transition-colors duration-300">
                <Image src="/img/google-play.png" width={20} height={20} alt="img" />
                <div>
                  <h3 className="text-[13px] font-extrabold text-accent">CONSÍGUELO EN</h3>
                  <p className="text-[11px] font-semi-bold text-muted">GOOGLE PLAY</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1 bg-background py-2 px-5 rounded-full cursor-pointer hover:bg-primary/10 transition-colors duration-300">
                <Image src="/img/apple.png" width={20} height={20} alt="img" />
                <div>
                  <h3 className="text-[11px] font-semibold text-muted">Disponible en</h3>
                  <p className="text-[13px] font-extrabold text-accent">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[14px] text-muted text-center font-normal mt-5 ">
          Todos los derechos reservados@dualitydomain.com
        </p>
      </section>
    </main>
  )
}

export default Footer

