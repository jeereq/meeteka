export default function ConfidentialPolitique() {
	return (
		<div className='max-w-4xl mx-auto px-4 sm:py-28 py-14 text-gray-800'>
			<h1 className='text-3xl font-bold mb-6'>
				Politique de Confidentialité – Meet’eka
			</h1>
			<p className='text-sm text-gray-500 mb-8'>
				Dernière mise à jour : 21 avril 2025
			</p>

			<p className='mb-6'>
				Cette Politique de Confidentialité décrit comment l’application{" "}
				<strong>Meet’eka</strong> collecte, utilise, traite et protège les
				données personnelles de ses utilisateurs. En accédant ou utilisant
				Meet’eka, vous acceptez cette politique.
			</p>

			{/* Section 1 */}
			<Section title="1. Champ d'application">
				<p>
					Cette politique s'applique à tous les utilisateurs de Meet’eka et
					couvre tous les traitements de données personnelles réalisés via nos
					services (application mobile, site web, API, etc.).
				</p>
			</Section>

			{/* Section 2 */}
			<Section title='2. Collecte des données personnelles'>
				<ul className='list-disc list-inside mb-4'>
					<li>
						<strong>Données fournies :</strong> nom, email, téléphone, photo,
						description, infos professionnelles.
					</li>
					<li>
						<strong>Données automatiques :</strong> navigation, IP, modèle
						d'appareil, géolocalisation (si autorisée).
					</li>
					<li>
						<strong>Données tiers :</strong> services de connexion (Google,
						Facebook), outils d’analyse, etc.
					</li>
				</ul>
			</Section>

			{/* Section 3 */}
			<Section title='3. Utilisation des données personnelles'>
				<div className='overflow-x-auto mb-4'>
					<table className='min-w-full border text-sm text-left'>
						<thead className='bg-gray-100'>
							<tr>
								<th className='border px-4 py-2'>Finalité</th>
								<th className='border px-4 py-2'>Base légale</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className='border px-4 py-2'>Création de compte</td>
								<td className='border px-4 py-2'>Contrat / Consentement</td>
							</tr>
							<tr>
								<td className='border px-4 py-2'>Recommandation de contenu</td>
								<td className='border px-4 py-2'>Consentement</td>
							</tr>
							<tr>
								<td className='border px-4 py-2'>
									Statistiques & amélioration
								</td>
								<td className='border px-4 py-2'>Intérêt légitime</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p>Aucune prise de décision automatisée n’est effectuée.</p>
			</Section>

			{/* Section 4 */}
			<Section title='4. Partage des données'>
				<p>Les données peuvent être partagées avec :</p>
				<ul className='list-disc list-inside mb-4'>
					<li>Prestataires techniques ( Cloudinary, etc.)</li>
					<li>Partenaires pour les événements ou services</li>
					<li>Autorités compétentes en cas d'obligation légale</li>
				</ul>
			</Section>

			{/* Section 5 */}
			<Section title='5. Durée de conservation'>
				<ul className='list-disc list-inside mb-4'>
					<li>
						<strong>Compte :</strong> 3 ans après inactivité
					</li>
					<li>
						<strong>Données de navigation :</strong> 12 mois max
					</li>
					<li>
						<strong>Contenus partagés :</strong> suppression manuelle ou auto
						après 3 ans
					</li>
				</ul>
			</Section>

			{/* Section 6 */}
			<Section title='6. Sécurité des données'>
				<p>
					Chiffrement, accès restreint, serveurs sécurisés, mises à jour
					régulières. Malgré nos efforts, aucun système n’est infaillible.
				</p>
			</Section>

			{/* Section 7 */}
			<Section title='7. Vos droits'>
				<ul className='list-disc list-inside mb-4'>
					<li>Accès, rectification, suppression</li>
					<li>Portabilité, opposition, limitation</li>
					<li>Retrait du consentement à tout moment</li>
				</ul>
				<p>
					📩{" "}
					<a
						href='mailto:mingandajeereq@gmail.com;sajombiku@gmail.com'
						className='text-blue-600 underline'
					>
						contact@meeteka.com
					</a>{" "}
					– Réponse sous 30 jours.
				</p>
			</Section>

			{/* Section 8 */}
			<Section title='8. Cookies & technologies similaires'>
				<p>
					L'application mobile n’utilise pas de cookies. La version web peut
					utiliser des traceurs techniques (analytics, erreurs, etc.).
				</p>
			</Section>

			{/* Section 9 */}
			<Section title='9. Transfert de données'>
				<p>
					Les transferts sont encadrés par des clauses contractuelles types
					(Google, Cloudinary, etc.).
				</p>
			</Section>

			{/* Section 10 */}
			<Section title='10. Modifications'>
				<p>
					Nous nous réservons le droit de modifier cette politique. Vous serez
					informé en cas de changements majeurs via l’app ou par email.
				</p>
			</Section>

			{/* Section 11 */}
			<Section title='11. Contact'>
				<ul className='list-disc list-inside'>
					<li>
						📩 <strong>Email :</strong>{" "}
						<a
							href='mailto:mingandajeereq@gmail.com;sajombiku@gmail.com'
							className='text-blue-600 underline'
						>
							contact@meeteka.com
						</a>
					</li>
					<li> Autorité de contrôle : CNIL – www.cnil.fr</li>
				</ul>
			</Section>
		</div>
	);
}
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
	title,
	children,
}) => (
	<section className='mb-8'>
		<h2 className='text-xl font-semibold mb-2'>{title}</h2>
		<div className='text-gray-700'>{children}</div>
	</section>
);
