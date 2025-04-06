export const allHomepages = [
  {
    href: "/",
    imgSrc: "/images/demo/home-01.jpg",
    alt: "home-01",

    labels: ["New", "Trend"],
    name: "Home Fashion 01",
  }
];

export const demoItems = [
  {
    href: "/",
    src: "/images/demo/home-01.jpg",
    alt: "home-01",
    name: "Home Fashion 01",
    labels: [{ className: "demo-new", text: "New" }, { text: "Trend" }],
  }
];

export const productsPages = [
  {
    heading: "Shop layouts",
    links: [
      { href: "/shop-default", text: "Default" },
      { href: "/shop-left-sidebar", text: "Left sidebar" },
      { href: "/shop-right-sidebar", text: "Right sidebar" },
      { href: "/shop-fullwidth", text: "Fullwidth" },
      { href: "/shop-collection-sub", text: "Sub collection" },
      { href: "/shop-collection-list", text: "Collections list" },
    ],
  },
  {
    heading: "Features",
    links: [
      { href: "/shop-link", text: "Pagination links" },
      { href: "/shop-loadmore", text: "Pagination loadmore" },
      {
        href: "/shop-infinite-scrolling",
        text: "Pagination infinite scrolling",
      },
      { href: "/shop-filter-sidebar", text: "Filter sidebar" },
      { href: "/shop-filter-hidden", text: "Filter hidden" },
    ],
  },
  {
    heading: "Product styles",
    links: [
      // { href: "/product-style-list", text: "Product style list" },s
      { href: "/product-style-01", text: "Product style 01" },
      { href: "/product-style-02", text: "Product style 02" },
      { href: "/product-style-03", text: "Product style 03" },
      { href: "/product-style-04", text: "Product style 04" },
      { href: "/product-style-05", text: "Product style 05" },
      { href: "/product-style-06", text: "Product style 06" },
      { href: "/product-style-07", text: "Product style 07" },
    ],
  },
];

