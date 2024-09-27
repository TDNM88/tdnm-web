// src/pages/MiniAppPage.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const MiniAppPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <section className="mini-app-page">
          <h1>Mini App {params.id}</h1>
          {/* Thêm nội dung mini app */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MiniAppPage;