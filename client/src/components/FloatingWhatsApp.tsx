import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    console.log("Floating WhatsApp clicked");
    window.open("https://wa.me/5511999999999", "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5">
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform"
        onClick={handleClick}
        data-testid="button-floating-whatsapp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
}
