import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const timelineEvents = [
  { year: 1642, title: 'Рождение', description: 'Родился в деревушке Вулсторп, Англия', category: 'life' },
  { year: 1661, title: 'Кембридж', description: 'Поступил в Тринити-колледж', category: 'life' },
  { year: 1665, title: 'Год чудес', description: 'Открытие законов движения и начало работы над гравитацией', category: 'discovery' },
  { year: 1668, title: 'Телескоп', description: 'Создал первый рефлекторный телескоп', category: 'discovery' },
  { year: 1672, title: 'Теория света', description: 'Опубликовал теорию о природе света и цвета', category: 'discovery' },
  { year: 1687, title: 'Principia', description: 'Издал "Математические начала натуральной философии"', category: 'discovery' },
  { year: 1696, title: 'Монетный двор', description: 'Назначен хранителем Королевского монетного двора', category: 'life' },
  { year: 1703, title: 'Президент', description: 'Избран президентом Королевского общества', category: 'life' },
  { year: 1705, title: 'Рыцарство', description: 'Возведён в рыцарское достоинство королевой Анной', category: 'life' },
  { year: 1727, title: 'Кончина', description: 'Похоронен в Вестминстерском аббатстве', category: 'life' }
];

const facts = [
  { icon: 'Apple', title: 'Легенда о яблоке', text: 'История о падающем яблоке, вдохновившем Ньютона на открытие закона всемирного тяготения' },
  { icon: 'Coins', title: 'Борьба с фальшивомонетчиками', text: 'Работая в Монетном дворе, лично расследовал дела о подделке монет' },
  { icon: 'BookOpen', title: 'Тайные исследования', text: 'Занимался алхимией и теологией, написал больше работ по религии, чем по науке' },
  { icon: 'Users', title: 'Великий спор', text: 'Многолетний конфликт с Лейбницем о первенстве изобретения математического анализа' },
  { icon: 'Crown', title: 'Член парламента', text: 'Был избран в английский парламент, но за всё время произнёс лишь одну фразу' },
  { icon: 'Calendar', title: 'Дата рождения', text: 'Родился в день смерти Галилео Галилея (по старому календарю)' }
];

