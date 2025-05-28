import img from "public/img/image copy.png";

export default function Issue2() {
    return (
      <main className="min-h-screen w-full bg-[#09090b] text-white font-sans px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto py-12">
          <h1 className="text-white text-[2.25rem] leading-[2.75rem] font-semibold max-w-4xl sm:text-[2.75rem] sm:leading-[3.25rem]">
            Linear is a purpose-built tool for
            <br className="hidden sm:inline" />
            planning and building products
          </h1>
  
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3 leading-5 sm:leading-6">
            Meet the system for modern software development.
            <br />
            Streamline issues, projects, and product roadmaps.
          </p>
  
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="bg-white text-black text-xs font-semibold rounded-md px-4 py-2 min-w-[110px] hover:bg-gray-200 transition"
            >
              Start building
            </button>
  
            <a
              href="#"
              className="text-gray-400 text-xs font-normal flex items-center gap-1 hover:text-white transition"
            >
              Introducing Linear for Agents
              <i className="fas fa-chevron-right text-[10px]" />
            </a>
          </div>
  
          <div className="mt-12 -mx-6 sm:-mx-10 md:-mx-16 lg:-mx-24 xl:-mx-32">
            <img
              src={img} 
              alt="Screenshot"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </main>
    );
  }
  