import { Link } from 'react-router-dom';
import { collections } from '@/data/categories';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useCategories } from '@/data/hook';
import defaultImage from '../../../../public/images/default.jpg';

export default function Categories() {
  const { data: categories } = useCategories();

  return (
    <section className="flat-spacing-4 flat-categorie">
      <div className="container-full">
        <div className="flat-title-v2">
          <div className="box-sw-navigation">
            <div className="nav-sw nav-next-slider snbp1 nav-next-collection snbp107">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw nav-prev-slider snbn1 nav-prev-collection snbn107">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
          <span
            className="text-3 fw-7 text-uppercase title wow fadeInUp"
            data-wow-delay="0s"
          >
            Bo'limlar orqali tanlash
          </span>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-8">
            <Swiper
              dir="ltr"
              className="swiper tf-sw-collection"
              spaceBetween={15}
              modules={[Navigation]}
              navigation={{
                prevEl: '.snbp107',
                nextEl: '.snbn107',
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2,
                },
              }}
            >
              {categories?.data.map((item, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div className="collection-item style-left hover-img">
                    <div className="collection-inner">
                      <Link
                        to={`/shop-default?categoryId=${item.id}`}
                        className="collection-image img-style"
                      >
                        <img
                          className="lazyload"
                          data-src={item.categoryImgUrl || defaultImage}
                          alt={item.categoryName}
                          src={item.categoryImgUrl || defaultImage}
                          width="600"
                          height="721"
                        />
                      </Link>
                      <div className="collection-content">
                        <Link
                          to={`/shop-default?categoryId=${item.id}`}
                          className="tf-btn collection-title hover-icon fs-15"
                        >
                          <span>{item.categoryName}</span>
                          <i className="icon icon-arrow1-top-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4">
            <div className="discovery-new-item">
              <h5>Barcha bo'limlarni ko'rish</h5>
              <Link to={`/shop-collection-list`}>
                <i className="icon-arrow1-top-left" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
