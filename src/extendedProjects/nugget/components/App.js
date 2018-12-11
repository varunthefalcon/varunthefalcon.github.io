import React, {Component} from 'react';
import SearchReciepe from "./searchReciepe";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootreducer from '../reducer';

const store = createStore(rootreducer);

store.subscribe ( () => console.log(store.getState()) );

class App extends Component {

    render() {
        return (
            <Provider store = { store } >
                <h2> Reciepe finder </h2>
                <SearchReciepe />
            </Provider>
        )
    }
}

export default App;