import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, LogIn } from "lucide-react";
import logoImage from "@assets/logo-light-finasimples_1759756891447.png";
import heroMockup from "@assets/generated_images/WhatsApp_financial_dashboard_mockup_f469e187.png";

export default function Hero() {
  const handleWhatsAppClick = () => {
    console.log("WhatsApp CTA clicked");
    window.open("https://wa.me/5511952132505", "_blank", "noopener,noreferrer");
  };

  const handlePricingClick = () => {
    console.log("Ver Planos clicked");
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLoginClick = () => {
    console.log("Entrar clicked");
    window.open("https://app.finasimples.com.br/", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#0100ff]/10 via-background to-[#13d417]/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(1,0,255,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(19,212,23,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pt-6 relative z-10">
        <div className="flex items-center justify-between">
          <img src={logoImage} alt="FinaSimples" className="h-10 md:h-12" data-testid="logo-hero" />
          <Button 
            variant="outline" 
            className="bg-background/60 backdrop-blur-sm"
            onClick={handleLoginClick}
            data-testid="button-login"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Entrar
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 relative z-10 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Suas finanças{" "}
              <span className="text-primary">simples</span> pelo WhatsApp
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Gerencie seu dinheiro de forma fácil e profissional direto no app que você já usa todos os dias. Sem complicação, sem planilhas, sem dor de cabeça.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-base font-semibold group"
                onClick={handleWhatsAppClick}
                data-testid="button-whatsapp-cta"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Começar no WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base font-semibold bg-background/60 backdrop-blur-sm"
                onClick={handlePricingClick}
                data-testid="button-plans"
              >
                Ver Planos
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Rápido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-foreground">Fácil</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-[#0100ff]/20 rounded-3xl blur-3xl opacity-50" />
              <img 
                src={heroMockup} 
                alt="WhatsApp Financial Dashboard" 
                className="relative rounded-2xl shadow-2xl w-full h-auto"
                data-testid="img-hero-mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
