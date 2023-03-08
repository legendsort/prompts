import { Tag, TagData, TagPosition } from '@/helpers/interface';

export const SOCIAL_LINKS = [
  {
    type: 'facebook',
    icon: '/socials/facebook.svg',
    href: '/#',
  },
  {
    type: 'instagram',
    icon: '/socials/instagram.svg',
    href: '/#',
  },
  {
    type: 'twitter',
    icon: '/socials/twitter.svg',
    href: '/#',
  },
];

export const OTHER_LINKS = [
  {
    title: 'FAQs',
    href: '/faqs',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'Privacy',
    href: '/privacy',
  },
];

export const ROUTE_MAP = [
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'Generate',
    href: '/generate',
  },
  {
    title: 'Hire',
    href: '/hire',
  },
  {
    title: 'Login',
    href: '/login',
  },
  {
    title: 'Sell',
    href: '/sell',
    icon: 'right-arrow',
  },
];

export const FEATURED_MAP = [
  {
    title: 'wsj',
    image: '/featuredins/wsj.svg',
    width: 85,
    height: 40,
  },
  {
    title: 'yahoo',
    image: '/featuredins/yahoo.svg',
    width: 290,
    height: 40,
  },
  {
    title: 'ft',
    image: '/featuredins/ft.svg',
    width: 390,
    height: 30,
  },
  {
    title: 'atlantic',
    image: '/featuredins/atlantic.svg',
    width: 85,
    height: 30,
  },
  {
    title: 'fastcompany',
    image: '/featuredins/fastcompany.svg',
    width: 200,
    height: 30,
  },
  {
    title: 'wired',
    image: '/featuredins/wired.svg',
    width: 150,
    height: 30,
  },
  {
    title: 'verge',
    image: '/featuredins/verge.svg',
    width: 175,
    height: 30,
  },
];

export const TAG_IMAGE_MAP = {
  [Tag.midjourney]: {
    position: TagPosition.left,
    image: '/tags/midjourney.png',
  },
  [Tag.gpt3]: {
    position: TagPosition.right,
    image: '/tags/gpt3.png',
  },
  [Tag.dalle]: {
    position: TagPosition.left,
    image: '/tags/dalle.png',
  },
  [Tag.diffusion]: {
    position: TagPosition.left,
    image: '/tags/diffusion.png',
  },
  rating: {
    position: TagPosition.left,
    image: '/tags/rating.png',
  },
} as { [keys: string]: TagData };
