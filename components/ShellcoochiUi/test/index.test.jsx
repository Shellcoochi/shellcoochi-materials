import React from 'react';
import { shallow } from 'enzyme';
import ShellcoochiUi from '../src/index';
import '../src/main.scss';

it('renders', () => {
  const wrapper = shallow(<ShellcoochiUi />);
  expect(wrapper.find('.ShellcoochiUi').length).toBe(1);
});
