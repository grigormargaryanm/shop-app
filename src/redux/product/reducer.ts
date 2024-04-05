import type { Payload } from "../../types/common";
import types, { ProductStore } from "./types";

export const initialValues: ProductStore = {
    categories: [],
    selectedCategory: ''
};

export default function (
    state: ProductStore = initialValues,
    { type, payload }: Payload
) {
    switch (type) {
        case types.SET_CATEGORIES:
            return {
                ...state,
                categories: payload,
            };
        case types.SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: payload,
            };
        default:
            return state;
    }
}