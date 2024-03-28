import type {ReactNode} from 'react';

import type {ExternalLink} from '~/__generated__/hygraph-schema.server';
import {Link} from '~/components';

export function HygraphExternalLink({
  children,
  targetBlank,
  linkAddress,
  rel,
  title,
}: {children: ReactNode} & ExternalLink) {
  return (
    <Link
      target={targetBlank ? '_blank' : ''}
      to={linkAddress}
      rel={rel ? rel : ''}
      title={title ? title : ''}
    >
      {children}
    </Link>
  );
}
