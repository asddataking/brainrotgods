import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="text-center py-20 px-4">
          <h2 className="text-6xl font-bold text-gray-900 mb-8 font-brainrot">
            Welcome to Brainrot Gods! 🧠
          </h2>
          <p className="text-xl text-gray-700 mb-10 font-brainrot max-w-3xl mx-auto leading-relaxed">
            The most chaotic and fun Italian merch you'll ever find! 
            Plushies, keychains, and everything in between.
          </p>
          <div className="text-7xl mb-8">🇮🇹🧠✨</div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16 font-brainrot">
            Our Amazing Products
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="text-center py-20 px-4 bg-white/60 backdrop-blur-sm rounded-3xl mx-4 mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-12 font-brainrot">
            Why Choose Brainrot Gods? 🤔
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🧠</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-brainrot">Super Brainrot</h4>
              <p className="text-gray-700 text-lg">The most chaotic designs ever created!</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🇮🇹</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 font-brainrot">Italian Made</h4>
              <p className="text-gray-700 text-lg">Authentic Italian quality and style!</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 font-brainrot">Pure Magic</h4>
              <p className="text-gray-700 text-lg">Every product is pure magic!</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
