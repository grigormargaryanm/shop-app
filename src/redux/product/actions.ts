import {useCallback} from "react";
import {useDispatch} from 'react-redux';
import type { Dispatch } from "../../types/common";
import {authUserType} from "../../types/user";
import types from "./types";

export default function () {
    const dispatch: Dispatch = useDispatch();

    const setCategories = useCallback(
        (payload: boolean) => dispatch({type: types.SET_CATEGORIES, payload}),
        [dispatch]);


    const setSelectedCategory = useCallback(
        (payload: string) => dispatch({type: types.SET_SELECTED_CATEGORY, payload}),
        [dispatch]);

    return {
        setCategories,
        setSelectedCategory
    }

}