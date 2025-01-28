import { Bell, MapPin, Zap, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: <Bell className="h-10 w-10 text-primary" />,
    title: "Monitoramento 24/7",
    description: "Nosso sistema trabalha incessantemente para você não perder nenhuma oportunidade.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Alertas personalizados",
    description: "Receba notificações relevantes baseadas na sua localização e área de interesse.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Simplicidade e eficiência",
    description: "Interface intuitiva e fácil de usar, economizando seu tempo precioso.",
  },
  {
    icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
    title: "Suporte rápido e dedicado",
    description: "Nossa equipe está sempre pronta para ajudar você em qualquer questão.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que escolher o Editais do Povo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

    