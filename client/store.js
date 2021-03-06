import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'; 

import comments from './data/comments';
import posts from './data/posts';
import rootReducer from './reducers/index';

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;