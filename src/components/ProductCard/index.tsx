import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import RatingIcon from "../../../assets/icons/star.svg";

const ProductCard = ({products}: any) => {
    return (
        <View style={styles.cardContainer} >
            {
                products.map((product) => (
                    <View style={styles.card} key={product.id}>
                        <Image source={{uri: product.thumbnail}} style={styles.image}/>
                        <View style={styles.details}>
                            <Text style={styles.name}>{product.title}</Text>
                            <View style={styles.rating}>
                                <View style={styles.ratingWrapper}>
                                    <RatingIcon/>
                                    <Text style={styles.ratingText}>{product.rating}</Text>
                                </View>
                                <Text style={styles.price}>{product.price}$</Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 12
    },
    card: {
        borderRadius: 10,
        marginBottom: 20,
        width: '48%',
    },
    ratingWrapper: {
        flexDirection: 'row'
    },
    image: {
        width: '100%',
        height: 164,
        borderRadius: 10,
    },
    details: {
        paddingTop: 8,
    },
    name: {
        fontSize: 12,
        color: '#1E1D1D'
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        justifyContent: 'space-between'
    },
    ratingText: {
        fontSize: 12,
        marginRight: 5,
        color: '#1E1D1D',
    },
    price: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1E1D1D'
    },
});

export default ProductCard;