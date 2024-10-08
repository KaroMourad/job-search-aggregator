import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export type SearchPagePaginationProps = {
  prevPage: () => void;
  nextPage: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  page: number;
};

function SearchPagePagination(props: SearchPagePaginationProps) {
  const { prevPage, nextPage, canGoNext, canGoPrev, page } = props;
  return (
    <Pagination className="justify-center md:justify-start mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={prevPage}
            aria-disabled={!canGoPrev}
            disabled={!canGoPrev}
            size={"sm"}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink size={"sm"} isActive>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={nextPage}
            aria-disabled={!canGoNext}
            disabled={!canGoNext}
            size={"sm"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

SearchPagePagination.displayName = "SearchPagePagination";
export default SearchPagePagination;
