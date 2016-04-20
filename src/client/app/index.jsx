import React from 'react'
import {render} from 'react-dom'
import UsersStatsPageComponent from './UsersStatsPageComponent.jsx'
import ASNumberStatsPageComponent from './ASNumberStatsPageComponent.jsx'
import CountriesStatsPageComponent from './CountriesStatsPageComponent.jsx'
import OriginsStatsPageComponent from './OriginsStatsPageComponent.jsx'
import CitiesStatsPageComponent from './CitiesStatsPageComponent.jsx'
import CountriesAndOriginsStatsPageComponent from './CountriesAndOriginsStatsPageComponent.jsx'
import AssetsStatsPageComponent from './AssetsStatsPageComponent.jsx'
import AllStatsPageComponent from './AllStatsPageComponent.jsx'
import { Router, Route, browserHistory } from 'react-router'

render(
    <Router history={browserHistory}>
        <Route path="/" component={UsersStatsPageComponent}/>
        <Route path="/asnumberstats" component={ASNumberStatsPageComponent}/>
        <Route path="/countriesstats" component={CountriesStatsPageComponent}/>
        <Route path="/originsstats" component={OriginsStatsPageComponent}/>
        <Route path="/citiesstats" component={CitiesStatsPageComponent}/>
        <Route path="/countriesandoriginsstats" component={CountriesAndOriginsStatsPageComponent}/>
        <Route path="/assetsstats" component={AssetsStatsPageComponent}/>
        <Route path="/allstats" component={AllStatsPageComponent}/>
    </Router>,
    document.getElementById('app')
);