"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { INITIAL_PAGE, INITIAL_PAGE_SIZE } from "../constants";
import { useRouterReady } from ".";

export default function usePagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const isRouterReady = useRouterReady();
  const queryPage = searchParams.get("page") || INITIAL_PAGE;
  const queryPageSize = searchParams.get("pageSize") || INITIAL_PAGE_SIZE;
  const [page, setPage] = useState(Number(queryPage));
  const [pageSize, setPageSize] = useState(Number(queryPageSize));
  const [totalItems, setTotalItems] = useState(0);
  const [isPaginationReady, setIsPaginationReady] = useState(false);

  const totalPages = Math.ceil(totalItems / pageSize);

  const canGoNext = page < totalPages;
  const canGoPrev = page > 1;

  const updatePage = (newPage: number) => {
    setPage(newPage);
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.replace({ pathname, search: params.toString() });
  };

  const nextPage = () => {
    if (canGoNext) {
      updatePage(page + 1);
    }
  };

  const prevPage = () => {
    if (canGoPrev) {
      updatePage(page - 1);
    }
  };

  useEffect(() => {
    if (isRouterReady) {
      const queryPage = searchParams.get("page") || INITIAL_PAGE;
      const queryPageSize = searchParams.get("pageSize") || INITIAL_PAGE_SIZE;
      setPageSize(Number(queryPageSize));
      setPage(Number(queryPage));
      setIsPaginationReady(true);
    }
  }, [isRouterReady, searchParams]);

  return {
    page,
    pageSize,
    totalPages,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    totalItems,
    setTotalItems,
    setPage,
    setPageSize,
    isRouterReady,
    isPaginationReady,
  };
}
