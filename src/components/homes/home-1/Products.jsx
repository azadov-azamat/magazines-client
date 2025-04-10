import { products1 } from '@/data/products';
import React, { useState } from 'react';
import { ProductCard } from '../../shopCards/ProductCard';
import { useProducts } from '@/data/hook';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const { data: products } = useProducts(page);

  const handleLoad = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setLoaded(true);
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  };

  return (
    <section className="flat-spacing-5 pt_0 flat-seller">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Yangi mahsulotlar
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            Yangi texnikalarni xarid qiling: Eng so‘nggi mahsulotlar bilan
            yangiliklardan ortda qolmang.
          </p>
        </div>
        <div
          className="grid-layout wow fadeInUp"
          data-wow-delay="0s"
          data-grid="grid-4"
        >
          {products?.data.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
        {!loaded && (
          <div className="tf-pagination-wrap view-more-button text-center">
            <button
              className={`tf-btn-loading tf-loading-default style-2 btn-loadmore ${
                loading ? 'loading' : ''
              } `}
              onClick={() => handleLoad()}
            >
              <span className="text">Ko'proq...</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
