# 🧠 Brainrot Gods - Italian Merch Ecommerce

A super minimal, fun ecommerce site for selling Italian "brainrot" plushies, keychains, and merch! Built with Next.js, TailwindCSS, and Stripe integration.

## ✨ Features

- **Super Minimal Design**: Clean, playful "brainrot" aesthetic with pastel colors
- **Product Grid**: Beautiful product cards with images, names, prices, and buy buttons
- **Stripe Integration**: Secure checkout with Stripe Checkout
- **Mobile-Friendly**: Responsive design that works on all devices
- **Fun Animations**: Hover effects and smooth transitions
- **Italian Vibes**: 🇮🇹 Themed with brainrot aesthetics

## 🚀 Tech Stack

- **Frontend**: Next.js 14 + React 18
- **Styling**: TailwindCSS with custom brainrot color palette
- **Payment**: Stripe Checkout
- **Deployment**: Vercel-ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd brainrotgods
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` and add your Stripe keys:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 Stripe Setup

1. Create a [Stripe account](https://stripe.com)
2. Get your API keys from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
3. Add them to your `.env.local` file
4. Test with Stripe's test card numbers (e.g., 4242 4242 4242 4242)

## 🛍️ Adding Products

Edit `data/products.js` to add, remove, or modify products:

```javascript
{
  id: 7,
  name: "New Brainrot Product",
  price: 29.99,
  image: "https://placehold.co/300x300/brainrot-pink/white?text=New",
  description: "Description here",
  category: "accessories"
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Manual Build

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the brainrot color palette:

```javascript
colors: {
  'brainrot-pink': '#FFB3D9',
  'brainrot-blue': '#B3D9FF',
  // Add more colors...
}
```

### Fonts
Change the brainrot font in `tailwind.config.js`:

```javascript
fontFamily: {
  'brainrot': ['Your Font', 'fallback'],
}
```

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first grid layout
- Touch-friendly buttons
- Optimized spacing for small screens
- Smooth animations that work on mobile

## 🔧 Development

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm start`
- **Lint**: `npm run lint`

## 📄 Project Structure

```
brainrotgods/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (Stripe checkout)
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── success/           # Success page
├── components/             # React components
│   ├── Header.js          # Site header
│   ├── Footer.js          # Site footer
│   └── ProductCard.js     # Product display component
├── data/                   # Data files
│   └── products.js        # Product information
├── public/                 # Static assets
├── tailwind.config.js      # TailwindCSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Future Enhancements

- Shopping cart functionality
- User accounts and order history
- Product categories and filtering
- Search functionality
- Admin panel for managing products
- Email notifications
- Analytics integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help:
1. Check the [Issues](https://github.com/yourusername/brainrotgods/issues) page
2. Create a new issue with details about your problem
3. Join our community discussions

---

Made with 🧠 and ��🇹 Italian love! ✨
