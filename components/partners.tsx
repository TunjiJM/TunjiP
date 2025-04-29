import Image from "next/image"

export function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We partner with leading manufacturers and logistics providers
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex items-center justify-center p-8 border rounded-lg bg-card">
              <Image
                src={`/placeholder.svg?height=80&width=160`}
                alt={`Partner logo ${i}`}
                width={160}
                height={80}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
