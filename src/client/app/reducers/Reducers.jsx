import { UI_SET_SIGNUP_VISIBILITY, UISignupVisibilityFilter } from './../actions/Actions.jsx'


const initialState = {
    uiSignupVisible: UISignupVisibilityFilter.SHOW
};

function cloudBunkrApp(state = initialState, action) {
    console.log('reducer call state: %o  action: %o', state, action);
    switch (action.type) {
        case UI_SET_SIGNUP_VISIBILITY:
            return Object.assign({}, state, {
                uiSignupVisible: action.filter
            })
        default:
            return state
    }
}

export default cloudBunkrApp

/*import { combineReducers } from 'redux'

 const cloudBunkrApp = combineReducers({
 uiSignupVisible
 });

 export default cloudBunkrApp*/
