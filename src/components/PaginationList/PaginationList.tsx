// components/PokemonPagination.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

export function PaginationList({
  totalPages,
  currentPage,
  visiblePages = 5,
}: {
  totalPages: number;
  currentPage: number;
  visiblePages?: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  // Cálculo definitivo do range visível
  const getVisibleRange = () => {
    // Caso especial quando há poucas páginas
    if (totalPages <= visiblePages) {
      return { start: 1, end: totalPages };
    }

    // Cálculo centralizado
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = start + visiblePages - 1;

    // Ajuste quando estamos no final
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - visiblePages + 1);
    }

    // Ajuste quando estamos no início
    if (start < 1) {
      start = 1;
      end = Math.min(totalPages, start + visiblePages - 1);
    }

    return { start, end };
  };

  const { start, end } = getVisibleRange();

  // Verifica se precisa mostrar ellipsis
  const showStartEllipsis = start > 2;
  const showEndEllipsis = end < totalPages - 1;

  // Desabilita navegação quando nas extremidades
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Não renderizar se não houver paginação necessária
  if (totalPages <= 1) return null;

  return (
    <Pagination>
      <PaginationContent className="bg-white/5 rounded-md p-1 backdrop-blur-sm shadow-xl">
        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(Math.max(1, currentPage - 1))}
            aria-disabled={isFirstPage}
            className={isFirstPage ? "opacity-50 cursor-not-allowed dark:hover:bg-transparent" : "dark:hover:bg-white/30" }
            onClick={(e) => {
              if (isFirstPage) {
                e.preventDefault(); // Impede a navegação
              }
            }}
          />
        </PaginationItem>

        {/* Primeira página */}
        <PaginationItem>
          <PaginationLink href={createPageURL(1)} isActive={1 === currentPage} className="dark:hover:bg-white/30">
            1
          </PaginationLink>
        </PaginationItem>

        {/* Ellipsis inicial */}
        {showStartEllipsis && <PaginationEllipsis />}

        {/* Páginas intermediárias */}
        {Array.from({ length: end - start + 1 }, (_, i) => {
          const page = start + i;
          if (page <= 1 || page >= totalPages) return null;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={page === currentPage}
                className="dark:hover:bg-white/30"
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Ellipsis final */}
        {showEndEllipsis && <PaginationEllipsis />}

        {/* Última página (se diferente da primeira) */}
        {totalPages > 1 && (
          <PaginationItem>
            <PaginationLink
              href={createPageURL(totalPages)}
              isActive={totalPages === currentPage}
              className="dark:hover:bg-white/30"
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext
            href={createPageURL(Math.min(totalPages, currentPage + 1))}
            aria-disabled={isLastPage}
            className={isLastPage ? "opacity-50 cursor-not-allowed dark:hover:bg-transparent" : "dark:hover:bg-white/30"}
            onClick={(e) => {
              if (isLastPage) {
                e.preventDefault(); // Impede a navegação
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
