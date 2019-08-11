import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from 'components/app';
import ToDoStore from 'stores/toDoStore';

const stores = {
  toDoStore: new ToDoStore(),
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
