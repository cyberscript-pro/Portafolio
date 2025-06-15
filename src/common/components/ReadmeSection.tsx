import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

function ReadmeSection() {
  return (
    <section className="max-w-3xl mx-auto md:px-8 rounded-xl px-6 py-10 mb-30 flex flex-col justify-center items-center">
      <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-1 after:bg-cyan-500 after:mx-auto after:mt-2 text-center">
        Sobre mí
      </h4>
      <p
        className={`${poppins.className} text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-3`}
      >
        Soy un{" "}
        <span className="font-semibold text-cyan-500">
          Desarrollador FullStack
        </span>{" "}
        con experiencia en la creación de aplicaciones web y móviles.
        Actualmente trabajo en una empresa de tecnología, colaborando en el
        desarrollo de soluciones digitales para clientes de todo el mundo. Me
        apasiona construir productos funcionales, bien diseñados y con alto
        rendimiento.
      </p>
    </section>
  );
}

export default ReadmeSection;
