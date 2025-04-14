import React from "react";
import Pagination from "../common/Pagination";
import { collectionItems3 } from "@/data/categories";

import { Link } from "react-router-dom";
import { useCategories } from "@/data/hook";
export default function ShopCollections() {
  const {data: categories} = useCategories();

  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="tf-grid-layout lg-col-3 tf-col-2">
          {categories?.data.map((item, index) => (
            <div className="collection-item hover-img" key={index}>
              <div className="collection-inner">
                <Link
                  to={`/shop-default?categoryId=${item.id}`}
                  className="collection-image img-style"
                >
                  <img
                    className="lazyload"
                    data-src={item.categoryImgUrl}
                    alt={item.categoryName}
                    src={item.categoryImgUrl || '/images/default.jpg'}
                    width={460}
                    height={460}
                  />
                </Link>
                <div className="collection-content">
                  <Link
                    to={`/shop-default?categoryId${item.id}`}
                    className="tf-btn collection-title hover-icon"
                  >
                    <span>{item.categoryName}</span>
                    <i className="icon icon-arrow1-top-left" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* pagination */}
        {/* <ul className="tf-pagination-wrap tf-pagination-list">
          <Pagination />
        </ul> */}
      </div>
    </section>
  );
}
