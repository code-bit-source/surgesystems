import React from "react";

const brands = [
  { src: "/brands/13.png", link: "https://www.toro.com/en-gb" },
  { src: "/brands/14.png", link: "https://www.ventrac.com/" },
  { src: "/brands/12.png", link: "https://tlgolfcarts.com/" },
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
  { src: "/brands/ball.png", link: "https://www.ball-launcher.com/" },
  { src: "/brands/spectrum.png", link: "https://www.specmeters.com/" },
  { src: "/brands/dalton.webp", link: "https://daltoncooper.com/" },
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
          <p className="mt-3 text-slate-600 max-w-6xl mx-auto text-sm md:text-base">
            Trusted names we partner with — representing our strong presence and
            long-term relationships in the industry.
          </p>
        </header>

        {/* Grid Section */}
     <section
  className="
    flex flex-wrap justify-center items-center 
    gap-6 sm:gap-8 md:gap-10 
    w-full max-w-7xl mx-auto
  "
  aria-label="Brands grid"
>
  {brands.map((brand, index) => (
    <a
      key={index}
      href={brand.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex items-center justify-center 
        bg-white rounded-2xl shadow-md hover:shadow-xl
        transition-all duration-300 hover:-translate-y-2
        p-4 sm:p-5 overflow-hidden 
        w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[15%]
        h-36 sm:h-40 md:h-44       
      "
    >
      {/* 👇 Special orange background for 15th brand */}
      {index === 14 ? (
        <div
          className="
            bg-orange-500 
            flex items-center justify-center 
            w-full h-[65px]  
          "
        >
          <img
            src={brand.src}
            alt={`Brand ${index + 1}`}
            className="
              object-contain 
              w-36 sm:w-44 md:w-48 
              h-28 sm:h-32 md:h-36
              transition-transform duration-500 ease-in-out 
              group-hover:scale-105
            "
          />
        </div>
      ) : (
        <img
          src={brand.src}
          alt={`Brand ${index + 1}`}
          className="
            object-contain 
            w-36 sm:w-44 md:w-48 
            h-28 sm:h-32 md:h-36
            transition-transform duration-500 ease-in-out 
            group-hover:scale-105
          "
        />
      )}
    </a>
  ))}
</section>




      </div>
    </main>
  );
}
