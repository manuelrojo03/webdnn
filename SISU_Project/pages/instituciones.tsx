import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { School, Users, BookOpen, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function InstitucionesPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would handle the form submission
    alert('Gracias por su interés. Nuestro equipo de ventas se pondrá en contacto con usted pronto.')
  }

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
        <h1 className="text-4xl font-bold mb-8 text-center text-[#85bb65]">SISU para Instituciones Educativas</h1>
        <p className="text-xl mb-12 text-center max-w-2xl mx-auto">
          Lleve la educación financiera al siguiente nivel con SISU. Nuestra plataforma gamificada es perfecta para enseñar finanzas dentro y fuera del aula, proporcionando a los adolescentes habilidades esenciales para su futuro.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#2d8bba]">¿Por qué elegir SISU para su institución?</h2>
            <div className="space-y-6">
              <Card className="border-[#85bb65] border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#85bb65]">
                    <School className="mr-2" />
                    Adaptable a Cualquier Entorno
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>SISU se integra perfectamente en el aula tradicional o en entornos de aprendizaje en línea, ofreciendo flexibilidad para diferentes modelos educativos.</p>
                </CardContent>
              </Card>
              <Card className="border-[#85bb65] border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#85bb65]">
                    <Users className="mr-2" />
                    Enfoque en Adolescentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nuestro contenido está diseñado específicamente para captar el interés de los adolescentes, utilizando ejemplos relevantes y desafíos atractivos.</p>
                </CardContent>
              </Card>
              <Card className="border-[#85bb65] border-2">
                <CardHeader>
                  <CardTitle className="flex items-center text-[#85bb65]">
                    <BookOpen className="mr-2" />
                    Currículo Completo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Cubrimos todos los aspectos esenciales de la educación financiera, desde presupuestos básicos hasta conceptos más avanzados de inversión y ahorro.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <Card className="border-[#85bb65] border-2">
              <CardHeader>
                <CardTitle>Contacta con nuestro equipo de ventas</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="institution-name">Nombre de la Institución</Label>
                    <Input id="institution-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Nombre de Contacto</Label>
                    <Input id="contact-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <Button type="submit" className="w-full bg-[#85bb65] hover:bg-[#75a758] text-white">
                    <Send className="mr-2 h-4 w-4" /> Enviar
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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