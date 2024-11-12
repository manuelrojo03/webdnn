import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Gamepad, Clock, Trophy } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function UsuariosPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-[#85bb65] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Diseño%20sin%20título%20(3)-v3HPxMZYDEncdeVbjQvyOE2muxiMmz.png"
                alt="SISU Logo"
                layout="fill"
                objectFit="contain"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                  e.currentTarget.alt = "SISU Logo Placeholder"
                }}
              />
            </div>
            <span className="text-2xl font-bold text-white">SISU</span>
          </div>
          <nav>
            <ul className="flex space-x-4 text-white">
              <li><Link href="/" className="hover:underline">Inicio</Link></li>
              <li><Link href="/usuarios" className="hover:underline">Usuarios</Link></li>
              <li><Link href="/instituciones" className="hover:underline">Instituciones</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#85bb65]">Aprende Finanzas de Forma Divertida con SISU</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          SISU transforma el aprendizaje de finanzas en una experiencia divertida y accesible. Con nuestras lecciones gamificadas, aprenderás conceptos financieros importantes en solo minutos al día.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="border-[#85bb65] border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-[#85bb65]">
                <Gamepad className="mr-2" />
                Aprendizaje Gamificado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Juega y aprende con desafíos divertidos que te enseñan conceptos financieros de forma interactiva.</p>
            </CardContent>
          </Card>
          <Card className="border-[#85bb65] border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-[#85bb65]">
                <Clock className="mr-2" />
                Lecciones Rápidas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Mejora tus finanzas en solo 5-10 minutos al día con lecciones cortas y efectivas.</p>
            </CardContent>
          </Card>
          <Card className="border-[#85bb65] border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-[#85bb65]">
                <Trophy className="mr-2" />
                Seguimiento de Progreso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Gana insignias, sube de nivel y observa cómo mejoran tus habilidades financieras día a día.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button className="bg-[#85bb65] hover:bg-[#75a758] text-white text-lg px-8 py-3">
            <Download className="mr-2 h-5 w-5" /> Descarga SISU Ahora
          </Button>
          <p className="mt-4 text-sm text-gray-600">Disponible para iOS y Android</p>
        </div>
      </main>

      <footer className="bg-[#2d8bba] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SISU. Todos los derechos reservados.</p>
          <p className="mt-2">Aprendé, Ahorrá e Invertí jugando - en solo minutos al día</p>
        </div>
      </footer>
    </div>
  )
}