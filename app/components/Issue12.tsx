import { useState, useEffect } from 'react';

// Definimos el tipo para los elementos del carrusel
interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl?: string; // Opcional, por si necesitas imágenes
}

// Datos de ejemplo para el carrusel
const carouselItems: CarouselItem[] = [
  {
    id: 1,
    title: 'Build what customers actually want',
    description: 'Customer Requests',
    imageUrl: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b4ccc6c0-b86b-4e9c-04a9-2ea66fa48e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none', // Ejemplo de URL de imagen
  },
  {
    id: 2,
    title: 'Automate pull requests and commit workflows',
    description: 'Powerful git workflows',
    imageUrl: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/45d00e03-8783-4225-f7f7-e49e1042e000/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
  {
    id: 3,
    title: 'Move product work forward from anywhere',
    description: 'Linear Mobile',
    imageUrl: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/2b394a72-ba7c-40d7-8f93-3b837b296d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
    {
    id: 4,
    title: 'Turn workplace requests into actionable issues',
    description: 'Linear Inbox',
    imageUrl: 'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/906ad833-45a5-4b19-e4de-153896e13e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
    {
    id: 5,
    title: '100+ ways to enhance your Linear experience',
    description: 'Linear Integrations',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/f7f8f8?text=Item+5',
  },
     {
    id: 6,
    title: 'Bridge the gap between engineering and design',
    description: 'Figma Integration',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/f7f8f8?text=Item+6',
  },
     {
    id: 7,
    title: 'Another Item',
    description: 'Just a placeholder',
    imageUrl: 'https://placehold.co/400x300/0a0a0a/f7f8f8?text=Item+7',
  },
];

export default function Issue12() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // Estado para la cantidad de items visibles

  // Función para determinar cuántos items mostrar por vista según el ancho de la pantalla
  const getItemsPerView = () => {
    if (typeof window === 'undefined') {
      return 1; // Valor por defecto para renderizado en el servidor
    }
    if (window.innerWidth >= 1024) { // lg breakpoint (ejemplo: 4 items)
      return 4;
    } else if (window.innerWidth >= 768) { // md breakpoint (ejemplo: 3 items)
      return 3;
    } else if (window.innerWidth >= 640) { // sm breakpoint (ejemplo: 2 items)
      return 2;
    } else { // xs breakpoint (ejemplo: 1 item)
      return 1;
    }
  };

  // Actualizar itemsPerView al montar el componente y al redimensionar la ventana
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    handleResize(); // Establecer el valor inicial al montar
    window.addEventListener('resize', handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo al montar y desmontar

  // Función para ir al siguiente conjunto de items en el carrusel
  const nextItem = () => {
    setCurrentIndex((prevIndex) => {
      // Calculamos el índice máximo posible para no mostrar espacio vacío al final
      const maxIndex = carouselItems.length - itemsPerView;
      const nextIndex = prevIndex + itemsPerView;
      // Aseguramos que el índice no exceda el máximo
      return nextIndex > maxIndex ? maxIndex : nextIndex;
    });
  };

  // Función para ir al conjunto anterior de items en el carrusel
  const prevItem = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - itemsPerView;
      // Aseguramos que el índice no sea menor que 0
      return nextIndex < 0 ? 0 : nextIndex;
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 text-white">
      {/* Texto pequeño en la parte superior */}
      <p className="text-xs text-gray-400 mb-2">Workflows and Integrations</p>

      {/* Contenedor para los dos párrafos */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        {/* Párrafo con letra más grande */}
        {/* Texto dividido en dos líneas con <br /> y centrado */}
        <h2 className="text-4xl font-semibold mb-4 md:mb-0 md:w-1/2 text-center"> {/* Añadido text-center */}
          Collaborate across<br />tools and teams
        </h2>
        {/* Párrafo con letra más pequeña a la derecha */}
        <p className="text-sm text-gray-300 md:w-1/2 md:pl-8">
          Expand the capabilities of the Linear system with a wide variety of integrations that keep everyone in your organization aligned and focused.
        </p>
      </div>

      {/* Carrusel/Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          // Calculamos la traducción basada en el currentIndex y el porcentaje de ancho de un item
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
        >
          {carouselItems.map((item) => (
            <div
              key={item.id}
              // Establecemos el ancho del item de forma responsiva y añadimos padding horizontal para el espacio
              // Aumentado px-2 a px-4 para hacer los ítems visualmente menos anchos
              className={`flex-shrink-0 px-4 ${
                itemsPerView === 1 ? 'w-full' :
                itemsPerView === 2 ? 'w-1/2' :
                itemsPerView === 3 ? 'w-1/3' :
                'w-1/4' // itemsPerView === 4
              }`}
            >
              {/* Contenido del elemento del carrusel con estilos aplicados */}
              {/* Aplicamos fondo, borde, sombra y esquinas redondeadas según las variables CSS */}
              {/* Añadimos clases para el efecto hover invisible y centrado/justificado del texto */}
              {/* Aseguramos que el contenedor del ítem sea un enlace si es necesario, o un div si no */}
              {/* Si el ítem fuera un enlace, se podría usar un tag <a> aquí */}
              <div className="bg-[#1c1c1f] border border-[#3e3e44] shadow-md rounded-xl p-6 flex flex-col items-start text-left h-full hover:bg-opacity-90 transition-colors duration-200 cursor-pointer"> {/* Cambiado items-center a items-start y text-center a text-left, añadido hover y cursor-pointer */}
                {item.imageUrl && (
                  // Utilizamos una etiqueta <img> estándar con clases de Tailwind para el estilo de la imagen
                  // La sintaxis de onError aquí es estándar en JSX. Si hay un error,
                  // podría ser por caracteres invisibles o un problema de entorno.
                  // Agregamos el estilo inline para color transparente
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="mb-4 rounded max-h-40 object-contain"
                    onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/0a0a0a/f7f8f8?text=Image+Error'; }}
                    style={{ color: 'transparent' }} // Estilo inline añadido aquí
                  />
                )}
                {/* Usamos clases de texto de Tailwind que se alinean con las variables de fuente y tamaño */}
                {/* Ajustamos la alineación del texto */}
                <h3 className="text-lg font-semibold mb-2 text-white text-left w-full">{item.title}</h3> {/* color texto primario, forzar left align y ancho completo */}
                <p className="text-sm text-gray-400 text-left w-full">{item.description}</p> {/* color texto secundario/terciario, forzar left align y ancho completo */}
              </div>
            </div>
          ))}
        </div>

        {/* Botones de navegación del carrusel */}
        {/* Ajustamos la posición de los botones para que estén más abajo y sean visibles */}
        {/* Añadimos margen superior para separarlos del carrusel */}
        <div className="flex justify-center mt-8 space-x-4"> {/* Centramos los botones horizontalmente y añadimos margen superior */}
          {/* Botón Anterior */}
          <button
            onClick={prevItem}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white border border-gray-600 transition duration-160 ease-out-quad hover:filter hover:brightness-150 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous item"
            disabled={currentIndex === 0}
          >
             {/* Icono de flecha izquierda (SVG simple) */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
          </button>
          {/* Botón Siguiente */}
          <button
            onClick={nextItem}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white border border-gray-600 transition duration-160 ease-out-quad hover:filter hover:brightness-150 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next item"
            disabled={currentIndex >= carouselItems.length - itemsPerView}
          >
            {/* Icono de flecha derecha (SVG simple) */}
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
