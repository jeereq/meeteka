import { LIEN_APP_STORE, LIEN_GOOGLE_PLAY } from "../../config";

export function Hero() {
  return <section className="pt-20 xs:pt-24 rounded-xl max-w-10xl mx-auto h-fit">
    <div className="w-full lg:h-[600px] overflow-hidden rounded-xl h-fit flex items-center justify-center">
      <div className="w-full h-fit rounded-xl lg:hidden block mt-20 ">
        <div className="animate-fade-up max-w-3xl lg:max-w-none mx-auto text-center lg:text-left">
          <h1 className="heading-responsive font-bold leading-tight mb-6">
            Votre Partenaire pour un <span className="heading-highlight">Succès</span> Durable
          </h1>
          <p className="text-responsive text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Meet'eka vous accompagne dans chaque étape de votre développement entrepreneurial, de l'informel vers l'excellence.
          </p>

        </div>
      </div>
      <img
        src="/bg.JPG"
        alt="Entrepreneurs Congolais en Action"
        className="w-full lg:block rounded-xl hidden bg-white h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto"
      />
    </div>
    <div className="relative flex lg:justify-start justify-center flex-wrap max-w-9xl z-20 px-4 gap-2 sm:px-6 lg:px-8 pt-5 mx-auto">
      <a href={LIEN_APP_STORE} target='_blank' className="group flex items-center rounded-full font-bold transition-all duration-300">
        <div className="w-full lg:w-[250px] h-[55px] lg:h-[60px] relative">
          <img
            src="/appStore.png"
            alt="Entrepreneurs Congolais en Action sur App Store"
            className="w-full block rounded-xl h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto"
          />
        </div>
      </a>
      <a href={LIEN_GOOGLE_PLAY} target='_blank' className="group flex items-center rounded-full font-bold transition-all duration-300">
        <div className="w-full lg:w-[250px] h-[55px] lg:h-[60px] relative">
          <img
            src="/google.png"
            alt="Entrepreneurs Congolais en Action sur Google Play"
            className="w-full block rounded-xl bg-white h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto"
          />
        </div>
      </a>
    </div>
  </section>
}