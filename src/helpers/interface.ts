export enum Tag {
  dalle = 'DALL·E',
  midjourney = 'Midjourney',
  gpt3 = 'GPT-3',
  chatgpt = 'ChatGPT',
  prompts = 'Prompts',
  diffusion = 'Stable Diffusion',
  rating = 'Rating',
}

export enum TagPosition {
  left = 'left',
  right = 'right',
}

export type Prompt = {
  title: string;
  price: number;
  tag: Tag;
  image: string;
  rating?: number;
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
  tagImg: string;
  tagTitle: string;
  filterLists: string[];
};
