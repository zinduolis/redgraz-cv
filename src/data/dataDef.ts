import {StaticImageData} from 'next/image';
import {FC, SVGProps, ReactNode} from 'react';

import {IconProps} from '../components/Icon/Icon';

export interface HomepageMeta {
  title: string;
  description: string;
  children?: ReactNode;
  ogImageUrl?: string;
  twitterCardType?: 'summary' | 'summary_large';
  twitterTitle?: string;
  twitterSite?: string;
  twitterCreator?: string;
  twitterDomain?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImageUrl?: string;
}

/**
 * Hero section
 */
export interface Hero {
  imageSrc: string | StaticImageData;
  name: string;
  description: JSX.Element;
  actions: HeroActionItem[];
}

interface HeroActionItem {
  href: string;
  text: string;
  primary?: boolean;
  Icon?: FC<SVGProps<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
}

/**
 * About section
 */
export interface About {
  profileImageSrc?: string | StaticImageData;
  description: DescriptionLine[];
  aboutItems: AboutItem[];
}

export interface DescriptionLine {
  line: string;
}

export interface AboutItem {
  label: string;
  text: string;
  Icon?: FC<SVGProps<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
}

/**
 * Stat section
 */
export interface Stat {
  title: string;
  value: number;
  Icon?: FC<SVGProps<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
}

/**
 * Skills section
 */

export interface Skill {
  name: string;
  level: number;
  max?: number;
  Icon?: FC<SVGProps<SVGSVGElement>> | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

/**
 * Portfolio section
 */
export interface PortfolioItem {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

/**
 * Resume section
 */
export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
}

/**
 * Testimonial section
 */
export interface TestimonialSection {
  imageSrc?: string | StaticImageData;
  testimonials: Testimonial[];
}

export interface Testimonial {
  image?: string;
  name: string;
  text: string;
}

/**
 * Social items
 */
export interface Social {
  label: string;
  Icon: FC<IconProps>;
  href: string;
}

/**
 * Hobbies
 */

export interface Hobbies {
  content: JSX.Element;
}
