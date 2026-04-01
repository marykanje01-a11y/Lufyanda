import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, MessageCircle, Zap, Wrench, Building2, Tent, Sun } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'about', 'gallery', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/images/canopy.jpg"
                alt="Lufyanda Logo"
                className="h-14 w-14 rounded-full object-cover ring-2 ring-green-500"
              />
              <span className="text-xl font-bold text-gray-900">Lufyanda Electrical Projects</span>
            </div>

            <div className="flex space-x-3 sm:space-x-8">
              {['Home', 'Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-xs sm:text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/canopy3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Lufyanda Electrical Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Reliable Electrical & Canopy Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all transform hover:scale-105"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Professional electrical solutions for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Electrical Installations',
                description: 'Complete electrical installations for residential and commercial properties with certified expertise.',
                image: '/images/canopy6.jpg',
              },
              {
                icon: Wrench,
                title: 'Maintenance & Repairs',
                description: 'Fast and reliable electrical maintenance and repair services to keep your systems running smoothly.',
                image: '/images/canopy11.jpg',
              },
              {
                icon: Building2,
                title: 'Commercial & Industrial Wiring',
                description: 'Specialized wiring solutions for commercial and industrial facilities with safety standards.',
                image: '/images/canopy9.jpg',
              },
              {
                icon: Tent,
                title: 'Canopy Installation',
                description: 'Professional canopy installation services for outdoor spaces and parking areas.',
                image: '/images/canopy8.jpg',
              },
              {
                icon: Sun,
                title: 'Solar Panel Cleaning',
                description: 'Expert solar panel cleaning to maintain optimal efficiency and energy production.',
                image: '/images/canopy7.jpg',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="h-10 w-10 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <p className="mb-6">
              Lufyanda Electrical Projects is a trusted provider of comprehensive electrical services in Johannesburg.
              With years of experience in the industry, we specialize in delivering high-quality electrical solutions
              for both residential and commercial clients.
            </p>
            <p className="mb-6">
              Our team of certified electricians is committed to excellence, safety, and customer satisfaction.
              From small repairs to large-scale installations, we approach every project with professionalism
              and attention to detail.
            </p>
            <p>
              We pride ourselves on our reliability, transparent pricing, and dedication to using the best
              materials and practices in the industry. Whether you need electrical installations, maintenance,
              or specialized services like canopy installation and solar panel cleaning, Lufyanda Electrical
              Projects is here to power your success.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-600">Quality projects delivered with excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['/images/work-video.mp4', '/images/canopy1.jpg', '/images/canopy2.jpg', '/images/canopy3.jpg',
              '/images/canopy4.jpg', '/images/canopy5.jpg', '/images/canopy6.jpg',
              '/images/canopy8.jpg', '/images/canopy9.jpg','/images/canopy10.jpg',
              '/images/canopy11.jpg', '/images/canopy12.jpg','/images/canopy13.jpg',
               '/images/canopy14.jpg', '/images/canopy15.jpg'].map((media, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group h-64"
              >
                {index === 0 ? (
                  <video
                    src={media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <img
                    src={media}
                    alt={`Project ${index}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Get in touch for a free consultation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+27738390825" className="text-gray-600 hover:text-green-600">
                    +27 73 839 0825
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    74 Sworder Street<br />
                    Turffontein, Johannesburg
                  </p>
                </div>
              </div>

              <div className="pt-6 flex gap-4">
                <a
                  href="https://wa.me/27662222656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center
                             border border-gray-300 hover:bg-gray-100
                             transition-all duration-300 group"
                  aria-label="Chat with us on WhatsApp"
                >
                  <img
                    src="images/whatsapp1.png"
                    alt="WhatsApp"
                    className="w-9 h-9 group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center
                             border border-gray-300 hover:bg-gray-100
                             transition-all duration-300 group"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Lufyanda Electrical Projects</h3>
              <p className="text-gray-400">Professional electrical solutions</p>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://wa.me/27677778179"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all transform hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-105"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Lufyanda Electrical Projects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
