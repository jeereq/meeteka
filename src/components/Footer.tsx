import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from "../../assets/icon.white.png"
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="/" className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="" className='h-12' />
            </a>
            <p className="text-gray-400">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              {t("footer.section.links")}</h3>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-gray-400 hover:text-highlight">{t("footer.section.links.services")}</Link></li>
              {/* <li><Link to="/success-stories" className="text-gray-400 hover:text-highlight">{t("footer.section.links.success-stories")}</Link></li> */}
              <li><Link to="/diffusions" className="text-gray-400 hover:text-highlight">{t("footer.section.links.diffusions")}</Link></li>
              <li><Link to="/partenaires" className="text-gray-400 hover:text-highlight">{t("footer.section.links.partenaires")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              {t("footer.section.contact")}
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:contact@meeteka.com">contact@meeteka.com</a>
              </li>
              <li>

                <a href="tel:+243825455938">+243 825 455 938</a>
              </li>
              <li>kinshasa Avenue,<br />Bethel, 15  bis</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              {t("footer.section.follow")}
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-highlight hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Meet'eka. {t("footer.right")}</p>
        </div>
      </div>
    </footer>
  );
}