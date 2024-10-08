"use client";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { adaptError } from "@/lib/utils";
import { fetchJobs } from "@/services/api/jobs/jobs";
import { useSearchParams } from "next/navigation";
import { usePagination } from "@/lib/hooks";
import { INITIAL_PAGE, INITIAL_PAGE_SIZE } from "@/lib/constants";

const QUERY_KEY = "jobs";

function useGetJobsData() {
  const searchParams = useSearchParams();
  const queryTitle = searchParams.get("title") || "";
  const queryLocation = searchParams.get("location") || "";
  const [title, setTitle] = useState(queryTitle);
  const [location, setLocation] = useState(queryLocation);

  const {
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    page,
    pageSize,
    setTotalItems,
    setPage,
    setPageSize,
    isRouterReady,
    isPaginationReady,
  } = usePagination();

  const { data, error, isLoading } = useQuery({
    queryKey: [QUERY_KEY, title, location, page, pageSize],
    queryFn: () =>
      fetchJobs({
        title,
        location,
        pageSize,
        page,
      }),
    enabled: !!isPaginationReady,
  });

  useEffect(() => {
    if (isRouterReady) {
      setTitle(queryTitle);
      setLocation(queryLocation);
    }
  }, [isRouterReady]);

  useEffect(() => {
    if (data) {
      setTotalItems(data.totalItems || 0);
      setPage(data.currentPage || Number(INITIAL_PAGE));
      setPageSize(data.pageSize || Number(INITIAL_PAGE_SIZE));
    }
  }, [data]);

  const onSearch = useCallback((data: { title: string; location: string }) => {
    setTitle(data.title);
    setLocation(data.location);
  }, []);

  return {
    jobs: data?.data || [],
    title,
    location,
    loading: isLoading,
    error: error ? adaptError(error).message : null,
    onSearch,
    nextPage,
    prevPage,
    canGoNext,
    canGoPrev,
    page,
  };
}

export default useGetJobsData;
