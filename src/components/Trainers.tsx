import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Award, Users } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Шарипов Р.Н.",
      specialization: "Пауэрлифтинг, бодибилдинг, силовая подготовка",
      phone: "8-927-30-31-420",
      experience: "10+ лет",
      achievements: ["Мастер спорта", "Сертифицированный тренер"],
      image: trainer1
    },
    {
      name: "Газизова Э.Р.",
      specialization: "Персональные тренировки",
      phone: "8-929-75-57-156",
      experience: "8+ лет",
      achievements: ["Фитнес-инструктор", "Специалист по реабилитации"],
      image: trainer2
    },
    {
      name: "Закирова Саира",
      specialization: "Фитнес, групповые занятия",
      phone: "8-937-341-24-69",
      experience: "6+ лет",
      achievements: ["Инструктор групповых программ", "Аэробика"],
      image: trainer1
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Наши тренеры</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональные тренеры с многолетним опытом помогут вам достичь ваших целей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{trainer.name}</h3>
                    <p className="text-primary font-medium">{trainer.specialization}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Award className="w-4 h-4 mr-2" />
                      <span>Опыт: {trainer.experience}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Достижения:</h4>
                    <ul className="space-y-1">
                      {trainer.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => window.open(`tel:${trainer.phone}`, '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    {trainer.phone}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;