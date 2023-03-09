import Image from 'next/image';
import FilterSection from '@/components/FilterSection';
import { FilterSections } from '@/helpers/mock';
import { IFilterSection } from '@/helpers/interface';
import { useState } from 'react';

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
          <div className="flex flex-col border-b-[0.5px] border-[#FFFFFF66]">
            {Object.entries(FilterSections).map(([section, { tagImg, tagTitle, filterLists }]: any, index) => (
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
          <h3>Trending Prompts</h3>
        </div>
      </div>
    </>
  );
}
