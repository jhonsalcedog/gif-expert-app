import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import GifGrid from './GifGrid';

import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('GrifGrid', () => {
  const category = 'foo';

  it('render without crashing', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).to.be.present();
    expect(wrapper.find('Spinner')).to.be.present();
  });

  it('render component GifGrindItem', () => {
    const gifs = [{ id: 'foo', url: 'http://foo.bar.jpg', title: 'foo' }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find('GifGridItem')).to.be.present();
    expect(wrapper.find('Spinner')).to.be.not.present();
  });
});
