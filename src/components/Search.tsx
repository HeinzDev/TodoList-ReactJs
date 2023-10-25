import React, { FC, ReactElement, ChangeEvent } from 'react';

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const Search: FC<SearchProps> = ({ search, setSearch }): ReactElement => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <h2>Search:</h2>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
