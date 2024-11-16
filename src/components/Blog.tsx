// ... (previous imports remain the same)

export function Blog() {
  return (
    <section className="section-padding" id="diffusion"> {/* Changed from blog to diffusion */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Dernières <span className="heading-highlight">Diffusions</span> {/* Changed from Insights to Diffusions */}
        </h2>
        <p className="text-xl text-gray-600">
          Conseils d'experts et stratégies pour votre succès digital
        </p>
      </div>

      {/* ... (rest of the component remains the same) ... */}
    </section>
  );
}