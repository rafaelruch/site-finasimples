import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import logoImage from "@assets/logo-light-finasimples_1759756891447.png";

export default function Terms() {
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
                Termos de Uso
              </h1>
              <p className="text-xl text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="prose prose-lg max-w-none space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Bem-vindo à FinaSimples. Ao acessar e usar nosso serviço de gestão financeira 
                  via WhatsApp, você concorda em cumprir e estar vinculado aos seguintes Termos 
                  de Uso. Se você não concordar com qualquer parte destes termos, não deve usar 
                  nosso serviço.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos de Uso se aplicam a todos os usuários do serviço, incluindo, mas 
                  não se limitando a, usuários navegadores, clientes e contribuidores de conteúdo.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">2. Descrição do Serviço</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A FinaSimples oferece um serviço de gestão financeira pessoal e empresarial 
                  através do WhatsApp. O serviço permite que você:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Registre receitas e despesas</li>
                  <li>Categorize suas movimentações financeiras</li>
                  <li>Receba relatórios e análises financeiras</li>
                  <li>Acompanhe seu fluxo de caixa</li>
                  <li>Obtenha insights sobre seus hábitos financeiros</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">3. Cadastro e Conta</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Para usar nosso serviço, você deve:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Ter pelo menos 18 anos de idade</li>
                  <li>Fornecer informações verdadeiras, precisas e completas</li>
                  <li>Manter a segurança de sua conta e senha</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                  <li>Ser responsável por todas as atividades que ocorrem em sua conta</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">4. Uso Aceitável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Você concorda em usar o serviço apenas para fins legais e de acordo com estes 
                  Termos. Você concorda em NÃO:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Usar o serviço de maneira que viole leis ou regulamentos aplicáveis</li>
                  <li>Transmitir material ilegal, prejudicial, ameaçador ou ofensivo</li>
                  <li>Tentar obter acesso não autorizado ao serviço ou sistemas relacionados</li>
                  <li>Interferir ou interromper o serviço ou servidores conectados ao serviço</li>
                  <li>Usar o serviço para fins fraudulentos ou enganosos</li>
                  <li>Coletar informações de outros usuários sem consentimento</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">5. Planos e Pagamentos</h2>
                <h3 className="text-2xl font-semibold text-foreground">5.1 Assinaturas</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso serviço é oferecido por meio de planos de assinatura mensal. Ao contratar 
                  um plano, você autoriza cobranças recorrentes mensais no método de pagamento 
                  fornecido.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-6">5.2 Renovação Automática</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sua assinatura será renovada automaticamente ao final de cada período de 
                  cobrança, a menos que você cancele antes da data de renovação.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-6">5.3 Cancelamento</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você pode cancelar sua assinatura a qualquer momento. O cancelamento terá efeito 
                  ao final do período de cobrança atual. Não oferecemos reembolsos proporcionais 
                  para períodos parcialmente utilizados.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-6">5.4 Alterações de Preço</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de alterar nossos preços mediante notificação prévia 
                  de 30 dias. As alterações de preço entrarão em vigor no próximo ciclo de cobrança 
                  após o aviso.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">6. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O serviço e todo o seu conteúdo, recursos e funcionalidades, incluindo, mas não 
                  se limitando a, informações, software, texto, gráficos, logos e imagens, são de 
                  propriedade da FinaSimples e são protegidos por leis de direitos autorais, marcas 
                  registradas e outras leis de propriedade intelectual.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Você mantém todos os direitos sobre os dados financeiros que você insere no serviço. 
                  Ao usar o serviço, você nos concede uma licença limitada para processar e exibir 
                  seus dados conforme necessário para fornecer o serviço.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">7. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O serviço é fornecido "como está" e "conforme disponível", sem garantias de 
                  qualquer tipo. Na extensão máxima permitida pela lei aplicável, a FinaSimples 
                  não será responsável por:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Quaisquer danos indiretos, incidentais, especiais ou consequenciais</li>
                  <li>Perda de lucros, receita, dados ou uso</li>
                  <li>Interrupções ou erros no serviço</li>
                  <li>Decisões financeiras tomadas com base nas informações fornecidas pelo serviço</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">8. Isenção de Responsabilidade Financeira</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A FinaSimples é uma ferramenta de gestão financeira e não oferece consultoria 
                  financeira, contábil ou fiscal. As análises e insights fornecidos pelo serviço 
                  são apenas para fins informativos. Você é responsável por suas próprias decisões 
                  financeiras e deve consultar um profissional qualificado para aconselhamento 
                  específico.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">9. Suspensão e Encerramento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de suspender ou encerrar sua conta e acesso ao serviço, 
                  a nosso exclusivo critério, sem aviso prévio, por conduta que violem estes Termos 
                  de Uso ou sejam prejudiciais a outros usuários, a nós ou a terceiros, ou por 
                  qualquer outro motivo.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">10. Alterações nos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos modificar estes Termos de Uso a qualquer momento. Notificaremos você 
                  sobre alterações materiais publicando os novos termos no serviço e atualizando 
                  a data de "Última atualização". Seu uso continuado do serviço após tais 
                  modificações constitui sua aceitação dos novos termos.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">11. Lei Aplicável</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, 
                  sem considerar suas disposições sobre conflitos de leis. Qualquer disputa 
                  relacionada a estes Termos será resolvida nos tribunais do Brasil.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">12. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>Email: suporte@finasimples.com.br</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
