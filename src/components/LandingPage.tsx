import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, BookOpen, Shield, Star, Moon } from "lucide-react";
import mysticalBg from "@/assets/mystical-dark-background.jpg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-mystical relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mysticalBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star className="absolute top-20 left-20 w-6 h-6 text-primary/30 animate-pulse" />
        <Moon className="absolute top-40 right-32 w-8 h-8 text-primary-glow/40 animate-float" />
        <Star className="absolute bottom-40 left-1/4 w-4 h-4 text-primary/40 animate-pulse delay-1000" />
        <Star className="absolute top-60 right-1/4 w-5 h-5 text-primary-glow/30 animate-float delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="animate-fade-in-up">
          <h1 className="text-2xl font-bold bg-gradient-golden bg-clip-text text-transparent">Ora+</h1>
        </div>
        <Button variant="divine" className="animate-slide-up shadow-glow hover:shadow-divine transition-all duration-300">
          <Star className="w-4 h-4 mr-2" />
          Instalar App
        </Button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-float">
            <div className="w-28 h-28 mx-auto mb-6 bg-gradient-divine rounded-full flex items-center justify-center shadow-divine border-2 border-primary/20">
              <Heart className="w-14 h-14 text-primary-foreground animate-pulse" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up bg-gradient-divine bg-clip-text text-transparent drop-shadow-2xl">
            Ora+
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-3xl text-foreground/90 mb-12 animate-fade-in-up delay-300 font-medium">
            Conecte-se com Deus através da oração, <br className="hidden md:block" />
            <span className="text-primary">todos os dias.</span>
          </p>

          {/* CTA Button */}
          <Button size="lg" variant="divine" className="animate-glow-pulse text-xl px-12 py-6 shadow-divine hover:shadow-glow transform hover:scale-105 transition-all duration-300">
            <BookOpen className="w-6 h-6 mr-3" />
            Começar Agora
          </Button>
        </div>
      </main>

      {/* Preview Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up bg-gradient-divine bg-clip-text text-transparent">
            Sua jornada espiritual começa aqui
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="animate-fade-in-up delay-100 shadow-mystical hover:shadow-divine transition-all duration-500 hover:scale-105 border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card/90 group">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-divine opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-golden rounded-full flex items-center justify-center shadow-glow animate-float relative z-10">
                  <Heart className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10">Orações Diárias</h3>
                <p className="text-muted-foreground text-lg relative z-10">
                  Receba orações inspiradoras todos os dias para fortalecer sua fé e sua conexão com Deus.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="animate-fade-in-up delay-200 shadow-mystical hover:shadow-divine transition-all duration-500 hover:scale-105 border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card/90 group">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-warm opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-warm rounded-full flex items-center justify-center shadow-glow animate-float delay-300 relative z-10">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10">Comunidade</h3>
                <p className="text-muted-foreground text-lg relative z-10">
                  Conecte-se com outros fiéis, compartilhe suas orações e encontre apoio em sua jornada.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="animate-fade-in-up delay-300 shadow-mystical hover:shadow-divine transition-all duration-500 hover:scale-105 border-primary/20 bg-card/80 backdrop-blur-sm hover:bg-card/90 group">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-divine opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-divine rounded-full flex items-center justify-center shadow-glow animate-float delay-500 relative z-10">
                  <BookOpen className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground relative z-10">Reflexões</h3>
                <p className="text-muted-foreground text-lg relative z-10">
                  Explore textos bíblicos, reflexões profundas e encontre paz em momentos de contemplação.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-primary mr-3 animate-pulse" />
            <span className="text-muted-foreground text-lg">Protegido pela graça divina</span>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-mystical border border-primary/20">
            <p className="text-2xl text-foreground italic animate-fade-in-up bg-gradient-divine bg-clip-text text-transparent font-medium">
              "Orai sem cessar"
            </p>
            <p className="text-primary mt-2 text-lg">
              1 Tessalonicenses 5:17
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;