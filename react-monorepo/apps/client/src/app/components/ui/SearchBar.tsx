import { Dispatch } from 'react';

interface SearchBarProps {
  searchString: string;
  setSearchString: Dispatch<string>;
  placeholder?: string;
  searchBarInputClassName?: string;
  wrapperStyles?: string;
}

export const SearchBar = ({
  searchString,
  setSearchString,
  placeholder = 'Search for events',
  searchBarInputClassName,
  wrapperStyles,
}: SearchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <div className={`relative ${wrapperStyles}`}>
      <i className="absolute top-2 left-2 text-xl bi bi-search" />
      <input
        value={searchString}
        placeholder={placeholder}
        type="text"
        className={`bg-hk-purple-10 text-xl py-2 px-4 pl-[48px] w-full border-[1px] border-black ${searchBarInputClassName}`}
        onChange={handleSearch}
      />
    </div>
  );
};
