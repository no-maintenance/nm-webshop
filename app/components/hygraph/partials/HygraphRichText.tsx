import {RichText} from '@graphcms/rich-text-react-renderer';

import {Heading, Link, Text} from '~/components';
import {HygraphButton} from '~/components/hygraph/partials/HygraphButton';
import type {MixedContentFragment} from '~/__generated__/hygraph.generated';
import {Countdown} from '~/components/Countdown';
import {HygraphForm} from '~/components/hygraph/blocks/HygraphForm';

export function HygraphRichText({
  json,
  references,
}: MixedContentFragment['body']) {
  return (
    <div className={'article'}>
      <RichText
        renderers={{
          h1: ({children}) => (
            <Heading as={'h2'} size={'display'}>
              {children}
            </Heading>
          ),
          h2: ({children}) => (
            <Heading as={'h2'} size={'heading'}>
              {children}
            </Heading>
          ),
          h3: ({children}) => (
            <Heading as={'h3'} size={'mid'}>
              {children}
            </Heading>
          ),
          h4: ({children}) => (
            <Heading as={'h4'} size={'lead'}>
              {children}
            </Heading>
          ),
          h5: ({children}) => (
            <Heading as={'h5'} size={'copy'}>
              {children}
            </Heading>
          ),
          h6: ({children}) => (
            <Heading as={'h6'} size={'fine'}>
              {children}
            </Heading>
          ),
          italic: ({children}) => (
            <Text>
              <i>{children}</i>
            </Text>
          ),
          underline: ({children}) => (
            <Text className={'animated-underline'}>{children}</Text>
          ),
          class: ({children, ...props}) => <div {...props}>{children}</div>,

          a: ({children, openInNewTab, href, rel, ...rest}) => {
            console.log('LINK');
            console.log(openInNewTab, href, rel, {...rest});
            if (!href)
              return <Text className={'animated-underline'}>{children}</Text>;
            if (href.match(/^https?:\/\/|^\/\//i)) {
              return (
                <Link
                  to={href}
                  target={openInNewTab ? '_blank' : '_self'}
                  rel={rel || 'noopener noreferrer'}
                  {...rest}
                >
                  {children}
                </Link>
              );
            }

            return (
              <Link to={href}>
                <a {...rest}>{children}</a>
              </Link>
            );
          },
          embed: {
            Page: ({children, ...props}) => {
              console.log('LINK', props);
              return <div>{children}</div>;
            },
            // Form: ({children, ...props}) => <HygraphForm {...props} />,
            Button: ({nodeId, ...props}) => <HygraphButton {...props} />,
            Countdown: ({nodeId, ...props}) => <Countdown {...props} />,
          },
        }}
        references={references}
        content={json}
      />
    </div>
  );
}
