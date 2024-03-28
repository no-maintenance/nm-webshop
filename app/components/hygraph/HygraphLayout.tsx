import type {Settings} from 'node:http2';

import type {CSSProperties, ElementType, ReactNode} from 'react';
import {Component} from 'react';
import clsx from 'clsx';
import * as StorefrontAPI from '@shopify/hydrogen/storefront-api-types';
import type {Maybe} from '@shopify/hydrogen/storefront-api-types';

import {PageHeader, Section as SectionComponent} from '~/components';
import {
  HygraphCollection,
  MixedContentBlock,
} from '~/components/hygraph/blocks';
import {HygraphCollectionVariant} from '~/components/hygraph/blocks/HygraphCollection';
import type {
  CollectionFragment,
  FormFragment,
  LayoutFragment,
  MixedContentFragment,
  SectionFragment,
  SettingFragment,
  ThemeFragment,
} from '~/__generated__/hygraph.generated';
import {HygraphForm} from '~/components/hygraph/blocks/HygraphForm';

export function HygraphLayout({layout}: {layout: LayoutFragment}) {
  return (
    <SettingsWrapper settings={layout.settings}>
      {/*{layout.title && <PageHeader heading={layout.title}></PageHeader>}*/}
      <section>
        {layout.sections.map((section) => (
          <Block {...section} key={section.id} />
        ))}
      </section>
    </SettingsWrapper>
  );
}

export function isEntityType<T>(entity: any, typeName: string): entity is T {
  return typeof entity !== undefined && entity?.__typename === typeName;
}

function SettingsWrapper({
  children,
  settings,
  as: Component = 'section',
}: {
  as?: ElementType;
  children: ReactNode;
  settings?: Maybe<SettingFragment>;
}) {
  const {theme, verticalPadding, horizontalPadding} = settings || {
    theme: null,
    verticalPadding: null,
    horizontalPadding: null,
  };

  const getSizing = (
    sizing?: 'fluid' | 'small' | 'default',
    orientation: 'horizontal' | 'vertical' = 'horizontal',
  ) => {
    const sizes = {
      fluid: {horizontal: '', vertical: ''},
      small: {horizontal: 'gutter-lg', vertical: 'gutter-lg-y'},
      default: {horizontal: 'gutter', vertical: 'gutter-y'},
    };
    return sizes[sizing ?? 'default'][orientation];
  };
  const classes = clsx([
    getSizing(verticalPadding, 'vertical'),
    getSizing(horizontalPadding),
  ]);
  return (
    <ThemeWrapper theme={theme}>
      <SectionComponent className={classes} as={Component} padding={'none'}>
        {children}
      </SectionComponent>
    </ThemeWrapper>
  );
}
function ThemeWrapper({
  theme,
  children,
  as: Component = 'section',
}: {
  children: ReactNode;
  theme?: Maybe<ThemeFragment>;
  as?: ElementType;
}) {
  if (!theme) return children;
  const getStyles = (theme: ThemeFragment): CSSProperties => {
    const {
      base,
      contrast,
      primary,
      secondary,
      tertiary,
      error,
      info,
      success,
      neutral,
    } = theme;
    return {
      ...(base?.hex && {'--color-primary': base.hex}),
      ...(contrast?.hex && {'--color-contrast': contrast.hex}),
      ...(primary?.hex && {'--color-accent': primary.hex}),
      ...(secondary?.hex && {'--color-notice': secondary.hex}),
      ...(tertiary?.hex && {'--color-error': tertiary.hex}),
      ...(neutral?.hex && {'--color-neutral': neutral.hex}),
      ...(info?.hex && {'--color-info': info.hex}),
      ...(success?.hex && {'--color-success': success.hex}),
      ...(error?.hex && {'--color-error': error.hex}),
    };
    //   info, success, neutral
  };
  return (
    <Component style={theme ? getStyles(theme) : {}} as={Component}>
      {children}
    </Component>
  );
}
function FallbackComponent({...props}: SectionFragment['content']) {
  // Handle the case when there is no registered component for a block type
  // This is just a simple example, replace it with your actual fallback handling
  console.warn(`No component registered for block type ${props.__typename}`);
  return null;
}

function Block({...section}: SectionFragment) {
  if (!section.content) return null;

  return (
    <SettingsWrapper settings={section.settings}>
      <EntityFactory {...section} />
    </SettingsWrapper>
  );
}
export function EntityFactory(section: SectionFragment) {
  const {content, settings} = section;
  if (!content) return null;
  if (isEntityType<MixedContentFragment>(content, 'MixedContent')) {
    return <MixedContentBlock {...content} />;
  }
  if (isEntityType<CollectionFragment>(content, 'Collection')) {
    return (
      <HygraphCollection {...content} variant={HygraphCollectionVariant.Feed} />
    );
  }
  if (isEntityType<FormFragment>(content, 'Form')) {
    return (
      <div className={'max-w-3xl'}>
        <HygraphForm {...content} />
      </div>
    );
  }
  return <FallbackComponent {...content} />;
}
