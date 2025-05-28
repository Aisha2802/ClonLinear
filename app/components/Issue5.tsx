import { FC } from 'react';

interface Issue5Props {
  // Puedes agregar props personalizadas si es necesario
}

const Issue5: FC<Issue5Props> = () => {
    return (
        <section className="text-white py-24 px-4" style={{
        background: "linear-gradient(180deg, transparent, rgba(97, 106, 115, .12) 5%, rgba(97, 106, 115, .12) 95%, rgba(97, 106, 115, 0))",
        backgroundColor: "black"
        }}>
        <div className="max-w-7xl mx-auto">
            {/* Encabezado y descripción */}
            <div className="grid grid-cols-1 md:grid-cols-2 mb-8 justify-center">
            <div>
               <h2 className="text-[50px] font-bold mb-4 ml-[170px] whitespace-nowrap">
                    Set the product direction
              </h2>
                {/* Párrafo con el mismo margen izquierdo del título */}
                <p className="text-gray-400 text-[15px] ml-[170px]">
                    <span className="text-white font-bold">Align your team around a unified product <br />timeline</span>.
                    Plan, manage, and track all product <br />
                    initiatives with Linear’s visual planning tools.
                </p>
            </div>
            </div>
            <div>
                 <img 
            alt="A screenshot of a roadmap view in Linear showing two projects that are currently in progress" 
            data-nosnippet="true" 
            data-loaded="true" 
            loading="lazy" 
            width="3200" 
            height="1620" 
            decoding="async" 
            data-nimg="1" 
            className="inert page_planningHeroImage___9693 Image_root__UkRqc mt-[-40px]"  // Ajustamos el margen negativo aquí
            style={{color: 'transparent'}} 
            src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/25491170-d59e-427e-ee76-a69dcf080300/f=auto,dpr=2,q=95,fit=scale-down,metadata=none" 
            />
            </div>
        </div>
        </section>
    );
};

export default Issue5;
