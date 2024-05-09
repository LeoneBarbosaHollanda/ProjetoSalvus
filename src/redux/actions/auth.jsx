// actions/auth.jsx
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../types';
import Auth from "../../api/auth";

export const loginRequest = (credentials) => ({
    type: LOGIN_REQUEST,
    payload: credentials,
});

export const loginSuccess = (loginBody) => ({
    type: LOGIN_SUCCESS,
    payload: loginBody,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const loginUser = (loginBody) => (dispatch) => {
    console.log("Veio até login user")
    console.log("Body-->", loginBody)
    Auth.login(loginBody)
        .then((response) => {
            dispatch(loginSuccess(response))
            console.log(response);
            response.json()
        })
        .catch((error) => {
            dispatch(loginFailure(error));
        });
};
