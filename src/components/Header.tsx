import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-7 bg-gradient-button rounded-full flex items-center justify-center">
              <img
                src="/olimp-image.png"
                alt="Логотип"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-foreground">ОЛИМП</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#trainers"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Тренеры
            </a>
            <a
              href="#schedule"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Расписание
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center text-sm text-muted-foreground">
              <Phone className="w-4 h-4 mr-1" />
              <span>+7 (927) 303-14-20</span>
            </div>
            <Button
              variant="hero"
              size="sm"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
