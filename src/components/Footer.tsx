import { Phone, MapPin, MessageCircle, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-button rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  О
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">ОЛИМП</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Спортклуб "Олимп" - ваш путь к здоровью и спортивным достижениям.
              Профессиональные тренировки в современном зале.
            </p>
            <p className="text-xs text-muted-foreground">
              Кто здесь не был - тот будет! А кто был - не забудет!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Пауэрлифтинг</li>
              <li>Бодибилдинг</li>
              <li>Фитнес тренировки</li>
              <li>Персональные тренировки</li>
              <li>Силовая подготовка</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Контакты</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <span>+7 (927) 303-14-20</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                <span>
                  ул. Садовое кольцо, 40
                  <br />
                  г. Октябрьский
                </span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                <span>@olimpokt</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Instagram className="w-4 h-4 mr-2 text-primary" />
                <span>olimp_okt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Спортклуб "Олимп". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
