import {useEffect, FC} from 'react';
import {useNavigation} from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {ProductSelectors, useProductActions} from "../../../../redux";
import axios from "../../../../api/middleware";
import CategoryProductList from "./components/CategoryProductList";

const CategoriesBlock: FC = () => {
    const navigation =
        useNavigation<StackNavigationProp<any>>();

    const {setCategories, setSelectedCategory} = useProductActions();
    const categories = useSelector(ProductSelectors.categories);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get('/products/categories');
                setCategories(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getCategories();
    }, []);

    const handleCategory = (category: string) => {
        setSelectedCategory(category)
        navigation.navigate('Category')
    }

    return (
        categories.map((category) => (
            <View style={styles.block} key={category}>
                <View style={styles.blockHeader}>
                    <Text style={styles.categoryName}>{category.toUpperCase()}</Text>
                    <TouchableOpacity onPress={() => handleCategory(category)}>
                        <Text style={styles.seeAll}>See All</Text>
                    </TouchableOpacity>
                </View>
                <CategoryProductList category={category}/>
            </View>
        ))
    );
};

const styles = StyleSheet.create({
    block: {
        paddingRight: 16,
        paddingLeft: 16,
        marginTop: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#DFDFDF'
    },
    blockHeader: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center'
    },
    seeAll: {
        fontSize: 12,
        textDecorationLine: 'underline',
        color: '#7867BE',
        fontWeight: '700'
    },
    categoryName: {
        color: '#1E1D1D',
        fontSize: 16,
        fontWeight: '500'
    },
});

export default CategoriesBlock;