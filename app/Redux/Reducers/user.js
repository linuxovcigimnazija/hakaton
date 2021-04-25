/**
 * This file is a refenece of reducers.
 * for store common user information and state of user according to project/apk.
 */

import { consoleLog } from 'utils/console';
const initialState = {
    //here define states just like commnet of states.
    user: {},
    darkmode: 0,
};

const user = (state = initialState, action) => {
    consoleLog("Action Type", action.type);

    switch (action.type) {
        case 'DARK_MODE':
            consoleLog("DarkMode Action", JSON.stringify(action));
            return { ...state, darkmode: action.data };

        default:
            return state
    }
}

export default user;
