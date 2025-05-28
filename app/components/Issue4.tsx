import { FC } from 'react';

interface Issue4Props {
  // Puedes agregar props personalizadas si es necesario
}

const Issue4: FC<Issue4Props> = () => {
    return (
        <section className="text-white py-24 px-4" style={{
        background: "linear-gradient(180deg, transparent, rgba(97, 106, 115, .12) 5%, rgba(97, 106, 115, .12) 95%, rgba(97, 106, 115, 0))",
        backgroundColor: "black"
        }}>
        <div className="max-w-7xl mx-auto">
            {/* Encabezado y descripción */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8 justify-center">
            <div>
                <h2 className="text-[50px] font-bold mb-4 ml-[170px]">
                Made for modern<br />product teams
                </h2>
            </div>
            <div className="flex items-center ">
                <p className="text-gray-400 text-[15px]">
                Linear is shaped by the practices and principles <br /> 
                that distinguish world-class product teams from <br />
                the rest: relentless focus, fast execution, and a <br />
                commitment to the quality of craft. 
                <a href="#" className="text-white ml-1 inline-flex items-center group">
                    Make the switch
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                    />
                    </svg>
                </a>
                </p>
            </div>
            </div>

            {/* Tarjetas de características */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
            {/* Tarjeta 1 */}
            <div className="bg-[#08090A] hover:bg-[#0E0F11] rounded-3xl p-8 w-80 h-80 relative overflow-hidden ml-[200px] transition-colors duration-300 group">
                <div className="h-48 mb-8 flex items-center justify-center">
                <img 
                    src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/fc435ee2-fabf-4f10-5a37-d89874f4bf00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    alt="Purpose-built for product development" 
                    className="h-full object-contain"
                />
                </div>
                <div className="flex justify-between items-center">
                <h3 className="text-[19px] font-bold">Purpose-built for<br />product development</h3>
                <button className="h-10 w-10 rounded-full ml-3 bg-transparent group-hover:bg-[#3B3B41] flex items-center justify-center border-solid border-2 border-[#3B3B41] transition-colors duration-300">
                    <span className="text-lg mb-1">+</span>
                </button>
                </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-[#08090A] hover:bg-[#0E0F11] rounded-3xl p-8 w-80 h-80 relative overflow-hidden transition-colors duration-300 group">
                <div className="h-48 mb-8 flex items-center justify-center">
                <img 
                    src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/0e6d3edd-cd37-4bf8-c1bf-b93960169400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    alt="Designed to move fast" 
                    className="h-full object-contain"
                />
                </div>
                <div className="flex justify-between items-center">
                <h3 className="text-[19px] font-bold">Designed to move fast</h3>
                <button className="h-10 w-10 rounded-full ml-3 bg-transparent group-hover:bg-[#3B3B41] flex items-center justify-center border-solid border-2 border-[#3B3B41] transition-colors duration-300">
                    <span className="text-lg mb-1">+</span>
                </button>
                </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-[#08090A] hover:bg-[#0E0F11] rounded-3xl p-8 w-80 h-80 relative overflow-hidden mr-[200px] transition-colors duration-300 group">
                <div className="h-48 mb-8 flex items-center justify-center">
                <img 
                    src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/99eeb9b8-3d99-4191-0081-9f302d26f400/f=auto,dpr=2,q=95,fit=scale-down,metadata=none"
                    alt="Crafted to perfection" 
                    className="h-full object-contain"
                />
                </div>
                <div className="flex justify-between items-center">
                <h3 className="text-[19px] font-bold">Crafted to perfection</h3>
                <button className="h-10 w-10 rounded-full ml-3 bg-transparent group-hover:bg-[#3B3B41] flex items-center justify-center border-solid border-2 border-[#3B3B41] transition-colors duration-300">
                    <span className="text-lg mb-1">+</span>
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Issue4;