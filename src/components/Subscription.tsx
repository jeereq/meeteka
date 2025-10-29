import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <section id="services" className="section-padding max-w-9xl">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-1 order-2">
            <h2 className="text-3xl xs:text-4xl lg:text-5xl font-bold mb-4">
              Devenez Prestataire de Services Certifié
            </h2>

            <p className="text-xl  font-semibold mb-6 text-responsive text-gray-600">
              Valorisez votre expertise. Gagnez en crédibilité.
            </p>

            <p className="text-lg text-gray-600 mb-8 flex flex-col gap-4">
              Obtenez votre certification officielle et rejoignez le réseau des
              prestataires reconnus pour leur professionnalisme et leur
              conformité. Un label de confiance pour booster votre visibilité et
              accéder à de nouvelles opportunités.
              <span>
                {" "}
                <strong className="text-gray-900">
                  Faites certifier vos services dès aujourd’hui.
                </strong>
              </span>
            </p>

            <Link
              target="_blank"
              to="/product-subscription"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg 
                          text-white bg-highlight
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                          transition duration-150 ease-in-out"
            >
              S'inscrire
            </Link>
          </div>

          <div className="md:order-2 order-1 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.01] transition duration-300">
            <img
              src="service.jpg"
              alt="Poignée de main après un entretien d'embauche réussi"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
