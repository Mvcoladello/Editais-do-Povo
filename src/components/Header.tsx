import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Editais do Povo
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-text-secondary hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#sobre" className="text-text-secondary hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="#planos" className="text-text-secondary hover:text-primary transition-colors">
            Planos
          </Link>
          <Link href="#" className="text-text-secondary hover:text-primary transition-colors">
            Login
          </Link>
        </nav>
        <Button className="btn-primary">Assine Agora</Button>
      </div>
    </header>
  )
}

