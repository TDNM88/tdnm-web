// src/pages/Shop.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Shop: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <section className="shop">
          <h1>Gian hàng</h1>
          {/* Thêm nội dung gian hàng */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;