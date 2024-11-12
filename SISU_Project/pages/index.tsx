import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, School, Users, PiggyBank, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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

      <main>
        <section className="bg-[#2d8bba] text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a SISU</h1>
            <p className="text-xl mb-8">Aprendé, Ahorrá e Invertí jugando</p>
            <p className="text-lg mb-8">Clases gamificadas que te enseñan a mejorar tus finanzas en solo minutos al día</p>
            <Button asChild className="bg-[#85bb65] hover:bg-[#75a758] text-white text-lg px-8 py-3">
              <Link href="/usuarios">Comienza Ahora</Link>
            </Button>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#85bb65]">Características de SISU</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-[#85bb65] border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#85bb65]">
                    <BookOpen className="mr-2" />
                    Lecciones Interactivas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Aprende conceptos financieros a través de lecciones cortas, divertidas y gamificadas.</p>
                </CardContent>
              </Card>
              <Card className="border-[#85bb65] border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#85bb65]">
                    <PiggyBank className="mr-2" />
                    Simulaciones de Ahorro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Practica tus habilidades de ahorro con simulaciones realistas y juegos interactivos.</p>
                </CardContent>
              </Card>
              <Card className="border-[#85bb65] border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#85bb65]">
                    <TrendingUp className="mr-2" />
                    Inversiones Virtuales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Aprende a invertir sin riesgo con nuestro mercado de inversiones virtual y desafíos diarios.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#85bb65] text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Mejora tus Finanzas en Minutos al Día</h2>
            <p className="text-xl mb-8">Con SISU, cada minuto cuenta. Aprende, ahorra e invierte de manera divertida y eficiente.</p>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Clock size={24} />
              <span className="text-lg">Solo 5-10 minutos al día</span>
            </div>
            <Button asChild className="bg-white text-[#85bb65] hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/usuarios">Descarga la App</Link>
            </Button>
          </div>
        </section>
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