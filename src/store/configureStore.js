import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
    const middleWares = [thunk];
    return createStore(rootReducer, applyMiddleware(...middleWares));
}

export default configureStore;
