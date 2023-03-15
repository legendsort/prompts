import Image from 'next/image';
import FilterSection from '@/components/FilterSection';
import { FilterSections } from '@/helpers/mock';
import Icon from '@/components/Icon';
import { IFilterSection, Tag } from '@/helpers/interface';
import { useState, useEffect } from 'react';
import { FEATURED_MAP } from '@/helpers/constants';
import PromptCard from '@/components/PromptCard';
import { trendingPrompts } from '@/helpers/mock';
import PromptService from '../supabase/Prompt';

export default function Marketplace() {
  const [currentStep, setCurrentStep] = useState(1);
  const [filterList, setFilterList] = useState<{
    [section: string]: { [key: string]: boolean };
  }>({
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
  const [prompts, setPrompts] = useState<any>([]);

  useEffect(() => {
    const getAllPromps = async (newObj: any) => {
      await PromptService.find(newObj).then((result: any) => {
        console.log('Miracle all prompts', result.data);
        setPrompts(
          result.data.map((p: any) => ({
            ...p,
            type: Tag[p.type as string],
          })),
        );
      });
    };

    const findKeys = [];
    for (let key in filterList) {
      for (let nestedKey in filterList[key]) {
        if (filterList[key][nestedKey] === true) {
          findKeys.push(nestedKey);
        }
      }
    }
    const [sortby, type, category] = findKeys;
    const newObj = {
      sortby,
      type,
      category,
    };

    getAllPromps(newObj);
    console.log('Miracle filter', newObj);
  }, [filterList]);

  const handleUpdateFilter = (section: string, key: string, value: boolean) => {
    setFilterList((preFilter) => ({
      ...preFilter,
      [section]: {
        [key]: value,
      },
    }));
  };
  const handleClick = (direction: string) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && setCurrentStep(newStep);
  };

  return (
    <>
      <div className="flex">
        <div id="filterSection" className="w-[275px] shrink-0 border-r-[0.5px] border-[#FFFFFF66]">
          <div className="flex flex-col">
            {Object.entries(FilterSections).map(([section, { tagImg, tagTitle, filterLists }], index) => (
              <FilterSection
                key={section}
                filter={filterList[section]}
                tagImg={tagImg}
                tag={tagTitle}
                filterLists={filterLists}
                onChange={(key, value) => handleUpdateFilter(section, key, value)}
              />
            ))}
          </div>
        </div>
        <div id="trendingPrompts" className="flex flex-col pt-8 px-8 w-full mx-auto">
          <h3 className="pb-8">Trending Prompts</h3>
          <div className="w-full grid grid-cols-5 gap-x-6 gap-y-8 mb-16">
            {/* {trendingPrompts.map(({ title, price, tag, image }) => (
                <PromptCard key={title} title={title} price={price} tag={tag} image={image} />
              ))} */}
            {prompts?.map(({ description, price, type, image }: any) => (
              <PromptCard key={description} title={description} price={price} tag={type} image={image} />
            ))}
          </div>
          {prompts.length === 0 && (
            <div className="w-full">
              <h3 className="text-center mx-auto">No Prompts</h3>
            </div>
          )}
          <div className=" flex gap-x-2 pb-14 ml-auto">
            <button className="slider-button" onClick={() => handleClick('back')}>
              <Icon>left</Icon>
            </button>
            <button className="slider-button">1</button>
            <button className="slider-button">2</button>
            <button className="slider-button">3</button>
            <button className="slider-button">4</button>
            <button className="slider-button">5</button>
            <button className="slider-button">6</button>
            <button className="slider-button">7</button>
            <button className="slider-button" onClick={() => handleClick('next')}>
              <Icon>right</Icon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Marketplace.auth = true;
