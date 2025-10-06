import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Users, Heart, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import logoImage from "@assets/logo-light-finasimples_1759756891447.png";

export default function AboutUs() {
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
                Sobre Nós
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Simplificando a gestão financeira para todos
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Nossa História
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A FinaSimples nasceu da percepção de que gerenciar finanças pessoais e empresariais 
                  não precisa ser complicado. Observamos que milhões de brasileiros enfrentam 
                  dificuldades com planilhas complexas e aplicativos confusos, enquanto o WhatsApp 
                  já faz parte do dia a dia de todos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Decidimos unir tecnologia de ponta com a simplicidade do aplicativo que você 
                  já usa todos os dias. Assim, criamos uma solução que torna o controle financeiro 
                  tão simples quanto enviar uma mensagem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50">
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-value-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Simplicidade</h3>
                <p className="text-muted-foreground">
                  Acreditamos que tecnologia deve facilitar a vida, não complicá-la.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-value-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Acessibilidade</h3>
                <p className="text-muted-foreground">
                  Gestão financeira deve estar ao alcance de todos, sem barreiras.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-value-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Empatia</h3>
                <p className="text-muted-foreground">
                  Entendemos os desafios financeiros e criamos soluções humanas.
                </p>
              </div>

              <div className="bg-background border border-border rounded-2xl p-6 space-y-4" data-testid="card-value-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Inovação</h3>
                <p className="text-muted-foreground">
                  Buscamos constantemente novas formas de melhorar a experiência.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Democratizar o acesso à gestão financeira inteligente, permitindo que qualquer 
                pessoa ou empresa, independente do tamanho ou conhecimento técnico, possa 
                tomar decisões financeiras informadas e alcançar seus objetivos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Nossa Visão
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser a plataforma de gestão financeira mais acessível e amigável do Brasil, 
                presente na vida de milhões de pessoas e empresas, transformando a forma 
                como elas se relacionam com o dinheiro.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
