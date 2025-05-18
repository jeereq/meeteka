import { emailTo } from "../../config";

export default function SupportPage() {
    return (
        <>
            <main
                style={{
                    padding: "2rem",
                    maxWidth: "700px",
                    margin: "0 auto",
                    fontFamily: "Arial, sans-serif",
                    lineHeight: "1.6",
                    minHeight: "60vh"

                }}
            >
                <h1>Support - Meet’eka</h1>
                <p>
                    Merci d’utiliser <strong>Meet’eka</strong>. Si vous avez besoin
                    d’assistance ou souhaitez nous faire part d’un problème, voici comment
                    nous contacter :
                </p>

                <ul>
                    <li>
                        <strong>Email support :</strong>{" "}
                        <a href={emailTo}>support@meeteka.app</a>
                    </li>
                    <li>
                        <strong>Téléphone :</strong>
                        <a href="tel:+243825455938">+243 825 455 938</a>
                    </li>
                    <li>
                        <strong>Signaler un bug :</strong>{" "}
                        <a
                            href="https://forms.gle/bug-meeteka"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Formulaire de signalement
                        </a>
                    </li>
                </ul>

                <p>
                    Nous faisons tout notre possible pour vous répondre rapidement.
                    Merci pour votre confiance !
                </p>

                <p style={{ fontStyle: "italic", marginTop: "2rem" }}>
                    Cette page est dédiée au support client de l’application Meet’eka.
                </p>
            </main>
        </>
    );
}