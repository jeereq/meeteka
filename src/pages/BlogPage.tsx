import { useParams } from 'react-router-dom';
import { BlogPost } from '../components/BlogPost';

const blogPosts = {
  'building-strong-digital-presence': {
    title: 'Building a Strong Digital Presence for Black-Owned Businesses',
    content: `
      <p>Dans le paysage numérique d'aujourd'hui, avoir une présence en ligne forte n'est plus une option, c'est une nécessité. Pour les entreprises appartenant à des Noirs, cela représente une opportunité unique de se connecter avec leur communauté et d'étendre leur portée au-delà des frontières traditionnelles.</p>

      <h2>1. Comprendre votre audience</h2>
      <p>La première étape pour construire une présence digitale forte est de comprendre profondément votre audience cible. Qui sont-ils ? Quels sont leurs besoins ? Quels canaux numériques utilisent-ils le plus ?</p>

      <h2>2. Créer une stratégie de contenu authentique</h2>
      <p>L'authenticité est la clé du succès en ligne. Partagez votre histoire, vos valeurs et ce qui rend votre entreprise unique. Le contenu authentique résonne davantage avec votre audience et construit une connexion plus profonde.</p>

      <h2>3. Optimiser votre présence sur les réseaux sociaux</h2>
      <p>Les réseaux sociaux sont un outil puissant pour construire une communauté engagée autour de votre marque. Choisissez les plateformes où votre audience est la plus active et créez du contenu qui encourage l'interaction.</p>

      <h2>4. Investir dans un site web professionnel</h2>
      <p>Votre site web est souvent le premier point de contact avec vos clients potentiels. Assurez-vous qu'il soit professionnel, facile à naviguer et optimisé pour les moteurs de recherche.</p>

      <h2>5. Mesurer et ajuster</h2>
      <p>Utilisez les analytics pour comprendre ce qui fonctionne et ce qui peut être amélioré. Ajustez votre stratégie en fonction des données pour maximiser votre impact en ligne.</p>
    `,
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'Marcus Johnson',
    date: '2024-03-15',
    readTime: '5 min',
    category: 'Digital Strategy',
    isPremium: true,
    price: 29.99
  },
  'leveraging-social-media': {
    title: 'Leveraging Social Media for Community Building',
    content: `
      <p>Les réseaux sociaux sont devenus un outil indispensable pour construire et engager une communauté autour de votre marque. Découvrez comment maximiser leur potentiel.</p>

      <h2>1. Choisir les bonnes plateformes</h2>
      <p>Chaque réseau social a ses particularités et son audience. Il est crucial de choisir ceux qui correspondent le mieux à votre marque et à vos objectifs.</p>

      <h2>2. Créer du contenu engageant</h2>
      <p>Le contenu est roi sur les réseaux sociaux. Créez du contenu qui informe, divertit et engage votre communauté. Variez les formats pour maintenir l'intérêt.</p>

      <h2>3. Interagir régulièrement</h2>
      <p>La construction d'une communauté nécessite des interactions régulières. Répondez aux commentaires, participez aux discussions et montrez que vous êtes à l'écoute.</p>
    `,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'Amara Williams',
    date: '2024-03-10',
    readTime: '4 min',
    category: 'Social Media',
    isPremium: true,
    price: 19.99
  },
  'power-of-storytelling': {
    title: 'The Power of Authentic Brand Storytelling',
    content: `
      <p>Le storytelling authentique est devenu un élément crucial dans la construction d'une marque forte. Voici comment raconter votre histoire de manière impactante.</p>

      <h2>1. L'importance de l'authenticité</h2>
      <p>Dans un monde digital saturé, l'authenticité est votre meilleur atout. Les consommateurs sont de plus en plus sensibles aux marques qui partagent des histoires vraies et significatives.</p>

      <h2>2. Éléments d'une histoire de marque efficace</h2>
      <p>Une histoire de marque efficace doit inclure:</p>
      <ul>
        <li>Vos origines et motivations</li>
        <li>Les défis que vous avez surmontés</li>
        <li>Vos valeurs fondamentales</li>
        <li>Votre impact sur la communauté</li>
      </ul>

      <h2>3. Connecter avec votre audience</h2>
      <p>Votre histoire doit résoner avec votre audience cible. Partagez des expériences auxquelles ils peuvent s'identifier et qui suscitent des émotions.</p>

      <h2>4. Cohérence à travers les canaux</h2>
      <p>Assurez-vous que votre histoire reste cohérente à travers tous vos canaux de communication, tout en adaptant le format au média utilisé.</p>

      <h2>5. Mesurer l'impact</h2>
      <p>Utilisez des métriques pour évaluer comment votre storytelling influence l'engagement de votre audience et la perception de votre marque.</p>

      <h2>Conclusion</h2>
      <p>Un storytelling authentique peut transformer votre marque et créer des connexions durables avec votre audience. Prenez le temps de développer et d'affiner votre histoire.</p>
    `,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    author: 'David Thompson',
    date: '2024-03-05',
    readTime: '6 min',
    category: 'Branding',
    isPremium: false,
    relatedArticles: [
      {
        title: 'Building Your Brand Voice',
        link: '#',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Content Marketing Strategies',
        link: '#',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
};

export function BlogPage() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  return <BlogPost post={post} />;
}