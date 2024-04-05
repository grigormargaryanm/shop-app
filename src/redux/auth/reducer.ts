import type { Payload } from "../../types/common";
import types, { AuthStore } from "./types";
import {authUserType} from "../../types/user";

export const initialValues: AuthStore = {
    isAuthenticated: false,
    authUser: {} as authUserType
};

export default function (
    state: AuthStore = initialValues,
    { type, payload }: Payload
) {
    switch (type) {
        case types.SET_IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: payload,
            };
        case types.SET_AUTH_USER:
            return {
                ...state,
                authUser: payload,
            };
        case types.LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
                authUser: {}
            };
        default:
            return state;
    }
}