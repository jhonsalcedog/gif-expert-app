import React, { useState } from 'react';
import TextField from 'emerald-ui/lib/TextField';
// import Button from 'emerald-ui/lib/Button';

import PropTypes from 'prop-types';

const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories([inputValue, ...categories]);
      // handleAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="value" ariaLabel="search" value={inputValue} placeholder="Search" onChange={handleInputChange} />

      {/* <Button color="info">Add</Button> */}
    </form>
  );
};

AddCategory.defaultProps = {
  categories: [],
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array,
};

export default AddCategory;
