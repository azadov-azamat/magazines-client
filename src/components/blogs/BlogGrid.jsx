import React from "react";

import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";
export default function BlogGrid() {
  return (
    <div className="blog-grid-main">
      <div className="container">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-xl-4 col-md-6 col-12" key={index}>
              <div className="blog-article-item">
                <div className="article-thumb">
                  <Link to={`/blog-detail/${post.id}`}>
                    <img
                      className="lazyload"
                      data-src={post.imgSrc}
                      alt={post.alt}
                      src={post.imgSrc}
                      width={550}
                      height={354}
                    />
                  </Link>
                  <div className="article-label">
                    <Link
                      to={`/blog-detail/${post.id}`}
                      className="tf-btn btn-sm radius-3 btn-fill animate-hover-btn"
                    >
                      {post.category}
                    </Link>
                  </div>
                </div>
                <div className="article-content">
                  <div className="article-title">
                    <Link to={`/blog-detail/${post.id}`}>{post.title}</Link>
                  </div>
                  <div className="article-btn">
                    <Link
                      to={`/blog-detail/${post.id}`}
                      className="tf-btn btn-line fw-6"
                    >
                      Read more
                      <i className="icon icon-arrow1-top-left" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
