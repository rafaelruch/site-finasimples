import messagingIcon from "@assets/generated_images/WhatsApp_messaging_feature_illustration_ae44d4de.png";
import analyticsIcon from "@assets/generated_images/Financial_analytics_growth_illustration_49ff9ee7.png";
import securityIcon from "@assets/generated_images/Security_trust_shield_illustration_9263acb6.png";

const steps = [
  {
    number: "01",
    icon: messagingIcon,
    title: "Conecte seu WhatsApp",
    description: "Adicione nosso número e inicie uma conversa. É só enviar uma mensagem para começar.",
  },
  {
    number: "02",
    icon: analyticsIcon,
    title: "Registre suas movimentações",
    description: "Envie suas receitas e despesas pelo chat. Nossa IA organiza tudo automaticamente.",
  },
  {
    number: "03",
    icon: securityIcon,
    title: "Receba relatórios completos",
    description: "Acompanhe gráficos, análises e insights direto no WhatsApp, quando quiser.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-background" id="como-funciona">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para ter controle total das suas finanças
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              data-testid={`card-step-${index}`}
            >
              <div className="bg-card border border-card-border rounded-2xl p-8 h-full transition-all duration-300 hover-elevate">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-[#0100ff]/10 flex items-center justify-center p-4">
                      <img src={step.icon} alt="" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-display font-semibold">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
