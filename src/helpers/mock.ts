import { Prompt, Tag, User, Message, IFilterSection } from '@/helpers/interface';

export const FilterSections: IFilterSection = {
  sortBy: {
    tagImg: '/tags/sortby.png',
    tagTitle: 'Sort By',
    filterLists: {
      trending: 'Trending',
      mostPopular: 'Most Popular',
    },
  },
  prompts: {
    tagImg: '/tags/prompts.png',
    tagTitle: 'Prompts',
    filterLists: {
      dalle: 'DALLE',
      midjourney: 'Midjourney',
      GPT3: 'GPT-3',
      chatGPT: 'ChatGPT',
      prompts: 'Prompts',
      stableDiffusion: 'Stable Diffusion',
    },
  },
  categories: {
    tagImg: '/tags/categories.png',
    tagTitle: 'Categories',
    filterLists: {
      threeD: '3D',
      accessory: 'Accessory',
      animal: 'Animal',
      anime: 'Anime',
      avatar: 'Avatar',
      building: 'Building',
      cartoon: 'Cartoon',
      clothes: 'Clothes',
      cute: 'Cute',
      drawing: 'Drawing',
      fantasy: 'Fantasy',
      food: 'Food',
      future: 'Future',
      games: 'Games',
      graphicDesign: 'Graphic Design',
      icons: 'Icons',
      jewelry: 'Jewelry',
      landscape: 'Landscape',
      logo: 'Logo',
      mockup: 'Mockup',
      monogram: 'Monogram',
      nature: 'Nature',
      NSFW: 'NSFW',
      pattern: 'Pattern',
      people: 'People',
      photography: 'Photography',
      pixelArt: 'Pixel Art',
      product: 'Product',
      psychedelic: 'Psychedelic',
      scary: 'Scary',
      space: 'Space',
      synthwave: 'Synthwave',
      uniqueStyle: 'Unique Style',
      vehicle: 'Vehicle',
      wallpaper: 'Wallpaper',
    },
  },
};

export const messages: Message[] = [
  {
    avatar: '/avatars/avatar1.png',
    message: 'Hello, How are you',
    timeStamp: '8:00 PM',
    type: 'other',
  },
  {
    avatar: '/avatars/avatar2.png',
    message: 'Fine, and you',
    timeStamp: '8:00 PM',
    type: 'me',
  },
  {
    avatar: '/avatars/avatar2.png',
    message: "What's your gmail i'd",
    timeStamp: '8:01 PM',
    type: 'me',
  },
  {
    avatar: '/avatars/avatar1.png',
    message: "Email I'd is jhoneoe123@gmail.com",
    timeStamp: '8:02 PM',
    type: 'other',
  },
  {
    avatar: '/avatars/avatar2.png',
    message: 'Sit ornare amet tortor faucibus',
    timeStamp: '8:02 PM',
    type: 'me',
  },
  {
    avatar: '/avatars/avatar1.png',
    message: 'It is okay',
    timeStamp: '8:02 PM',
    type: 'other',
  },
  {
    avatar: '/avatars/avatar2.png',
    message: 'Non velit aliquam ultrices consecteur aliquam. Suspendises.',
    timeStamp: '8:03 PM',
    type: 'me',
  },
];

export const users: User[] = [
  {
    avatar: '/avatars/avatar1.png',
    name: 'Jane Cooper',
    nickName: 'Jane Cooper',
  },
  {
    avatar: '/avatars/avatar2.png',
    name: 'Jocelyn Eksttrom Bothman',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar1.png',
    name: 'Jane Cooper',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar1.png',
    name: 'Jane Cooper',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar2.png',
    name: 'Jocelyn Eksttrom Bothman',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar1.png',
    name: 'Jane Cooper',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar2.png',
    name: 'Jocelyn Eksttrom Bothman',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar1.png',
    name: 'Jane Cooper',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar2.png',
    name: 'Jocelyn Eksttrom Bothman',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar1.png',
    name: 'Jane Cooper',
    nickName: 'ronald',
  },
  {
    avatar: '/avatars/avatar2.png',
    name: 'Jocelyn Eksttrom Bothman',
    nickName: 'ronald',
  },
];

