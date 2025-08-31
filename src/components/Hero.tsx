import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Dumbbell } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-card border border-border mb-6">
            <Award className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium">
              Спортклуб №1 в Октябрьском
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mt-8 md:mt-0 mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent text-center">
            <span className="block text-xl md:text-2xl mb-2">
              ОЛДСКУЛЬНЫЙ СПОРТКЛУБ
            </span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              ОЛИМП
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Кто здесь не был - тот будет!
            <br />А кто был - не забудет!
          </p>

          {/* Address */}
          <p className="text-lg text-muted-foreground mb-8">
            ул. Садовое кольцо 40, г. Октябрьский
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Записаться на тренировку
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const pricesSection = document.getElementById("prices");
                pricesSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Узнать цены
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-card border border-border shadow-card">
              <Dumbbell className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">15+</span>
              <span className="text-sm text-muted-foreground">Лет опыта</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-card border border-border shadow-card">
              <Users className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">500+</span>
              <span className="text-sm text-muted-foreground">
                Довольных клиентов
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-card border border-border shadow-card">
              <Award className="w-8 h-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">3</span>
              <span className="text-sm text-muted-foreground">
                Опытных тренера
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
