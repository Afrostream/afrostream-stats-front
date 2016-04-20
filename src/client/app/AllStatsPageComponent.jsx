/**
 * Created by admin on 02/04/2016.
 */
import React from 'react'
import UsersStatsTableComponent from './UsersStatsTableComponent.jsx'
import ASNumberStatsTableComponent from './ASNumberStatsTableComponent.jsx'
import CountriesStatsTableComponent from './CountriesStatsTableComponent.jsx'
import OriginStatsTableComponent from './OriginsStatsTableComponent.jsx'
import CitiesStatsTableComponent from './CitiesStatsTableComponent.jsx'
import CountriesAndOriginsStatsTableComponent from './CountriesAndOriginsStatsTableComponent.jsx'
import AssetsStatsTableComponent from './AssetsStatsTableComponent.jsx'
import NavbarComponent from './NavbarComponent.jsx'

var sectionStyle = {
    "width": '100%',
    "minHeight": '658px',
    "backgroundColor": "black"
};

var signInStyle = {
    'marginLeft': '20px'
};

class AllStatsPageComponent extends React.Component {
    render() {
        return(
            <div style={sectionStyle}>
                <NavbarComponent />
                <div id="table">
                    <UsersStatsTableComponent pollInterval={ 1000 }/>
                    <ASNumberStatsTableComponent pollInterval={ 1000 }/>
                    <CountriesStatsTableComponent pollInterval={ 1000 }/>
                    <OriginStatsTableComponent pollInterval={ 1000 }/>
                    <CitiesStatsTableComponent pollInteval={ 1000 }/>
                    <CountriesAndOriginsStatsTableComponent pollInterval={ 1000 }/>
                    <AssetsStatsTableComponent pollInterval={ 1000 }/>
                </div>
            </div>
        );
    }
}

export default AllStatsPageComponent;