export const trendingPrompts: Prompt[] = [
  {
    title: 'Retro Neon Signs',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured1.png',
  },
  {
    title: 'Platform Game Level Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured2.png',
  },
  {
    title: 'Chalk Board Style Illustrations',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured3.png',
  },
  {
    title: 'Pop Retro American Comic St...',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured4.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
];

export const featuredPrompts: Prompt[] = [
  {
    title: 'Retro Neon Signs',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured1.png',
  },
  {
    title: 'Platform Game Level Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured2.png',
  },
  {
    title: 'Chalk Board Style Illustrations',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured3.png',
  },
  {
    title: 'Pop Retro American Comic St...',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured4.png',
  },
  {
    title: 'Asian Art T-shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/featured5.png',
  },
  {
    title: 'Food Advertising Photography',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/featured6.png',
  },
  {
    title: 'Cartoon Backgrounds',
    price: 5.99,
    tag: Tag.midjourney,
    image: '/mocks/featured7.png',
  },
  {
    title: 'Indoor Light Paintings',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/featured8.png',
  },
];

export const weekPrompts: Prompt[] = [
  {
    title: 'Prompt Generator Pro',
    price: 4.99,
    tag: Tag.gpt3,
    image: '/mocks/week1.png',
    rating: 5.0,
  },
  {
    title: 'Detailed Book Writing',
    price: 9.99,
    tag: Tag.gpt3,
    image: '/mocks/week2.png',
    rating: 4.7,
  },
  {
    title: 'Pop Retro American Comic Style',
    price: 1.99,
    tag: Tag.midjourney,
    image: '/mocks/week3.png',
    rating: 5.0,
  },
  {
    title: 'YouTuber Killer Generator',
    price: 2.99,
    tag: Tag.gpt3,
    image: '/mocks/week4.png',
    rating: 5.0,
  },
];

export const monthPrompts: Prompt[] = [
  {
    title: 'Gpt-3 Prompt Generator',
    price: 2.99,
    tag: Tag.gpt3,
    image: '/mocks/month1.png',
    rating: 5.0,
  },
  {
    title: 'Write Ebooks At The Lightspeed',
    price: 3.99,
    tag: Tag.gpt3,
    image: '/mocks/month2.png',
    rating: 4.7,
  },
  {
    title: 'High Quality Cartoon Cat And Dog Animals',
    price: 4.99,
    tag: Tag.midjourney,
    image: '/mocks/month3.png',
    rating: 5.0,
  },
  {
    title: 'Course Generator',
    price: 2.99,
    tag: Tag.gpt3,
    image: '/mocks/month4.png',
    rating: 5.0,
  },
];

export const midjourneyPrompts: Prompt[] = [
  {
    title: 'Cute Stickers With Clean Backgrounds',
    price: 1.99,
    tag: Tag.midjourney,
    image: '/mocks/mid1.png',
  },
  {
    title: 'Animal T Shirt Designs',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/mid2.png',
  },
  {
    title: '3D Wall Art',
    price: 3.99,
    tag: Tag.midjourney,
    image: '/mocks/mid3.png',
  },
  {
    title: 'Gift Wrap Anything',
    price: 2.99,
    tag: Tag.midjourney,
    image: '/mocks/mid4.png',
  },
];

export const gpt3Prompts: Prompt[] = [
  {
    title: 'Human Written Plagiarism Free - SEO',
    price: 2.99,
    tag: Tag.gpt3,
    image: '/mocks/gpt1.png',
  },
  {
    title: 'Pygen - Ultimate Python Script Generator',
    price: 5.99,
    tag: Tag.gpt3,
    image: '/mocks/gpt2.png',
  },
  {
    title: 'Personal Shopper',
    price: 2.99,
    tag: Tag.gpt3,
    image: '/mocks/gpt3.png',
  },
  {
    title: 'Holy Bible Chatbot',
    price: 9.99,
    tag: Tag.gpt3,
    image: '/mocks/gpt4.png',
  },
];

export const dallePrompts: Prompt[] = [
  {
    title: 'Brunch Eclectic Spaces',
    price: 2.99,
    tag: Tag.dalle,
    image: '/mocks/dalle1.png',
  },
  {
    title: 'Modern Letter Logo Designs',
    price: 1.99,
    tag: Tag.dalle,
    image: '/mocks/dalle2.png',
  },
  {
    title: 'Fruit And Vegetable Wallpapers',
    price: 2.99,
    tag: Tag.dalle,
    image: '/mocks/dalle3.png',
  },
  {
    title: 'Photorealistic Pictures Of Flowers',
    price: 3.99,
    tag: Tag.dalle,
    image: '/mocks/dalle4.png',
  },
];

export const diffusionPrompts: Prompt[] = [
  {
    title: 'Artistic Portraits In The Rain',
    price: 2.99,
    tag: Tag.diffusion,
    image: '/mocks/diffusion1.png',
  },
  {
    title: 'Extraterrestrial Lifeforms',
    price: 5.99,
    tag: Tag.diffusion,
    image: '/mocks/diffusion2.png',
  },
  {
    title: 'Fusion City Portraits',
    price: 2.99,
    tag: Tag.diffusion,
    image: '/mocks/diffusion3.png',
  },
  {
    title: 'Luxurious Jewelry Designs Of Necklaces',
    price: 3.99,
    tag: Tag.diffusion,
    image: '/mocks/diffusion4.png',
  },
];
