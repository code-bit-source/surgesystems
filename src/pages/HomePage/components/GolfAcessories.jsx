
const GolfAcessories = () => {
  return (
    <div className="bg-transparent flex flex-col items-center py-12 px-6">
      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-[font1] font-extrabold text-slate-900 mb-12 text-center">
        Golf Accessories
      </h1>

      {/* Container for two brands */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Par Aide */}
        <a
          href="/GolfAccesories/1"
          className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 block"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1680618724373-0df87b22571f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
            alt="Par Aide"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center ">
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase">
              Paraide
            </h2>
          </div>
        </a>

        {/* Standard Golf */}
        <a
          href="/GolfAccesories/2"
          className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 block"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1679757804565-aa7b84f4704b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            alt="Standard Golf"
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase">
              Standard Golf
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default GolfAcessories;
