import FilterSection from '@/components/FilterSection';
import { FilterSections } from '@/helpers/mock';
import Icon from '@/components/Icon';
import { Tag } from '@/helpers/interface';
import { useState, useEffect } from 'react';
import PromptCard from '@/components/PromptCard';
import { trendingPrompts } from '@/helpers/mock';
import PromptService from '../supabase/Prompt';
import clsx from 'classnames';

export default function Marketplace() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortByCaption, setSortByCaption] = useState('trending');
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
        console.log('Miracle resutl', result);
        const newPrompts = result.data.map((p: any) => ({
          ...p,
          type: Tag[p.type as string],
        }));
        console.log('Miracle', newPrompts.length);
        setPrompts(newPrompts);
        // setPrompts(
        //   result.data.map((p: any) => ({
        //     ...p,
        //     type: Tag[p.type as string],
        //   })),
        // );
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
      page: currentPage,
    };

    setSortByCaption(newObj.sortby);

    getAllPromps(newObj);
  }, [filterList, currentPage]);

  const handleUpdateFilter = (section: string, key: string, value: boolean) => {
    setFilterList((preFilter) => ({
      ...preFilter,
      [section]: {
        [key]: value,
      },
    }));
  };
  const handleClick = (direction: string) => {
    let newPage = currentPage;
    direction === 'next' ? newPage++ : newPage--;
    newPage > 0 && setCurrentPage(newPage);
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
          <h3 className="pb-8">{sortByCaption === 'trending' ? 'Trending Prompts' : 'Most Popular Prompts'}</h3>
          <div className="w-full grid grid-cols-5 gap-x-6 gap-y-8 mb-16">
            {prompts?.map(({ title, price, type, image }: any, idx: number) => (
              <PromptCard key={idx} title={title} price={price} tag={type} image={image} />
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
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 1 })}
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 2 })}
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 3 })}
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 4 })}
              onClick={() => setCurrentPage(4)}
            >
              4
            </button>
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 5 })}
              onClick={() => setCurrentPage(5)}
            >
              5
            </button>
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 6 })}
              onClick={() => setCurrentPage(6)}
            >
              6
            </button>
            <button
              className={clsx('slider-button', { 'bg-white text-black': currentPage === 7 })}
              onClick={() => setCurrentPage(7)}
            >
              7
            </button>
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
