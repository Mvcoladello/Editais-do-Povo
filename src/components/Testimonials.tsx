import Image from "next/image"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aprovada em concurso público",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Graças ao Editais do Povo, fui notificada sobre um concurso na minha área e consegui me preparar a tempo. Hoje sou servidora pública!",
  },
  {
    name: "João Santos",
    role: "Empresário",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "O serviço de alertas de licitações é fantástico. Aumentei significativamente a participação da minha empresa em processos licitatórios.",
  },
  {
    name: "Ana Oliveira",
    role: "Estudante",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "A plataforma é incrível! Recebo alertas personalizados e não perco mais nenhuma oportunidade de concurso na minha região.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos usuários dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-text-secondary italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

