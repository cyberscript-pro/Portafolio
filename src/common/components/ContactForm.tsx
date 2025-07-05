import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  message: z
    .string()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const telegramMessage = encodeURIComponent(
      `📨 Nuevo mensaje del portafolio\n\n` +
        `👤 *Nombre:* ${data.name}\n` +
        `✉️ *Email:* ${data.email}\n\n` +
        `💬 *Mensaje:*\n${data.message}`
    );

    window.location.href = `https://t.me/cyberscript_pro?start=${telegramMessage}`;
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            Envíame un mensaje
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 mb-2 font-medium"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.name ? "border-red-500" : "border-gray-600"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400`}
                placeholder="Tu nombre"
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 mb-2 font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.email ? "border-red-500" : "border-gray-600"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400`}
                placeholder="tu@email.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full px-4 py-3 bg-gray-700 border ${
                  errors.message ? "border-red-500" : "border-gray-600"
                } rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400`}
                placeholder="Escribe tu mensaje aquí..."
                {...register("message")}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30"
            >
              <FaPaperPlane className="text-lg" />
              {isSubmitting ? "Enviando..." : "Enviar por Telegram"}
            </button>
          </form>
        </div>

        {/* Información adicional */}
        <div className="mt-10 p-6 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl border border-cyan-800/50 backdrop-blur-sm">
          <h3 className="font-medium text-lg text-cyan-200 mb-2 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            ¿Cómo funciona?
          </h3>
          <p className="text-cyan-100">
            Al enviar el formulario se abrirá Telegram con tu mensaje
            prellenado. Solo necesitas hacer clic en "Enviar" en la aplicación.
          </p>
        </div>
      </div>
    </section>
  );
}
