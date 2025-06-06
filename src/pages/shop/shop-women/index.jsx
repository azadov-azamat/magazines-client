import Footer1 from '@/components/footers/Footer1';
import Header2 from '@/components/headers/Header2';
import ShopDefault from '@/components/shop/ShopDefault';
import React from 'react';

import MetaComponent from '@/components/common/MetaComponent';
const metadata = {
  title: 'Shop Women || Ecomus - Ultimate Reactjs Ecommerce Template',
  description: 'Ecomus - Ultimate Reactjs Ecommerce Template',
};
export default function ShopWomenPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Shop Women</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Eng yangi mahsulotlarimizni sinab ko'ring
          </p>
        </div>
      </div>
      <ShopDefault />
      <Footer1 />
    </>
  );
}
