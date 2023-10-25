import React, { FC, ReactElement, Dispatch, SetStateAction } from 'react';

interface FilterProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  setSort: Dispatch<SetStateAction<string>>;
}

const Filter: FC<FilterProps> = ({ filter, setFilter, setSort }): ReactElement => {
  return (
    <div className="filter">
        <h2>Filter</h2>
        <div className="filter-options">
            <div>
                <p>Status: </p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Incomplete">Incompleted</option>
                </select>
            </div>
            <div>
                <p>Sort order:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
            </div>
        </div>
    </div>
  );
}

export default Filter;
