import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import logoImage from "@assets/logo-light-finasimples_1759756891447.png";

export default function Privacy() {
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
              <img src={logoImage} alt="FinaSimples - Gestão Financeira pelo WhatsApp" className="h-8" width="120" height="32" loading="lazy" data-testid="logo-header" />
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
                Política de Privacidade
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
                <h2 className="text-3xl font-bold text-foreground">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A FinaSimples ("nós", "nosso" ou "nossa") respeita a privacidade dos usuários 
                  ("você" ou "seu") de nossos serviços. Esta Política de Privacidade explica como 
                  coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza 
                  nosso serviço de gestão financeira via WhatsApp.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Ao usar nossos serviços, você concorda com a coleta e uso de informações de 
                  acordo com esta política. Caso não concorde com os termos desta Política de 
                  Privacidade, pedimos que não utilize nossos serviços.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">2. Informações que Coletamos</h2>
                <h3 className="text-2xl font-semibold text-foreground">2.1 Informações Fornecidas por Você</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Coletamos informações que você nos fornece diretamente ao usar nossos serviços, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Número de telefone do WhatsApp</li>
                  <li>Nome e informações de perfil</li>
                  <li>Dados de transações financeiras (receitas e despesas)</li>
                  <li>Categorias e descrições de movimentações financeiras</li>
                  <li>Comunicações e mensagens enviadas através do serviço</li>
                </ul>

                <h3 className="text-2xl font-semibold text-foreground mt-6">2.2 Informações Coletadas Automaticamente</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quando você usa nossos serviços, coletamos automaticamente:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Horários e datas de uso do serviço</li>
                  <li>Dados de uso e interação com o serviço</li>
                  <li>Informações técnicas sobre dispositivos e conexão</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">3. Como Usamos Suas Informações</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Fornecer, operar e manter nosso serviço</li>
                  <li>Processar e registrar suas transações financeiras</li>
                  <li>Gerar relatórios e análises financeiras personalizadas</li>
                  <li>Enviar notificações e alertas sobre suas finanças</li>
                  <li>Melhorar, personalizar e expandir nosso serviço</li>
                  <li>Compreender e analisar como você usa nosso serviço</li>
                  <li>Desenvolver novos produtos, serviços e funcionalidades</li>
                  <li>Comunicar com você sobre atualizações, suporte e questões administrativas</li>
                  <li>Prevenir fraudes e garantir a segurança do serviço</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">4. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nós não vendemos suas informações pessoais. Podemos compartilhar suas informações 
                  apenas nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Com provedores de serviços que nos auxiliam na operação do serviço</li>
                  <li>Quando exigido por lei ou para responder a processos legais</li>
                  <li>Para proteger os direitos, propriedade ou segurança da FinaSimples e seus usuários</li>
                  <li>Com seu consentimento explícito</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">5. Segurança dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A segurança de suas informações é importante para nós. Implementamos medidas de 
                  segurança técnicas e organizacionais apropriadas para proteger suas informações 
                  pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos criptografia de ponta a ponta para proteger suas comunicações e dados 
                  financeiros. No entanto, nenhum método de transmissão pela internet ou armazenamento 
                  eletrônico é 100% seguro.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">6. Seus Direitos (LGPD)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Confirmar a existência de tratamento de dados pessoais</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Solicitar a portabilidade de seus dados</li>
                  <li>Obter informações sobre o compartilhamento de dados</li>
                  <li>Revogar o consentimento</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Para exercer qualquer um desses direitos, entre em contato conosco através dos 
                  canais indicados na seção de Contato.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">7. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reteremos suas informações pessoais apenas pelo tempo necessário para cumprir os 
                  propósitos descritos nesta Política de Privacidade, a menos que um período de 
                  retenção maior seja exigido ou permitido por lei.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">8. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você 
                  sobre quaisquer alterações publicando a nova Política de Privacidade nesta página 
                  e atualizando a data de "Última atualização".
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Recomendamos que você revise esta Política de Privacidade periodicamente para 
                  quaisquer alterações.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">9. Contato</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre nossas práticas 
                  de privacidade, entre em contato conosco:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground">
                  <li>Email: privacidade@finasimples.com.br</li>
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
