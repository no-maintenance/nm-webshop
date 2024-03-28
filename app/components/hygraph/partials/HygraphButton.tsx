import type {Button as ButtonProps} from '~/__generated__/hygraph-schema.server';
import {Button} from '~/components';
import {isEntityType} from '~/components/hygraph/HygraphLayout';
import {HygraphExternalLink} from '~/components/hygraph/partials/HygraphExternalLink';

export function HygraphButton({label, style, target}: ButtonProps) {
  // const Link = isEntityType<ExternalLink>(target, 'ExternalLink') ? (
  //   HygraphExternalLink
  // ) : (
  //   <></>
  // );
  return <Button variant={style ?? 'primary'}>{label}</Button>;
}
