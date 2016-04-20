/**
 * Created by admin on 02/04/2016.
 */
import React from 'react'
import UsersStatsTableComponent from './UsersStatsTableComponent.jsx'
import NavbarComponent from './NavbarComponent.jsx'

var sectionStyle = {
    "width": '100%',
    "minHeight": '658px',
    "backgroundColor": "black"
};

var signInStyle = {
    'marginLeft': '20px'
};

class UsersStatsPageComponent extends React.Component {
    render() {
        return(
            <div style={sectionStyle}>
                <NavbarComponent />
                <div id="table">
                    <UsersStatsTableComponent pollInterval={ 1000 }/>
                </div>
            </div>
        );
    }
}

export default UsersStatsPageComponent;