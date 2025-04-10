import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom';
import LookbookComponent from '@/components/common/LookbookComponent';
import { lookbookProducts } from '@/data/products';
import { Pagination } from 'swiper/modules';
export default function Lookbook() {
  return (
    <section className="">
      <div className="flat-title wow fadeInUp" data-wow-delay="0s">
        <span className="title fw-semibold">Hamkorlarimiz</span>
      </div>
    </section>
  );
}
