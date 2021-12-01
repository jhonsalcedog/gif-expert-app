import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GifGridItem from './GifGridItem';

describe('GifGridItem', () => {
  const title = 'foo bar';
  const url = 'http://localhost/foo.jpg';

  it('render without crashing', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).to.be.present();
  });

  it('should class on tag h1 title', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper.find('h2').children()).to.contain(title);
  });

  it('should class on tag img', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    const img = wrapper.find('img');
    expect(img).to.have.prop('src', url);
    expect(img).to.have.prop('alt', title);
  });

  it('should show class animates', () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    expect(wrapper.find('Col')).to.have.className('animate__animated');
    expect(wrapper.find('Col')).to.have.className('animate__zoomIn');
  });
});
