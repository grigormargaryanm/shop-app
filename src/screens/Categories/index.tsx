import {FC} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {ProductSelectors} from "../../redux"
import {categoryImages} from "../../constants/categoryImages";


const Categories: FC = () => {
    const categories = useSelector(ProductSelectors.categories);
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                {
                    categories.map(category => (
                        <View key={category} style={styles.categoryItem}>
                            <Image source={categoryImages[category]} style={styles.categoryImage}/>
                            <Text style={styles.categoryName}>{category.toUpperCase()}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    scrollViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    categoryItem: {
        width: '100%',
        alignItems: 'center',
    },
    categoryImage: {
        width: '100%',
        height: 130,
        borderRadius: 10,
        marginBottom: 12,
    },
    categoryName: {
        position: 'absolute',
        bottom: 32,
        left: 16,
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },
});
export default Categories;