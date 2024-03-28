import type {ReactNode} from 'react';
import invariant from 'tiny-invariant';

import type {HygraphLinkProps, Nullable} from '~/hygraph';
import {Link} from '~/components';

export function HygraphLinkDeprecated({
  children,
  link,
  className,
}: {
  className?: string;
  children?: ReactNode;
  link: Nullable<HygraphLinkProps>;
}) {
  invariant(link, 'HygraphLinkDeprecated requires a link prop');
  const att = link?.openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener',
      }
    : {};
  if (!link.urlString) return <div className={className}>{children}</div>;
  return (
    <Link to={link.urlString} className={className} {...att}>
      {children}
    </Link>
  );
}
