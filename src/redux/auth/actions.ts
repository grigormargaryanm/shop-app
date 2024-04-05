import {useCallback} from "react";
import {useDispatch} from 'react-redux';
import type { Dispatch } from "../../types/common";
import {authUserType} from "../../types/user";
import types from "./types";

export default function () {
    const dispatch: Dispatch = useDispatch();

    const setIsAuthenticated = useCallback(
        (payload: boolean) => dispatch({type: types.SET_IS_AUTHENTICATED, payload}),
        [dispatch]);

    const setAuthUser = useCallback(
        (payload: authUserType) => dispatch({type: types.SET_AUTH_USER, payload}),
        [dispatch]);

    const logOut = useCallback(
        () => dispatch({type: types.LOG_OUT}),
        [dispatch]);

    return {
        setIsAuthenticated,
        setAuthUser,
        logOut
    }

}