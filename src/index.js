import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import GitUser from './Container/fetchGitUsers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <Provider store={store}>
    <MuiThemeProvider>         
        <GitUser />
        <br/>
              
    </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();