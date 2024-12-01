import React from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const testimonials = [
  {
    name: 'Jasmine Carter',
    role: 'Founder & CEO',
    company: 'Natural Beauty Co.',
    image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: "Meet'eka transformed our digital presence completely. Their understanding of our market and community helped us reach new heights. Our online sales have quadrupled since working with them.",
    rating: 5,
  },
  {
    name: 'Marcus Thompson',
    role: 'Founder',
    company: 'TechVentures',
    image: 'https://images.unsplash.com/photo-1578584100368-85554335c4f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Their expertise in digital marketing for Black-owned businesses is unmatched. They helped us secure major investments and partnerships through strategic brand positioning.',
    rating: 5,
  },
];

export function Testimonials() {
  const { t } = useLanguage()
  return (
    <section className="section-padding" id="reviews">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          {t("customers.title").split(" ").map(function (element, index: number) {
            if (index == 0) {
              return element
            } else {
              return <span className="heading-highlight"> {element}</span>
            }
          })}
        </h2>
        <p className="text-xl text-gray-600">
          {t("customers.description")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl border-2 border-black hover:bg-highlight group transition-colors duration-300"
          >
            <div className="flex gap-2 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-current text-black group-hover:text-white"
                />
              ))}
            </div>
            <p className="text-lg mb-8 group-hover:text-white transition-colors">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold group-hover:text-white transition-colors">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button className="p-4 rounded-full border-2 border-black hover:bg-highlight hover:border-highlight hover:text-white transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button className="p-4 rounded-full border-2 border-black hover:bg-highlight hover:border-highlight hover:text-white transition-colors">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}