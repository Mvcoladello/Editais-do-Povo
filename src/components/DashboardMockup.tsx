import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, FileText, MapPin, Calendar } from "lucide-react"

export default function DashboardMockup() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Seus Alertas Recentes</h3>
      <div className="space-y-4">
        <Card>
          <CardContent className="flex items-center p-4">
            <Bell className="h-5 w-5 text-primary mr-3" />
            <div>
              <p className="font-medium">Novo Concurso: Prefeitura de São Paulo</p>
              <p className="text-sm text-gray-500">500 vagas | Nível Superior</p>
            </div>
            <Badge className="ml-auto" variant="secondary">
              Novo
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <FileText className="h-5 w-5 text-success mr-3" />
            <div>
              <p className="font-medium">Licitação: Fornecimento de Equipamentos</p>
              <p className="text-sm text-gray-500">Valor: R$ 1.000.000 | Prazo: 30 dias</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-4">
            <MapPin className="h-5 w-5 text-error mr-3" />
            <div>
              <p className="font-medium">Concurso Polícia Federal</p>
              <p className="text-sm text-gray-500">1.500 vagas | Nacional</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-primary mr-2" />
          <span className="text-sm text-gray-600">Próximos 7 dias: 15 novos editais</span>
        </div>
        <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
          Ver Todos
        </Badge>
      </div>
    </div>
  )
}

