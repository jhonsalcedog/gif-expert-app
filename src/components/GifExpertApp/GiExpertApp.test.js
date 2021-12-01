import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import GifExpertApp from './GifExpertApp';

describe('GifExpert', () => {
  it('render without crashing', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).to.be.present();
  });

  it('render component AddCategory', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper.find('AddCategory')).to.be.present();
  });

  it('render component GifGrid', () => {
    const categories = ['goku', 'naruto'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper.find('GifGrid')).to.be.present();
  });
});
