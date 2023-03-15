import type { NextPage, NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithAuth<P = {}, IP = P> = NextPage<P, IP> & {
  auth?: boolean;
};

type NextComponentWithAuth = NextComponentType<NextPageContext, any, {}> & Partial<NextPageWithAuth>;

export type ExtendedAppProps<P = {}> = AppProps<P> & {
  Component: NextComponentWithAuth;
};

export const Tag = {
  dalle: 'DALL·E',
  midjourney: 'Midjourney',
  gpt3: 'GPT-3',
  chatgpt: 'ChatGPT',
  prompts: 'Prompts',
  diffusion: 'Stable Diffusion',
  rating: 'Rating',
} as {
  [keys: string]: string;
};

export enum TagPosition {
  left = 'left',
  right = 'right',
}

export type Prompt = {
  title: string;
  price?: number;
  tag: string;
  image: string;
  rating?: number;
};

export type IPromptEngineer = {
  engineerId: string;
  avatar: string;
  image: string;
  viewer: string;
  tag: string;
};

export type TagData = {
  position: TagPosition;
  image: string;
};

export type User = {
  avatar: string;
  name: string;
  nickName: string;
};

export type Message = {
  avatar: string;
  message: string;
  timeStamp: string;
  type: string;
};

export type IFilterSection = {
  [section: string]: {
    tagImg: string;
    tagTitle: string;
    filterLists: {
      [key: string]: string;
    };
  };
};
