import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black text-center">UpTask | <span className="text-4xl">Dashboard</span></h2>
        <input
          type="search"
          placeholder="Buscar Proyecto"
          className="rounded-lg lg:w-96 block p-2 border"
        />
        <div className="flex items-center gap-4">          
          <button type="button" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold">
            Cerrar Sessión
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
