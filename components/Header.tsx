export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-semibold text-lg tracking-wide">
          Jonathan Quintero
        </h1>

        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:text-gray-600 transition">
            Sobre mí
          </a>

          <a href="#tech" className="hover:text-gray-600 transition">
            Tecnologías
          </a>

          <a
            href="/login"
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Zona privada
          </a>
        </nav>
      </div>
    </header>
  );
}
