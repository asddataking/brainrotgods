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
        <section className="text-center py-16 px-4">
          <h2 className="text-5xl font-bold text-white mb-6 font-brainrot drop-shadow-lg">
            Welcome to Brainrot Gods! 🧠
          </h2>
          <p className="text-xl text-white/90 mb-8 font-brainrot max-w-2xl mx-auto">
            The most chaotic and fun Italian merch you'll ever find! 
            Plushies, keychains, and everything in between.
          </p>
          <div className="text-6xl mb-8">🇮🇹🧠✨</div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h3 className="text-3xl font-bold text-center text-white mb-12 font-brainrot drop-shadow-lg">
            Our Amazing Products
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Fun Section */}
        <section className="text-center py-16 px-4 bg-white/20 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-white mb-6 font-brainrot">
            Why Choose Brainrot Gods? 🤔
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-white mb-2 font-brainrot">Super Brainrot</h4>
              <p className="text-white/90">The most chaotic designs ever created!</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🇮🇹</div>
              <h4 className="text-xl font-bold text-white mb-2 font-brainrot">Italian Made</h4>
              <p className="text-white/90">Authentic Italian quality and style!</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h4 className="text-xl font-bold text-white mb-2 font-brainrot">Pure Magic</h4>
              <p className="text-white/90">Every product is pure magic!</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
