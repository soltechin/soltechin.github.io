/* ==========================================================================
   soltechin — Mobile Apps & Games
   Theme Switcher (Dark/Light), Multi-language (TR/EN), Category Filter & UI
   ========================================================================== */

const translations = {
  tr: {
    "nav.apps": "Uygulamalar & Oyunlar",
    "nav.about": "Hakkımızda",
    "nav.reviews": "Yorumlar",
    "nav.blog": "Haberler",
    "nav.faq": "SSS",
    "nav.contact": "İletişim",
    "nav.beta": "Kapalı Test",
    "hero.badge": "MOBİL UYGULAMA & OYUN STÜDYOSU",
    "hero.title.1": "Hayatı Kolaylaştıran ",
    "hero.title.gradient": "Mobil Uygulamalar",
    "hero.title.2": " ve Yeni Nesil Oyunlar",
    "hero.desc": "soltechin olarak günlük yaşamı pratikleştiren araçlar, huzur veren yaşam tarzı uygulamaları ve keyifli mobil oyunlar geliştiriyoruz.",
    "hero.cta.explore": "Uygulamaları Keşfet",
    "hero.cta.beta": "Testçi Olmak İstiyorum",
    "hero.cta.contact": "Bizimle İletişime Geçin",
    "beta.banner.badge": "KAPALI TEST PROGRAMI",
    "beta.banner.title": "Yeni Uygulama ve Oyunlarımızı İlk Siz Deneyin!",
    "beta.banner.desc": "Google Play Kapalı Test ve Apple TestFlight ekibimize katılarak geliştirme sürecindeki ürünlerimize erken erişim sağlayın.",
    "beta.banner.btn": "Testçi Olmak İstiyorum →",
    "hero.stat.1": "Aktif Kategori",
    "hero.stat.2": "Platform Desteği",
    "hero.pill": "Google Play & App Store'da Canlı",
    "apps.badge": "UYGULAMALARIMIZ",
    "apps.title": "Uygulamalarımız ve Oyunlarımız",
    "apps.subtitle": "Her biri özenle geliştirilmiş yüksek performanslı mobil ürünlerimiz, mağaza bağlantıları ve şeffaf gizlilik politikaları.",
    "apps.tab.all": "Tümü",
    "apps.tab.utilities": "Araçlar",
    "apps.tab.lifestyle": "Yaşam Tarzı",
    "apps.tab.games": "Oyunlar",
    "app.dialpad.tag": "Android • Kapalı Test",
    "app.dialpad.cat": "Araçlar",
    "app.dialpad.desc": "Hızlı T9 rehber arama, akıllı numara çevirici, özelleştirilebilir tuş takımı ve gelişmiş çağrı yönetimi sunan modern telefon ve rehber uygulaması.",
    "app.dialpad.f1": "Akıllı T9 Arama",
    "app.dialpad.f2": "Hızlı Arama",
    "app.dialpad.f3": "Tema Desteği",
    "app.dialpad.f4": "Android'e Özel",
    "app.dialpad.beta_sub": "GOOGLE PLAY KAPALI TEST",
    "app.dialpad.beta_main": "Testçi Ol / Beta'ya Katıl →",
    "app.dialpad.details_sub": "ÖZEL SAYFA",
    "app.dialpad.details_main": "Uygulama Tanıtımı →",
    "app.dialpad.badge": "Sadece Android",
    "app.tespih.cat": "Yaşam Tarzı",
    "app.tespih.desc": "Gerçekçi titreşim hissi, ses efektleri, günlük zikir hedefleri ve istatistik takibi sunan modern dijital tespih ve zikirmatik uygulaması.",
    "app.tespih.f1": "Gerçekçi Titreşim & Ses",
    "app.tespih.f2": "Zikir Listesi & Hedefler",
    "app.tespih.f3": "Karanlık Mod",
    "app.tespih.f4": "Çoklu Dil Desteği",
    "app.tespih.beta_sub": "APPLE TESTFLIGHT",
    "app.tespih.beta_main": "iOS Kapalı Test →",
    "app.tespih.badge": "Android & iOS",
    "app.games.cat": "Oyunlar • Çok Yakında!",
    "app.games.title": "Mina's Pixel Pets",
    "app.games.desc": "Sevimli sanal evcil hayvanınızı büyütün, odalarını dekore edin ve mevsimsel etkinliklerin tadını çıkarın. Çocuk dostu ve çevrimdışı oynanabilen sıcak bir evcil hayvan bakım oyunu!",
    "app.games.f1": "Sanal Evcil Hayvan Bakımı",
    "app.games.f2": "Oda Dekorasyonu & Mevsimler",
    "app.games.f3": "Çevrimdışı Oynanabilir",
    "app.games.f4": "Çok Yakında!",
    "app.games.special_sub": "ÖZEL SAYFA",
    "app.games.special_main": "Tanıtım Sayfası →",
    "app.games.preview_sub": "GÖRSELLER",
    "app.games.preview_main": "Ekran Görüntüleri →",
    "app.games.details_link": "Oyun Sayfası",
    "app.games.beta_link": "Kapalı Test",
    "app.games.badge": "Çok Yakında!",
    "app.badge.get_it_on": "GOOGLE PLAY",
    "app.badge.app_store": "APP STORE",
    "app.btn.playstore": "Google Play",
    "app.btn.appstore": "App Store",
    "app.btn.soon": "Çok Yakında!",
    "app.link.details": "Uygulama Sayfası",
    "app.link.privacy": "Gizlilik Politikası",
    "app.link.terms": "Hizmet Şartları",
    "about.badge": "HAKKIMIZDA",
    "about.title": "soltechin: Bağımsız Mobil Stüdyo",
    "about.p1": "soltechin, kullanıcı deneyimini merkeze alan bağımsız bir mobil uygulama ve oyun geliştirme stüdyosudur. Amacımız karmaşadan uzak, sade ve güvenilir mobil ürünler sunmaktır.",
    "about.h2.title": "Şeffaf Gizlilik",
    "about.h2.desc": "Her uygulama için ayrı ve erişilebilir Gizlilik Politikası sayfası.",
    "about.b1.title": "Sade ve Kullanıcı Dostu",
    "about.b1.desc": "Gereksiz karmaşıklıktan uzak, doğrudan amaca odaklanan arayüzler.",
    "about.b2.title": "Hafif ve Performanslı",
    "about.b2.desc": "Cihaz kaynaklarını yormayan, akıcı çalışan mimari yapı.",
    "about.b3.title": "Gizlilik Önceliği",
    "about.b3.desc": "Verileriniz harici sunuculara aktarılmaz, cihaz içinde korunur.",
    "about.b4.title": "Sürekli Gelişim",
    "about.b4.desc": "Kullanıcı geri bildirimleriyle şekillenen ve güncellenen ürünler.",
    "reviews.badge": "KULLANICI GERİ BİLDİRİMLERİ",
    "reviews.title": "Daha çok yeniyiz, yorumlarınızı bekleriz!",
    "reviews.subtitle": "Uygulamalarımızı ve oyunlarımızı sizlerin geri bildirimleriyle şekillendiriyoruz. Deneyimlerinizi, önerilerinizi veya hata bildirimlerinizi bizimle paylaşarak gelişimimize katkıda bulunabilirsiniz.",
    "reviews.cta.feedback": "💬 Yorum / Geri Bildirim Gönder",
    "reviews.cta.beta": "🧪 Kapalı Test Ekibine Katıl",
    "blog.badge": "DUYURULAR & HABERLER",
    "blog.title": "Stüdyodan Son Gelişmeler",
    "blog.b1.date": "Ekim 2026 • Kapalı Test",
    "blog.b1.title": "Dialpad T9 Plus v2.4 Kapalı Testte: Daha Hızlı T9 Algoritması",
    "blog.b1.desc": "T9 arama algoritması optimize edildi, rehber arama deneyimi hızlandırıldı.",
    "blog.b2.date": "Kasım 2026 • Yayında! iOS & Apple",
    "blog.b2.title": "Tespih & Tasbih: Zikir & Dhikr Artık Apple App Store'da Yayında!",
    "blog.b2.desc": "Google Play'in ardından Tespih & Tasbih: Zikir & Dhikr uygulamamız şimdi iPhone ve iPad kullanıcıları için resmi olarak App Store'da yayınlandı! Gerçekçi boncuk fiziği, sesler, kıble pusulası ve zikir sayacı ile hemen App Store'dan indirebilirsiniz.",
    "blog.b3.date": "Çok Yakında! • Oyun Stüdyosu",
    "blog.b3.title": "Mina's Pixel Pets İçin Geliştirme Süreci Devam Ediyor!",
    "blog.b3.desc": "Games kategorimizdeki sevimli sanal evcil hayvan bakım oyunumuz Mina's Pixel Pets geliştirme aşamasında; huzurlu retro piksel sanatı ve çevrimdışı oynanışıyla çok yakında Google Play ve App Store'da!",
    "faq.badge": "SIKÇA SORULAN SORULAR",
    "faq.title": "Merak Edilenler",
    "faq.q1": "Uygulamalarınızın Gizlilik Politikası sayfalarına nereden ulaşabilirim?",
    "faq.a1": "Her uygulamamızın kartında ve sayfanın altındaki menüde o uygulamaya özel Gizlilik Politikası bağlantısı yer almaktadır.",
    "faq.q2": "Uygulama içi satın alma veya abonelik sorunları için nasıl destek alabilirim?",
    "faq.a2": "İletişim bölümündeki formdan veya doğrudan soltechinapps@gmail.com e-posta adresimizden bize ulaşabilirsiniz.",
    "contact.badge": "İLETİŞİM",
    "contact.title": "Bizimle İletişime Geçin",
    "contact.subtitle": "Uygulama desteği, geri bildirim veya iş birliği talepleriniz için bize yazabilirsiniz.",
    "contact.info.title": "İletişim Bilgileri",
    "contact.info.desc": "Her türlü soru, öneri veya geri bildiriminiz için bize dilediğiniz zaman yazabilirsiniz.",
    "contact.info.email": "E-posta / Destek",
    "contact.info.response": "Genellikle 24–48 saat içinde yanıt verilir",
    "contact.info.beta_cta": "Kapalı Beta başvuruları için doğrudan e-posta ile başvurabilirsiniz →",
    "contact.location.title": "Konum",
    "contact.location.val": "Alacaatlı, Ankara, Türkiye",
    "contact.social.title": "Sosyal Medya & Mağazalar",
    "contact.form.title": "Bize Mesaj Gönderin",
    "contact.form.subtitle": "Form yanıtlarınız güvenli altyapı üzerinden doğrudan soltechinapps@gmail.com adresimize ulaşır.",
    "contact.form.name": "Adınız Soyadınız",
    "contact.form.name_ph": "Örn: Caner Yılmaz",
    "contact.form.email": "E-posta Adresiniz",
    "contact.form.email_ph": "ornek@eposta.com",
    "contact.form.topic": "İlgili Uygulama / Konu",
    "contact.form.opt.general": "Genel / İş Birliği",
    "contact.form.opt.games": "Mina's Pixel Pets",
    "contact.form.msg": "Mesajınız",
    "contact.form.msg_ph": "Mesajınızı buraya yazın...",
    "contact.form.submit": "Mesajı Gönder",
    "contact.form.success": "Teşekkürler! Mesajınız başarıyla iletildi.",
    "footer.desc": "Test odaklı ve kullanıcı deneyimi merkezli mobil uygulamalar ve oyunlar geliştiren bağımsız teknoloji stüdyosu.",
    "footer.col.apps": "Uygulamalarımız",
    "footer.col.legal": "Gizlilik & Doğrulama",
    "footer.privacy.dialpad": "Dialpad T9 Plus — Gizlilik Politikası",
    "footer.privacy.tespih": "Tespih & Tasbih — Gizlilik Politikası",
    "footer.col.links": "Hızlı Bağlantılar",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.app3": "Mina's Pixel Pets",
    "footer.pages_info": "GitHub Pages için hazır • TR / EN • Koyu / Açık",
    "beta.breadcrumb": "Kapalı Test Başvurusu",
    "beta.badge": "GOOGLE PLAY KAPALI TEST & APPLE TESTFLIGHT",
    "beta.title": "Kapalı Test Katılımı",
    "beta.desc": "Geliştirme aşamasındaki mobil uygulama ve oyunlarımızı ilk siz deneyin! Kapalı test ekibimize katılmak için e-posta yoluyla kolayca başvurabilirsiniz.",
    "beta.card.title": "E-posta ile Kolay Başvuru",
    "beta.card.desc": "Test davetiyenizi gönderebilmemiz için Google Play veya Apple ID hesabınızın bağlı olduğu e-posta adresinizden bize yazmanız yeterlidir.",
    "beta.card.email_label": "Resmi Başvuru E-posta Adresi:",
    "beta.btn.mailto": "✉️ E-posta Uygulamanızla Başvurun",
    "beta.btn.copy": "📋 E-postayı Kopyala",
    "beta.copied": "Kopyalandı! ✅",
    "beta.info.title": "E-postanızda Belirtmeniz Gerekenler:",
    "beta.info.item1": "Test etmek istediğiniz uygulama (Dialpad T9 Plus veya Tespih & Tasbih)",
    "beta.minaspets_note": "Bu oyunumuz şu an aktif geliştirme aşamasında olup kapalı test sürecinde değildir. Test süreci başladığında sitemizden ve sosyal medya hesaplarımızdan duyurulacaktır.",
    "beta.info.item2": "Platformunuz (Android için Google Play e-postanız / iOS için Apple ID e-postanız)",
    "beta.info.item3": "Cihaz modeliniz (Örn: Samsung Galaxy S23, iPhone 14 Pro vb.)",
    "beta.info.item4": "Android için Google Play 14 günlük test kuralına katılım onayı",
    "beta.android_rule.title": "Google Play 14 Günlük Test Kuralı:",
    "beta.android_rule.desc": "Google Play politikaları gereğince, davet linkini kabul ettikten sonra test sürümünü indirip en az 14 gün boyunca cihazınızda yüklü tutmanız gerekmektedir.",
    "beta.active_apps.title": "Şu Anda Test Aşamasında Olan Projelerimiz",
    "beta.active_apps.desc": "Aşağıdaki projelerimizden dilediğinizi e-postanızda belirterek test grubuna dahil olabilirsiniz:",
    "beta.app1.tag": "Oyunlar • Öncelikli Test",
    "beta.app1.name": "Mina's Pixel Pets",
    "beta.app1.desc": "Çok yakında çıkacak sanal evcil hayvan bakım oyunumuzun kapalı test süreci.",
    "beta.app2.tag": "Araçlar • Sadece Android",
    "beta.app2.name": "Dialpad T9 Plus",
    "beta.app2.desc": "Akıllı T9 arama motoru ve rehber yönetiminin 14 günlük Google Play kapalı testi.",
    "beta.app3.tag": "Yaşam Tarzı • Erken Erişim",
    "beta.app3.name": "Tespih & Tasbih: Zikir & Dhikr",
    "beta.app3.desc": "iOS TestFlight ve yeni sürüm özelliklerinin kapalı testi.",
    "beta.app.btn_apply": "Bu Projeyi Test Et →",
    "beta.kvkk_box.title": "KVKK & Veri Güvenliği Bilgilendirmesi",
    "beta.kvkk_box.desc": "E-posta yoluyla ilettiğiniz bilgiler, yalnızca 6698 sayılı KVKK m. 5/2-c ve m. 5/2-f hükümleri kapsamında Google Play Console ve/veya Apple TestFlight sistemlerinde kapalı test davetiyesi oluşturmak ve test sürecini koordine etmek amacıyla işlenir. Bilgileriniz ticari veya pazarlama amaçlarıyla kullanılmaz ve üçüncü şahıslara kesinlikle aktarılmaz. Detaylı bilgi için",
    "beta.kvkk_box.link": "KVKK Aydınlatma Metnimizi",
    "beta.kvkk_box.suffix": "inceleyebilirsiniz.",
    "cookie.badge": "ÇEREZ BİLDİRİMİ",
    "cookie.title": "Çerez ve Gizlilik Tercihleri",
    "cookie.desc": "Sitemizde tema ve dil tercihlerinizi hatırlamak için zorunlu yerel depolama ile yalnızca açık rızanız halinde anonim ziyaretçi istatistikleri (Google Tag Manager / Google Analytics) kullanılmaktadır. Reklam veya hedefleme çerezi kullanılmaz.",
    "cookie.btn_accept": "Tümünü Kabul Et",
    "cookie.btn_essential": "Yalnızca Zorunlular",
    "cookie.link_policy": "KVKK & Çerez Politikası →",
    "footer.legal.kvkk": "KVKK Aydınlatma Metni",
    "footer.legal.imprint": "Yasal Künye & Uyar-Kaldır",
    "footer.legal.cookies": "Çerez Tercihleri",
    "contact.kvkk_note": "Mesajınızı göndererek, kişisel verilerinizin KVKK Aydınlatma Metni kapsamında incelenmesi ve yanıtlanması amacıyla işlenmesini kabul etmiş olursunuz.",
    "contact.form.consent": "KVKK Aydınlatma Metni'ni okudum. İletişim formunu göndermekle, formdaki bilgilerimin talebimi yanıtlamak amacıyla teknik form sağlayıcısı (FormSubmit.co) aracılığıyla yurtdışı sunucular üzerinden işlenmesine ve aktarılmasına açık rıza veriyorum.",
    "beta.kvkk_note": "Başvurunuzu göndererek, sağladığınız testçi bilgilerinizin KVKK Aydınlatma Metni kapsamında kapalı test süreçleri için işlenmesini onaylamış olursunuz.",
    "beta.form.consent": "KVKK Aydınlatma Metni'ni okudum. Sağladığım testçi bilgilerimin Google Play Console ve/veya Apple TestFlight sistemlerine kaydedilerek kapalı test davetiyesi gönderilmesi amacıyla işlenmesini ve yurtdışı uygulama mağazası sunucularına aktarılmasını onaylıyorum.",
    "theme.light": "Açık",
    "theme.dark": "Koyu"
},
  en: {
    "nav.apps": "Apps & Games",
    "nav.about": "About",
    "nav.reviews": "Reviews",
    "nav.blog": "News",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.beta": "Beta Program",
    "hero.badge": "MOBILE APPS & GAMES STUDIO",
    "hero.title.1": "Crafting Intuitive ",
    "hero.title.gradient": "Mobile Apps",
    "hero.title.2": " & Next-Gen Games",
    "hero.desc": "At soltechin, we design smart everyday utilities, mindful lifestyle applications, and engaging mobile games.",
    "hero.cta.explore": "Explore Our Apps",
    "hero.cta.beta": "Become a Beta Tester",
    "hero.cta.contact": "Get in Touch",
    "beta.banner.badge": "CLOSED BETA PROGRAM",
    "beta.banner.title": "Be the First to Test Our Apps & Games!",
    "beta.banner.desc": "Join our Google Play Closed Testing and Apple TestFlight community to get early access to upcoming releases.",
    "beta.banner.btn": "Become a Beta Tester →",
    "hero.stat.1": "Core Categories",
    "hero.stat.2": "Store Platforms",
    "hero.pill": "Live on Google Play & App Store",
    "apps.badge": "OUR PORTFOLIO",
    "apps.title": "Featured Apps & Games",
    "apps.subtitle": "High-performance mobile products with direct store links, dedicated pages, and transparent privacy policies.",
    "apps.tab.all": "All",
    "apps.tab.utilities": "Utilities",
    "apps.tab.lifestyle": "Lifestyle",
    "apps.tab.games": "Games",
    "app.dialpad.tag": "Android • Closed Beta",
    "app.dialpad.cat": "Utilities",
    "app.dialpad.desc": "Modern phone dialer and smart contact manager featuring fast T9 predictive search, customizable keypad themes, and seamless call management.",
    "app.dialpad.f1": "Smart T9 Search",
    "app.dialpad.f2": "Speed Dial",
    "app.dialpad.f3": "Custom Themes",
    "app.dialpad.f4": "Android Exclusive",
    "app.dialpad.beta_sub": "GOOGLE PLAY CLOSED BETA",
    "app.dialpad.beta_main": "Join Beta / Test Now →",
    "app.dialpad.details_sub": "DEDICATED PAGE",
    "app.dialpad.details_main": "App Details & Preview →",
    "app.dialpad.badge": "Android Only",
    "app.tespih.cat": "Lifestyle",
    "app.tespih.desc": "A peaceful digital tasbih and dhikr counter offering realistic haptic feedback, soothing sound effects, daily target tracking, and detailed statistics.",
    "app.tespih.f1": "Haptic & Sound Feedback",
    "app.tespih.f2": "Custom Dhikr Goals",
    "app.tespih.f3": "Dark Mode",
    "app.tespih.f4": "Multi-Language Support",
    "app.tespih.beta_sub": "APPLE TESTFLIGHT",
    "app.tespih.beta_main": "Join iOS Beta →",
    "app.tespih.badge": "Android & iOS",
    "app.games.cat": "Games • Coming Soon!",
    "app.games.title": "Mina's Pixel Pets",
    "app.games.desc": "Raise and care for your virtual pets, customize rooms, enjoy seasonal weather, and welcome friendly animal visitors. A gentle, offline and kid-friendly pet-care game!",
    "app.games.f1": "Virtual Pet Care",
    "app.games.f2": "Room Customization & Seasons",
    "app.games.f3": "Offline & Kid-Friendly",
    "app.games.f4": "Coming Soon!",
    "app.games.special_sub": "SPECIAL PAGE",
    "app.games.special_main": "Coming Soon Page →",
    "app.games.preview_sub": "PREVIEW",
    "app.games.preview_main": "Screenshots →",
    "app.games.details_link": "Game Page",
    "app.games.beta_link": "Closed Beta",
    "app.games.badge": "Coming Soon!",
    "app.badge.get_it_on": "GET IT ON",
    "app.badge.app_store": "DOWNLOAD ON THE",
    "app.btn.playstore": "Google Play",
    "app.btn.appstore": "App Store",
    "app.btn.soon": "Coming Soon!",
    "app.link.details": "App Page",
    "app.link.privacy": "Privacy Policy",
    "app.link.terms": "Terms of Service",
    "about.badge": "ABOUT US",
    "about.title": "soltechin: Independent Mobile Studio",
    "about.p1": "soltechin is an independent mobile app and game development studio focused on user experience. We build simple, reliable, and distraction-free mobile products.",
    "about.h2.title": "Transparent Privacy",
    "about.h2.desc": "Dedicated Privacy Policy pages for each individual application.",
    "about.b1.title": "Simple & Intuitive Design",
    "about.b1.desc": "Clean, distraction-free interfaces focused directly on everyday utility.",
    "about.b2.title": "Lightweight & Fast",
    "about.b2.desc": "Carefully optimized code structure that runs smoothly without draining resources.",
    "about.b3.title": "Privacy First",
    "about.b3.desc": "Your data stays on your device and is not collected on external servers.",
    "about.b4.title": "Continuous Evolution",
    "about.b4.desc": "Products shaped, refined, and regularly updated through community feedback.",
    "reviews.badge": "COMMUNITY FEEDBACK",
    "reviews.title": "We're brand new — we'd love to hear your thoughts!",
    "reviews.subtitle": "We shape our mobile apps and games around your feedback. Share your experience, feature ideas, or bug reports to help us grow.",
    "reviews.cta.feedback": "💬 Send Feedback",
    "reviews.cta.beta": "🧪 Join Closed Beta Team",
    "blog.badge": "NEWS & UPDATES",
    "blog.title": "Latest from Our Studio",
    "blog.b1.date": "Oct 2026 • Closed Beta",
    "blog.b1.title": "Dialpad T9 Plus v2.4 in Closed Beta: Faster T9 Indexing Engine",
    "blog.b1.desc": "T9 search algorithm optimized for faster contacts lookup and smooth performance.",
    "blog.b2.date": "November 2026 • Live! iOS & Apple",
    "blog.b2.title": "Tespih & Tasbih: Zikir & Dhikr is Now Live on the Apple App Store!",
    "blog.b2.desc": "Following its release on Google Play, Tespih & Tasbih: Zikir & Dhikr is now officially available for iPhone and iPad on the App Store! Download now to experience realistic tasbih physics, soothing sound effects, Qibla compass, and daily dhikr tracking.",
    "blog.b3.date": "Coming Soon! • Game Studio",
    "blog.b3.title": "Development Underway for Mina's Pixel Pets!",
    "blog.b3.desc": "Our upcoming offline virtual pet-care game Mina's Pixel Pets is currently in active development, featuring cozy retro pixel art for Google Play and App Store!",
    "faq.badge": "FREQUENTLY ASKED QUESTIONS",
    "faq.title": "Common Questions",
    "faq.q1": "Where can I find the Privacy Policy for your applications?",
    "faq.a1": "Each application has its own dedicated Privacy Policy link on its card and in the footer menu.",
    "faq.q2": "How can I contact support for an app issue or feedback?",
    "faq.a2": "You can reach us anytime via the contact form below or email soltechinapps@gmail.com directly.",
    "contact.badge": "CONTACT US",
    "contact.title": "Let's Connect",
    "contact.subtitle": "Have feedback, support questions, or partnership inquiries? Drop us a message.",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Reach out for feedback, inquiries, or support anytime.",
    "contact.info.email": "Email / Support",
    "contact.info.response": "Typically responds within 24–48 hours",
    "contact.info.beta_cta": "Looking for Closed Beta? Apply directly via email →",
    "contact.location.title": "Location",
    "contact.location.val": "Alacaatli, Ankara, Türkiye",
    "contact.social.title": "Social Media & Stores",
    "contact.form.title": "Send Us a Message",
    "contact.form.subtitle": "Messages are delivered directly to soltechinapps@gmail.com via our secure form relay.",
    "contact.form.name": "Your Name",
    "contact.form.name_ph": "e.g., Alex Johnson",
    "contact.form.email": "Email Address",
    "contact.form.email_ph": "name@example.com",
    "contact.form.topic": "Select App / Topic",
    "contact.form.opt.general": "General / Partnership",
    "contact.form.opt.games": "Mina's Pixel Pets",
    "contact.form.msg": "Your Message",
    "contact.form.msg_ph": "Type your message here...",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Thank you! Your message has been sent successfully.",
    "footer.desc": "Independent technology studio crafting test-driven, user experience oriented mobile apps and games.",
    "footer.col.apps": "Our Apps",
    "footer.col.legal": "Privacy & Verification",
    "footer.privacy.dialpad": "Dialpad T9 Plus — Privacy Policy",
    "footer.privacy.tespih": "Tespih & Tasbih — Privacy Policy",
    "footer.col.links": "Quick Links",
    "footer.rights": "All rights reserved.",
    "footer.app3": "Mina's Pixel Pets",
    "footer.pages_info": "Hosted ready for GitHub Pages • TR / EN • Dark / Light",
    "beta.breadcrumb": "Closed Beta Application",
    "beta.badge": "GOOGLE PLAY CLOSED TESTING & APPLE TESTFLIGHT",
    "beta.title": "Join Closed Beta",
    "beta.desc": "Be the first to experience our upcoming mobile apps and games! You can easily apply to join our closed testing community via email.",
    "beta.card.title": "Quick Application via Email",
    "beta.card.desc": "To receive your testing invitation, simply reach out to us using the email associated with your Google Play or Apple ID account.",
    "beta.card.email_label": "Official Application Email:",
    "beta.btn.mailto": "✉️ Apply via Email Client",
    "beta.btn.copy": "📋 Copy Email Address",
    "beta.copied": "Copied! ✅",
    "beta.info.title": "What to Include in Your Email:",
    "beta.info.item1": "App you wish to test (Dialpad T9 Plus or Tespih & Tasbih)",
    "beta.minaspets_note": "This game is currently in active development and is not yet in closed beta. Testing will be announced upon completion of the development phase.",
    "beta.info.item2": "Target platform (Google Play email for Android / Apple ID email for iOS)",
    "beta.info.item3": "Device model (e.g., Samsung Galaxy S23, iPhone 14 Pro etc.)",
    "beta.info.item4": "Confirmation for Google Play 14-day continuous testing commitment (Android only)",
    "beta.android_rule.title": "Google Play 14-Day Testing Rule:",
    "beta.android_rule.desc": "Under Google Play developer policies, testers must download the build and keep it installed on their device for at least 14 consecutive days.",
    "beta.active_apps.title": "Projects Currently in Closed Beta",
    "beta.active_apps.desc": "Mention any of the projects below in your application email to join the testing track:",
    "beta.app1.tag": "Games • Priority Testing",
    "beta.app1.name": "Mina's Pixel Pets",
    "beta.app1.desc": "Closed beta testing track for our upcoming cozy virtual pet-care game.",
    "beta.app2.tag": "Utilities • Android Only",
    "beta.app2.name": "Dialpad T9 Plus",
    "beta.app2.desc": "14-day Google Play closed test for our smart T9 contact dialer & organizer.",
    "beta.app3.tag": "Lifestyle • Early Access",
    "beta.app3.name": "Tespih & Tasbih: Zikir & Dhikr",
    "beta.app3.desc": "Apple TestFlight testing for new features and cloud synchronization.",
    "beta.app.btn_apply": "Test This App →",
    "beta.kvkk_box.title": "KVKK & Privacy Notice",
    "beta.kvkk_box.desc": "Information provided via email is processed solely under Turkish Data Protection Law (KVKK art. 5/2-c and 5/2-f) to enroll your email into Google Play Console and/or Apple TestFlight to deliver beta invitations. Your data is never used for commercial or marketing purposes and is never shared with third parties. For details, please review our",
    "beta.kvkk_box.link": "KVKK Clarification Text",
    "beta.kvkk_box.suffix": ".",
    "cookie.badge": "COOKIE NOTICE",
    "cookie.title": "Cookie & Privacy Preferences",
    "cookie.desc": "We use essential local storage to remember your theme and language preferences, and only with your explicit consent, anonymous visitor statistics via Google Tag Manager / Google Analytics. No advertising or retargeting cookies are used.",
    "cookie.btn_accept": "Accept All",
    "cookie.btn_essential": "Essential Only",
    "cookie.link_policy": "KVKK & Cookie Policy →",
    "footer.legal.kvkk": "KVKK Clarification Text",
    "footer.legal.imprint": "Legal Imprint & Notice-Takedown",
    "footer.legal.cookies": "Cookie Preferences",
    "contact.kvkk_note": "By sending your message, you acknowledge that your personal data will be processed in accordance with our KVKK Clarification Text to respond to your inquiry.",
    "contact.form.consent": "I have read the KVKK Clarification Text. By submitting this contact form, I explicitly consent to the processing and cross-border transfer of my form details via our form relay provider (FormSubmit.co) solely to answer my inquiry.",
    "beta.kvkk_note": "By submitting your tester application, you confirm that your provided information will be processed under our KVKK Clarification Text for closed testing purposes.",
    "beta.form.consent": "I have read the KVKK Clarification Text. I consent to the enrollment of my testing credentials into Google Play Console and/or Apple TestFlight to receive beta invitations and the requisite cross-border data transfer to app store servers.",
    "theme.light": "Light",
    "theme.dark": "Dark"
}
};

