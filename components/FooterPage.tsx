export default function FooterPage() {
  return (
    <footer className="mt-40 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Jonathan Quintero.</p>
        <p className="mt-2 text-gray-600">
          Desarrollado con Next.js, TailwindCSS y Framer Motion.
        </p>
      </div>
    </footer>
  );
}
