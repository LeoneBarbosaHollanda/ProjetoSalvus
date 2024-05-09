// reducers/auth.jsx
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from '../types';
import { setToken, delToken } from "../../storage/auth";


const initialState = {
    isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            console.log("loginrequest")
            return {
                ...state,
                isLoading: true,
            };

        case LOGIN_SUCCESS:
            const message = action.payload.data.message;
            if (message && !("error" in message)) {
                console.log("Token-->", message.token)
                setToken(message.token);
                return {
                    ...state,
                    id: message.account.id,
                    name: message.account.name,
                };
            } else {
                return state;
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};

export default authReducer;
