export function AboutHero() {
  return (
    <section
      className="bg-background pt-28 md:pt-32 pb-12 md:pb-16"
      aria-labelledby="about-heading"
    >
      <div className="container-xl">
        <div className="max-w-3xl">
          <h1
            id="about-heading"
            className="type-h1 text-text-primary mb-5 md:mb-6"
          >
            About Us
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-2xl">
            Afazvin is a wholesale menswear manufacturer built for retailers who
            value consistent craftsmanship, reliable supply, and collections
            that perform on the shop floor.
          </p>
        </div>
      </div>
    </section>
  );
}
