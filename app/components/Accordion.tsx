import {useState} from 'react';
import {m, AnimatePresence} from 'framer-motion';
import {ChevronRight} from 'react-feather';

import {Heading} from './Text';

export const Accordion = ({
  question,
  answer,
  isHTML = false,
}: {
  isHTML: boolean;
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const loadFeatures = import('~/lib/motion-features').then(
    (res) => res.default,
  );

  return (
    <m.div className={'overflow-hidden'}>
      <AnimatePresence>
        <m.div key="question" onClick={() => setIsOpen(!isOpen)}>
          <div className="cursor-pointer flex justify-between">
            <Heading as={'h3'} size={'mid'} className={'w-full '}>
              {question}
            </Heading>
            <m.div
              variants={{
                open: {rotate: 90},
                collapsed: {rotate: 0},
              }}
              initial="collapsed"
              animate={isOpen ? 'open' : 'collapsed'}
              exit="collapsed"
              transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
            >
              <ChevronRight />
            </m.div>
          </div>
        </m.div>

        {isOpen && (
          <m.section
            key="answer"
            variants={{
              open: {height: 'auto'},
              collapsed: {height: 0},
            }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            transition={{duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]}}
            className="over cursor-default"
          >
            <m.div className="content-placeholder">
              {isHTML ? (
                <div
                  dangerouslySetInnerHTML={{__html: answer}}
                  className={'rte pt-6'}
                ></div>
              ) : (
                <p>{answer}</p>
              )}
            </m.div>
          </m.section>
        )}
      </AnimatePresence>
    </m.div>
  );
};
