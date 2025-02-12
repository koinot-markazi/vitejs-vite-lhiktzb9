import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Get stored language preference
const storedLanguage = localStorage.getItem('preferredLanguage');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          meta: {
            title: 'Sadiya Tour - Your Gateway to Adventure',
            description: 'Discover unforgettable travel experiences with Sadiya Tour. Expert guides, personalized service, and competitive prices.',
          },
          nav: {
            search: 'Search',
            directions: 'Directions',
            popularTours: 'Popular Tours',
            hotTours: 'Hot Tours',
            searchPlaceholder: 'Search for destinations, tours...',
          },
          hero: {
            title: 'Discover Your Next Adventure',
            subtitle: 'Explore the world with Sadiya Tour',
          },
          tours: {
            title: 'Popular Tours',
            subtitle: 'Discover our most popular tours and experiences, carefully curated for unforgettable adventures.',
            toursIn: 'Tours in {{destination}}',
            noTours: 'No tours available for the selected destination at the moment.',
            showAll: 'Show all destinations',
            from: 'from',
            duration: {
              days: '{{count}} days',
              day_one: '1 day',
              day_other: '{{count}} days',
            },
            bookNow: 'Book Now',
            rating: 'Rating',
            destinations: {
              uzbekistan: 'Uzbekistan',
              egypt: 'Egypt',
              thailand: 'Thailand',
              vietnam: 'Vietnam',
              turkey: 'Turkey',
              dubai: 'Dubai',
            },
            items: {
              samarkand: {
                title: 'Historical Samarkand Tour',
                location: 'Samarkand, Uzbekistan',
              },
              bukhara: {
                title: 'Bukhara Heritage Walk',
                location: 'Bukhara, Uzbekistan',
              },
              tashkent: {
                title: 'Tashkent City Explorer',
                location: 'Tashkent, Uzbekistan',
              },
              cairo: {
                title: 'Pyramids & Nile Cruise',
                location: 'Cairo, Egypt',
              },
              bangkok: {
                title: 'Bangkok Temple Tour',
                location: 'Bangkok, Thailand',
              },
              halong: {
                title: 'Halong Bay Cruise',
                location: 'Halong Bay, Vietnam',
              },
            },
          },
          about: {
            title: 'Your Trusted Travel Partner Since 2009',
            description: 'At Sadiya Tour, we believe that travel is not just about destinations; it\'s about creating unforgettable experiences. For over 15 years, we\'ve been crafting personalized journeys that inspire, educate, and transform our clients\' lives.',
            stats: {
              destinations: 'Destinations',
              happyClients: 'Happy Clients',
              yearsExperience: 'Years Experience',
              tourGuides: 'Tour Guides',
            },
            features: {
              globalReach: {
                title: 'Global Reach',
                description: 'Access to exclusive destinations worldwide',
              },
              expertGuides: {
                title: 'Expert Guides',
                description: 'Professional and knowledgeable local guides',
              },
            },
          },
          whyChooseUs: {
            title: 'Why Choose Sadiya Tour?',
            subtitle: 'We\'re committed to making your travel experience exceptional from start to finish.',
            reasons: {
              safety: {
                title: 'Safe & Reliable',
                description: 'Your safety is our top priority with comprehensive travel insurance and local support.',
              },
              support: {
                title: '24/7 Support',
                description: 'Round-the-clock assistance for any questions or concerns during your journey.',
              },
              service: {
                title: 'Personalized Service',
                description: 'Customized travel experiences tailored to your preferences and needs.',
              },
              price: {
                title: 'Best Price Guarantee',
                description: 'Competitive prices and value for money with our price match promise.',
              },
            },
          },
          partners: {
            title: 'Our Trusted Partners',
          },
          cta: {
            title: 'Ready to Start Your Adventure?',
            subtitle: 'Join thousands of satisfied travelers who have experienced the world with us.',
            button: 'Plan Your Trip Now',
          },
          faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Find answers to common questions about our tours and services.',
            questions: {
              payment: {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and PayPal. All payments are processed securely through our encrypted payment system.',
              },
              customization: {
                question: 'Can I customize my tour package?',
                answer: 'Yes! We offer fully customizable tour packages. Contact our team to create a personalized itinerary that matches your preferences and schedule.',
              },
              cancellation: {
                question: 'What is your cancellation policy?',
                answer: 'Our standard cancellation policy allows for full refunds up to 30 days before the tour date. Cancellations within 30 days may be subject to partial charges.',
              },
              insurance: {
                question: 'Do you provide travel insurance?',
                answer: 'Yes, we offer comprehensive travel insurance packages. We strongly recommend purchasing travel insurance for all international tours.',
              },
            },
          },
          footer: {
            company: {
              description: 'Your trusted partner in creating unforgettable travel experiences since 2009.',
            },
            quickLinks: {
              title: 'Quick Links',
              about: 'About Us',
              tours: 'Tours',
              destinations: 'Destinations',
              blog: 'Blog',
            },
            contact: {
              title: 'Contact Us',
              address: '123 Tourism Street, Tashkent, Uzbekistan',
            },
            exchangeRates: {
              title: 'Exchange Rates',
              buy: 'Buy',
              sell: 'Sell',
            },
            copyright: '© {{year}} Sadiya Tour. All rights reserved.',
          },
        },
      },
      ru: {
        translation: {
          meta: {
            title: 'Sadiya Tour - Ваши Ворота к Приключениям',
            description: 'Откройте для себя незабываемые путешествия с Sadiya Tour. Опытные гиды, индивидуальный сервис и конкурентные цены.',
          },
          nav: {
            search: 'Поиск',
            directions: 'Направления',
            popularTours: 'Популярные Туры',
            hotTours: 'Горящие Туры',
            searchPlaceholder: 'Поиск направлений, туров...',
          },
          hero: {
            title: 'Откройте для себя новые приключения',
            subtitle: 'Исследуйте мир вместе с Sadiya Tour',
          },
          tours: {
            title: 'Популярные Туры',
            subtitle: 'Откройте для себя наши самые популярные туры и впечатления, тщательно подобранные для незабываемых приключений.',
            toursIn: 'Туры в {{destination}}',
            noTours: 'В данный момент нет доступных туров по выбранному направлению.',
            showAll: 'Показать все направления',
            from: 'от',
            duration: {
              days: '{{count}} дней',
              day_one: '1 день',
              day_other: '{{count}} дня',
            },
            bookNow: 'Забронировать',
            rating: 'Рейтинг',
            destinations: {
              uzbekistan: 'Узбекистан',
              egypt: 'Египет',
              thailand: 'Таиланд',
              vietnam: 'Вьетнам',
              turkey: 'Турция',
              dubai: 'Дубай',
            },
            items: {
              samarkand: {
                title: 'Исторический Тур по Самарканду',
                location: 'Самарканд, Узбекистан',
              },
              bukhara: {
                title: 'Прогулка по Наследию Бухары',
                location: 'Бухара, Узбекистан',
              },
              tashkent: {
                title: 'Исследование Ташкента',
                location: 'Ташкент, Узбекистан',
              },
              cairo: {
                title: 'Пирамиды и Круиз по Нилу',
                location: 'Каир, Египет',
              },
              bangkok: {
                title: 'Тур по Храмам Бангкока',
                location: 'Бангкок, Таиланд',
              },
              halong: {
                title: 'Круиз по Бухте Халонг',
                location: 'Бухта Халонг, Вьетнам',
              },
            },
          },
          about: {
            title: 'Ваш надежный партнер в путешествиях с 2009 года',
            description: 'В Sadiya Tour мы верим, что путешествия - это не просто о направлениях, это о создании незабываемых впечатлений. Более 15 лет мы создаем персонализированные путешествия, которые вдохновляют, обучают и преображают жизни наших клиентов.',
            stats: {
              destinations: 'Направлений',
              happyClients: 'Довольных Клиентов',
              yearsExperience: 'Лет Опыта',
              tourGuides: 'Гидов',
            },
            features: {
              globalReach: {
                title: 'Глобальный Охват',
                description: 'Доступ к эксклюзивным направлениям по всему миру',
              },
              expertGuides: {
                title: 'Опытные Гиды',
                description: 'Профессиональные и знающие местные гиды',
              },
            },
          },
          whyChooseUs: {
            title: 'Почему Выбирают Sadiya Tour?',
            subtitle: 'Мы стремимся сделать ваше путешествие исключительным от начала до конца.',
            reasons: {
              safety: {
                title: 'Безопасность и Надежность',
                description: 'Ваша безопасность - наш главный приоритет, включая комплексное страхование и локальную поддержку.',
              },
              support: {
                title: 'Поддержка 24/7',
                description: 'Круглосуточная помощь по любым вопросам во время вашего путешествия.',
              },
              service: {
                title: 'Индивидуальный Сервис',
                description: 'Индивидуальные туры, адаптированные под ваши предпочтения и потребности.',
              },
              price: {
                title: 'Гарантия Лучшей Цены',
                description: 'Конкурентные цены и гарантия соответствия цен.',
              },
            },
          },
          partners: {
            title: 'Наши Надежные Партнеры',
          },
          cta: {
            title: 'Готовы Начать Свое Приключение?',
            subtitle: 'Присоединяйтесь к тысячам довольных путешественников, которые уже открыли мир с нами.',
            button: 'Спланировать Путешествие',
          },
          faq: {
            title: 'Часто Задаваемые Вопросы',
            subtitle: 'Найдите ответы на распространенные вопросы о наших турах и услугах.',
            questions: {
              payment: {
                question: 'Какие способы оплаты вы принимаете?',
                answer: 'Мы принимаем все основные кредитные карты, банковские переводы и PayPal. Все платежи обрабатываются безопасно через нашу зашифрованную платежную систему.',
              },
              customization: {
                question: 'Могу ли я настроить свой тур?',
                answer: 'Да! Мы предлагаем полностью настраиваемые туры. Свяжитесь с нашей командой, чтобы создать персонализированный маршрут, соответствующий вашим предпочтениям и расписанию.',
              },
              cancellation: {
                question: 'Какова ваша политика отмены?',
                answer: 'Наша стандартная политика отмены предусматривает полный возврат средств до 30 дней до начала тура. Отмены в течение 30 дней могут облагаться частичными сборами.',
              },
              insurance: {
                question: 'Предоставляете ли вы туристическую страховку?',
                answer: 'Да, мы предлагаем комплексные пакеты туристического страхования. Мы настоятельно рекомендуем приобретать туристическую страховку для всех международных туров.',
              },
            },
          },
          footer: {
            company: {
              description: 'Ваш надежный партнер в создании незабываемых путешествий с 2009 года.',
            },
            quickLinks: {
              title: 'Быстрые Ссылки',
              about: 'О Нас',
              tours: 'Туры',
              destinations: 'Направления',
              blog: 'Блог',
            },
            contact: {
              title: 'Контакты',
              address: 'ул. Туризма 123, Ташкент, Узбекистан',
            },
            exchangeRates: {
              title: 'Курсы Валют',
              buy: 'Покупка',
              sell: 'Продажа',
            },
            copyright: '© {{year}} Sadiya Tour. Все права защищены.',
          },
        },
      },
      uz: {
        translation: {
          meta: {
            title: 'Sadiya Tour - Sarguzashtlar Darvozasi',
            description: 'Sadiya Tour bilan unutilmas sayohat tajribalarini kashf eting. Tajribali gidlar, shaxsiy xizmat va raqobatbardosh narxlar.',
          },
          nav: {
            search: 'Qidiruv',
            directions: 'Yo\'nalishlar',
            popularTours: 'Mashhur Turlar',
            hotTours: 'Qaynoq Turlar',
            searchPlaceholder: 'Manzillar, turlarni qidirish...',
          },
          hero: {
            title: 'Keyingi Sarguzashtingizni Kashf Eting',
            subtitle: 'Sadiya Tour bilan dunyoni o\'rganing',
          },
          tours: {
            title: 'Mashhur Turlar',
            subtitle: 'Unutilmas sarguzashtlar uchun maxsus tanlangan eng mashhur turlarimiz va tajribalarimizni kashf eting.',
            toursIn: '{{destination}} bo\'ylab turlar',
            noTours: 'Hozirda tanlangan yo\'nalish bo\'yicha mavjud turlar yo\'q.',
            showAll: 'Barcha yo\'nalishlarni ko\'rsatish',
            from: 'dan',
            duration: {
              days: '{{count}} kun',
              day_one: '1 kun',
              day_other: '{{count}} kun',
            },
            bookNow: 'Hozir Band Qiling',
            rating: 'Reyting',
            destinations: {
              uzbekistan: 'O\'zbekiston',
              egypt: 'Misr',
              thailand: 'Tailand',
              vietnam: 'Vetnam',
              turkey: 'Turkiya',
              dubai: 'Dubay',
            },
            items: {
              samarkand: {
                title: 'Tarixiy Samarqand Turi',
                location: 'Samarqand, O\'zbekiston',
              },
              bukhara: {
                title: 'Buxoro Merosi Bo\'ylab Sayohat',
                location: 'Buxoro, O\'zbekiston',
              },
              tashkent: {
                title: 'Toshkent Shahri Bo\'ylab Sayohat',
                location: 'Toshkent, O\'zbekiston',
              },
              cairo: {
                title: 'Ehromlar va Nil Daryosi Kruizi',
                location: 'Qohira, Misr',
              },
              bangkok: {
                title: 'Bangkok Ibodatxonalari Turi',
                location: 'Bangkok, Tailand',
              },
              halong: {
                title: 'Halong Ko\'rfazi Kruizi',
                location: 'Halong Ko\'rfazi, Vetnam',
              },
            },
          },
          about: {
            title: '2009 yildan beri ishonchli sayohat hamkoringiz',
            description: 'Sadiya Tour-da biz sayohat faqat manzillar haqida emas, balki unutilmas tajribalar yaratish haqida deb ishonamiz. 15 yildan ortiq vaqt davomida biz mijozlarimizning hayotini ilhomlantiruvchi, ta\'lim beruvchi va o\'zgartiruvchi shaxsiy sayohatlarni yaratib kelmoqdamiz.',
            stats: {
              destinations: 'Manzillar',
              happyClients: 'Mamnun Mijozlar',
              yearsExperience: 'Yillik Tajriba',
              tourGuides: 'Gidlar',
            },
            features: {
              globalReach: {
                title: 'Global Qamrov',
                description: 'Dunyo bo\'ylab eksklyuziv manzillarga kirish',
              },
              expertGuides: {
                title: 'Tajribali Gidlar',
                description: 'Professional va bilimdon mahalliy gidlar',
              },
            },
          },
          whyChooseUs: {
            title: 'Nima Uchun Sadiya Tour?',
            subtitle: 'Biz sizning sayohat tajribangizni boshidan oxirigacha ajoyib qilishga intilamiz.',
            reasons: {
              safety: {
                title: 'Xavfsiz va Ishonchli',
                description: 'Sizning xavfsizligingiz bizning asosiy ustuvorligimiz, keng qamrovli sayohat sug\'urtasi va mahalliy yordam bilan.',
              },
              support: {
                title: '24/7 Qo\'llab-quvvatlash',
                description: 'Sayohatingiz davomida har qanday savol yoki muammolar uchun kundalik yordam.',
              },
              service: {
                title: 'Shaxsiy Xizmat',
                description: 'Sizning afzalliklaringiz va ehtiyojlaringizga moslashtirilgan maxsus sayohat tajribalari.',
              },
              price: {
                title: 'Eng Yaxshi Narx Kafolati',
                description: 'Raqobatbardosh narxlar va narx mosligini kafolatlash.',
              },
            },
          },
          partners: {
            title: 'Ishonchli Hamkorlarimiz',
          },
          cta: {
            title: 'Sarguzashtingizni Boshlashga Tayyormisiz?',
            subtitle: 'Biz bilan dunyoni kashf etgan minglab mamnun sayohatchilar safiga qo\'shiling.',
            button: 'Sayohatingizni Rejalashtiring',
          },
          faq: {
            title: 'Ko\'p So\'raladigan Savollar',
            subtitle: 'Bizning turlar va xizmatlar haqidagi umumiy savollarga javoblarni toping.',
            questions: {
              payment: {
                question: 'Qanday to\'lov usullarini qabul qilasiz?',
                answer: 'Biz barcha asosiy kredit kartalarini, bank o\'tkazmalarini va PayPal-ni qabul qilamiz. Barcha to\'lovlar bizning shifrlangan to\'lov tizimimiz orqali xavfsiz amalga oshiriladi.',
              },
              customization: {
                question: 'Tur paketimni moslashtira olamanmi?',
                answer: 'Ha! Biz to\'liq moslashtirilgan tur paketlarini taklif qilamiz. Sizning afzalliklaringiz va jadvalingizga mos keladigan shaxsiy marshrut yaratish uchun jamoamiz bilan bog\'laning.',
              },
              cancellation: {
                question: 'Bekor qilish siyosatingiz qanday?',
                answer: 'Bizning standart bekor qilish siyosatimiz tur boshlanishidan 30 kun oldin to\'liq qaytarishga ruxsat beradi. 30 kun ichidagi bekor qilishlar qisman to\'lovlarga ega bo\'lishi mumkin.',
              },
              insurance: {
                question: 'Sayohat sug\'urtasini taqdim etasizmi?',
                answer: 'Ha, biz keng qamrovli sayohat sug\'urtasi paketlarini taklif qilamiz. Barcha xalqaro turlar uchun sayohat sug\'urtasini sotib olishni qat\'iy tavsiya qilamiz.',
              },
            },
          },
          footer: {
            company: {
              description: '2009 yildan beri unutilmas sayohat tajribalarini yaratishda ishonchli hamkoringiz.',
            },
            quickLinks: {
              title: 'Tezkor Havolalar',
              about: 'Biz Haqimizda',
              tours: 'Turlar',
              destinations: 'Manzillar',
              blog: 'Blog',
            },
            contact: {
              title: 'Bog\'lanish',
              address: 'Turizm ko\'chasi 123, Toshkent, O\'zbekiston',
            },
            exchangeRates: {
              title: 'Valyuta Kurslari',
              buy: 'Sotib olish',
              sell: 'Sotish',
            },
            copyright: '© {{year}} Sadiya Tour. Barcha huquqlar himoyalangan.',
          },
        },
      },
    },
    lng: storedLanguage || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

document.documentElement.lang = i18n.language;

export default i18n;