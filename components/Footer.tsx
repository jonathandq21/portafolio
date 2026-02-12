export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jonathan David Quintero Villamizar.
        <p className="mt-2">
          Desarrollado con Next.js, TailwindCSS y Supabase.
        </p>
      </div>
    </footer>
  );
}
