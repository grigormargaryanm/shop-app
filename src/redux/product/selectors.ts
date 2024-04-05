import type {ProductStore} from "./types";

type State = {
    product: ProductStore
};
const categories = (state: State) => state.product.categories;
const selectedCategory = (state: State) => state.product.selectedCategory;

export default {
    categories,
    selectedCategory
};