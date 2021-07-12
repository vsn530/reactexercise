import React, { useState } from 'react';

const FilterComp = props => {
  const [filterText, setFilterText] = useState(''); 

  const handleFilterChange = e => {
    setFilterText(e.target.value);
    props.onFilterChange(e.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor="filter">
        Filter :
        <br />
        <input
          id="filter"
          type="text"
          value={filterText}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default FilterComp;
