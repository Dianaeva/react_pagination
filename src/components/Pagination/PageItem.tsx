import React from 'react';
import cn from 'classnames';

type Props = {
  title: string;
  onPageChange: () => void;
  className?: string;
  dataCy: string;
  href: string;
  ariaDisabled?: React.AriaAttributes['aria-disabled'];
};

export const PageItem: React.FC<Props> = ({
  title,
  onPageChange,
  className,
  dataCy,
  href,
  ariaDisabled,
}) => {
  return (
    <li className={cn('page-item', className)}>
      <a
        data-cy={dataCy}
        className="page-link"
        href={href}
        onClick={onPageChange}
        aria-disabled={ariaDisabled}
      >
        {title}
      </a>
    </li>
  );
};
