import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sun, Download, ArrowDown } from "lucide-react";
import spiritualBackground from "@/assets/spiritual-background.jpg";

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
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${spiritualBackground})` }}
      />
      
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
            <div className="relative">
              <div className="w-24 h-24 mx-auto bg-gradient-golden rounded-full flex items-center justify-center shadow-glow">
                <Heart className="w-12 h-12 text-white" fill="currentColor" />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-24 h-24 mx-auto bg-primary/20 rounded-full blur-xl animate-pulse" />
            </div>
            
            {/* App Name */}
            <h1 className="text-6xl font-bold text-primary mb-4">
              Ora<span className="text-primary-glow">+</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl text-foreground/80 max-w-md mx-auto leading-relaxed">
              Conecte-se com Deus através da oração, todos os dias.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="divine" 
            size="lg"
            onClick={handleStartNow}
            className="text-lg px-12 py-4 rounded-full mb-12"
          >
            Começar Agora
            <Heart className="w-5 h-5 ml-2" />
          </Button>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary/60" />
          </div>
        </div>

        {/* Preview Section */}
        <div className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-primary mb-12">
              Uma experiência de oração transformadora
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-none shadow-soft hover:shadow-divine transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-heavenly rounded-full flex items-center justify-center">
                    <Sun className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Orações Diárias</h3>
                  <p className="text-muted-foreground">
                    Comece cada dia com uma oração especial, escolhida especialmente para você.
                  </p>
                </div>
              </Card>

              {/* Feature Card 2 */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-none shadow-soft hover:shadow-divine transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-heavenly rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Momentos de Paz</h3>
                  <p className="text-muted-foreground">
                    Encontre serenidade em meio ao dia corrido com reflexões inspiradoras.
                  </p>
                </div>
              </Card>

              {/* Feature Card 3 */}
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-none shadow-soft hover:shadow-divine transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-heavenly rounded-full flex items-center justify-center">
                    <Star className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Crescimento Espiritual</h3>
                  <p className="text-muted-foreground">
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