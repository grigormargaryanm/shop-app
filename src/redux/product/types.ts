export default {
    SET_CATEGORIES: "SET_CATEGORIES",
    SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
};

export type ProductStore = {
    categories: string[];
    selectedCategory: string
};