import { useState, useEffect } from 'react';
import blaise from "../../assets/teams/blaise.jpeg"
import jeereq from "../../assets/teams/jeereq.jpeg"
import sacre from "../../assets/teams/sacre.jpeg"
import { Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const team = [
  {
    name: 'Blaise Mposo',
    role: 'Directeur Général & co-fondateur',
    image: blaise,
    bio: 'Leader visionnaire avec une expertise dans la transformation digitale des entreprises congolaises.',
    social: {
      linkedin: 'https://www.linkedin.com/in/tshika-blaise-58aaa7a3'
    },
  },
  {
    name: 'Sacré Mbiku',
    role: 'Lead Développeur & Coach & co-fondateur',
    image: sacre,
    bio: 'Expert en développement full-stack avec plus de 3 ans d\'expérience. Spécialisé en architecture cloud et DevOps.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sacr%C3%A9-joseph-mbiku-2ab6071b4'
    },
  },
  {
    name: 'Jeereq Minganda',
    role: 'Lead Développeur & co-fondateur',
    image: jeereq,
    bio: 'Architecte logiciel chevronné avec une expertise en React, Node.js et autre systeme avec plus de 3 ans d\'expérience',
    social: {
      linkedin: 'https://www.linkedin.com/in/jeereq'
    },
  },
  // {
  //   name: 'Jonas ',
  //   role: 'Chargé Marketing & co-fondateur',
  //   image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   bio: 'Stratège marketing créatif avec une expertise dans le développement de marques digitales.',
  //   social: {
  //     linkedin: '#'
  //   },
  // },
];

export function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const { t } = useLanguage()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (team.length - itemsPerPage + 1)
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [itemsPerPage]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? team.length - itemsPerPage : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (team.length - itemsPerPage + 1)
    );
  };

  return (
    <section className="section-padding overflow-hidden" id="team">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
          {t("teams.title").split(" ").map(function (item, index: number) {
            if (index == 0) {
              return <span className="px-2">{item}</span>
            } else {
              return <span className="heading-highlight">{item}</span>
            }
          })}
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          {t("teams.description")}
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:bg-highlight hover:text-white transition-colors duration-300"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg hover:bg-highlight hover:text-white transition-colors duration-300"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Team Cards Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out px-2 sm:px-0"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              className={`w-full min-w-[calc(100%/${itemsPerPage})] px-2 sm:px-4`}
            >
              <div className="group bg-white border-2 border-black rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-highlight transition-colors duration-300 h-full">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-white transition-colors">
                    {member?.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 font-medium mb-2 sm:mb-3 group-hover:text-white/90 transition-colors">
                    {member?.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 group-hover:text-white/90 transition-colors line-clamp-3">
                    {member?.bio}
                  </p>
                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href={member?.social.linkedin}
                      target='_blank'
                      className="p-1.5 sm:p-2 bg-black/10 rounded-full hover:bg-black hover:text-white transition-colors"
                      aria-label={`LinkedIn de ${member?.name}`}
                    >
                      <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {Array.from({ length: team.length - itemsPerPage + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-highlight' : 'bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}