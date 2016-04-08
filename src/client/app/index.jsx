import React from 'react'
import {render} from 'react-dom'
import UsersStatsPageComponent from './UsersStatsPageComponent.jsx'
import ASNumberStatsPageComponent from './ASNumberStatsPageComponent.jsx'
import { Router, Route, browserHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import cloudBunkrApp from './reducers/Reducers.jsx'
import { UISignupVisibilityFilter, setUISignupVisibility } from './actions/Actions.jsx'

const store = createStore(cloudBunkrApp);
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);
store.dispatch(setUISignupVisibility(UISignupVisibilityFilter.SHOW));

class App extends React.Component {
  render() {
    return(
        <UsersStatsPageComponent/>
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