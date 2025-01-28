import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select"
import Image from "next/image"
import DashboardMockup from "./DashboardMockup"

export default function Hero() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Nunca mais perca uma oportunidade de concurso ou licitação!
          </h1>
          <p className="text-xl mb-6 text-text-secondary">
            Receba alertas personalizados diretamente no seu e-mail ou celular.
          </p>
          <form className="space-y-4">
            <Input type="email" placeholder="Seu e-mail" className="w-full" />
            <Select>
              <option value="">Selecione sua área de interesse</option>
              <option value="administracao">Administração</option>
              <option value="educacao">Educação</option>
              <option value="saude">Saúde</option>
              <option value="tecnologia">Tecnologia</option>
            </Select>
            <Button type="submit" className="btn-primary w-full">
              Comece Gratuitamente
            </Button>
          </form>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 transform skew-y-3 rounded-3xl shadow-2xl"></div>
            <div className="relative bg-white p-4 rounded-lg shadow-lg">
              <DashboardMockup />
            </div>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-alert text-primary font-bold py-2 px-4 rounded-full transform rotate-12">
              Novo!
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

