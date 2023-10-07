import { useState } from 'react';
import { SearchBar } from '../../ui';

export const AllEvents = () => {
  const [searchString, setSearchString] = useState('');
  return (
    <div className="w-[90%] mx-[5%] flex justify-center">
      <SearchBar
        searchString={searchString}
        setSearchString={setSearchString}
        wrapperStyles="mt-5 w-2/5"
      />
    </div>
  );
};
