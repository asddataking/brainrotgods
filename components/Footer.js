export default function Footer() {
  return (
    <footer className="bg-white/90 backdrop-blur-sm shadow-lg mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-brainrot-purple mb-4 font-brainrot">
              🧠 Brainrot Gods 🧠
            </h3>
            <p className="text-gray-600 text-sm">
              The most brainrot Italian merch you'll ever find! 
              Plushies, keychains, and more chaos.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-bold text-brainrot-pink mb-4 font-brainrot">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brainrot-purple transition-colors">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brainrot-purple transition-colors">
                  🛍️ Products
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold text-brainrot-blue mb-4 font-brainrot">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-brainrot-purple transition-colors">
                  📧 Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-brainrot-purple transition-colors">
                  ℹ️ About
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm font-brainrot">
            © 2024 Brainrot Gods. Made with 🧠 and 🇮🇹 Italian love!
          </p>
        </div>
      </div>
    </footer>
  );
}
