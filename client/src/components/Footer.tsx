import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import logoImage from "@assets/logo-light-finasimples_1759756891447.png";

export default function Footer() {
  const handleWhatsAppClick = () => {
    console.log("Footer WhatsApp clicked");
    window.open("https://wa.me/5511999999999", "_blank", "noopener,noreferrer");
  };

  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src={logoImage} alt="FinaSimples" className="h-10 brightness-0 invert" data-testid="logo-footer" />
            <p className="text-background/80 leading-relaxed">
              Gestão financeira simples e fácil pelo WhatsApp.
            </p>
            <div className="flex gap-3">
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-background/10 border-background/20 text-background hover:bg-background/20"
                onClick={() => handleSocialClick("Instagram")}
                data-testid="button-instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-background/10 border-background/20 text-background hover:bg-background/20"
                onClick={() => handleSocialClick("LinkedIn")}
                data-testid="button-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="outline" 
                className="bg-background/10 border-background/20 text-background hover:bg-background/20"
                onClick={() => handleSocialClick("Email")}
                data-testid="button-email"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-background">Produto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="text-background/80 hover:text-background transition-colors" data-testid="link-how-it-works">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-background transition-colors" data-testid="link-pricing">
                  Planos
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors" data-testid="link-resources">
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-background">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-background/80 hover:text-background transition-colors" data-testid="link-about">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-background/80 hover:text-background transition-colors" data-testid="link-careers">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-background">Contato</h4>
            <p className="text-background/80 text-sm">
              Tire suas dúvidas ou contrate pelo WhatsApp
            </p>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary-border"
              onClick={handleWhatsAppClick}
              data-testid="button-footer-whatsapp"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2024 FinaSimples. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidade" className="hover:text-background transition-colors" data-testid="link-privacy">
                Privacidade
              </Link>
              <Link href="/termos" className="hover:text-background transition-colors" data-testid="link-terms">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
