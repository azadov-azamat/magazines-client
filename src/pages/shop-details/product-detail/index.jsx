import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";

import Products from "@/components/shopDetails/Products";
import RecentProducts from "@/components/shopDetails/RecentProducts";
import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop Details || Ecomus - Ultimate Reactjs Ecommerce Template",
  description: "Ecomus - Ultimate Reactjs Ecommerce Template",
};
import { allProducts } from "@/data/products";
import ProductSinglePrevNext from "@/components/common/ProductSinglePrevNext";
import { useProductById } from "@/data/hook";

export default function ProductDetailPage({}) {
  let params = useParams();
  const { id } = params;
  const { data: product } = useProductById(id);
  
  if (!product?.data || product.status === 404) {
    return <div className="text-center d-flex justify-content-center align-items-center h-100">Product not found</div>;
  }
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header2 />
      <div className="tf-breadcrumb">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link to={`/`} className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right" />

              <span className="text">
                {product?.data?.productName || "Nom kiritilmagan"}
              </span>
            </div>
            <ProductSinglePrevNext currentId={product?.data?.id} />
          </div>
        </div>
      </div>
      <DetailsOuterZoom product={product?.data} />
      {/* <ShopDetailsTab /> */}
      <Products />
      <RecentProducts />
      <Footer1 />
    </>
  );
}
