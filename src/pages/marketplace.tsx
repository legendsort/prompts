import Image from 'next/image';
import FilterSection from '@/components/FilterSection';
import { FilterSections } from '@/helpers/mock';
import Icon from '@/components/Icon';
import { IFilterSection } from '@/helpers/interface';
import { useState } from 'react';
import { FEATURED_MAP } from '@/helpers/constants';
import PromptCard from '@/components/PromptCard';
import { trendingPrompts } from '@/helpers/mock';

export default function Marketplace() {
  const [filter, setFilter] = useState<{ [section: string]: { [key: string]: boolean } }>({
    sortBy: {
      trending: true,
    },
    prompts: {
      dalle: true,
    },
    categories: {
      threeD: true,
    },
  });

  const handleUpdateFilter = (section: string, key: string, value: boolean) => {
    setFilter((preFilter) => ({
      ...preFilter,
      [section]: {
        [key]: value,
      },
    }));
  };

  console.log({ filter });

  return (
    <>
      <div className="flex gap-4">
        <div id="filterSection" className="w-[275px] border-r-[0.5px] border-[#FFFFFF66]">
          <div className="flex flex-col">
            {Object.entries(FilterSections).map(([section, { tagImg, tagTitle, filterLists }], index) => (
              <FilterSection
                key={index}
                filter={filter[section]}
                tagImg={tagImg}
                tag={tagTitle}
                filterLists={filterLists}
                onChange={(key, value) => handleUpdateFilter(section, key, value)}
              />
            ))}
          </div>
        </div>
        <div id="trendingPrompts" className="flex flex-col pt-8 ">
          <h3 className="pb-8">Trending Prompts</h3>
          <div className="grid grid-cols-5 gap-x-6 gap-y-8 mb-16">
            {trendingPrompts.map(({ title, price, tag, image }) => (
              <PromptCard key={title} title={title} price={price} tag={tag} image={image} />
            ))}
          </div>
          <div className="flex gap-x-2 pb-14 ml-auto">
            <button className="slider-button">
              <Icon>left</Icon>
            </button>
            <button className="slider-button">1</button>
            <button className="slider-button">2</button>
            <button className="slider-button">3</button>
            <button className="slider-button">4</button>
            <button className="slider-button">5</button>
            <button className="slider-button">6</button>
            <button className="slider-button">7</button>
            <button className="slider-button">
              <Icon>right</Icon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
