import React from 'react';

const SortOptions = ({ onSortChange }) => {
  const options = [
    'Stars',
    'Watchers',
    'Score',
    'Name',
    'Created At',
    'Updated At',
  ];

  return (
    <div className="sort-values">
      <label className="sort-title">Sort By:</label>
      <select onChange={(e) => onSortChange(e.target.value)} className="selected-value">
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortOptions;
