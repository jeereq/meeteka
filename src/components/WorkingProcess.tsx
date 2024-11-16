import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Research & Audit',
    description: 'We dive deep into your industry, analyze competitors, and identify opportunities for growth.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Our team crafts a customized digital marketing strategy aligned with your business goals.',
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We execute the strategy with precision, constantly monitoring and optimizing for best results.',
  },
  {
    number: '04',
    title: 'Analysis & Reporting',
    description: 'Regular performance analysis and detailed reporting keep you informed of progress and ROI.',
  },
];

export function WorkingProcess() {
  return (
    <section className="section-padding" id="process">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Working <span className="heading-highlight">Process</span>
        </h2>
        <p className="text-xl text-gray-600">
          Our proven methodology for delivering exceptional results
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white border-2 border-black rounded-3xl hover:bg-highlight transition-colors duration-300"
          >
            <span className="absolute -top-6 -right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
              {step.number}
            </span>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-gray-600 mb-6">{step.description}</p>
            {index < steps.length - 1 && (
              <ArrowRight className="absolute -bottom-12 right-1/2 transform rotate-90 md:rotate-0 md:top-1/2 md:-right-12 w-8 h-8 text-black" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}