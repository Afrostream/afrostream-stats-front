/**
 * Created by admin on 02/04/2016.
 */
import React from 'react'
import CountriesStatsTableComponent from './CountriesStatsTableComponent.jsx'
import NavbarComponent from './NavbarComponent.jsx'

var sectionStyle = {
    "width": '100%',
    "minHeight": '658px',
    "backgroundColor": "black"
};

var signInStyle = {
    'marginLeft': '20px'
};

class CountriesStatsPageComponent extends React.Component {
    render() {
        return(
            <div style={sectionStyle}>
                <NavbarComponent />
                <div id="table">
                    <CountriesStatsTableComponent pollInterval={ 1000 }/>
                </div>
            </div>
        );
    }
}

export default CountriesStatsPageComponent;