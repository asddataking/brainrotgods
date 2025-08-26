export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">🧠</div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brainrot-pink to-brainrot-purple font-brainrot">
              Brainrot Gods
            </h1>
          </div>
          <div className="text-sm text-gray-600 font-brainrot">
            🇮🇹 Italian Merch 🇮🇹
          </div>
        </div>
      </div>
    </header>
  );
}
