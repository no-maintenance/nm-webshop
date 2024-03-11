import {HygraphComponentWrapper} from '~/components/hygraph/HygraphComponentWrapper';
import {HygraphShopifyFeaturedCollection} from '~/components/hygraph/sections/HygraphShopifyFeaturedCollection';
import {HygraphContentTiles} from '~/components/hygraph/sections/HygraphContentTiles';
import {HygraphExternalMedia} from '~/components/hygraph/partials/HygraphExternalMedia';
import {HygraphForm} from '~/components/hygraph/sections/HygraphForm';
import {HygraphCustomSection} from '~/components/hygraph/HygraphCustomSection';

export const HygraphDynamicContent = ({content}: {content: any}) => {
  return (
    <>
      {content.map((c: any, idx: number) => {
        const params = {layoutPos: idx, ...c};
        return <WrappedComponent key={`${c.__typename}-${idx}`} {...params} />;
      })}
    </>
  );
};

const WrappedComponent = (c: any) => (
  <HygraphComponentWrapper config={c.generalConfig} name={c.__typename}>
    <ModuleSwitcher {...c} />
  </HygraphComponentWrapper>
);
const ModuleSwitcher = (c: any) => {
  const {generalConfig, __typename, ...props} = c;
  switch (__typename) {
    case 'FeaturedCollection':
      return <HygraphShopifyFeaturedCollection {...props} />;
    case 'ContentTile':
      return <HygraphContentTiles {...props} />;
    case 'TwoColumnLayout':
      return <Hygraph2ColumnLayout {...props} />;
    case 'Media':
      return <HygraphExternalMedia media={c} />;
    case 'Form':
      return <HygraphForm {...props} />;
    case 'CustomWidget':
      return <HygraphCustomSection {...props} />;
    default:
      return <></>;
  }
};

export const Hygraph2ColumnLayout = ({
  column1,
  isColumn1Loading1stOnMobile,
  column2,
}: {
  column1: any;
  isColumn1Loading1stOnMobile: boolean;
  column2: any;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <WrappedComponent {...column1} />
      </div>
      <div className="col-span-1">
        <WrappedComponent {...column2} />
      </div>
    </div>
  );
};
