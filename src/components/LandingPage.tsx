import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sun, Download, ArrowDown } from "lucide-react";
import warmSpiritualBackground from "@/assets/warm-spiritual-background.jpg";

const LandingPage = () => {
  const handleInstallApp = () => {
    // PWA install logic will be added later
    console.log("Install app clicked");
  };

  const handleStartNow = () => {
    // Navigation to login/prayer area
    console.log("Start now clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-divine">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${warmSpiritualBackground})` }}
      />
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />
      
      {/* Install App Button - Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          variant="heavenly" 
          size="sm"
          onClick={handleInstallApp}
          className="rounded-full"
        >
          <Download className="w-4 h-4" />
          Instalar App
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Logo Area */}
          <div className="mb-8 space-y-6">
            {/* Logo Icon */}
            <div className="relative animate-slide-up">
              <div className="w-28 h-28 mx-auto bg-gradient-golden rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
                <Heart className="w-14 h-14 text-white animate-float" fill="currentColor" />
              </div>
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 w-28 h-28 mx-auto bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute inset-0 w-28 h-28 mx-auto bg-primary-glow/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
            </div>
            
            {/* App Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in-up [animation-delay:300ms]">
              Ora<span className="text-primary-glow animate-pulse">+</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 max-w-lg mx-auto leading-relaxed animate-fade-in-up [animation-delay:600ms] font-medium">
              Conecte-se com Deus através da oração, todos os dias.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="divine" 
            size="lg"
            onClick={handleStartNow}
            className="text-xl px-16 py-6 rounded-full mb-16 hover:scale-110 transition-all duration-300 shadow-warm hover:shadow-glow animate-fade-in-up [animation-delay:900ms] group"
          >
            Começar Agora
            <Heart className="w-6 h-6 ml-3 group-hover:animate-pulse" fill="currentColor" />
          </Button>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary/60" />
          </div>
        </div>

        {/* Preview Section */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary mb-4 animate-fade-in-up">
              Uma experiência de oração transformadora
            </h2>
            <p className="text-lg sm:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
              Descubra como cada momento pode se tornar uma conexão especial com o divino
            </p>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Feature Card 1 */}
              <Card className="group p-8 bg-card/90 backdrop-blur-md border-none shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105 animate-fade-in-up">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-warm rounded-full flex items-center justify-center group-hover:animate-float shadow-glow">
                    <Sun className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">Orações Diárias</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Comece cada dia com uma oração especial, escolhida especialmente para você.
                  </p>
                </div>
              </Card>

              {/* Feature Card 2 */}
              <Card className="group p-8 bg-card/90 backdrop-blur-md border-none shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105 animate-fade-in-up [animation-delay:200ms]">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-golden rounded-full flex items-center justify-center group-hover:animate-float shadow-glow">
                    <Heart className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">Momentos de Paz</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Encontre serenidade em meio ao dia corrido com reflexões inspiradoras.
                  </p>
                </div>
              </Card>

              {/* Feature Card 3 */}
              <Card className="group p-8 bg-card/90 backdrop-blur-md border-none shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105 animate-fade-in-up [animation-delay:400ms] md:col-span-2 lg:col-span-1">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-divine rounded-full flex items-center justify-center group-hover:animate-float shadow-glow">
                    <Star className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors">Crescimento Espiritual</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Fortaleça sua fé e sua conexão com Deus a cada oração compartilhada.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="py-8 text-center">
          <p className="text-muted-foreground/60">
            "Orai sem cessar" - 1 Tessalonicenses 5:17
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;