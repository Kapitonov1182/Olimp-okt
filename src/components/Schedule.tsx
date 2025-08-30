import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, DollarSign } from "lucide-react";
import { RubleSign } from "@/icons";

const Schedule = () => {
  const scheduleData = [
    {
      title: "Основные тренировки",
      description: "Пауэрлифтинг, бодибилдинг, фитнес, силовая подготовка",
      schedule: "Понедельник - Пятница: 16:00 - 21:00",
      weekend: "Суббота: 16:00 - 20:00",
      trainer: "Шарипов Р.Н.",
      type: "Групповые и индивидуальные",
    },
    {
      title: "Фитнес (групповые)",
      description: "Групповые фитнес тренировки",
      schedule: "Понедельник - Пятница: 16:00 и 20:00",
      weekend: "Выходной: Воскресенье",
      trainer: "Закирова Саира",
      type: "Групповые занятия",
    },
    {
      title: "Персональные тренировки",
      description: "Индивидуальные занятия с тренером",
      schedule: "По договоренности",
      weekend: "Гибкий график",
      trainer: "Газизова Э.Р.",
      type: "Индивидуальные",
    },
  ];

  const prices = [
    { type: "Разовое посещение", price: "280", unit: "руб." },
    { type: "Абонемент на 10 занятий", price: "2600", unit: "руб." },
    { type: "Абонемент на 12 занятий", price: "2800", unit: "руб." },
    { type: "Абонемент на 15 занятий", price: "3400", unit: "руб." },
  ];

  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Расписание и цены</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Удобное расписание занятий и доступные цены на все виды тренировок
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Schedule */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-primary" />
              Расписание занятий
            </h3>
            <div className="space-y-6">
              {scheduleData.map((item, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border shadow-card"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {item.title}
                      <Badge variant="secondary">{item.type}</Badge>
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">{item.schedule}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{item.weekend}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-primary">Тренер: </span>
                      <span>{item.trainer}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Prices */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <RubleSign className="w-6 h-6 mr-2 text-primary relative top-1" />
              Стоимость занятий
            </h3>
            <div className="space-y-4">
              {prices.map((price, index) => (
                <Card
                  key={index}
                  className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {price.type}
                        </h4>
                        {index > 0 && (
                          <p className="text-sm text-muted-foreground">
                            {Math.round(
                              parseInt(price.price) /
                                (index === 1 ? 10 : index === 2 ? 12 : 15)
                            )}{" "}
                            руб. за занятие
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">
                          {price.price}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          {price.unit}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Special offer */}
            <Card className="mt-6 bg-gradient-button border-primary shadow-glow">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-primary-foreground mb-2">
                  💪 Лучшее предложение!
                </h4>
                <p className="text-primary-foreground/90 text-sm">
                  Абонемент на 15 занятий - всего 227 рублей за тренировку!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Working hours */}
        <Card className="bg-muted/50 border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Режим работы</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-primary mb-1">
                  Понедельник - Пятница
                </div>
                <div className="text-muted-foreground">16:00 - 21:00</div>
              </div>
              <div>
                <div className="font-semibold text-primary mb-1">Суббота</div>
                <div className="text-muted-foreground">16:00 - 20:00</div>
              </div>
              <div>
                <div className="font-semibold text-destructive mb-1">
                  Воскресенье
                </div>
                <div className="text-muted-foreground">Выходной</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Schedule;
