import {authUserType} from "../../types/user";

export default {
    SET_IS_AUTHENTICATED: "SET_IS_AUTHENTICATED",
    SET_AUTH_USER: "SET_AUTH_USER",
    LOG_OUT: "LOG_OUT",
};

export type AuthStore = {
    isAuthenticated: boolean;
    authUser: authUserType
};