import { combineReducers } from 'redux';
import { routerReducer } from 'react-redux-reducer';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    router: routerReducer
});

export default rootReducer;