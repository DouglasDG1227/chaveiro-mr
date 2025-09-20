import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Key,
  Home,
  Car,
  Lock,
  Settings,
  Shield,
  Wrench,
  Clock,
  Zap,
  Users,
  Phone,
  MessageCircle
} from 'lucide-react'
import './App.css'
import logo from './assets/Logodosite.jpg'

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://w.app/hgmqus', '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+5511970211708', '_self')
  }

  const services = [
    {
      icon: Home,
      title: "Abertura de Portas",
      description: "Residenciais e comerciais"
    },
    {
      icon: Car,
      title: "Abertura de Carros",
      description: "Todos os modelos e marcas"
    },
    {
      icon: Lock,
      title: "Cofres e Fechaduras",
      description: "Instalação e reparo"
    },
    {
      icon: Key,
      title: "Chaves Codificadas",
      description: "Cópias e programação"
    }
  ]

  const professionals = [
    {
      icon: Shield,
      title: "Abertura de Portas",
      description: "Técnicas profissionais sem danos"
    },
    {
      icon: Wrench,
      title: "Ferramentas Modernas",
      description: "Equipamentos de última geração"
    },
    {
      icon: Settings,
      title: "Serviço Especializado",
      description: "Anos de experiência no mercado"
    }
  ]

  const advantages = [
    {
      icon: Clock,
      title: "24 Horas",
      description: "Atendimento todos os dias"
    },
    {
      icon: Zap,
      title: "Chegada Rápida",
      description: "Em até 30 minutos"
    },
    {
      icon: Users,
      title: "Profissionais",
      description: "Qualificados e experientes"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Chaveiro MR Logo" className="h-8" />
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={handlePhoneClick}
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              <Phone size={16} className="mr-2" />              (11) 97021-1708
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle size={16} className="mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: '#E8E8E8' }}>
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-orange-100 text-orange-600 hover:bg-orange-100">
            <Clock size={14} className="mr-1" />
            Emergência 24h
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Chaveiro <span className="text-blue-600">24 Horas</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Aberturas residenciais, automotivas e comerciais com rapidez e segurança. Cópias de chaves, troca de segredos e atendimento emergencial 24h.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle size={20} className="mr-2" />
              Chamar no WhatsApp
            </Button>
            <Button 
              onClick={handlePhoneClick}
              variant="outline" 
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Phone size={20} className="mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <service.icon size={32} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Profissionais Experientes</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {professionals.map((professional, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-green-100 rounded-full">
                    <professional.icon size={40} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{professional.title}</h3>
                <p className="text-gray-600">{professional.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher o Chaveiro MR?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-orange-100 rounded-full">
                    <advantage.icon size={40} className="text-orange-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de um Chaveiro Agora?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não perca tempo! Entre em contato conosco e resolva seu problema rapidamente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white border-0"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Emergência
            </Button>
            <Button 
              onClick={handlePhoneClick}
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Phone size={20} className="mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={logo} alt="Chaveiro MR Logo" className="h-6" />
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Chaveiro MR. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

