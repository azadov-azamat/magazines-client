import Footer1 from '@/components/footers/Footer1';
import Header2 from '@/components/headers/Header2';
import Topbar1 from '@/components/headers/Topbar1';
import ShopFullwidth from '@/components/shop/ShopFullwidth';
import React from 'react';

import MetaComponent from '@/components/common/MetaComponent';
const metadata = {
  title: 'Shop Full Width || Ecomus - Ultimate Reactjs Ecommerce Template',
  description: 'Ecomus - Ultimate Reactjs Ecommerce Template',
};
export default function ShopFullwisthPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header2 />
      <div className="tf-page-title">
        <div className="container-full">
          <div className="heading text-center">Eng yangi mahsulotlar</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Eng yangi mahsulotlarimizni sinab ko'ring
          </p>
        </div>
      </div>
      <ShopFullwidth />
      <Footer1 />
    </>
  );
}
