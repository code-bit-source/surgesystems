
const clients = [
  { src: "/client/1.png", link: "https://www.adityabirla.com/" },
  { src: "/client/2.png", link: "https://example.com/client2" },
  { src: "/client/3.png", link: "https://www.bcci.tv/" },
  { src: "/client/4.png", link: "https://qutabgolfcourse.in/" },
  { src: "/client/5.png", link: "http://www.cgaonline.in/" },
  { src: "/client/6.png", link: "https://cpwdsewa.gov.in/" },
  { src: "/client/7.png", link: "https://example.com/client7" },
  { src: "/client/8.png", link: "https://en.wikipedia.org/wiki/Central_Reserve_Police_Force" },
  { src: "/client/9.png", link: "https://delhigolfclub.org/" },
  { src: "/client/10.png", link: "https://dlfgolfresort.com/" },
  { src: "/client/11.png", link: "https://www.gmrgroup.in/" },
  { src: "/client/12.png", link: "" },
  { src: "/client/13.png", link: "https://gjum.ac.in/" },
  { src: "/client/14.png", link: "https://www.hpcricket.org/" },
  { src: "/client/15.png", link: "https://www.cricketassociationofbengal.com/" },
  { src: "/client/16.png", link: "https://example.com/client16" },
  { src: "/client/17.png", link: "https://example.com/client17" },
  { src: "/client/18.png", link: "https://ingeniouscreationsindia.com/" },
  { src: "/client/19.png", link: "https://jkca.tv/" },
  { src: "/client/20.png", link: "http://www.jaypeegreens.com/" },
  { src: "/client/21.png", link: "https://www.karmalakelands.com/" },
  { src: "/client/22.png", link: "https://www.lgc.in/" },
  { src: "/client/23.png", link: "https://assamcricket.com/" },
  { src: "/client/24.png", link: "https://www.cricketassociationofbengal.com/" },
  { src: "/client/26.png", link: "https://example.com/client26" },
  { src: "/client/27.png", link: "https://lohiagroup.com/" },
  { src: "/client/28.png", link: "https://www.mpcaonline.com/" },
  { src: "/client/29.png", link: "https://www.mpcaonline.com/" },
  { src: "/client/30.png", link: "https://ndps.edu.in/" },
  { src: "/client/31.png", link: "https://noidagolfcourse.com/" },
  { src: "/client/32.png", link: "https://www.panchkulagolfclub.in/" },
  { src: "/client/33.png", link: "https://itcportal.com/home.html" },
  { src: "/client/34.png", link: "https://www.cricjharkhand.org/" },
  { src: "/client/35.png", link: "https://www.godrejenterprises.com/" },
  { src: "/client/36.png", link: "https://www.mnca.tv/" },
  { src: "/client/37.png", link: "https://nagalandtribune.in/" },
  { src: "/client/38.png", link: "https://4moles.com/golf-courses/royal-springs-golf-course-srinagar" },
  { src: "/client/39.png", link: "https://mcdonline.nic.in/" },
  { src: "/client/40.png", link: "https://sikkimcricket.com/" },
  { src: "/client/41.png", link: "https://www.tollygungeclub.org/" },
  { src: "/client/42.png", link: "https://www.chandigarhgolfclub.in/" },
  { src: "/client/43.png", link: "https://rssb.org/index.html" },
  { src: "/client/44.png", link: "http://www.cricketrajasthan.in/" },
  { src: "/client/45.png", link: "https://www.upca.tv/" },
  { src: "/client/46.png", link: "https://www.wavecity.in/" },
];

export default function OurClientsGrid() {
  return (
    <main className="bg-transparent flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl md:text-7xl font-[font1] font-extrabold text-white">
            Our Clients
          </h1>
          <p className="mt-3 text-white max-w-2xl mx-auto text-sm md:text-base">
            Collaborating with top industry leaders
          </p>
        </header>

        {/* Grid Section */}
    <section
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
  aria-label="Brands grid"
>
  {clients.map((brand, index) => {
    // ✅ List of pre-zoomed image indexes
    const preZoomedIndexes = [6, 12, 13, 16, 33, 36, 43, 35];
    const isPreZoomed = preZoomedIndexes.includes(index + 1); // +1 because index starts at 0
    const isSpecialZoom = index + 1 === 25; // ✅ specific image at index 25

    // Decide zoom classes
    let zoomClasses = "";
    if (isSpecialZoom) {
      zoomClasses = "scale-250 group-hover:scale-175"; // special zoom for 25th image
    } else if (isPreZoomed) {
      zoomClasses = "scale-150 group-hover:scale-165"; // pre-zoomed images
    } else {
      zoomClasses = "group-hover:scale-110"; // normal images
    }

    return (
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
          className={`object-contain w-58 h-40 max-w-full transition-transform duration-500 ease-in-out  `}
        />
      </a>
    );
  })}
</section>



      </div>
    </main>
  );
}
