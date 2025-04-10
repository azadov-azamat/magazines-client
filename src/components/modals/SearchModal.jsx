import React, { useEffect, useState } from 'react';

import { Link, useSearchParams } from 'react-router-dom';
import { tfLoopItems } from '@/data/products';
import { useCategories, useProducts } from '@/data/hook';
import { useDebounce } from '@/utlis/hooks';
export default function SearchModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: categories } = useCategories();

  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 500); // 500ms delay

  const { data: products } = useProducts();

  const handleCategoryClick = (categoryId) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({
      ...currentParams,
      categoryId: categoryId,
    });
  };

  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({
      ...currentParams,
      search: debouncedSearch,
    });
  }, [debouncedSearch]);

  return (
    <div className="offcanvas offcanvas-end canvas-search" id="canvasSearch">
      <div className="canvas-wrapper">
        <header className="tf-search-head">
          <div className="title fw-5">
            Qidirish
            <div className="close">
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </div>
          <div className="tf-search-sticky">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="tf-mini-search-frm"
            >
              <fieldset className="text">
                <input
                  type="text"
                  placeholder="Izlash..."
                  name="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  aria-required="true"
                  required
                />
              </fieldset>
              <button type="submit">
                <i className="icon-search" />
              </button>
            </form>
          </div>
        </header>
        <div className="canvas-body p-0">
          <div className="tf-search-content">
            <div className="tf-cart-hide-has-results">
              <div className="tf-col-quicklink">
                <div className="tf-search-content-title fw-5">
                  Qidirilganlar
                </div>
                <ul className="tf-quicklink-list">
                  {categories?.data.map((category) => (
                    <li key={category.id} className={`tf-quicklink-item`}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryClick(category.id);
                        }}
                      >
                        <span>{category.categoryName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tf-col-content">
                <div className="tf-search-content-title fw-5">
                  Kalit so'z kerakmi?
                </div>
                <div className="tf-search-hidden-inner">
                  {products?.data.slice(0, 3).map((product, index) => (
                    <div className="tf-loop-item" key={index}>
                      <div className="image">
                        <Link to={`/product-detail/${product.id}`}>
                          <img
                            alt={product.productName}
                            src={product.productImgUrl || '/images/default.jpg'}
                            width={20}
                            height={20}
                          />
                        </Link>
                      </div>
                      <div className="content">
                        <Link to={`/product-detail/${product.id}`}>
                          {product.productName}
                        </Link>
                        <div className="tf-product-info-price">
                          {Number(product.productDiscPrice) ? (
                            <>
                              <div className="compare-at-price">
                                {product?.productCurrency === 'dollar' && '$'}
                                {product.productPrice}
                              </div>
                              <div className="price-on-sale fw-6">
                                {product?.productCurrency === 'dollar' && '$'}
                                {product.productDiscPrice}
                              </div>
                            </>
                          ) : (
                            <div className="price fw-6">
                              {product?.productCurrency === 'dollar' && '$'}
                              {product.productPrice}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
