import React from 'react';

export default function Hero() {
  return (
    <section className="tf-slideshow about-us-page position-relative">
      <div className="banner-wrapper position-relative">
        {/* Rasm */}
        <img
          className="lazyload w-100"
          src="/images/slider/about-banner-01.jpg"
          alt="image-collection"
          width={2000}
          height={1262}
          style={{ objectFit: 'cover', height: '500px' }}
        />

        {/* Qoraytiruvchi overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}
        ></div>

        {/* Matn */}
        <div
          className="box-content text-center position-absolute top-50 start-50 translate-middle w-100"
          style={{ zIndex: 2 }}
        >
          <div className="container">
            <div className="text-white fs-3 fw-bold">
              Sifatli maishiy texnika — ishonchli hayot tarzi uchun
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
