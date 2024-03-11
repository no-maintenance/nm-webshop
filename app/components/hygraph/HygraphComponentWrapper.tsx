import clsx from 'clsx';
import type * as CSS from 'csstype';
import type {ReactNode} from 'react';

import {getCSS} from '~/lib/hygraph';
import type { HygraphComponentGeneralConfig, Nullable, PaddingSize } from "~/hygraph";

export const HygraphComponentWrapper = ({
  config,
  children,
  name,
}: {
  name: string;
  config: any;
  children?: ReactNode;
}) => {
  if (!config)
    return <section className={`component--${name}`}>{children}</section>;
  if (!config.displayOnDesktop && !config.displayOnMobile) return <></>;

  const {configClasses, configCSS} = processConfig(config);
  const classes = clsx(`component--${name}`, name, configClasses);
  return <section className={classes}>{children}</section>;
};

const processConfig = (
  config: HygraphComponentGeneralConfig,
): {
  configClasses: string;
  configCSS: CSS.Properties;
} => {
  const {
    backgroundColor,
    hasGutter,
    textColor,
    paddingTop,
    paddingBottom,
    displayOnDesktop,
    displayOnMobile,
  } = config;
  return {
    configClasses: getConfigClasses(
      hasGutter,
      paddingTop,
      paddingBottom,
      displayOnDesktop,
      displayOnMobile,
    ),
    configCSS: getCSS(backgroundColor, textColor),
  };
};

const getConfigClasses = (
  hasGutter: Nullable<boolean>,
  paddingTop: PaddingSize,
  paddingBottom: PaddingSize,
  displayOnDesktop: boolean,
  displayOnMobile: boolean,
): string => {
  const pt_opts: any = {
    None: 'pt-section--none',
    Small: 'pt-section--small',
    Medium: 'pt-section--medium',
    Large: 'pt-section--large',
  };
  const pb_opts: any = {
    None: 'pb-section--none',
    Small: 'pb-section--small',
    Medium: 'pb-section--medium',
    Large: 'pb-section--large',
  };
  return clsx(
    paddingTop && pt_opts[paddingTop],
    paddingBottom && pb_opts[paddingBottom],
    {
      'md:hidden block': !displayOnDesktop,
    },
    {
      'hidden md:block': !displayOnMobile,
    },
    {
      gutter: hasGutter,
    },
  );
};
