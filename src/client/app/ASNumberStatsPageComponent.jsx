/**
 * Created by admin on 02/04/2016.
 */
import React from 'react'
import ASNumberStatsTableComponent from './ASNumberStatsTableComponent.jsx'
import NavbarComponent from './NavbarComponent.jsx'

var sectionStyle = {
    "width": '100%',
    "minHeight": '658px',
    "backgroundColor": "black"
};

var signInStyle = {
    'marginLeft': '20px'
};

class ASNumberStatsPageComponent extends React.Component {
    render() {
        return(
            <div style={sectionStyle}>
                <NavbarComponent />
                <div id="table">
                    <ASNumberStatsTableComponent pollInterval={ 1000 }/>
                </div>
            </div>
        );
    }
}

export default ASNumberStatsPageComponent;