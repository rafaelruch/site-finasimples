import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Heart, Lightbulb, TrendingUp, Users, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import logoImage from "@assets/logo-light-finasimples_1759756891447.png";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Home
              </Button>
            </Link>
            <Link href="/">
              <img src={logoImage} alt="FinaSimples" className="h-8" data-testid="logo-header" />
            </Link>
            <div className="w-[140px]" />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-[#13d417]/10">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Carreiras
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Venha transformar a gestão financeira com a gente
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Trabalhe Conosco
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Na FinaSimples, acreditamos que grandes produtos são construídos por grandes 
                  pessoas. Estamos sempre em busca de talentos apaixonados por tecnologia e 
                  inovação que queiram fazer a diferença na vida financeira de milhões de brasileiros.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Se você se identifica com nossa missão de simplificar a gestão financeira e 
                  quer trabalhar em um ambiente dinâmico, colaborativo e cheio de desafios, 
                  adoraríamos conhecer você!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Por Que Trabalhar na FinaSimples?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-benefit-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Inovação Constante</h3>
                <p className="text-muted-foreground">
                  Trabalhe com as tecnologias mais modernas e contribua com ideias inovadoras.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-benefit-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Crescimento Profissional</h3>
                <p className="text-muted-foreground">
                  Invista no seu desenvolvimento com treinamentos e oportunidades de evolução.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-benefit-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Time Incrível</h3>
                <p className="text-muted-foreground">
                  Trabalhe com profissionais talentosos e apaixonados pelo que fazem.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-benefit-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Equilíbrio de Vida</h3>
                <p className="text-muted-foreground">
                  Flexibilidade e respeito ao seu tempo pessoal são prioridades para nós.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-benefit-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Autonomia</h3>
                <p className="text-muted-foreground">
                  Tenha liberdade para propor soluções e tomar decisões importantes.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-benefit-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Impacto Real</h3>
                <p className="text-muted-foreground">
                  Veja seu trabalho impactando positivamente a vida de milhares de pessoas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Interessado em Fazer Parte do Time?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No momento, não temos vagas abertas, mas estamos sempre de olho em talentos 
                excepcionais. Envie seu currículo e uma mensagem contando sobre você. 
                Entraremos em contato quando surgir uma oportunidade que combine com seu perfil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open("mailto:carreiras@finasimples.com.br", "_blank")}
                  data-testid="button-send-resume"
                >
                  Enviar Currículo
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open("https://wa.me/5511999999999", "_blank", "noopener,noreferrer")}
                  data-testid="button-contact-whatsapp"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
