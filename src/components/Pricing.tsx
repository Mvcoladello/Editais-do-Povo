import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    features: ["Acesso a listagem básica de concursos", "Alertas limitados", "Suporte por e-mail"],
    cta: "Começar Grátis",
  },
  {
    name: "Padrão",
    price: "R$ 29,90",
    features: ["Alertas personalizados", "Acesso a detalhes completos dos editais", "Suporte prioritário por e-mail"],
    cta: "Assinar Agora",
    recommended: true,
  },
  {
    name: "Premium",
    price: "R$ 59,90",
    features: [
      "Todos os recursos do plano Padrão",
      "Análise de editais por especialistas",
      "Suporte 24/7 por chat e telefone",
      "Curso preparatório online incluso",
    ],
    cta: "Escolher Premium",
  },
]

export default function Pricing() {
  return (
    <section className="py-20 bg-background-secondary" id="planos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Escolha o plano ideal para você</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg shadow-md ${plan.recommended ? "border-2 border-primary" : ""}`}
            >
              {plan.recommended && (
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Recomendado
                </span>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-sm font-normal">/mês</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-success mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={plan.recommended ? "btn-primary w-full" : "btn-secondary w-full"}>{plan.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

