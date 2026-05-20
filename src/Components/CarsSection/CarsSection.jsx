const placeholderCars = [
  { name: 'Coming Soon', tag: 'Sports' },
  { name: 'Coming Soon', tag: 'Classic' },
  { name: 'Coming Soon', tag: 'Luxury' },
  { name: 'Coming Soon', tag: 'Performance' },
  { name: 'Coming Soon', tag: 'SUV' },
  { name: 'Coming Soon', tag: 'Truck' },
  { name: 'Coming Soon', tag: 'Van' },
  { name: 'Coming Soon', tag: 'Wagon' },
  { name: 'Coming Soon', tag: 'Convertible' },
]

const CarsSection = () => {
  return (
    <section
      id="explore-cars"
      className="relative z-10 min-h-screen bg-zinc-950 px-8 md:px-12 py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-outfit text-4xl md:text-5xl font-medium text-white">
          Featured Cars
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Car listings will appear here once the backend is connected.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderCars.map((car, index) => (
            <article
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-zinc-800/80">
                <span className="text-sm uppercase tracking-widest text-white/40">
                  Image soon
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-orange-500">
                {car.tag}
              </p>
              <h3 className="mt-2 text-xl font-medium text-white">{car.name}</h3>
              <p className="mt-2 text-sm text-white/50">
                Specs and pricing will load from the API.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarsSection
