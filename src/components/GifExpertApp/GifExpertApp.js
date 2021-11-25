import React, { useState } from 'react';
import Container from 'emerald-ui/lib/Container';
import Panel from 'emerald-ui/lib/Panel';
import AddCategory from '../AddCategory';
import GifGrid from '../GifGrid/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Goku']);

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Picoro']);
  //   setCategories((prevCategories) => [...prevCategories, 'Picoro']);
  // };

  return (
    <Container>
      <Panel>
        <Panel.Body>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories={setCategories} />
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

// GifExpertApp.propTypes = {};

export default GifExpertApp;
