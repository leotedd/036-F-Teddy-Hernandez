import { useEffect, useState } from "react";
import { getOrdinaryDrinks, getDrinkDetail } from "../services/api";

export default function Consumo() {
  const [drinks, setDrinks] = useState<any[]>([]);
  const [allDrinks, setAllDrinks] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    setLoading(true);
    getOrdinaryDrinks()
      .then((data) => {
        console.log("Datos recibidos:", data);
        setAllDrinks(data);
        setDrinks(data.slice(0, itemsPerPage));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar bebidas:", err);
        setError("Error al cargar los datos");
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(allDrinks.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      const start = newPage * itemsPerPage;
      const end = start + itemsPerPage;
      setDrinks(allDrinks.slice(start, end));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      const start = newPage * itemsPerPage;
      const end = start + itemsPerPage;
      setDrinks(allDrinks.slice(start, end));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  async function openDetail(id: string) {
    const detail = await getDrinkDetail(id);
    setSelected(detail);
  }

  if (loading) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl">Cargando bebidas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold text-center mb-6">
        Cócteles (Ordinary Drink)
      </h2>

      {/* INDICADOR DE PÁGINA */}
      <div className="text-center mb-4 text-gray-600">
        Página {currentPage + 1} de {totalPages} - Mostrando {drinks.length} bebidas de {allDrinks.length} totales
      </div>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {drinks.map((drink) => (
          <div
            key={drink.idDrink}
            className="cursor-pointer bg-white rounded-xl shadow hover:scale-105 transition p-3"
            onClick={() => openDetail(drink.idDrink)}
          >
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="rounded-xl w-full h-40 object-cover"
            />
            <h3 className="text-center mt-3 font-semibold">
              {drink.strDrink}
            </h3>
          </div>
        ))}
      </div>

      {/* BOTONES DE PAGINACIÓN */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            currentPage === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          ← Anterior
        </button>
        
        <span className="text-gray-700 font-medium">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            currentPage === totalPages - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Siguiente →
        </button>
      </div>

      {/* MODAL DEL DETALLE */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">

            <button
              className="absolute top-3 right-3 text-2xl font-bold hover:text-red-600"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Imagen */}
              <div className="md:w-1/3 shrink-0">
                <img
                  src={selected.strDrinkThumb}
                  alt={selected.strDrink}
                  className="rounded-xl w-full object-cover"
                />
              </div>

              {/* Información */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-3 text-blue-700">
                  {selected.strDrink}
                </h2>

                <div className="space-y-2 mb-4">
                  <p><b>Categoría:</b> {selected.strCategory}</p>
                  <p><b>Vaso:</b> {selected.strGlass}</p>
                  <p><b>Instrucciones:</b> {selected.strInstructions}</p>
                </div>

                <h3 className="font-bold text-lg mb-2">Ingredientes:</h3>
                <ul className="list-disc ml-6 space-y-1">
                  {Array.from({ length: 15 }).map((_, i) => {
                    const ingrediente = selected[`strIngredient${i+1}`];
                    const medida = selected[`strMeasure${i+1}`];

                    return (
                      ingrediente && (
                        <li key={i}>
                          {ingrediente} {medida ? `- ${medida}` : ""}
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
