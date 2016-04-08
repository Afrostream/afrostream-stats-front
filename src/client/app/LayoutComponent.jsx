/**
 * Created by admin on 03/04/2016.
 */
import React from 'react/addons';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = { page: '' };
    }

    setPage(page) {
        this.setState({ page: page });
    }

    render() {
        return (
            <React.addons.CSSTransitionGroup transitionName='page'>
                {this.state.page}
            </React.addons.CSSTransitionGroup>
        );
    }
}

export default Layout;