import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('when square is clicked, it changes value', () => {
  const div = document.createElement('div');
  const wrapper = ReactDOM.render(<App />, div);

  console.log(wrapper);
});
