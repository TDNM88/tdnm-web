// src/components/Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <ul className="menu">
      <li><a href="/">Trang chủ</a></li>
      <li><a href="/gioi-thieu">Giới thiệu</a></li>
      <li><a href="/trai-xperience">Trải nghiệm sản phẩm</a></li>
      <li><a href="/gian-hang">Gian hàng</a></li>
    </ul>
  );
};

export default Navigation;