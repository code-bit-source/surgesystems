import React from "react";

const brands = [
  { src: "/brands/13.png", link: "https://www.toro.com/en-gb" },
  { src: "/brands/14.png", link: "https://www.ventrac.com/" },
  { src: "/brands/12.png", link: "https://lamborghini.it/en-int" },
  { src: "/brands/1.webp", link: "https://campeyturfcare.com/" },
  { src: "/brands/2.png", link: "https://ecolawnapplicator.com/" },
  { src: "/brands/3.png", link: "https://www.foleyco.com/" },
  { src: "/brands/4.png", link: "https://www.irritrol.com/" },
  { src: "/brands/5.png", link: "https://www.turfco.com/" },
  { src: "/brands/6.png", link: "https://maredo-bv.com/" },
  { src: "/brands/7.png", link: "https://flowtronex.com/" },
  { src: "/brands/8.png", link: "https://www.perrot.de/" },
  { src: "/brands/9.png", link: "https://www.ranmarine.io/" },
  { src: "/brands/10.png", link: "https://www.standardgolf.com/?srsltid=AfmBOoobUmzcD22FCk2R6rVBQx4-27OeXqbXgZWBypqTr2vmHhML4BGy" },
  { src: "/brands/11.png", link: "https://supersopper.com.au/" },
];

export default function BrandsGridPage() {
  return (
    <main className="bg-transparent flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-[font1] font-extrabold text-slate-900">
            Our Brands
          </h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Trusted names we partner with — representing our strong presence and
            long-term relationships in the industry.
          </p>
        </header>

        {/* Grid Section */}
       <section
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
  aria-label="Brands grid"
>
  {brands.map((brand, index) => (
    <a
      key={index}
      href={brand.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-2 overflow-hidden"
    >
      <img
        src={brand.src}
        alt={`Brand ${index + 1}`}
        className="object-contain w-48 h-38 max-w-full transition-transform duration-500 ease-in-out group-hover:scale-130"
      />
    </a>
  ))}
</section>

      </div>
    </main>
  );
}
