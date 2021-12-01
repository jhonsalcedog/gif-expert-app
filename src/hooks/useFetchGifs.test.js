import React from 'react';
import { expect } from 'chai';
import { useFetchGifs } from './useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('useFetchGifs', () => {
  it('should return initialValue', async () => {
    //detructiring
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).to.be.eql([]);
    expect(loading).to.be.equal(true);
  });

  it('should show array imgs and loading should be false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));

    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).to.be.equal(10);
    expect(loading).to.be.equal(false);
  });
});
