import classNames from 'classnames';
import {FC, memo, ReactNode} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string; children?: ReactNode}> = memo(
  ({children, sectionId, noPadding = false, className}) => {
    return (
      <section className={classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding}, 'relative z-30')} id={sectionId}>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
