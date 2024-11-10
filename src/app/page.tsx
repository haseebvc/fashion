// pages/index.js

import Head from 'next/head';


export default function Home() {
  return (
    <div className="bg-gray-50">
      <Head>
        <title className= "text-black "> Fashion Hub - Clothing Sale & Marketing</title>
        <meta name="description" content="Shop the latest fashion trends at Fashion Hub. Find stylish outfits
         and accessories on sale." />
      </Head>

      {/* Header Section */}
      <header className=" shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-gray-800">Fashion Hub</div>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="shop" className="text-gray-600 hover:text-gray-800">Shop</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">New Arrivals</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Sale</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-[600px] flex items-center">
        <div className="container mx-auto text-center text-white">
          <h1 className=" text-black text-2xl font-bold black color "> haseeb vc wala is owner this webpage</h1>
          <h1 className="  text-black text-2xl font-bold black color mb-4">Discover the Latest Fashion Trends</h1>
          <p className="text-black text-xl mb-8">Shop our exclusive collection of clothing and accessories on sale now.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition">Shop Now</button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product1.jpg" alt="Product 1" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Stylish Jacket</h3>
              <p className="text-gray-600 mb-4">pkr 5000</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
          </div>

          {/* Repeat Product Cards for Other Items */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product2.jpg" alt="Product 2" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Casual T-Shirt</h3>
              <p className="text-gray-600 mb-4">pkr 3000</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product3.jpg" alt="Product 3" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Elegant Dress</h3>
              <p className="text-gray-600 mb-4">pkr 7000</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product4.jpg" alt="Product 4" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Trendy Sneakers</h3>
              <p className="text-gray-600 mb-4">pkr 9000</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 Fashion Hub. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/usama.don.9822" className="text-white hover:text-gray-400">Facebook</a>
            <a href="https://www.instagram.com/haseeb_vc_wala/" className="text-white hover:text-gray-400">Instagram</a>
            <a href="/home" className="text-white hover:text-gray-400">ceated by haseeb vc wala </a>
            <a href="https://github.com/haseebvc" className="text-white hover:text-gray-400">  gitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

