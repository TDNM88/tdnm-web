// src/pages/ProductExperience.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const ProductExperience: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <section className="product-experience">
          <h1>Trải nghiệm sản phẩm</h1>
          {/* Thêm nội dung trải nghiệm sản phẩm */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductExperience;