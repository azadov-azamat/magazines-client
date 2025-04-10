import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartLength from '../common/CartLength';

export default function ToolbarBottom() {
  const { pathname } = useLocation();

  return (
    <div className="tf-toolbar-bottom type-1150">
      <div
        className={`toolbar-item ${pathname !== '/shop-default' && 'active'}`}
      >
        <a
          href="#toolbarShopmb"
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasLeft"
        >
          <div className="toolbar-icon">
            <i className="icon-shop" />
          </div>
          <div className="toolbar-label">Bo'limlar</div>
        </a>
      </div>
      <div className="toolbar-item">
        <a
          href="#canvasSearch"
          data-bs-toggle="offcanvas"
          aria-controls="offcanvasLeft"
        >
          <div className="toolbar-icon">
            <i className="icon-search" />
          </div>
          <div className="toolbar-label">Izlash</div>
        </a>
      </div>
      <div
        className={`toolbar-item ${pathname === '/shop-default' && 'active'}`}
      >
        <Link to={'/shop-default'}>
          <div className="toolbar-icon">
            <i className="icon-grid" />
          </div>
          <div className="toolbar-label">Mahsulotlar</div>
        </Link>
      </div>
      {/* <div className="toolbar-item">
        <Link to={`/wishlist`}>
          <div className="toolbar-icon">
            <i className="icon-heart" />
            <div className="toolbar-count">
              <WishlistLength />
            </div>
          </div>
          <div className="toolbar-label">Wishlist</div>
        </Link>
      </div> */}
      <div className="toolbar-item">
        <a href="#shoppingCart" data-bs-toggle="modal">
          <div className="toolbar-icon">
            <i className="icon-bag" />
            <div className="toolbar-count">
              <CartLength />
            </div>
          </div>
          <div className="toolbar-label">Savatcha</div>
        </a>
      </div>
    </div>
  );
}
