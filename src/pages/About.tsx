// src/pages/About.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const About: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <section className="about">
          <h1>Giới thiệu</h1>
          <p>Nội dung giới thiệu...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;