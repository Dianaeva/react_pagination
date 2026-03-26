import React from 'react';
import cn from 'classnames';

import { PageItem } from './PageItem';

type Props = {
  total: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <ul className="pagination">
      <PageItem
        title="«"
        dataCy="prevLink"
        href="#prev"
        ariaDisabled={currentPage === 1}
        className={cn({ disabled: currentPage === 1 })}
        onPageChange={() => {
          if (currentPage !== 1) {
            onPageChange(currentPage - 1);
          }
        }}
      />

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;

        return (
          <PageItem
            title={page.toString()}
            dataCy="pageLink"
            href={`#${page}`}
            key={page}
            className={cn({ active: currentPage === page })}
            onPageChange={() => onPageChange(page)}
          />
        );
      })}

      <PageItem
        title="»"
        dataCy="nextLink"
        href="#next"
        ariaDisabled={currentPage === totalPages}
        className={cn({ disabled: currentPage === totalPages })}
        onPageChange={() => {
          if (currentPage !== totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
      />
    </ul>
  );
};
