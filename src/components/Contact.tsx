import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle, Instagram, Clock } from "lucide-react";
import { VK } from "@/icons";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+7 (927) 303-14-20",
      action: () => window.open("tel:+79273031420", "_self"),
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "ул. Садовое кольцо, 40, г. Октябрьский",
      action: () =>
        window.open(
          "https://maps.yandex.ru/?text=Октябрьский+ул.+Садовое+кольцо+40",
          "_blank"
        ),
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      content: "@olimpokt",
      action: () => window.open("https://t.me/olimpokt", "_blank"),
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "olimp_okt",
      action: () => window.open("https://instagram.com/olimp_okt", "_blank"),
    },
    {
      icon: VK,
      title: "Вконтакте",
      content: "olimp_okt",
      action: () => window.open("https://vk.com/olimp_okt", "_blank"),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами для записи на тренировку или получения
            дополнительной информации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer group"
              onClick={contact.action}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-button flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                  {contact.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center text-sm text-white mb-12">
          * — принадлежит Meta, признанной в Российской Федерации экстремистской
          организацией
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-button border-primary shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Готовы начать тренировки?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Позвоните нам прямо сейчас или приходите по адресу для
                консультации и записи
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/20 border-background/30 text-primary-foreground hover:bg-background/30"
                  onClick={() => window.open("tel:+79273031420", "_self")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background/20 border-background/30 text-primary-foreground hover:bg-background/30"
                  onClick={() =>
                    window.open(
                      "https://maps.yandex.ru/?text=Октябрьский+ул.+Садовое+кольцо+40",
                      "_blank"
                    )
                  }
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Показать на карте
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
