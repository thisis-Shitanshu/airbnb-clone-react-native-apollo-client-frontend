import {
    compose,
    createStore,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Import custome file(s) here.
import reducer from './reducer';

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);

const configureStore = createStore(
    reducer, 
    {}, 
    enhancer
);

export default configureStore;
