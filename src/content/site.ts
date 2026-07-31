import type { Locale } from "@/lib/i18n";

/**
 * Every user-facing string lives here, in both locales.
 * Components never hardcode copy — they read from `getContent(locale)`.
 */

export const company = {
  name: "Kometa Moving",
  phone: "+1 (858) 213-6239",
  phoneHref: "tel:+18582136239",
  email: "info@kometa-moving.com",
  whatsapp: "https://wa.me/18582136239",
  licences: ["CAL-T #201997", "USDOT #4468272"],
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Yelp", href: "https://yelp.com" },
  ],
  hours: "Mon-Sun, 7:00-20:00",
  address: "San Diego, California",
};

export type Content = {
  meta: { title: string; description: string };
  nav: { label: string; href: string }[];
  cta: { quote: string; call: string; book: string };
  hero: {
    title: string;
    highlight: string;
    subtitle: string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  why: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    items: { title: string; text: string; slug: string }[];
    stats: { value: string; label: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
    tiers: { crew: string; rate: string; unit: string; best?: boolean; text: string }[];
    includes: string[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { quote: string; name: string; source: string }[];
  };
  quote: {
    eyebrow: string;
    title: string;
    text: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      date: string;
      from: string;
      to: string;
      notes: string;
    };
    submit: string;
    disclaimer: string;
    success: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    cardTitle: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    rights: string;
  };
};

const en: Content = {
  meta: {
    title: "Kometa Moving | San Diego Movers | Free Estimate in 5 Minutes",
    description:
      "Licensed and insured San Diego movers. Local and long-distance moving, packing, commercial and office relocation. Flat hourly rates from $129/hr. 450+ moves completed.",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: {
    quote: "Get a Free Quote",
    call: "Call us",
    book: "Book your move",
  },
  hero: {
    title: "Make Your Move",
    highlight: "Easy & Stress-Free",
    subtitle:
      "Family-owned San Diego crew for local and long-distance moves. Upfront hourly pricing and a free estimate in under 5 minutes.",
  },
  how: {
    eyebrow: "How it works",
    title: "How Our Moving Service Works",
    steps: [
      {
        title: "Request a quote",
        text: "Fill out the quick form or give us a call to get your free, no-obligation estimate, usually within 5 minutes.",
      },
      {
        title: "Schedule your move",
        text: "Pick a date that works for you. We confirm the crew, the truck and every detail, and answer any questions.",
      },
      {
        title: "We handle the rest",
        text: "Our team packs, loads, transports and unloads your belongings safely at your new place. You just point.",
      },
    ],
  },
  why: {
    eyebrow: "Why choose us",
    title: "Why Move With Us?",
    text: "Whether you're moving across town or across the state, our team is here to make the process smooth and stress-free. We're dedicated to careful handling, clear communication and reliable service every time.",
    points: [
      "Licensed & insured movers (CAL-T #201997, USDOT #4468272)",
      "Friendly, experienced, background-checked crew",
      "Upfront hourly pricing with no hidden fees",
      "Flexible scheduling, including weekends",
      "Local & long-distance moves across California",
      "Our own trucks, dollies, blankets and straps",
    ],
  },
  services: {
    eyebrow: "Services we offer",
    title: "Full-Service Moving Solutions",
    text: "We offer a wide range of moving services to match your needs. Whether you need help with packing, loading, or just transportation, we've got you covered.",
    items: [
      {
        slug: "local-moving",
        title: "Local Moving",
        text: "Quick, safe moves within San Diego County at affordable hourly rates.",
      },
      {
        slug: "long-distance-moving",
        title: "Long-Distance Moving",
        text: "Reliable moves across California and beyond, with careful handling from start to finish.",
      },
      {
        slug: "packing-services",
        title: "Packing Services",
        text: "We pack your belongings securely with quality materials to prevent damage and save you time.",
      },
      {
        slug: "commercial-moving",
        title: "Commercial & Office",
        text: "Off-hours office relocations that keep your business running with minimal downtime.",
      },
    ],
    stats: [
      { value: "450+", label: "Moves completed" },
      { value: "5.0", label: "Google rating, 67 reviews" },
      { value: "24/7", label: "Quote requests" },
      { value: "100%", label: "Licensed & insured" },
    ],
  },
  pricing: {
    eyebrow: "Transparent pricing",
    title: "Simple Hourly Rates",
    text: "No surprises on moving day. Pick the crew size that fits your home. We'll help you choose on the call.",
    note: "Double drive time is billed as required by California law. 2-hour minimum.",
    tiers: [
      { crew: "2 movers + truck", rate: "$129", unit: "/hour", text: "Studio & 1-bedroom apartments" },
      { crew: "3 movers + truck", rate: "$169", unit: "/hour", best: true, text: "2-3 bedroom homes" },
      { crew: "4 movers + truck", rate: "$209", unit: "/hour", text: "Large homes & offices" },
    ],
    includes: [
      "Packing materials",
      "Transportation",
      "Dollies & equipment",
      "Furniture blankets",
      "Basic disassembly",
      "Full liability coverage",
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Our Customers Have to Say",
    items: [
      {
        quote:
          "The team was punctual, professional, and handled all my belongings with care. Moving has never been this stress-free!",
        name: "Adam K.",
        source: "Google Review",
      },
      {
        quote:
          "From packing to unloading, everything was smooth and efficient. Highly recommend them for anyone planning a move!",
        name: "Alex M.",
        source: "Google Review",
      },
      {
        quote:
          "They quoted me in five minutes and the final bill matched exactly. No games, no hidden charges. Rare these days.",
        name: "Priya S.",
        source: "Yelp Review",
      },
      {
        quote:
          "Moved our office over a weekend with zero downtime on Monday. The crew wrapped every monitor individually.",
        name: "Daniel R.",
        source: "Thumbtack",
      },
    ],
  },
  quote: {
    eyebrow: "Get your quote",
    title: "Get a Free Quote",
    text: "Tell us where you're moving from and to. We'll come back with a firm hourly estimate, usually within 5 minutes during business hours.",
    fields: {
      name: "Name",
      phone: "Phone number",
      email: "Email",
      date: "Moving date",
      from: "Current address",
      to: "New address",
      notes: "Any special requests?",
    },
    submit: "Get My Free Quote",
    disclaimer: "No obligation. We never share your details.",
    success: "Thanks! We've got your request and will call you shortly.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    cardTitle: "Need a reliable moving service? Get in touch today!",
    items: [
      {
        q: "Are you licensed and insured?",
        a: "Absolutely. We hold CAL-T #201997 and USDOT #4468272, and every move is covered by liability insurance, so you can relax.",
      },
      {
        q: "How far in advance should I book?",
        a: "One to two weeks is ideal, especially for weekends and end-of-month dates. That said, we often have same-week availability. Just call.",
      },
      {
        q: "Do you offer packing supplies?",
        a: "Yes. Boxes, tape, bubble wrap and furniture blankets are included in your rate, and we can pack the whole home for you if you'd like.",
      },
      {
        q: "Can I move on weekends?",
        a: "Yes, we work seven days a week at the same hourly rate, with no weekend surcharge.",
      },
      {
        q: "How is the final price calculated?",
        a: "Hourly rate × time on the job, plus double drive time as required by California law. There is a 2-hour minimum and no hidden fees.",
      },
    ],
  },
  footer: {
    tagline:
      "Family-owned San Diego movers. Local, long-distance, commercial and office relocation, done carefully and priced honestly.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Local moving", href: "#services" },
          { label: "Long-distance moving", href: "#services" },
          { label: "Packing services", href: "#services" },
          { label: "Commercial & office", href: "#services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "How it works", href: "#how-it-works" },
          { label: "Reviews", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    rights: "All rights reserved.",
  },
};

const ru: Content = {
  meta: {
    title: "Kometa Moving | Переезды в Сан-Диего | Бесплатная оценка за 5 минут",
    description:
      "Лицензированная и застрахованная компания по переездам в Сан-Диего. Локальные и междугородние переезды, упаковка, офисные и коммерческие переезды. Почасовая ставка от $129. Более 450 переездов.",
  },
  nav: [
    { label: "Услуги", href: "#services" },
    { label: "Как это работает", href: "#how-it-works" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Вопросы", href: "#faq" },
  ],
  cta: {
    quote: "Бесплатная оценка",
    call: "Позвонить",
    book: "Заказать переезд",
  },
  hero: {
    title: "Переезжайте легко",
    highlight: "и без стресса",
    subtitle:
      "Семейная команда из Сан-Диего: локальные и междугородние переезды, честная почасовая цена и бесплатная оценка за 5 минут.",
  },
  how: {
    eyebrow: "Как это работает",
    title: "Как проходит переезд с нами",
    steps: [
      {
        title: "Оставьте заявку",
        text: "Заполните короткую форму или позвоните. Бесплатная оценка без обязательств обычно готова в течение 5 минут.",
      },
      {
        title: "Выберите дату",
        text: "Вы называете удобный день. Мы подтверждаем бригаду, машину и все детали, отвечаем на любые вопросы.",
      },
      {
        title: "Остальное берём на себя",
        text: "Мы упакуем, погрузим, перевезём и аккуратно разгрузим вещи на новом месте. Вам остаётся только показывать, куда ставить.",
      },
    ],
  },
  why: {
    eyebrow: "Почему мы",
    title: "Почему выбирают нас?",
    text: "Переезжаете по городу или через весь штат? Наша задача сделать процесс спокойным и предсказуемым: аккуратное обращение с вещами, понятное общение и надёжный сервис каждый раз.",
    points: [
      "Лицензия и страховка (CAL-T #201997, USDOT #4468272)",
      "Опытная, проверенная и вежливая бригада",
      "Честная почасовая цена без скрытых платежей",
      "Гибкий график, включая выходные",
      "Локальные и междугородние переезды по Калифорнии",
      "Свои грузовики, тележки, чехлы и ремни",
    ],
  },
  services: {
    eyebrow: "Наши услуги",
    title: "Полный спектр услуг по переезду",
    text: "Мы закрываем любую задачу: поможем с упаковкой, погрузим и перевезём или организуем переезд под ключ.",
    items: [
      {
        slug: "local-moving",
        title: "Локальный переезд",
        text: "Быстрые и аккуратные переезды внутри округа Сан-Диего по доступной почасовой ставке.",
      },
      {
        slug: "long-distance-moving",
        title: "Междугородний переезд",
        text: "Надёжные перевозки по Калифорнии и дальше, с аккуратным обращением на всех этапах.",
      },
      {
        slug: "packing-services",
        title: "Упаковка",
        text: "Надёжно упакуем вещи качественными материалами, без повреждений и лишней траты вашего времени.",
      },
      {
        slug: "commercial-moving",
        title: "Офис и бизнес",
        text: "Переезд офиса в нерабочие часы, чтобы бизнес не останавливался ни на день.",
      },
    ],
    stats: [
      { value: "450+", label: "Переездов выполнено" },
      { value: "5.0", label: "Рейтинг Google, 67 отзывов" },
      { value: "24/7", label: "Приём заявок" },
      { value: "100%", label: "Лицензия и страховка" },
    ],
  },
  pricing: {
    eyebrow: "Прозрачные цены",
    title: "Простые почасовые ставки",
    text: "Никаких сюрпризов в день переезда. Выберите размер бригады под ваш дом, а мы поможем определиться по телефону.",
    note: "Двойное время в пути тарифицируется по требованию закона Калифорнии. Минимальный заказ: 2 часа.",
    tiers: [
      { crew: "2 грузчика + машина", rate: "$129", unit: "/час", text: "Студии и однокомнатные квартиры" },
      { crew: "3 грузчика + машина", rate: "$169", unit: "/час", best: true, text: "Дома на 2-3 спальни" },
      { crew: "4 грузчика + машина", rate: "$209", unit: "/час", text: "Большие дома и офисы" },
    ],
    includes: [
      "Упаковочные материалы",
      "Транспортировка",
      "Тележки и оборудование",
      "Чехлы для мебели",
      "Базовая разборка мебели",
      "Полное страховое покрытие",
    ],
  },
  testimonials: {
    eyebrow: "Отзывы",
    title: "Что говорят наши клиенты",
    items: [
      {
        quote:
          "Приехали вовремя, работали профессионально, к вещам отнеслись бережно. Ещё ни один переезд не проходил так спокойно!",
        name: "Адам К.",
        source: "Отзыв в Google",
      },
      {
        quote:
          "От упаковки до разгрузки всё чётко и быстро. Рекомендую всем, кто планирует переезд!",
        name: "Алекс М.",
        source: "Отзыв в Google",
      },
      {
        quote:
          "Оценку дали за пять минут, итоговый счёт совпал до доллара. Без игр и скрытых доплат. Сейчас это редкость.",
        name: "Прия С.",
        source: "Отзыв на Yelp",
      },
      {
        quote:
          "Перевезли наш офис за выходные, в понедельник работали как обычно. Каждый монитор упаковали отдельно.",
        name: "Даниэль Р.",
        source: "Thumbtack",
      },
    ],
  },
  quote: {
    eyebrow: "Оценка переезда",
    title: "Получить бесплатную оценку",
    text: "Напишите, откуда и куда переезжаете. Пришлём точную почасовую оценку, обычно в течение 5 минут в рабочее время.",
    fields: {
      name: "Имя",
      phone: "Телефон",
      email: "Email",
      date: "Дата переезда",
      from: "Текущий адрес",
      to: "Новый адрес",
      notes: "Особые пожелания?",
    },
    submit: "Получить оценку",
    disclaimer: "Без обязательств. Мы не передаём ваши данные третьим лицам.",
    success: "Спасибо! Заявка получена, мы свяжемся с вами в ближайшее время.",
  },
  faq: {
    eyebrow: "Вопросы",
    title: "Часто задаваемые вопросы",
    cardTitle: "Нужен надёжный переезд? Свяжитесь с нами сегодня!",
    items: [
      {
        q: "У вас есть лицензия и страховка?",
        a: "Да. У нас лицензии CAL-T #201997 и USDOT #4468272, а каждый переезд покрыт страховкой ответственности. Можно не волноваться.",
      },
      {
        q: "За сколько дней бронировать?",
        a: "Оптимально за 1-2 недели, особенно на выходные и конец месяца. Но часто есть места и на текущей неделе. Просто позвоните.",
      },
      {
        q: "Даёте ли вы упаковочные материалы?",
        a: "Да. Коробки, скотч, пузырчатая плёнка и чехлы для мебели уже входят в ставку, а при желании упакуем весь дом за вас.",
      },
      {
        q: "Можно переехать в выходные?",
        a: "Да, мы работаем семь дней в неделю по той же ставке, без наценки за выходные.",
      },
      {
        q: "Как считается итоговая цена?",
        a: "Почасовая ставка × время работы плюс двойное время в пути по закону Калифорнии. Минимум 2 часа, скрытых платежей нет.",
      },
    ],
  },
  footer: {
    tagline:
      "Семейная компания по переездам в Сан-Диего. Локальные, междугородние, офисные и коммерческие переезды: аккуратно и по честной цене.",
    columns: [
      {
        title: "Услуги",
        links: [
          { label: "Локальный переезд", href: "#services" },
          { label: "Междугородний переезд", href: "#services" },
          { label: "Упаковка", href: "#services" },
          { label: "Офис и бизнес", href: "#services" },
        ],
      },
      {
        title: "Компания",
        links: [
          { label: "Как это работает", href: "#how-it-works" },
          { label: "Отзывы", href: "#testimonials" },
          { label: "Вопросы", href: "#faq" },
        ],
      },
    ],
    rights: "Все права защищены.",
  },
};

const content: Record<Locale, Content> = { en, ru };

export function getContent(locale: Locale): Content {
  return content[locale];
}
