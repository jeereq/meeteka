import { useParams } from 'react-router-dom';
import { DiffusionDetails } from '../components/DiffusionDetails';

const diffusions = {
  'building-strong-digital-presence': {
    title: 'Stratégies de Croissance pour Startups',
    excerpt: 'Guide complet pour développer votre startup de manière durable et efficace.',
    content: `
      <p>Dans un écosystème entrepreneurial en constante évolution, la croissance d'une startup nécessite une approche stratégique bien définie. Ce guide vous accompagne à travers les étapes essentielles pour développer votre entreprise de manière durable.</p>

      <h2>1. Fondations Solides</h2>
      <p>Avant de se lancer dans une phase de croissance, il est crucial d'avoir des bases solides :</p>
      <ul>
        <li>Vision claire et objectifs mesurables</li>
        <li>Proposition de valeur unique</li>
        <li>Modèle économique viable</li>
        <li>Équipe compétente et alignée</li>
      </ul>

      <h2>2. Analyse de Marché Approfondie</h2>
      <p>Une compréhension détaillée de votre marché est essentielle :</p>
      <ul>
        <li>Identification des opportunités de marché</li>
        <li>Analyse de la concurrence</li>
        <li>Compréhension des besoins clients</li>
        <li>Évaluation des tendances du marché</li>
      </ul>

      <h2>3. Stratégie de Financement</h2>
      <p>Le financement est un levier crucial pour la croissance :</p>
      <ul>
        <li>Options de financement disponibles</li>
        <li>Préparation du pitch deck</li>
        <li>Négociation avec les investisseurs</li>
        <li>Gestion efficace des ressources</li>
      </ul>

      <h2>4. Développement Commercial</h2>
      <p>Une stratégie commerciale efficace doit inclure :</p>
      <ul>
        <li>Plan d'acquisition client</li>
        <li>Stratégie de fidélisation</li>
        <li>Développement des partenariats</li>
        <li>Expansion géographique</li>
      </ul>

      <h2>5. Innovation Continue</h2>
      <p>L'innovation doit être au cœur de votre stratégie :</p>
      <ul>
        <li>Veille technologique</li>
        <li>Amélioration continue des produits/services</li>
        <li>Adaptation aux changements du marché</li>
        <li>Culture d'innovation</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'Marcus Johnson',
    date: '2024-03-15',
    readTime: '5 min',
    category: 'Développement',
    isPremium: true,
    price: 29.99,
    relatedServices: [
      {
        name: 'Programme Accélération Startup',
        company: 'Meet\'eka Consulting',
        description: 'Accompagnement personnalisé pour startups en phase de croissance',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        link: '/partenaires/meeteka-consulting'
      },
      {
        name: 'Formation Leadership & Management',
        company: 'Meet\'eka Academy',
        description: 'Programme intensif pour développer vos compétences de leader',
        logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        link: '/partenaires/meeteka-academy'
      }
    ]
  },
  'leveraging-social-media': {
    title: 'Financement et Levée de Fonds',
    excerpt: 'Les meilleures stratégies pour sécuriser des investissements et développer votre entreprise.',
    content: `
      <p>La levée de fonds est une étape cruciale dans le développement d'une entreprise. Ce guide vous présente les stratégies essentielles pour réussir votre recherche de financement.</p>

      <h2>1. Préparation à la Levée de Fonds</h2>
      <p>Une préparation minutieuse est la clé du succès :</p>
      <ul>
        <li>Documentation financière complète</li>
        <li>Business plan détaillé</li>
        <li>Pitch deck convaincant</li>
        <li>Valorisation réaliste</li>
      </ul>

      <h2>2. Sources de Financement</h2>
      <p>Explorez les différentes options disponibles :</p>
      <ul>
        <li>Business Angels</li>
        <li>Venture Capital</li>
        <li>Financement bancaire</li>
        <li>Crowdfunding</li>
      </ul>

      <h2>3. Stratégie de Négociation</h2>
      <p>Maîtrisez l'art de la négociation :</p>
      <ul>
        <li>Valorisation et dilution</li>
        <li>Termes et conditions</li>
        <li>Protection des intérêts</li>
        <li>Due diligence</li>
      </ul>

      <h2>4. Gestion Post-Investissement</h2>
      <p>L'après-levée est tout aussi important :</p>
      <ul>
        <li>Relation avec les investisseurs</li>
        <li>Reporting régulier</li>
        <li>Utilisation efficace des fonds</li>
        <li>Planification de la croissance</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'Amara Williams',
    date: '2024-03-10',
    readTime: '4 min',
    category: 'Financement',
    isPremium: true,
    price: 19.99,
    relatedServices: [
      {
        name: 'Conseil en Financement',
        company: 'Meet\'eka Consulting',
        description: 'Accompagnement dans la recherche et la sécurisation de financements',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        link: '/partenaires/meeteka-consulting'
      },
      {
        name: 'Formation Pitch & Négociation',
        company: 'Meet\'eka Academy',
        description: 'Perfectionnez vos techniques de pitch et négociation',
        logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        link: '/partenaires/meeteka-academy'
      }
    ]
  },
  'power-of-storytelling': {
    title: 'Leadership et Gestion d\'Équipe',
    excerpt: 'Construisez et dirigez une équipe performante pour atteindre vos objectifs d\'entreprise.',
    content: `
      <p>Le leadership efficace est au cœur de la réussite d'une entreprise. Découvrez les principes essentiels pour développer vos compétences de leader et gérer une équipe performante.</p>

      <h2>1. Fondamentaux du Leadership</h2>
      <p>Les bases d'un leadership efficace :</p>
      <ul>
        <li>Vision et direction claire</li>
        <li>Communication efficace</li>
        <li>Prise de décision</li>
        <li>Exemplarité</li>
      </ul>

      <h2>2. Construction d'Équipe</h2>
      <p>Créez une équipe solide et performante :</p>
      <ul>
        <li>Recrutement stratégique</li>
        <li>Développement des talents</li>
        <li>Culture d'entreprise</li>
        <li>Cohésion d'équipe</li>
      </ul>

      <h2>3. Gestion de la Performance</h2>
      <p>Optimisez la performance de votre équipe :</p>
      <ul>
        <li>Objectifs SMART</li>
        <li>Suivi et feedback</li>
        <li>Motivation et engagement</li>
        <li>Gestion des conflits</li>
      </ul>

      <h2>4. Développement Personnel</h2>
      <p>Continuez à évoluer en tant que leader :</p>
      <ul>
        <li>Auto-évaluation</li>
        <li>Formation continue</li>
        <li>Mentorat</li>
        <li>Résilience</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'David Thompson',
    date: '2024-03-05',
    readTime: '6 min',
    category: 'Leadership',
    isPremium: false,
    relatedServices: [
      {
        name: 'Programme Leadership Avancé',
        company: 'Meet\'eka Academy',
        description: 'Formation intensive en leadership et management',
        logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        link: '/partenaires/meeteka-academy'
      },
      {
        name: 'Conseil en Organisation',
        company: 'Meet\'eka Consulting',
        description: 'Optimisation de la structure et des processus organisationnels',
        logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        link: '/partenaires/meeteka-consulting'
      }
    ]
  }
};

export function DiffusionPost() {
  const { slug } = useParams();
  const post = diffusions["building-strong-digital-presence"];

  if (!post) {
    return <div>Diffusion non trouvée</div>;
  }

  return <DiffusionDetails post={post} />;
} 