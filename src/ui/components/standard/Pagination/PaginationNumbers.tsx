"use client";

import { cn } from "~/ui/utils";

import { BasePagination } from "../../base";

type PageItem = number | "ellipsis";

const range = (start: number, end: number): number[] => {
  return Array.from(
    { length: Math.max(0, end - start + 1) },
    (_, index) => start + index,
  );
};

/**
 * Builds the sequence of pages (with ellipsis) to display around the current
 * page.
 *
 * - `boundaryCount`: how many pages to always show at the very start and end.
 * - `siblingCount`: how many pages to show on each side of the current page.
 */
const getPageNumbers = (
  currentPage: number,
  lastPage: number,
  boundaryCount: number,
  siblingCount: number,
): PageItem[] => {
  if (lastPage < 1) {
    return [];
  }

  const current = Math.min(Math.max(currentPage, 1), lastPage);
  const pages = new Set<number>();

  // leading boundary pages
  for (const page of range(1, Math.min(boundaryCount, lastPage))) {
    pages.add(page);
  }

  // trailing boundary pages
  for (const page of range(Math.max(lastPage - boundaryCount + 1, 1), lastPage)) {
    pages.add(page);
  }

  // current page and its siblings
  for (const page of range(
    Math.max(current - siblingCount, 1),
    Math.min(current + siblingCount, lastPage),
  )) {
    pages.add(page);
  }

  const sortedPages = [...pages].sort((a, b) => a - b);
  const items: PageItem[] = [];

  for (const [index, page] of sortedPages.entries()) {
    const previousPage = sortedPages[index - 1];

    // insert an ellipsis when there's a gap between two shown pages
    if (previousPage !== undefined && page - previousPage > 1) {
      items.push("ellipsis");
    }

    items.push(page);
  }

  return items;
};

interface PaginationVariant {
  key: string;
  boundaryCount: number;
  siblingCount: number;
  /**
   * Container-query visibility. Each variant is only shown within its own
   * container-width range so exactly one is visible at a time.
   */
  className: string;
}

/**
 * Progressively richer layouts, from the narrowest container to the widest.
 * Sizing is driven by the `@container/pagination` set on the pagination root.
 */
const paginationVariants: PaginationVariant[] = [
  // current
  {
    key: "current-only",
    boundaryCount: 0,
    siblingCount: 0,
    className: "flex @xs/pagination:hidden",
  },
  // 1 ... current ... last
  {
    key: "edges",
    boundaryCount: 1,
    siblingCount: 0,
    className: "hidden @xs/pagination:flex @md/pagination:hidden",
  },
  // 1,2,3 ... current ... last-2,last-1,last
  {
    key: "boundaries",
    boundaryCount: 3,
    siblingCount: 0,
    className: "hidden @md/pagination:flex @xl/pagination:hidden",
  },
  // 1,2,3 ... current-1,current,current+1 ... last-2,last-1,last
  {
    key: "siblings",
    boundaryCount: 3,
    siblingCount: 1,
    className: "hidden @xl/pagination:flex",
  },
];

export interface PaginationNumbersProps {
  currentPage: number;
  lastPage: number;
  onPageChange?: (page: number) => void;
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
  slotProps,
}: PaginationNumbersProps) => {
  const renderItem = (
    item: PageItem,
    key: React.Key,
    visibilityClassName: string,
  ) => (
    <BasePagination.Item
      {...slotProps?.item}
      key={key}
      className={cn(visibilityClassName, slotProps?.item?.className)}
    >
      {typeof item === "number" ? (
        <BasePagination.Button
          data-page={item}
          isActive={item === currentPage}
          onClick={() => onPageChange?.(item)}
          {...slotProps?.button}
        >
          {item}
        </BasePagination.Button>
      ) : (
        <BasePagination.Ellipsis {...slotProps?.ellipsis} />
      )}
    </BasePagination.Item>
  );

  return (
    <>
      {paginationVariants.map((variant) => {
        const items = getPageNumbers(
          currentPage,
          lastPage,
          variant.boundaryCount,
          variant.siblingCount,
        );

        return items.map((item, index) =>
          renderItem(
            item,
            `${variant.key}-${item}-${index}`,
            variant.className,
          ),
        );
      })}
    </>
  );
};
