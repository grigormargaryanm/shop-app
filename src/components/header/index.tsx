import React from 'react';
import {useSelector} from "react-redux";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ProductSelectors} from '../../redux'
import BackIcon from "../../../assets/icons/back.svg";
import SearchIcon from "../../../assets/icons/search.svg";

const Header = ({title, showSearch, back}: { title: string, showSearch: boolean, back: boolean }) => {
    const selectedCategory = useSelector(ProductSelectors.selectedCategory)
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };

    const handleSearch = () => {

    };

    return (
        <View style={styles.header}>
            {
                back && <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <BackIcon/>
                </TouchableOpacity>
            }

            <Text style={styles.title}>{title || selectedCategory}</Text>
            {
                showSearch && <TouchableOpacity onPress={handleSearch} style={styles.searchIcon}>
                    <SearchIcon/>
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 16,
        paddingTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        color: '#1E1D1D',
        fontSize: 16,
        fontWeight: '500',
    },
    searchIcon: {
        position: 'absolute',
        right: 16,
        top: 32
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 32
    },
});

export default Header;
