/*
 * Actions types
 */

export const UI_SET_SIGNUP_VISIBILITY = 'UI_SET_SIGNUP_VISIBILITY';

/*
 * Other constants
 */

export const UISignupVisibilityFilter = {
    SHOW: 'SHOW',
    HIDE: 'HIDE'
};

/*
 * Action creators
 */

export function setUISignupVisibility(filter) {
    console.log('setUISignupVisibility filter: %o', filter)
    return {
        type: UI_SET_SIGNUP_VISIBILITY, filter
    };
}