"use client";

import { BasePagination } from "../../base";

const getPageNumbers = (
  currentPage: number,
  lastPage: number,
  pagesToShow: number,
) => {
  if (lastPage <= pagesToShow * 2 + 1) {
    return Array.from({ length: lastPage }, (_, i) => i + 1);
  }

  const firstPages = Array.from({ length: pagesToShow }, (_, i) => i + 1);
  const lastPages = Array.from(
    { length: pagesToShow },
    (_, i) => lastPage - pagesToShow + 1 + i,
  );

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const endPages = [...firstPages, ...lastPages];
  const pages = [...firstPages];

  if (previousPage > 0 && !endPages.includes(previousPage)) {
    pages.push(previousPage);
  }

  if (!endPages.includes(currentPage)) {
    pages.push(currentPage);
  }

  if (nextPage <= lastPage && !endPages.includes(nextPage)) {
    pages.push(nextPage);
  }

  pages.push(...lastPages);

  // we don't need ellipsis if all pages are shown
  if (pages.length >= lastPage) {
    return pages;
  }

  return pages
    .map((page, index) => {
      const nextPage = pages[index + 1];

      // insert ellipsis if there's a gap between this page and the next
      if (nextPage && nextPage - page > 1) {
        return [page, "..."];
      }

      return page;
    })
    .flat();
};

export interface PaginationNumbersProps {
  currentPage: number;
  lastPage: number;
  onPageChange?: (page: number) => void;
  pagesToShow?: number;
  slotProps?: {
    item?: Partial<BasePagination.Item.Props>;
    button?: Partial<BasePagination.Button.Props>;
    ellipsis?: Partial<BasePagination.Ellipsis.Props>;
  };
}

export const PaginationNumbers = ({
  currentPage,
  lastPage,
  onPageChange,
  pagesToShow = 3,
  slotProps,
}: PaginationNumbersProps) => {
  const pageNumbers = getPageNumbers(currentPage, lastPage, pagesToShow);

  const renderPageButton = (page: number) => (
    <BasePagination.Button
      data-page={page}
      isActive={page === currentPage}
      onClick={() => onPageChange?.(page)}
      {...slotProps?.button}
    >
      {page}
    </BasePagination.Button>
  );

  const renderEllipsis = () => (
    <BasePagination.Ellipsis {...slotProps?.ellipsis} />
  );

  return (
    <>
      {pageNumbers.map((page, index) => (
        <BasePagination.Item {...slotProps?.item} key={`${page}-${index}`}>
          {typeof page === "number" ? renderPageButton(page) : renderEllipsis()}
        </BasePagination.Item>
      ))}
    </>
  );
};
