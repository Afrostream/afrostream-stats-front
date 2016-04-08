import React from 'react'
import {render} from 'react-dom'
import UsersStatsPageComponent from './UsersStatsPageComponent.jsx'
import ASNumberStatsPageComponent from './ASNumberStatsPageComponent.jsx'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

class App extends React.Component {
  render() {
    return(
        <UsersStatsPageComponent />
    );
  }
}

render(
    <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/asnumberstats" component={ASNumberStatsPageComponent}/>
            </Router>
    </Provider>,
    document.getElementById('app')
);