export default function AccountDeletion() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Demande de suppression de compte – Meet'eka</h1>

            <p className="mb-4">
                Nous respectons votre vie privée. Si vous souhaitez supprimer votre compte sur <strong>Meet'eka</strong> ainsi que toutes les données associées, vous pouvez en faire la demande en suivant les étapes ci-dessous.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">📝 Étapes à suivre</h2>
            <ol className="list-decimal list-inside mb-6 space-y-1">
                <li>Envoyez un email à <a target="_blank" href="mailto:mingandajeereq@gmail.com;sajombiku@gmail.com" className="text-blue-600 underline">support@meeteka.app</a> avec l’objet <strong>"Demande de suppression de compte"</strong>.</li>
                <li>Dans l’email, indiquez l’adresse email associée à votre compte.</li>
                <li>Nous supprimerons vos données dans un délai de 7 jours ouvrables et vous enverrons une confirmation par email.</li>
            </ol>

            <h2 className="text-xl font-semibold mt-6 mb-2">📦 Données supprimées</h2>
            <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Informations personnelles (nom, email, téléphone)</li>
                <li>Adresse personnelle</li>
                <li>Commentaires et avis</li>
                <li>Photo de profil ou de couverture</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">📁 Données conservées temporairement</h2>
            <p className="mb-2">
                Certaines données (ex. : factures ou données légales) peuvent être conservées jusqu’à <strong>90 jours</strong> après la suppression du compte, pour des raisons fiscales, légales ou de sécurité.
            </p>

            <p className="mt-6 text-sm text-gray-600">
                Pour toute question, contactez-nous à <a target="_blank" href="mailto:mingandajeereq@gmail.com;sajombiku@gmail.com" className="text-blue-600 underline">support@meeteka.app</a>.
            </p>
        </div>
    )
}
