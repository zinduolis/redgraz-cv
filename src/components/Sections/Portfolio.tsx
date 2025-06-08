import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = portfolioItems.map(item => {
    const imageSrc = typeof item.image === 'string' ? item.image : item.image.src;
    return {
      src: imageSrc,
      alt: item.title,
      title: item.title,
      description: item.description,
    };
  });

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Currently working on a Finance Tracking App</h2>
        <div className=" w-full columns-1 md:columns-2 lg:columns-2">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-auto w-full overflow-hidden border-4 border-lime-600 rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                    'cursor-pointer',
                  )}
                  onClick={() => handleImageClick(index)}
                >
                  <Image alt={title} layout="responsive" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={currentIndex}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        carousel={{finite: true}} // Correct way to disable endless looping
      />
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(overlayRef, () => setShowOverlay(false));

  const handleOverlayInteraction = (event: MouseEvent<HTMLElement>) => {
    if (url) {
      event.stopPropagation();
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(true);
      }
      return;
    }

    if (mobile && !showOverlay) {
      setShowOverlay(true);
    }
  };

  if (!url) {
    return (
      <div
        className={classNames(
          'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        onClick={handleOverlayInteraction}
        ref={overlayRef as React.RefObject<HTMLDivElement>}
      >
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col gap-y-2 overflow-y-scroll">
            <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
            <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleOverlayInteraction}
      ref={overlayRef as React.RefObject<HTMLAnchorElement>}
      target="_blank"
      rel="noopener noreferrer">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-scroll">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});
