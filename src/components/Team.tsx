import blaise from "../../assets/teams/blaise.jpeg"
import jeereq from "../../assets/teams/jeereq.jpeg"
import sacre from "../../assets/teams/sacre.jpeg"
import bertin from "../../assets/teams/bertin.jpeg"
import jonas from "../../assets/teams/jonas.jpeg"
import gordien from "../../assets/teams/gordien.jpeg"
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const team = [
  {
    name: 'Blaise Mposo',
    role: 'Directeur Général & Fondateur',
    image: blaise,
    bio: 'Leader visionnaire avec une expertise dans la transformation digitale des entreprises congolaises.',
    social: {
      linkedin: 'https://www.linkedin.com/in/tshika-blaise-58aaa7a3'
    }
  },
  {
    name: 'Sacré Mbiku',
    role: 'Lead Développeur & Coach & co-fondateur',
    image: sacre,
    bio: 'Expert en développement full-stack avec plus de 3 ans d\'expérience. Spécialisé en architecture cloud et DevOps.',
    social: {
      linkedin: 'https://www.linkedin.com/in/sacr%C3%A9-joseph-mbiku-2ab6071b4'
    }
  },
  {
    name: 'Jeereq Minganda',
    role: 'Lead Développeur & co-fondateur',
    image: jeereq,
    bio: 'Architecte logiciel chevronné avec une expertise en React ,React native , Node.js et autre systeme avec plus de 3 ans d\'expérience',
    social: {
      linkedin: 'https://www.linkedin.com/in/jeereq'
    }
  },
  {
    name: 'Bertin muderhwa',
    role: 'Responsable Relations Publiques & co-fondateur',
    image: bertin,
    bio: ` Bertin est passionné par la construction de relations solides et la mise en valeur des réussites de son entreprise dans un environnement médiatique congolais en constante évolution. Il est soucieux de l'impact social de son organisation et cherche à établir une communication transparente et engageante avec les communautés locales.`,
    social: {
      linkedin: 'https://www.linkedin.com/in/jeereq'
    }
  },
  {
    name: 'Jonas Mwendele',
    role: 'Responsable créa & co-fondateur',
    image: jonas,
    bio: `Jeune professionnel ambitieux et passionné par la création visuelle. Avec plus de trois ans d'expérience en agence à Kinshasa, il maîtrise les outils de design et suit les tendances locales et internationales. Connecté et observateur de la culture congolaise, il cherche à apporter une perspective nouvelle et authentique dans ses projets.`,
    social: {
      linkedin: 'https://www.linkedin.com/in/jeereq'
    }
  },
  {
    name: 'Gordien Kitoko ',
    role: 'Responsable juridique & co-fondateur',
    image: gordien,
    bio: ` Gordien est un professionnel rigoureux et respecté, connaissant parfaitement l'écosystème juridique congolais et les défis spécifiques aux entreprises locales. Il est marié, père de deux enfants, et soucieux de la sécurité juridique de son entreprise pour contribuer à sa croissance dans un environnement parfois complexe.`,
    social: {
      linkedin: 'https://www.linkedin.com/in/jeereq'
    }
  },
];

export function Team() {
  const { t } = useLanguage()

  return (
    <section className="section-padding max-w-9xl overflow-hidden" id="team">
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
        {/* Team Cards Container */}
        <div
          className={`block w-full grid grid-cols-1 lg:grid-cols-3 gap-3 transition-transform duration-500 ease-in-out`}
        >
          {team.map((member, index) => (
            <div
              key={index}
              className={`w-full mb-4 px-2 sm:px-4`}
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

      </div>
    </section>
  );
}