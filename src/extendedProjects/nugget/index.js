import React, {Component} from 'react';
import App from "./components/App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from './reducer';

const store = createStore(rootreducer);

store.subscribe ( () => console.log(store.getState()) );

class index extends Component {

render()  {
    return (
                <Provider store = { store }>
                <App /> 
                </Provider> , 
                document.getElementById('root') 
    );
    }
}

export default index;