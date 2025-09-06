import { LIEN_APP_STORE, LIEN_GOOGLE_PLAY } from "../../config";

export function HeroLegend() {
	return (
		<section className='pt-20 xs:pt-24 rounded-xl max-w-10xl mx-auto h-fit'>
			<div className='heading-highlight w-full h-44 relative'>
				<img
					src='/IMG_5392.JPG'
					alt='Entrepreneurs Congolais en Action'
					className=' lg:block rounded-2xl  absolute -bottom-20 left-[50%] -translate-x-16 h-36 object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto'
				/>
			</div>
			<div className='w-full  overflow-hidden rounded-xl h-fit flex justify-center'>
				<div className='w-full h-fit rounded-xl  block mt-20 '>
					<div className='flex flex-col items-center animate-fade-up w-full  mx-auto text-center lg:text-left'>
						<div>
							<h1 className='heading-responsive text-center font-bold leading-tight mb-6'>
								Meeteka App
							</h1>
							<p className='text-responsive text-gray-600 text-center mb-8 max-w-2xl px-8 mx-auto lg:mx-0'>
								Meet'eka
							</p>
						</div>
						<p className='text-responsive text-gray-600 text-center mb-8 max-w-128 px-8 mx-auto lg:mx-0'>
							Avec Meet'eka, accédez aux actualités fiables, aux opportunités
							d'affaires et à un réseau qui fait grandir vos projets.
						</p>
					</div>
				</div>
			</div>
			<div className='relative flex lg:justify-center mb-10 justify-center flex-wrap max-w-128 z-20 px-4 gap-2 sm:px-6 lg:px-8 pt-5 mx-auto'>
				<a
					href={LIEN_APP_STORE}
					target='_blank'
					className='group flex items-center rounded-full font-bold transition-all duration-300'
				>
					<div className='w-full lg:w-max-w-128 h-[55px] lg:h-[60px] relative'>
						<img
							src='/appStore.png'
							alt='Entrepreneurs Congolais en Action sur App Store'
							className='w-full block rounded-xl h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto'
						/>
					</div>
				</a>
				<a
					href={LIEN_GOOGLE_PLAY}
					target='_blank'
					className='group flex items-center rounded-full font-bold transition-all duration-300'
				>
					<div className='w-full lg:w-[250px] h-[55px] lg:h-[60px] relative'>
						<img
							src='/google.png'
							alt='Entrepreneurs Congolais en Action sur Google Play'
							className='w-full block rounded-xl bg-white h-full object-cover object-left lg:object-center lg:object-fill  xl:object-contain mx-auto'
						/>
					</div>
				</a>
			</div>
		</section>
	);
}
