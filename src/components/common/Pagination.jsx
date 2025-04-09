import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination({ totalCount = 1052, limit = 10 }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPageFromURL = parseInt(searchParams.get("page")) || 1;
    const [activePage, setActivePage] = useState(currentPageFromURL);

    const totalPages = Math.ceil(totalCount / limit);

    useEffect(() => {
        const currentParams = Object.fromEntries(searchParams.entries());
        setSearchParams({
          ...currentParams,
          page: activePage,
        });
      }, [activePage, setSearchParams]);
      
    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            // Only render first, last, current ±1, and ellipses
            if (
                i === 1 ||
                i === totalPages ||
                (i >= activePage - 1 && i <= activePage + 1)
            ) {
                pageNumbers.push(
                    <li key={i} className={activePage === i ? "active" : ""}>
                        <a className="pagination-link" onClick={() => handlePageClick(i)}>
                            {i}
                        </a>
                    </li>
                );
            } else if (
                i === activePage - 2 ||
                i === activePage + 2
            ) {
                pageNumbers.push(
                    <li key={`ellipsis-${i}`}>
                        <span className="pagination-ellipsis">...</span>
                    </li>
                );
            }
        }

        return pageNumbers;
    };

    return (
        <ul className="pagination">
            <li>
                <a
                    onClick={() =>
                        setActivePage((prev) => (prev > 1 ? prev - 1 : prev))
                    }
                    className="pagination-link"
                >
                    &laquo;
                </a>
            </li>

            {renderPageNumbers()}

            <li>
                <a
                    onClick={() =>
                        setActivePage((prev) => (prev < totalPages ? prev + 1 : prev))
                    }
                    className="pagination-link"
                >
                    &raquo;
                </a>
            </li>
        </ul>
    );
}
