import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from './App';
import RepositoryList from './components/Repository/RepositoryList/RepositoryList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should renders <RepositoryList> component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(RepositoryList)).toHaveLength(1);
});
