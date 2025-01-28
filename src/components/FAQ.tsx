import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Como os alertas são enviados?",
    answer:
      "Os alertas são enviados por e-mail e, opcionalmente, por notificações push em seu dispositivo móvel. Você pode personalizar a frequência e o tipo de alertas nas configurações da sua conta.",
  },
  {
    question: "Quais fontes de dados o sistema utiliza?",
    answer:
      "Nosso sistema coleta informações de fontes oficiais, incluindo Diários Oficiais da União, Estados e Municípios, portais de transparência e sites oficiais de órgãos públicos. Atualizamos nossa base de dados constantemente para garantir que você receba as informações mais recentes e precisas.",
  },
  {
    question: "Posso personalizar os tipos de concursos que recebo?",
    answer:
      "Sim, você pode personalizar seus alertas com base em diversos critérios, como localização, área de atuação, nível de escolaridade exigido e faixa salarial. Isso garante que você receba apenas as informações mais relevantes para o seu perfil.",
  },
  {
    question: "Qual é a diferença entre os planos pagos e o plano gratuito?",
    answer:
      "O plano gratuito oferece acesso básico às listagens de concursos e alertas limitados. Os planos pagos incluem recursos avançados como alertas personalizados, acesso a detalhes completos dos editais, análises especializadas e suporte prioritário, dependendo do nível do plano escolhido.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dúvidas? Nós temos as respostas!</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

    