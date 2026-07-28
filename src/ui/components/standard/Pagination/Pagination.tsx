"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn, cnState } from "~/ui/utils";

import { BasePagination } from "../../base";
import {
  PaginationNumbers,
  type PaginationNumbersProps,
} from "./PaginationNumbers";

export interface PaginationProps extends BasePagination.Root.Props {
  page: number;
  lastPage: number;
  onPageChange?: (page: number) => void;
  slotProps?: PaginationNumbersProps["slotProps"] & {
    content?: Partial<BasePagination.Content.Props>;
  };
}

export const Pagination = ({
  page,
  lastPage,
  onPageChange,
  slotProps,
  className,
  ...props
}: PaginationProps) => {
  return (
    <BasePagination.Root
      className={cn("@container/pagination", className)}
      {...props}
    >
      <BasePagination.Content {...slotProps?.content}>
        <BasePagination.Item
          {...slotProps?.item}
          className={cn("me-3", slotProps?.item?.className)}
        >
          <BasePagination.Button
            size="default"
            {...slotProps?.button}
            aria-label="Go to previous page"
            className={cnState("pl-1.5!", slotProps?.button?.className)}
            onClick={() => onPageChange?.(page - 1)}
            disabled={page <= 1}
          >
            <ChevronLeft data-icon="inline-start" className="cn-rtl-flip" />
            <span className="hidden @3xl/pagination:block">Previous</span>
          </BasePagination.Button>
        </BasePagination.Item>

        <PaginationNumbers
          currentPage={page}
          lastPage={lastPage}
          onPageChange={onPageChange}
          slotProps={slotProps}
        />

        <BasePagination.Item className="ms-3">
          <BasePagination.Button
            size="default"
            {...slotProps?.button}
            aria-label="Go to next page"
            className={cnState("pr-1.5!", slotProps?.button?.className)}
            onClick={() => onPageChange?.(page + 1)}
            disabled={page >= lastPage}
          >
            <span className="hidden @3xl/pagination:block">Next</span>
            <ChevronRight data-icon="inline-end" className="cn-rtl-flip" />
          </BasePagination.Button>
        </BasePagination.Item>
      </BasePagination.Content>
    </BasePagination.Root>
  );
};
