import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Pessoa Física",
    badge: null,
    price: "19,90",
    description: "Perfeito para gerenciar suas finanças pessoais",
    features: [
      "Registros ilimitados",
      "Relatórios mensais",
      "Gráficos e análises",
      "Suporte por WhatsApp",
      "Backup automático",
    ],
    cta: "Começar Agora",
    popular: false,
    borderColor: "border-primary/30",
  },
  {
    name: "Pessoa Jurídica",
    badge: "Mais Popular",
    price: "49,90",
    description: "Ideal para pequenos negócios e MEIs",
    features: [
      "Tudo do plano PF",
      "Múltiplas categorias",
      "Relatórios personalizados",
      "Controle de fluxo de caixa",
      "Suporte prioritário",
      "Dashboard empresarial",
    ],
    cta: "Começar Agora",
    popular: true,
    borderColor: "border-[#0100ff]/30",
  },
];

export default function Pricing() {
  const handlePlanClick = (planName: string) => {
    console.log(`Plan selected: ${planName}`);
    window.open("https://wa.me/5511999999999?text=Olá! Quero contratar o plano " + planName, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Planos simples e transparentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para você ou sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'md:-mt-4' : ''}`}
              data-testid={`card-plan-${index}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#f2c714] to-[#f2c714]/80 text-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}
              
              <div className={`bg-card border-2 ${plan.borderColor} rounded-3xl p-8 md:p-10 h-full transition-all duration-300 hover-elevate ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-muted-foreground text-lg">R$</span>
                    <span className="text-5xl md:text-6xl font-display font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3" data-testid={`feature-${index}-${fIndex}`}>
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full text-base font-semibold mt-6"
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => handlePlanClick(plan.name)}
                    data-testid={`button-select-plan-${index}`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
