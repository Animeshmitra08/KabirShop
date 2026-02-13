import { useState } from 'react';
import { Coffee, Wine, Cigarette, ShoppingBag, Clock, MapPin, Phone, Instagram, Facebook, Menu, X, ChevronRight, Star } from 'lucide-react';
import { useScrollNavigation } from '../hooks/useScrollNav';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    activeSection,
    scrolled,
    scrollToSection,
    } = useScrollNavigation({
    sectionIds: ["home", "menu", "smoking", "contact"],
    offset: 90, // adjust if navbar height differs
    });


  const menuItems = {
    chai: [
      { name: 'Masala Chai', price: 30, description: 'Traditional spiced tea with aromatic herbs', badge: 'Popular' },
      { name: 'Adrak Chai', price: 35, description: 'Ginger-infused strong tea', badge: '' },
      { name: 'Elaichi Chai', price: 35, description: 'Cardamom flavored premium tea', badge: '' },
      { name: 'Kulhad Chai', price: 40, description: 'Traditional clay cup chai experience', badge: 'Signature' },
      { name: 'Special Tandoori Chai', price: 50, description: 'Smoky tandoor-roasted flavor', badge: 'Chef Special' },
    ],
    coffee: [
      { name: 'Espresso', price: 60, description: 'Rich, bold Italian-style coffee', badge: '' },
      { name: 'Cappuccino', price: 80, description: 'Creamy espresso with frothed milk', badge: 'Popular' },
      { name: 'Cold Coffee', price: 90, description: 'Chilled coffee with ice cream', badge: '' },
      { name: 'Cafe Latte', price: 85, description: 'Smooth espresso with steamed milk', badge: '' },
      { name: 'Mocha', price: 100, description: 'Coffee with chocolate and cream', badge: 'Signature' },
    ],
    snacks: [
      { name: 'Kurkure', price: 20, description: 'Crunchy spicy snack', badge: '' },
      { name: 'Lays Chips', price: 20, description: 'Classic potato chips', badge: 'Popular' },
      { name: 'Bingo Mad Angles', price: 20, description: 'Tangy triangle chips', badge: '' },
      { name: 'Samosa (2 pcs)', price: 30, description: 'Crispy fried pastry with filling', badge: '' },
      { name: 'Maggi', price: 40, description: 'Hot noodles with spices', badge: 'Popular' },
    ],
    drinks: [
      { name: 'Coca Cola', price: 40, description: 'Chilled classic cola', badge: '' },
      { name: 'Sprite', price: 40, description: 'Refreshing lemon-lime soda', badge: '' },
      { name: 'Thumbs Up', price: 40, description: 'Strong fizzy drink', badge: '' },
      { name: 'Fresh Lime Soda', price: 50, description: 'Homemade refreshing drink', badge: 'Fresh' },
      { name: 'Iced Tea', price: 60, description: 'Chilled flavored tea', badge: '' },
    ]
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
            ? "bg-zinc-900/15 backdrop-blur-lg shadow-2xl"
            : "bg-transparent"
        }`}
        >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Coffee className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  KABIR
                </h1>
                <p className="text-xs text-zinc-400 tracking-widest">TAKE A SIP</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <button
                onClick={() => scrollToSection("home")}
                className={`font-medium transition ${
                activeSection === "home"
                    ? "text-amber-400"
                    : "text-zinc-300 hover:text-amber-400"
                }`}
                >
                Home
                </button>
             <button
            onClick={() => scrollToSection("menu")}
            className={`font-medium transition ${
                activeSection === "menu"
                ? "text-amber-400"
                : "text-zinc-300 hover:text-amber-400"
            }`}
            >
            Menu
            </button>
            <button
            onClick={() => scrollToSection("smoking")}
            className={`font-medium transition ${
                activeSection === "smoking"
                ? "text-amber-400"
                : "text-zinc-300 hover:text-amber-400"
            }`}
            >
            Smoking Zone
            </button>
              <button
            onClick={() => scrollToSection("contact")}
            className={`font-medium transition ${
                activeSection === "contact"
                ? "text-amber-400"
                : "text-zinc-300 hover:text-amber-400"
            }`}
            >
            Contact
            </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-6 pb-6 space-y-4 border-t border-zinc-800 pt-6">
              <button
                onClick={() => {
                    scrollToSection("home");
                    setIsMenuOpen(false);
                }}
                className="block text-zinc-300 hover:text-amber-400 transition"
                >
                Home
                </button>
              <button
                onClick={() => {
                    scrollToSection("menu");
                    setIsMenuOpen(false);
                }}
                className="block text-zinc-300 hover:text-amber-400 transition"
                >
                Menu
                </button>
                <button
                onClick={() => {
                    scrollToSection("smoking");
                    setIsMenuOpen(false);
                }}
                className="block text-zinc-300 hover:text-amber-400 transition"
                >
                Smoking Zone
                </button>
                <button
                onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                }}
                className="block text-zinc-300 hover:text-amber-400 transition"
                >
                Contact
                </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
       
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <p className="text-amber-400 text-sm font-medium tracking-wider">PREMIUM CAFÉ EXPERIENCE</p>
            </div>
           
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Kabir
              </span>
              <br />
              <span className="text-white">Take a Sip</span>
            </h1>
           
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
              Where every sip tells a story. Premium chai, aromatic coffee,
              <br className="hidden md:block" />
              delicious snacks & a sophisticated smoking lounge.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => scrollToSection("menu")}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-2"
                >

                View Menu
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-zinc-800 border-2 border-zinc-700 rounded-full font-semibold text-lg hover:bg-zinc-700 hover:border-amber-500 transition-all duration-300"
                >
                Visit Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Coffee className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Beverages</h3>
              <p className="text-zinc-400 text-sm">Expertly crafted chai & coffee</p>
            </div>
           
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fresh Snacks</h3>
              <p className="text-zinc-400 text-sm">Wide variety of treats</p>
            </div>
           
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cigarette className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smoking Zone</h3>
              <p className="text-zinc-400 text-sm">Exclusive lounge area</p>
            </div>
           
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-zinc-400 text-sm">Only the finest ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Our Menu
              </span>
            </h2>
            <p className="text-zinc-400 text-lg">Handpicked selections for your perfect moment</p>
          </div>

          {/* Chai Menu */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Chai Selection</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.chai.map((item, index) => (
                <div key={index} className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">{item.name}</h4>
                      {item.badge && (
                        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-amber-400">₹{item.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coffee Menu */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Coffee Collection</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">{item.name}</h4>
                      {item.badge && (
                        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-amber-400">₹{item.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Snacks Menu */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Snacks & Bites</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.snacks.map((item, index) => (
                <div key={index} className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">{item.name}</h4>
                      {item.badge && (
                        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-amber-400">₹{item.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cold Drinks Menu */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Wine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Cold Beverages</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.drinks.map((item, index) => (
                <div key={index} className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1 group-hover:text-amber-400 transition-colors">{item.name}</h4>
                      {item.badge && (
                        <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-2xl font-bold text-amber-400">₹{item.price}</span>
                  </div>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smoking Zone Section */}
      <section id="smoking" className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-slate-700 to-zinc-800 rounded-2xl flex items-center justify-center">
                  <Cigarette className="w-10 h-10 text-amber-400" />
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Smoking Lounge
                </span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                A sophisticated, well-ventilated space designed for those who appreciate a refined smoking experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Premium Amenities</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Well-ventilated private area
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Comfortable seating arrangements
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Premium ashtrays & lighters
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Complimentary air fresheners
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Ambient lighting & music
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Zone Guidelines</h3>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Age verification required (18+)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Respectful behavior expected
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Separate from main dining area
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Regular cleaning & maintenance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Compliant with local regulations
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 text-center">
              <p className="text-amber-400 font-semibold text-lg mb-2">Health Advisory</p>
              <p className="text-zinc-400">Smoking is injurious to health. Please smoke responsibly and be mindful of others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
        <section id="contact" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
            
            {/* Section Header */}
            <div className="mb-16 text-left">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    Visit Our Space
                </span>
                </h2>
                <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Information Stack (5 Cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                {[
                    { 
                    icon: <MapPin className="w-5 h-5" />, 
                    title: "Address", 
                    desc: "Main Road, Kargi Road, Litiya", 
                    sub: "Chhattisgarh 495113" 
                    },
                    { 
                    icon: <Phone className="w-5 h-5" />, 
                    title: "Contact", 
                    desc: "+91 8815188475", 
                    // sub: "info@yourcafe.com" 
                    },
                    { 
                    icon: <Clock className="w-5 h-5" />, 
                    title: "Timing", 
                    desc: "07:00 AM - 11:00 PM", 
                    sub: "Open all 7 days" 
                    }
                ].map((item, index) => (
                    <div 
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-amber-500/30 transition-all duration-300"
                    >
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-zinc-800 rounded-xl text-amber-500 group-hover:scale-110 transition-transform">
                        {item.icon}
                        </div>
                        <div>
                        <h3 className="text-zinc-500 text-xs uppercase tracking-tighter mb-1">{item.title}</h3>
                        <p className="text-zinc-100 font-medium">{item.desc}</p>
                        <p className="text-zinc-500 text-sm">{item.sub}</p>
                        </div>
                    </div>
                    </div>
                ))}

                {/* Social Card */}
                <div className="mt-auto bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 rounded-2xl flex items-center justify-between">
                    <span className="text-zinc-400 font-medium">Follow our journey</span>
                    <div className="flex gap-3">
                    <a href="#" className="p-2 bg-zinc-800 rounded-lg hover:text-amber-500 transition-colors"><Instagram size={20}/></a>
                    <a href="#" className="p-2 bg-zinc-800 rounded-lg hover:text-amber-500 transition-colors"><Facebook size={20}/></a>
                    </div>
                </div>
                </div>

                {/* Right Side: The Map "Card" (7 Cols) */}
                <div className="lg:col-span-7">
                <div className="h-full bg-zinc-900 border border-zinc-800 p-4 rounded-[2.5rem] shadow-2xl relative group">
                    {/* The actual map container */}
                    <div className="w-full h-full min-h-[400px] rounded-[1.8rem] overflow-hidden relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.121797520064!2d81.96503701047523!3d22.273375643786913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a281bdf01c6f8df%3A0x6bb45141ec3f65b5!2sKABIRR%20-Take%20a%20sip!5e0!3m2!1sen!2sin!4v1770983638607!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        className="grayscale-[40%] invert-[5%] contrast-[110%] group-hover:grayscale-0 transition-all duration-1000"
                        title="Cafe Location"
                    ></iframe>
                    
                    {/* Subtle Overlay Label */}
                    <div className="absolute top-4 left-4 pointer-events-none">
                        <span className="bg-zinc-950/80 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-zinc-800">
                        Live View
                        </span>
                    </div>
                    </div>

                    {/* Corner Accent Detail */}
                    <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-amber-500/10 blur-3xl rounded-full pointer-events-none"></div>
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  KABIR
                </h3>
                <p className="text-xs text-zinc-500 tracking-widest">TAKE A SIP</p>
              </div>
            </div>
           
            <div className="text-center md:text-right">
              <p className="text-zinc-400 text-sm mb-2">Premium Café Experience</p>
              <p className="text-zinc-600 text-xs">
                © {new Date().getFullYear()} Kabir Take a Sip. All rights reserved.
                </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;