const discoveries = [
  {
    title: 'Три закона механики',
    description: 'Фундаментальные законы движения, описывающие взаимодействие тел',
    image: '/img/74d15838-1ed4-4973-9ba2-6a479a00749e.jpg'
  },
  {
    title: 'Закон всемирного тяготения',
    description: 'Каждое тело притягивает любое другое тело с силой, прямо пропорциональной произведению их масс',
    image: '/img/9d8cf520-b78b-4199-aeac-66d8210a4919.jpg'
  },
  {
    title: 'Оптика и теория света',
    description: 'Открытие природы белого света и создание первого зеркального телескопа',
    image: '/img/fb015194-8c4a-4b3e-ada7-c16ef14d7207.jpg'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'life' | 'discovery'>('all');

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(e => e.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-card shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-2">
                Исаак Ньютон
              </h1>
              <p className="text-lg text-muted-foreground font-body italic">
                1642–1727 • «Гипотез не измышляю»
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full border-4 border-secondary bg-primary flex items-center justify-center">
                <Icon name="Telescope" size={48} className="text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="biography" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-card border-2 border-primary/20">
            <TabsTrigger value="biography" className="font-display">Биография</TabsTrigger>
            <TabsTrigger value="discoveries" className="font-display">Открытия</TabsTrigger>
            <TabsTrigger value="mechanics" className="font-display">Механика</TabsTrigger>
            <TabsTrigger value="facts" className="font-display">Факты</TabsTrigger>
            <TabsTrigger value="legacy" className="font-display">Наследие</TabsTrigger>
          </TabsList>

          <TabsContent value="biography" className="space-y-8 animate-fade-in">
            <Card className="p-8 border-2 border-primary/30 bg-card shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img 
                  src="/img/74d15838-1ed4-4973-9ba2-6a479a00749e.jpg" 
                  alt="Исаак Ньютон"
                  className="w-64 h-64 object-cover rounded-lg border-4 border-secondary shadow-lg"
                />
                <div className="flex-1 space-y-4">
                  <h2 className="text-4xl font-display font-bold text-primary">Гений науки</h2>
                  <p className="text-lg leading-relaxed">
                    Исаак Ньютон — английский физик, математик, астроном и натурфилософ, один из величайших учёных в истории человечества. 
                    Родился 25 декабря 1642 года в небольшой деревушке Вулсторп в семье фермера.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Был болезненным ребёнком, но проявил выдающиеся способности к науке. Учился в Королевской школе в Грантеме, 
                    затем поступил в Тринити-колледж Кембриджского университета, где началась его блестящая научная карьера.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-display font-bold text-primary">Хронология жизни и открытий</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded border-2 transition-all ${
                      selectedCategory === 'all' 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-card text-foreground border-primary/30 hover:border-primary'
                    }`}
                  >
                    Всё
                  </button>
                  <button
                    onClick={() => setSelectedCategory('life')}
                    className={`px-4 py-2 rounded border-2 transition-all ${
                      selectedCategory === 'life' 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-card text-foreground border-primary/30 hover:border-primary'
                    }`}
                  >
                    Жизнь
                  </button>
                  <button
                    onClick={() => setSelectedCategory('discovery')}
                    className={`px-4 py-2 rounded border-2 transition-all ${
                      selectedCategory === 'discovery' 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-card text-foreground border-primary/30 hover:border-primary'
                    }`}
                  >
                    Открытия
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-secondary"></div>
                <div className="space-y-8">
                  {filteredEvents.map((event, index) => (
                    <div 
                      key={index} 
                      className="relative pl-20 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="absolute left-0 w-16 h-16 bg-secondary rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                        <span className="text-xs font-bold text-primary">{event.year}</span>
                      </div>
                      <Card className="p-6 border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl">
                        <h4 className="text-xl font-display font-bold text-primary mb-2">{event.title}</h4>
                        <p className="text-muted-foreground">{event.description}</p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="discoveries" className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8">
              {discoveries.map((discovery, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <img 
                    src={discovery.image} 
                    alt={discovery.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-display font-bold text-primary mb-3">{discovery.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{discovery.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 border-2 border-secondary/50 bg-secondary/10">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">Математические достижения</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Calculator" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-display font-bold text-lg">Математический анализ</h4>
                      <p className="text-muted-foreground">Разработал основы дифференциального и интегрального исчисления</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Binary" className="text-secondary mt-1" size={24} />
                    <div>
                      <h4 className="font-display font-bold text-lg">Бином Ньютона</h4>
                      <p className="text-muted-foreground">Формула разложения степени суммы двух переменных</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="mechanics" className="space-y-8 animate-fade-in">
            <Card className="p-8 border-2 border-primary/30 bg-card">
              <h2 className="text-4xl font-display font-bold text-primary mb-8 text-center">Три закона Ньютона</h2>
              <div className="space-y-6">
                <div className="p-6 bg-secondary/10 border-l-4 border-secondary rounded">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-2">Закон инерции</h3>
                      <p className="text-lg leading-relaxed">
                        Тело находится в состоянии покоя или равномерного прямолинейного движения, пока на него не действует внешняя сила.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-secondary/10 border-l-4 border-secondary rounded">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-2">Основной закон динамики</h3>
                      <p className="text-lg leading-relaxed">
                        Ускорение тела прямо пропорционально действующей на него силе и обратно пропорционально его массе: F = ma
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-secondary/10 border-l-4 border-secondary rounded">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-2">Закон действия и противодействия</h3>
                      <p className="text-lg leading-relaxed">
                        Каждому действию всегда есть равное и противоположное противодействие.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-secondary/20">
              <h3 className="text-3xl font-display font-bold text-primary mb-6">Примеры применения</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <Icon name="Rocket" size={48} className="mx-auto text-secondary" />
                  <h4 className="font-display font-bold text-lg">Ракеты</h4>
                  <p className="text-sm text-muted-foreground">Третий закон объясняет принцип работы реактивных двигателей</p>
                </div>
                <div className="text-center space-y-3">
                  <Icon name="Car" size={48} className="mx-auto text-secondary" />
                  <h4 className="font-display font-bold text-lg">Автомобили</h4>
                  <p className="text-sm text-muted-foreground">Второй закон описывает ускорение при разгоне</p>
                </div>
                <div className="text-center space-y-3">
                  <Icon name="Waves" size={48} className="mx-auto text-secondary" />
                  <h4 className="font-display font-bold text-lg">Движение планет</h4>
                  <p className="text-sm text-muted-foreground">Первый закон объясняет орбитальное движение</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="facts" className="animate-fade-in">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facts.map((fact, index) => (
                <Card 
                  key={index} 
                  className="p-6 border-2 border-primary/20 hover:border-secondary transition-all hover:shadow-xl animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Icon name={fact.icon as any} size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary">{fact.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{fact.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="legacy" className="space-y-8 animate-fade-in">
            <Card className="p-8 border-2 border-primary/30 bg-card">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">Влияние на современную науку</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Работы Ньютона заложили основу классической механики и оказали огромное влияние на развитие науки. 
                  Его «Математические начала натуральной философии» считаются одной из важнейших научных книг всех времён.
                </p>
                <p>
                  Законы Ньютона применяются в инженерии, астрономии, физике и многих других областях. 
                  Без его открытий невозможно представить современную науку и технологии.
                </p>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-secondary/50 bg-secondary/10">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Признание и почести</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Award" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Член Королевского общества (1672)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Crown" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Рыцарское достоинство (1705)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Church" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Похоронен в Вестминстерском аббатстве</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Users" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Президент Королевского общества</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-2 border-secondary/50 bg-secondary/10">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">Память о Ньютоне</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Scale" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Единица силы названа ньютоном (Н)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Building" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Музеи и памятники по всему миру</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Banknote" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Изображён на британских банкнотах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Star" className="text-secondary mt-1 flex-shrink-0" />
                    <span>Кратеры на Луне и Марсе носят его имя</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Card className="p-8 border-4 border-secondary bg-gradient-to-br from-secondary/10 to-secondary/5">
              <blockquote className="text-center space-y-4">
                <p className="text-2xl font-display italic text-primary">
                  "Если я видел дальше других, то потому, что стоял на плечах гигантов"
                </p>
                <footer className="text-lg text-muted-foreground">— Исаак Ньютон</footer>
              </blockquote>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t-4 border-primary bg-card mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground font-body">
            Образовательный сайт о жизни и открытиях Исаака Ньютона
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            1642–1727 • Гений, изменивший мир
          </p>
        </div>
      </footer>
    </div>
  );
}
