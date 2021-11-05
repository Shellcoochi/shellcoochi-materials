import React from 'react';
import { shallow } from 'enzyme';
import Switch from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<Switch />);
  expect(wrapper.find('.Switch').length).toBe(1);
});
