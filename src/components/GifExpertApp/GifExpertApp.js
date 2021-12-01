import React, { useState } from 'react';
import Container from 'emerald-ui/lib/Container';
import Panel from 'emerald-ui/lib/Panel';
import AddCategory from '../AddCategory';
import GifGrid from '../GifGrid/GifGrid';

import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = (newCategory) => {
  //   // setCategories([...categories, 'Picoro']);
  //   setCategories([newCategory, ...prevCategories]);
  // };
  return (
    <Container>
      <Panel>
        <Panel.Body>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories={setCategories} categories={categories} />
          <div>
            {categories.map((category) => {
              return <GifGrid key={category} category={category} />;
            })}
          </div>
        </Panel.Body>
      </Panel>
    </Container>
  );
};

GifExpertApp.propTypes = {
  defaultCategories: PropTypes.array,
};

export default GifExpertApp;
