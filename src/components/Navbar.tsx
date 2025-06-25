import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from "../../assets/icon.png"

const navigation = [
  { name: 'nav.services', href: '/#services' },
  { name: 'nav.about', href: '/about' },
  { name: 'nav.diffusion', href: '/diffusions' },
  { name: 'nav.fiscalities', href: '/fiscalities' },
  { name: 'nav.blog', href: '/blogs' },
  { name: 'nav.missions', href: '/missions' },
  { name: 'nav.events', href: '/events' },
  { name: 'nav.entreprises', href: '/entreprises' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) {
      return location.pathname === '/' && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-2'
        : 'bg-transparent py-3 sm:py-4'
        }`}
    >
      <nav className="max-w-9xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            to="/"
            title="Meet'eka"
            className="flex items-center gap-1.5 sm:gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <img src={logo} alt="" className='h-12' />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-highlight ${isActive(item.href) ? 'text-highlight' : 'text-gray-900'
                  } after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-highlight after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${isActive(item.href) ? 'after:scale-x-100' : ''
                  }`}
              >
                {t(item.name)}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 sm:p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed z-50 inset-0 top-[56px] h-fit sm:top-[64px] bg-white transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-fit bg-white overflow-auto py-4 px-3 sm:py-6 sm:px-4">
            <div className="flex flex-col gap-2 sm:gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`p-3 sm:p-4 rounded-xl text-center font-medium transition-all ${isActive(item.href)
                    ? 'bg-highlight text-white'
                    : 'hover:bg-gray-50'
                    }`}
                >
                  {t(item.name)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}