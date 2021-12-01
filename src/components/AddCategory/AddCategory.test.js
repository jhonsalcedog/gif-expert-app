import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import AddCategory from './AddCategory';

describe('AddCategoryt', () => {
  const spy = sinon.spy();
  const mock = sinon.mock(spy);

  let wrapper = shallow(<AddCategory setCategories={spy} />);

  //Restores all mocked methods.
  beforeEach(() => {
    mock.restore();
    wrapper = shallow(<AddCategory setCategories={spy} />);
  });

  it('render without crashing', () => {
    const wrapper = shallow(<AddCategory setCategories={spy} />);

    expect(wrapper).to.be.present();
  });

  it('call handleInputChange', () => {
    const wrapper = mount(<AddCategory setCategories={spy} />);
    wrapper
      .find('form')
      .find('input')
      .simulate('change', { target: { value: 'foo' } });

    expect(wrapper.find('form').find('input')).to.have.prop('value', 'foo');
  });

  it('do nothing when submitting the form', () => {
    const wrapper = mount(<AddCategory setCategories={spy} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(spy.called).to.equal(false);
  });

  it('should call setCategories and clear setInputValue', () => {
    const value = 'foo';
    const wrapper = mount(<AddCategory setCategories={spy} categories={['Goku']} />);
    wrapper
      .find('TextField')
      .find('input')
      .simulate('change', { target: { value: value } });

    wrapper.find('form').find('input').simulate('submit', { value });

    expect(spy.called).to.equal(true);

    expect(spy.calledWith(['foo', 'Goku'])).to.equal(true);

    expect(wrapper.find('TextField').find('input')).to.have.prop('value', '');
  });
});