document.addEventListener("DOMContentLoaded", () => {
  // 1. Theme Management (Dark / Light)
  const savedTheme = localStorage.getItem("soltechin_theme") || "dark";
  const themeBtn = document.getElementById("themeToggle");
  const heroLogoImg = document.getElementById("heroLogoImg");

  function updateThemeButton(theme, lang) {
    if (!themeBtn) return;
    const isDark = theme === "dark";
    if (lang === "tr") {
      themeBtn.innerHTML = isDark ? "☀️ Açık" : "🌙 Koyu";
      themeBtn.setAttribute("aria-label", isDark ? "Açık Temaya Geç" : "Koyu Temaya Geç");
      themeBtn.setAttribute("title", isDark ? "Açık Tema" : "Koyu Tema");
    } else {
      themeBtn.innerHTML = isDark ? "☀️ Light" : "🌙 Dark";
      themeBtn.setAttribute("aria-label", isDark ? "Switch to Light Theme" : "Switch to Dark Theme");
      themeBtn.setAttribute("title", isDark ? "Light Theme" : "Dark Theme");
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("soltechin_theme", theme);
    const currentLang = localStorage.getItem("soltechin_lang") || "tr";
    updateThemeButton(theme, currentLang);
    if (heroLogoImg) {
      const prefix = heroLogoImg.getAttribute("data-asset-prefix") || "";
      heroLogoImg.src = theme === "dark"
        ? `${prefix}assets/img/logo-dark.jpg`
        : `${prefix}assets/img/logo-light.png`;
    }
  }

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // 2. Language Management (TR / EN & Future Languages Combo)
  const savedLang = localStorage.getItem("soltechin_lang") || "tr";
  const langSelect = document.getElementById("langSelect");
  const langBtn = document.getElementById("langToggle");

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem("soltechin_lang", lang);
    if (langSelect) {
      langSelect.value = lang;
    }
    if (langBtn) {
      langBtn.innerHTML = lang === "tr" ? "🇹🇷 TR" : "🇬🇧 EN";
    }

    const currentTheme = document.documentElement.getAttribute("data-theme") || localStorage.getItem("soltechin_theme") || "dark";
    updateThemeButton(currentTheme, lang);

    const dict = translations[lang] || translations.tr;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });
    // Toggle bilingual blocks on legal/detail pages cleanly
    document.querySelectorAll("[data-lang-block]").forEach((block) => {
      // If the block is an independent legal section, keep both visible and reorder them
      if (block.classList.contains("legal-section")) {
        block.style.display = "block";
        if (lang === "tr") {
          block.style.order = block.getAttribute("data-lang-block") === "tr" ? "1" : "3";
        } else {
          block.style.order = block.getAttribute("data-lang-block") === "en" ? "1" : "3";
        }
      } else {
        if (block.getAttribute("data-lang-block") === lang) {
          block.style.display = "";
        } else {
          block.style.display = "none";
        }
      }
    });

    // Control legal divider order between TR and EN
    document.querySelectorAll(".legal-divider").forEach((divider) => {
      divider.style.order = "2";
    });

    // Update document title dynamically based on route and language
    const path = window.location.pathname.toLowerCase();
    if (path.includes("terms")) {
      if (path.includes("dialpad")) {
        document.title = lang === "tr"
          ? "Dialpad T9 Plus — Hizmet Şartları | soltechin"
          : "Dialpad T9 Plus — Terms of Service | soltechin";
      } else if (path.includes("tespih")) {
        document.title = lang === "tr"
          ? "Tespih & Tasbih: Zikir & Dhikr — Hizmet Şartları | soltechin"
          : "Tespih & Tasbih: Zikir & Dhikr — Terms of Service | soltechin";
      } else {
        document.title = lang === "tr"
          ? "Hizmet Şartları Belgeleri | soltechin"
          : "Terms of Service Documents | soltechin";
      }
    } else if (path.includes("kvkk")) {
      document.title = lang === "tr"
        ? "KVKK Aydınlatma Metni & Çerez Politikası — soltechin"
        : "KVKK Clarification Text & Cookie Policy — soltechin";
    } else if (path.includes("kunye")) {
      document.title = lang === "tr"
        ? "Yasal Künye & Uyar-Kaldır Bildirimi — soltechin"
        : "Legal Imprint & Notice-and-Takedown — soltechin";
    } else if (path.includes("beta-test")) {
      document.title = lang === "tr" 
        ? "Kapalı Test Katılımcı Başvurusu — soltechin" 
        : "Closed Beta Tester Application — soltechin";
    } else if (path.includes("dialpad-t9-plus")) {
      document.title = lang === "tr"
        ? "Dialpad T9 Plus — soltechin Araçlar"
        : "Dialpad T9 Plus — soltechin Utilities";
    } else if (path.includes("tespih-tasbih")) {
      document.title = lang === "tr"
        ? "Tespih & Tasbih: Zikir & Dhikr — soltechin Yaşam Tarzı"
        : "Tespih & Tasbih: Zikir & Dhikr — soltechin Lifestyle";
    } else if (path.includes("minaspixelpets")) {
      document.title = lang === "tr"
        ? "Mina's Pixel Pets — Çok Yakında! | soltechin Oyunlar"
        : "Mina's Pixel Pets — Coming Soon! | soltechin Games";
    } else {
      document.title = lang === "tr"
        ? "soltechin — Mobil Uygulamalar & Yeni Nesil Oyunlar"
        : "soltechin — Mobile Apps & Next-Gen Games";
    }
  }

  applyLanguage(savedLang);

  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem("soltechin_lang") || "tr";
      applyLanguage(current === "tr" ? "en" : "tr");
    });
  }

  // 3. App Category Filtering
  const tabBtns = document.querySelectorAll(".tab-btn");
  const appCards = document.querySelectorAll(".app-card");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      appCards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. FAQ Accordion
  document.querySelectorAll(".faq-question").forEach((qBtn) => {
    qBtn.addEventListener("click", () => {
      const item = qBtn.closest(".faq-item");
      item.classList.toggle("open");
    });
  });

  // 5. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
    });
  }

  // 6. Contact Form Real Email Handler (FormSubmit.co)
  const contactForm = document.getElementById("contactForm");
  const formFeedback = document.getElementById("formFeedback");
  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const lang = localStorage.getItem("soltechin_lang") || "tr";
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalHTML = submitBtn ? submitBtn.innerHTML : "";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = lang === "tr" ? "⏳ Gönderiliyor..." : "⏳ Sending...";
      }

      const inputs = contactForm.querySelectorAll("input, select, textarea");
      const payload = {
        _subject: "📬 [soltechin Web Sitesi] Yeni İletişim Mesajı",
        _template: "table"
      };
      inputs.forEach((input) => {
        if (input.name || input.placeholder) {
          const key = input.getAttribute("name") || input.getAttribute("placeholder") || "field";
          if (input.type === "checkbox") {
            payload[key] = input.checked ? "Onaylandı (Açık Rıza)" : "Onaylanmadı";
          } else {
            payload[key] = input.value;
          }
        }
      });

      try {
        await fetch("https://formsubmit.co/ajax/soltechinapps@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(payload)
        });
      } catch (err) {
        console.warn("Form gönderim logu:", err);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
      }

      formFeedback.textContent = translations[lang]["contact.form.success"];
      formFeedback.style.display = "block";
      contactForm.reset();
    });
  }

  // 7. Cookie Banner & Privacy Preferences Management
  function updateAnalyticsConsent(granted) {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: granted ? "granted" : "denied"
      });
    }
  }

  function getCookiePolicyUrl() {
    const p = window.location.pathname.toLowerCase();
    if (
      p.includes("/apps/") ||
      p.includes("/terms/dialpad") ||
      p.includes("/terms/tespih") ||
      p.includes("/privacy-policies/dialt9plus")
    ) {
      return "../../kvkk/index.html#cerez-politikasi";
    } else if (
      p.includes("/terms/") ||
      p.includes("/kvkk/") ||
      p.includes("/kunye/") ||
      p.includes("/privacy-policies")
    ) {
      return "../kvkk/index.html#cerez-politikasi";
    }
    return "kvkk/index.html#cerez-politikasi";
  }

  function initCookieBanner() {
    let banner = document.getElementById("cookieBanner");
    const currentLang = localStorage.getItem("soltechin_lang") || "tr";
    const dict = translations[currentLang] || translations.tr;
    const policyUrl = getCookiePolicyUrl();

    if (!banner) {
      banner = document.createElement("div");
      banner.id = "cookieBanner";
      banner.className = "cookie-banner";
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-live", "polite");
      banner.setAttribute("aria-label", "Çerez ve Gizlilik Bildirimi");
      banner.innerHTML = `
        <div class="cookie-banner-inner">
          <div class="cookie-banner-header">
            <div class="cookie-badge-pill">
              <span class="cookie-icon">🍪</span>
              <span class="cookie-badge-text" data-i18n="cookie.badge">${dict["cookie.badge"] || "ÇEREZ BİLDİRİMİ"}</span>
            </div>
            <button type="button" class="cookie-close-btn" id="cookieDismiss" aria-label="Kapat">✕</button>
          </div>
          <h4 class="cookie-banner-title" data-i18n="cookie.title">${dict["cookie.title"] || "Çerez ve Gizlilik Tercihleri"}</h4>
          <p class="cookie-banner-desc" data-i18n="cookie.desc">
            ${dict["cookie.desc"] || "Sitemizde kullanıcı deneyiminizi geliştirmek, tema ve dil tercihlerinizi hatırlamak amacıyla zorunlu ve işlevsel yerel depolama/çerezler kullanıyoruz. Detaylı bilgi için KVKK Aydınlatma Metni ve Çerez Politikamızı inceleyebilirsiniz."}
          </p>
          <div class="cookie-banner-actions">
            <button type="button" class="btn btn-primary btn-sm cookie-btn-accept" id="cookieAcceptAll" data-i18n="cookie.btn_accept">
              ${dict["cookie.btn_accept"] || "Tümünü Kabul Et"}
            </button>
            <button type="button" class="btn btn-secondary btn-sm cookie-btn-essential" id="cookieAcceptEssential" data-i18n="cookie.btn_essential">
              ${dict["cookie.btn_essential"] || "Yalnızca Zorunlular"}
            </button>
            <a href="${policyUrl}" class="cookie-policy-link" id="cookiePolicyLink" data-i18n="cookie.link_policy">
              ${dict["cookie.link_policy"] || "KVKK & Çerez Politikası →"}
            </a>
          </div>
        </div>
      `;
      document.body.appendChild(banner);
    }

    const consent = localStorage.getItem("soltechin_cookie_consent");

    function showBanner() {
      banner.style.display = "block";
      setTimeout(() => {
        banner.classList.add("visible");
      }, 50);
    }

    function hideBanner() {
      banner.classList.remove("visible");
      setTimeout(() => {
        banner.style.display = "none";
      }, 350);
    }

    // Auto show if not previously decided
    if (!consent) {
      setTimeout(showBanner, 700);
    }

    const btnAcceptAll = document.getElementById("cookieAcceptAll");
    if (btnAcceptAll) {
      btnAcceptAll.addEventListener("click", () => {
        localStorage.setItem("soltechin_cookie_consent", "all");
        updateAnalyticsConsent(true);
        hideBanner();
      });
    }

    const btnAcceptEssential = document.getElementById("cookieAcceptEssential");
    if (btnAcceptEssential) {
      btnAcceptEssential.addEventListener("click", () => {
        localStorage.setItem("soltechin_cookie_consent", "essential");
        updateAnalyticsConsent(false);
        hideBanner();
      });
    }

    const btnDismiss = document.getElementById("cookieDismiss");
    if (btnDismiss) {
      btnDismiss.addEventListener("click", () => {
        if (!localStorage.getItem("soltechin_cookie_consent")) {
          localStorage.setItem("soltechin_cookie_consent", "essential");
          updateAnalyticsConsent(false);
        }
        hideBanner();
      });
    }

    // Connect open cookie settings triggers across pages
    document.querySelectorAll("#openCookieSettings, [data-open-cookie-settings]").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        showBanner();
      });
    });

    window.soltechinCookieBanner = {
      open: showBanner,
      close: hideBanner
    };
  }

  initCookieBanner();
});
