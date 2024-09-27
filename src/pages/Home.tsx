// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import FormInput from '../components/FormInput';
import ImageDisplay from '../components/ImageDisplay';

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Gọi API TAMS để lấy ảnh
    // setImageUrl(urlTừAPI);
  };

  return (
    <div className="app">
      <Header />
      <main className="content">
        <section className="hero">
          <h1>Trái Xuất Sản Phẩm</h1>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Nhập mô tả:"
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit">Tạo Hình</button>
          </form>
          <ImageDisplay imageUrl={imageUrl} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;