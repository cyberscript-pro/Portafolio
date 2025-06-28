"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import BottomBar from "@/src/common/components/BottomBar";
import ContactCard from "@/src/common/components/ContactCard";
import ContactForm from "@/src/common/components/ContactForm";

export default function ContactScreen() {
  return (
    <div>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctame</h2>

        <ContactForm />

        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map((contact, idx) => (
            <ContactCard key={idx} title={contact.title} red={contact.red} Icon={contact.icon} red_title={contact.red_title} />
          ))} */}
        {/*
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-100 hover:border-blue-200"
          >
            <div className="bg-gray-100 p-3 rounded-full mb-4">
              <FaGithub className="text-3xl text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600">Mira mis proyectos</p>
            <span className="mt-2 text-blue-500 font-medium">@tu-usuario</span>
          </a>

          <a
            href="https://linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-100 hover:border-blue-200"
          >
            <div className="bg-blue-50 p-3 rounded-full mb-4">
              <FaLinkedin className="text-3xl text-[#0A66C2]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600">Conecta conmigo</p>
            <span className="mt-2 text-blue-500 font-medium">@tu-perfil</span>
          </a>

          <a
            href="mailto:tu@email.com"
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center border border-gray-100 hover:border-blue-200"
          >
            <div className="bg-red-50 p-3 rounded-full mb-4">
              <FaEnvelope className="text-3xl text-[#EA4335]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">Envíame un mensaje</p>
            <span className="mt-2 text-blue-500 font-medium">tu@email.com</span>
          </a> */}
        {/* </div> */}
      </section>

      <BottomBar />
    </div>
  );
}
