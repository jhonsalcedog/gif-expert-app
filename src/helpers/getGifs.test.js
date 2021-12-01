import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { getGifs } from './getGifs';

describe('getGifs', () => {
  it('should show 10 element', async () => {
    const gifs = await getGifs('goku');
    expect(gifs.length).to.be.equal(10);
  });

  it('when not passing category', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).to.be.equal(0);
  });
});
