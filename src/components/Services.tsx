import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Users, User, Trophy } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Пауэрлифтинг и Бодибилдинг",
      description: "Профессиональные тренировки по силовым видам спорта под руководством опытного тренера",
      features: ["Индивидуальный подход", "Современное оборудование", "Контроль техники"]
    },
    {
      icon: Users,
      title: "Фитнес",
      description: "Общая физическая подготовка и групповые занятия для поддержания формы",
      features: ["Групповые тренировки", "Кардио зона", "Функциональный тренинг"]
    },
    {
      icon: User,
      title: "Персональные тренировки",
      description: "Индивидуальные занятия с личным тренером для достижения ваших целей",
      features: ["Персональная программа", "Постоянный контроль", "Быстрый результат"]
    },
    {
      icon: Trophy,
      title: "Силовая подготовка",
      description: "Общая силовая подготовка для улучшения физических показателей",
      features: ["Развитие силы", "Выносливость", "Координация движений"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр тренировочных программ для достижения ваших спортивных целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-button flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Prices Section */}
        <div id="prices" className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Стоимость занятий</h3>
            <p className="text-xl text-muted-foreground">
              Доступные цены для всех видов тренировок
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">Разовое посещение</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">280₽</div>
                <p className="text-sm text-muted-foreground">За одну тренировку</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">10 занятий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">2600₽</div>
                <p className="text-sm text-muted-foreground">Абонемент на 10 посещений</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">12 занятий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">2800₽</div>
                <p className="text-sm text-muted-foreground">Абонемент на 12 посещений</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border shadow-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">15 занятий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">3400₽</div>
                <p className="text-sm text-muted-foreground">Абонемент на 15 посещений</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;