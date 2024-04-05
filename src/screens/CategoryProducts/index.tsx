import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ScrollView, StyleSheet, View} from "react-native";
import {ProductSelectors} from "../../redux";
import axios from "../../api/middleware";
import ProductCard from "../../components/ProductCard";
import SkeletonLoader from "../../components/Skeleton";

const CategoryProducts = () => {
    const selectedCategory = useSelector(ProductSelectors.selectedCategory)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCategoryProducts = async () => {
            try {
                const response = await axios.get(`/products/category/${selectedCategory}`);
                setProducts(response.data.products)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getCategoryProducts();
    }, [selectedCategory]);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
            {
                loading ? <SkeletonLoader/> :
                    <ProductCard products={products}/>
            }
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingRight: 16,
        paddingLeft: 16,
        marginTop: 12
    },
});

export default CategoryProducts;