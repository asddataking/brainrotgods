import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="brainrot-card p-12 text-center max-w-md mx-4">
        <div className="text-8xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 font-brainrot">
          Order Successful!
        </h1>
        <p className="text-gray-600 mb-8 font-brainrot">
          Thank you for your purchase! Your Italian brainrot merch is on its way! 🇮🇹🧠
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="brainrot-button inline-block w-full"
          >
            🏠 Back to Shop
          </Link>
          
          <p className="text-sm text-gray-500 font-brainrot">
            You'll receive a confirmation email shortly!
          </p>
        </div>
      </div>
    </div>
  );
}
