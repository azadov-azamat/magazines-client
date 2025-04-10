import { layouts } from "@/data/shop";
import ProductGrid from "./ProductGrid";
import {useEffect, useState} from "react";
import Pagination from "../common/Pagination";
import ShopFilter from "./ShopFilter";
import Sorting from "./Sorting";
import {useProducts} from "@/data/hook/index.js";
import {useSearchParams} from "react-router-dom";

export default function ShopDefault() {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const categoryId = searchParams.get("categoryId");
  const searchText = searchParams.get("search") || '';

  const [gridItems, setGridItems] = useState(4);
  const [pr, setProducts] = useState([]);
  const [finalSorted, setFinalSorted] = useState([]);
  const [page, setPage] = useState(1);

  const {data: products} = useProducts(page, 10, 'createdAt', JSON.stringify(categoryId ? {categoryId} : {}), );

  useEffect(() => {
    setPage(Number(currentPage))
  }, [currentPage]);

  useEffect(() => {
    
  }, [categoryId]);

  return (
    <>
      <section className="flat-spacing-2">
        <div className="container">
          {/* <div className="tf-shop-control d-flex align-items-center justify-content-between">
            <div className="tf-control-filter">
              <a
                href="#filterShop"
                data-bs-toggle="offcanvas"
                aria-controls="offcanvasLeft"
                className="tf-btn-filter"
              >
                <span className="icon icon-filter" />
                <span className="text">Filter</span>
              </a>
            </div>
            <ul className="tf-control-layout d-flex justify-content-center">
              {layouts.map((layout, index) => (
                <li
                  key={index}
                  className={`tf-view-layout-switch ${layout.className} ${
                    gridItems == layout.dataValueGrid ? "active" : ""
                  }`}
                  onClick={() => setGridItems(layout.dataValueGrid)}
                >
                  <div className="item">
                    <span className={`icon ${layout.iconClass}`} />
                  </div>
                </li>
              ))}
            </ul>
            <div className="tf-control-sorting d-flex justify-content-end">
              <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
                <Sorting setFinalSorted={setFinalSorted} products={products?.data || []} />
              </div>
            </div>
          </div> */}
          <div className="wrapper-control-shop">
            <ProductGrid allproducts={products?.data || []} gridItems={gridItems} />
            {/* pagination */}
            {products?.data.length ? (
              <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn">
                <Pagination limit={products?.limit} totalCount={products?.totalCount} />
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
      <ShopFilter setProducts={setProducts} />
    </>
  );
}