export const productDetailPages = [
  {
    heading: "Product layouts",
    links: [
      { href: "/product-detail/1", text: "Product default" },
      { href: "/product-grid-1/2", text: "Product grid 1" },
      { href: "/product-grid-2/3", text: "Product grid 2" },
      { href: "/product-stacked/4", text: "Product stacked" },
      { href: "/product-right-thumbnails/5", text: "Product right thumbnails" },
      {
        href: "/product-bottom-thumbnails/6",
        text: "Product bottom thumbnails",
      },
      { href: "/product-drawer-sidebar/7", text: "Product drawer sidebar" },
      {
        href: "/product-description-accordion/8",
        text: "Product description accordion",
      },
      {
        href: "/product-description-list/10",
        text: "Product description list",
      },
      {
        href: "/product-description-vertical/11",
        text: "Product description vertical",
      },
    ],
  },
  {
    heading: "Product details",
    links: [
      { href: "/product-inner-zoom/12", text: "Product inner zoom" },
      { href: "/product-zoom-magnifier/13", text: "Product zoom magnifier" },
      { href: "/product-no-zoom/14", text: "Product no zoom" },
      {
        href: "/product-photoswipe-popup/15",
        text: "Product photoswipe popup",
      },
      {
        href: "/product-zoom-popup/16",
        text: "Product external zoom and photoswipe popup",
      },
      { href: "/product-video/17", text: "Product video" },
      { href: "/product-3d/18", text: "Product 3D, AR models" },
      {
        href: "/product-options-customizer/19",
        text: "Product options & customizer",
      },
      { href: "/product-advanced-types/20", text: "Advanced product types" },
      {
        href: "/product-giftcard/322",
        text: "Recipient information form for gift card products",
      },
    ],
  },
  {
    heading: "Product swatches",
    links: [
      { href: "/product-color-swatch/22", text: "Product color swatch" },
      { href: "/product-rectangle/23", text: "Product rectangle" },
      { href: "/product-rectangle-color/24", text: "Product rectangle color" },
      { href: "/product-swatch-image/25", text: "Product swatch image" },
      {
        href: "/product-swatch-image-rounded/26",
        text: "Product swatch image rounded",
      },
      { href: "/product-swatch-dropdown/27", text: "Product swatch dropdown" },
      {
        href: "/product-swatch-dropdown-color/29",
        text: "Product swatch dropdown color",
      },
    ],
  },
  {
    heading: "Product features",
    links: [
      {
        href: "/product-frequently-bought-together/30",
        text: "Frequently bought together",
      },
      {
        href: "/product-frequently-bought-together-2/31",
        text: "Frequently bought together 2",
      },
      { href: "/product-upsell-features/32", text: "Product upsell features" },
      { href: "/product-pre-orders/33", text: "Product pre-orders" },
      { href: "/product-notification/34", text: "Back in stock notification" },
      { href: "/product-pickup/35", text: "Product pickup" },
      { href: "/product-images-grouped/36", text: "Variant images grouped" },
      { href: "/product-complimentary/37", text: "Complimentary products" },
      {
        href: "/product-quick-order-list/38",
        text: "Quick order list",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
      {
        href: "/product-detail-volume-discount/38",
        text: "Volume Discount",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
      {
        href: "/product-detail-volume-discount-grid/38",
        text: "Volume Discount Grid",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
      {
        href: "/product-detail-buyx-gety/38",
        text: "Buy X Get Y",
        extra: (
          <div className="demo-label">
            <span className="demo-new">New</span>
          </div>
        ),
      },
    ],
  },
];

export const pages = [
  {
    href: "/about-us",
    text: "About us",
    className: "menu-link-text link text_black-2",
    links: null,
  },
  {
    href: "#",
    text: "Brands",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/brands",
        text: "Brands",
        className: "menu-link-text link text_black-2 position-relative",
        label: "New",
      },
      {
        href: "/brands-v2",
        text: "Brand V2",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Contact",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/contact-1",
        text: "Contact 1",
        className: "menu-link-text link text_black-2",
      },
      // {
      //   href: "/contact-2",
      //   text: "Contact 2",
      //   className: "menu-link-text link text_black-2",
      // },
    ],
  },
  {
    href: "#",
    text: "FAQ",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/faq-1",
        text: "FAQ 01",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/faq-2",
        text: "FAQ 02",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "Store",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/our-store",
        text: "Our store",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/store-locations",
        text: "Store locator",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/timeline",
    text: "Timeline",
    className: "menu-link-text link text_black-2 position-relative",
    label: "New",
  },
  {
    href: "/view-cart",
    text: "View cart",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/checkout",
    text: "Check out",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "#",
    text: "Payment",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/payment-confirmation",
        text: "Payment Confirmation",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/payment-failure",
        text: "Payment Failure",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "#",
    text: "My account",
    className: "menu-link-text link text_black-2",
    links: [
      {
        href: "/my-account",
        text: "My account",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders",
        text: "My order",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-orders-details",
        text: "My order details",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-address",
        text: "My address",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-edit",
        text: "My account details",
        className: "menu-link-text link text_black-2",
      },
      {
        href: "/my-account-wishlist",
        text: "My wishlist",
        className: "menu-link-text link text_black-2",
      },
    ],
  },
  {
    href: "/invoice",
    text: "Invoice",
    className: "menu-link-text link text_black-2 position-relative",
  },
  {
    href: "/page-not-found",
    text: "404",
    className: "menu-link-text link text_black-2 position-relative",
  },
];

export const navItems = [
  {
    id: "dropdown-menu-one",
    label: "Home",
    links: [
      { href: "/", label: "Home Fashion 01" },
    ],
  },
  {
    id: "dropdown-menu-two",
    label: "Shop",
    links: [
      {
        id: "sub-shop-one",
        label: "Shop layouts",
        links: [
          { href: "/shop-default", label: "Default" },
          { href: "/shop-left-sidebar", label: "Left sidebar" },
          { href: "/shop-right-sidebar", label: "Right sidebar" },
          { href: "/shop-fullwidth", label: "Fullwidth" },
          { href: "/shop-collection-sub", label: "Sub collection" },
          { href: "/shop-collection-list", label: "Collections list" },
        ],
      },
      {
        id: "sub-shop-two",
        label: "Features",
        links: [
          { href: "/shop-link", label: "Pagination links" },
          { href: "/shop-loadmore", label: "Pagination loadmore" },
          {
            href: "/shop-infinite-scrolling",
            label: "Pagination infinite scrolling",
          },
          { href: "/shop-filter-sidebar", label: "Filter sidebar" },
          { href: "/shop-filter-hidden", label: "Filter hidden" },
        ],
      },
      {
        id: "sub-shop-three",
        label: "Product styles",
        links: [
          // { href: "/product-style-list", label: "Product style list" },
          { href: "/product-style-01", label: "Product style 01" },
          { href: "/product-style-02", label: "Product style 02" },
          { href: "/product-style-03", label: "Product style 03" },
          { href: "/product-style-04", label: "Product style 04" },
          { href: "/product-style-05", label: "Product style 05" },
          { href: "/product-style-06", label: "Product style 06" },
          { href: "/product-style-07", label: "Product style 07" },
        ],
      },
    ],
  },
  {
    id: "dropdown-menu-three",
    label: "Products",
    links: [
      {
        id: "sub-product-one",
        label: "Product layouts",
        links: [
          { href: "/product-detail/1", label: "Product default" },
          { href: "/product-grid-1/2", label: "Product grid 1" },
          { href: "/product-grid-2/3", label: "Product grid 2" },
          { href: "/product-stacked/4", label: "Product stacked" },
          {
            href: "/product-right-thumbnails/5",
            label: "Product right thumbnails",
          },
          {
            href: "/product-bottom-thumbnails/6",
            label: "Product bottom thumbnails",
          },
          {
            href: "/product-drawer-sidebar/7",
            label: "Product drawer sidebar",
          },
          {
            href: "/product-description-accordion/8",
            label: "Product description accordion",
          },
          {
            href: "/product-description-list/9",
            label: "Product description list",
          },
          {
            href: "/product-description-vertical/10",
            label: "Product description vertical",
          },
        ],
      },
      {
        id: "sub-product-two",
        label: "Product details",
        links: [
          { href: "/product-inner-zoom/11", label: "Product inner zoom" },
          {
            href: "/product-zoom-magnifier/12",
            label: "Product zoom magnifier",
          },
          { href: "/product-no-zoom", label: "Product no zoom" },
          {
            href: "/product-photoswipe-popup/13",
            label: "Product photoswipe popup",
          },
          {
            href: "/product-zoom-popup/15",
            label: "Product external zoom and photoswipe popup",
          },
          { href: "/product-video/16", label: "Product video" },
          { href: "/product-3d", label: "Product 3D, AR models" },
          {
            href: "/product-options-customizer/17",
            label: "Product options & customizer",
          },
          {
            href: "/product-advanced-types/18",
            label: "Advanced product types",
          },
          {
            href: "/product-giftcard/322",
            label: "Recipient information form for gift card products",
          },
        ],
      },
      {
        id: "sub-product-three",
        label: "Product swatchs",
        links: [
          { href: "/product-color-swatch/20", label: "Product color swatch" },
          { href: "/product-rectangle", label: "Product rectangle" },
          {
            href: "/product-rectangle-color/21",
            label: "Product rectangle color",
          },
          { href: "/product-swatch-image/22", label: "Product swatch image" },
          {
            href: "/product-swatch-image-rounded",
            label: "Product swatch image rounded",
          },
          {
            href: "/product-swatch-dropdown/23",
            label: "Product swatch dropdown",
          },
          {
            href: "/product-swatch-dropdown-color/24",
            label: "Product swatch dropdown color",
          },
        ],
      },
      {
        id: "sub-product-four",
        label: "Product features",
        links: [
          {
            href: "/product-frequently-bought-together/25",
            label: "Frequently bought together",
          },
          {
            href: "/product-frequently-bought-together-2/26",
            label: "Frequently bought together 2",
          },
          {
            href: "/product-upsell-features/27",
            label: "Product upsell features",
          },
          { href: "/product-pre-orders/28", label: "Product pre-orders" },
          {
            href: "/product-notification/28",
            label: "Back in stock notification",
          },
          { href: "/product-pickup/29", label: "Product pickup" },
          {
            href: "/product-images-grouped/30",
            label: "Variant images grouped",
          },
          {
            href: "/product-complimentary/31",
            label: "Complimentary products",
          },
          {
            href: "/product-quick-order-list/32",
            label: "Quick order list",
            demoLabel: true,
          },
          {
            href: "/product-detail-volume-discount/38",
            label: "Volume Discount",
            demoLabel: true,
          },
          {
            href: "/product-detail-volume-discount-grid/38",
            label: "Volume Discount Grid",
            demoLabel: true,
          },
          {
            href: "/product-detail-buyx-gety/38",
            label: "Buy X Get Y",
            demoLabel: true,
          },
        ],
      },
    ],
  },
  {
    id: "dropdown-menu-four",
    label: "Pages",
    links: [
      { href: "/about-us", label: "About us" },
      { href: "/brands", label: "Brands", demoLabel: true },
      { href: "/brands-v2", label: "Brands V2" },
      { href: "/contact-1", label: "Contact 1" },
      // { href: "/contact-2", label: "Contact 2" },
      { href: "/faq-1", label: "FAQ 01" },
      { href: "/faq-2", label: "FAQ 02" },
      { href: "/our-store", label: "Our store" },
      { href: "/store-locations", label: "Store locator" },
      { href: "/timeline", label: "Timeline", demoLabel: true },
      { href: "/view-cart", label: "View cart" },
      { href: "/my-account", label: "My account" },
      { href: "/wishlist", label: "Wishlist" },
      { href: "/terms", label: "Terms and conditions" },
      { href: "/page-not-found", label: "404 page" },
    ],
  }
];
