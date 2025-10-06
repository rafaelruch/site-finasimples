import { BarChart3, Bell, FileText, Shield, Smartphone, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "100% no WhatsApp",
    description: "Não precisa instalar app. Tudo funciona direto no WhatsApp que você já usa.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Automáticos",
    description: "Receba análises detalhadas e gráficos das suas finanças automaticamente.",
  },
  {
    icon: Bell,
    title: "Alertas Inteligentes",
    description: "Seja notificado sobre gastos altos, metas atingidas e vencimentos.",
  },
  {
    icon: TrendingUp,
    title: "Insights Financeiros",
    description: "IA que identifica padrões e sugere melhorias no seu orçamento.",
  },
  {
    icon: FileText,
    title: "Histórico Completo",
    description: "Acesse todas as suas movimentações sempre que precisar.",
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Criptografia de ponta a ponta e conformidade com LGPD.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Recursos que fazem a diferença
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para ter controle total das suas finanças
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-background border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover-elevate"
                data-testid={`card-feature-${index}`}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-[#0100ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
