import React from "react";
import { Link } from "react-router-dom";
import { useCategories } from "@/data/hook";

export default function ToolbarShop() {
  // const categories = [
  //   {
  //     name: "Accessoriesasas",
  //     img: "/images/shop/cate/cate1.jpg",
  //     children: [],
  //   },
  //   {
  //     name: "Dog",
  //     img: "/images/shop/cate/cate2.jpg",
  //     children: [],
  //   },
  //   {
  //     name: "Grocery",
  //     img: "/images/shop/cate/cate3.jpg",
  //     children: [],
  //   },
  //   {
  //     name: "Handbag",
  //     img: "/images/shop/cate/cate4.png",
  //     children: [],
  //   },
  //   {
  //     name: "Fashion",
  //     img: "/images/shop/cate/cate5.jpg",
  //     children: [
  //       {
  //         name: "Mens",
  //         img: "/images/shop/cate/cate6.jpg",
  //         children: [
  //           { name: "Accessories", img: "/images/shop/cate/cate1.jpg" },
  //           { name: "Shoes", img: "/images/shop/cate/cate8.jpg" },
  //         ],
  //       },
  //       {
  //         name: "Womens",
  //         img: "/images/shop/cate/cate9.jpg",
  //         children: [
  //           { name: "Handbag", img: "/images/shop/cate/cate4.png" },
  //           { name: "Tee", img: "/images/shop/cate/cate7.jpg" },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Men",
  //     img: "/images/shop/cate/cate6.jpg",
  //     children: [
  //       { name: "Accessories", img: "/images/shop/cate/cate1.jpg" },
  //       { name: "Shoes", img: "/images/shop/cate/cate8.jpg" },
  //     ],
  //   },
  //   {
  //     name: "Women",
  //     img: "/images/shop/cate/cate9.jpg",
  //     children: [
  //       { name: "Handbag", img: "/images/shop/cate/cate4.png" },
  //       { name: "Tee", img: "/images/shop/cate/cate7.jpg" },
  //     ],
  //   },
  // ];

  const { data: categories } = useCategories();
  console.log(categories);
  return (
    <div
      className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile"
      id="toolbarShopmb"
    >
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            {categories?.data?.map((category, index) => (
              <li className="nav-mb-item" key={index}>
                {category?.children?.length > 0 ? (
                  <>
                    <a
                      href={`#cate-menu-${index}`}
                      className="tf-category-link has-children collapsed mb-menu-link"
                      data-bs-toggle="collapse"
                      aria-expanded="true"
                      aria-controls={`cate-menu-${index}`}
                    >
                      <div className="image">
                        <img
                          alt="image"
                          src={category.img}
                          width={40}
                          height={48}
                        />
                      </div>
                      <span>{category.name}</span>
                      <span className="btn-open-sub" />
                    </a>
                    <div id={`cate-menu-${index}`} className="collapse list-cate">
                      <ul className="sub-nav-menu">
                        {category.children.map((child, childIndex) => (
                          <li key={childIndex}>
                            {child.children ? (
                              <>
                                <a
                                  href={`#cate-shop-${index}-${childIndex}`}
                                  className="tf-category-link has-children sub-nav-link collapsed"
                                  data-bs-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls={`cate-shop-${index}-${childIndex}`}
                                >
                                  <div className="image">
                                    <img
                                      alt="image"
                                      src={child.img}
                                      width={40}
                                      height={49}
                                    />
                                  </div>
                                  <span>{child.name}</span>
                                  <span className="btn-open-sub" />
                                </a>
                                <div id={`cate-shop-${index}-${childIndex}`} className="collapse">
                                  <ul className="sub-nav-menu sub-menu-level-2">
                                    {child.children.map((subChild, subChildIndex) => (
                                      <li key={subChildIndex}>
                                        <Link
                                          to={`/shop-default`}
                                          className="tf-category-link sub-nav-link"
                                        >
                                          <div className="image">
                                            <img
                                              alt="image"
                                              src={subChild.img}
                                              width={40}
                                              height={48}
                                            />
                                          </div>
                                          <span>{subChild.name}</span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </>
                            ) : (
                              <Link
                                to={`/shop-default`}
                                className="tf-category-link sub-nav-link"
                              >
                                <div className="image">
                                  <img
                                    alt="image"
                                    src={child.img}
                                    width={40}
                                    height={48}
                                  />
                                </div>
                                <span>{child.name}</span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={`/shop-default`}
                    className="tf-category-link mb-menu-link"
                  >
                    <div className="image">
                      <img
                        alt="image"
                        src={category.categoryImgUrl}
                        width={40}
                        height={48}
                      />
                    </div>
                    <span>{category.categoryName}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-bottom">
          <Link to={`/shop-default`} className="tf-btn fw-5 btn-line">
            View all collection
            <i className="icon icon-arrow1-top-left" />
          </Link>
        </div>
      </div>
    </div>
  );
}
