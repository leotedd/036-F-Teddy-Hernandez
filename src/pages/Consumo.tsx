import { useEffect, useState } from "react";
import { getOrdinaryDrinks, getDrinkDetail } from "../services/api";

export default function Consumo() {
  const [drinks, setDrinks] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getOrdinaryDrinks()
      .then((data) => {
        console.log("Datos recibidos:", data);
        setDrinks(data.slice(0, 15));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar bebidas:", err);
        setError("Error al cargar los datos");
        setLoading(false);
      });
  }, []);

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

      {/* MODAL DEL DETALLE */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full relative">

            <button
              className="absolute top-3 right-3 text-xl"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>

            <img
              src={selected.strDrinkThumb}
              alt=""
              className="rounded-xl w-full mb-4"
            />

            <h2 className="text-2xl font-bold mb-2 text-center">
              {selected.strDrink}
            </h2>

            <p><b>Categoría:</b> {selected.strCategory}</p>
            <p><b>Vaso:</b> {selected.strGlass}</p>
            <p><b>Instrucciones:</b> {selected.strInstructions}</p>

            <h3 className="mt-4 font-bold">Ingredientes:</h3>
            <ul className="list-disc ml-6">
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
      )}

    </div>
  );
}
