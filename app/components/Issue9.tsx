export default function Issue9() {
    return (
      <section className="bg-black text-white px-6 md:px-20 py-28 font-sans">
        <div className="max-w-4xl mx-auto">
          {/* Etiqueta ovalada */}
          <a href="https://linear.app/build" className="inline-flex items-center gap-2 mb-6 text-sm text-gray-400">
            <span className="w-2 h-2 bg-yellow-400 rounded-full" />
            Task tracking and sprint planning &gt;
            </a>
  
          {/* Título */}
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Issue tracking <br /> you’ll enjoy using
          </h1>
  
          {/* Descripción */}
          <p className="text-lg text-gray-400 max-w-xl">
            <strong className="text-white">Optimized for speed and efficiency.</strong> <br />
            Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.
          </p>
        </div>
  
        {/* Imagen */}
        <div className="mt-20 flex justify-center">
          <a href="#" className="block">
            <img
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/d4c9c051-1515-488f-00aa-1553b9322900/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
              alt="Linear Preview"
              className="rounded-xl w-full max-w-6xl shadow-lg"
            />
          </a>
        </div>
      </section>
    );
  }
  