import Image from 'next/image';
import Icon from '@/components/Icon';
import clsx from 'classnames';

interface FilterSectionProps {
  tagImg: string;
  tag: string;
  filterLists: { [key: string]: string };
  filter: { [key: string]: boolean };
  onChange: (key: string, value: boolean) => void;
}

const FilterSection = ({ tagImg, tag, filterLists, filter, onChange }: FilterSectionProps) => {
  return (
    <div className={clsx('flex flex-col border-[#FFFFFF66] px-4 pt-8', { 'border-b-[0.5px]': tag !== 'Categories' })}>
      <div className="flex flex-row items-center gap-4">
        <Image src={tagImg} alt="filterSectiontag" width="24" height="24" />
        <p>{tag} </p>
      </div>
      <div className="flex flex-col py-2">
        {Object.entries(filterLists).map(([key, value], index) => (
          <div key={key} className="flex flex-row py-1 gap-2">
            {filter[key] ? (
              <div className="flex bg-yellow w-[17px] h-[18px] items-center justify-center">
                <Icon>check</Icon>
              </div>
            ) : (
              <div className="border-gray-400 border-2 w-[17px] h-[18px]" onClick={() => onChange(key, true)}></div>
            )}
            {/* <input type="checkbox" className="text-gray-400" key={index} name={key} checked={filter[key]} onChange={(e) => onChange(key, e.target.checked)} /> */}
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
