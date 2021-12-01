import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).to.be.present();
});
