export default function AcercaDe() {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">Acerca de este Proyecto</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">React</h3>
          <p className="text-gray-600 text-sm">Biblioteca de interfaz de usuario</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">TypeScript</h3>
          <p className="text-gray-600 text-sm">JavaScript con tipado estático</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">TailwindCSS</h3>
          <p className="text-gray-600 text-sm">Framework de CSS utilitario</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg mb-2">Vite</h3>
          <p className="text-gray-600 text-sm">Herramienta de construcción</p>
        </div>
      </div>
    </section>
  );
}

