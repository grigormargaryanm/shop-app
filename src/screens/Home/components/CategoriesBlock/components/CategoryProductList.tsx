import React, {useEffect, useState} from 'react';
import ProductCard from "../../../../../components/ProductCard";
import axios from "../../../../../api/middleware";
import SkeletonLoader from "../../../../../components/Skeleton";

type Props = {
    category: string
}

const LIMIT = 4;
const CategoryProductList = ({category}: Props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategoryProducts = async () => {
            try {
                const response = await axios.get(`/products/category/${category}?limit=${LIMIT}`);
                setProducts(response.data.products)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getCategoryProducts();
    }, []);

    return (
        loading ? <SkeletonLoader/> :
            <ProductCard products={products}/>
    );
};

export default CategoryProductList;