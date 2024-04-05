import {FC} from 'react';
import BannerSlider from "./components/BannerSlider";
import CategoriesBlock from "./components/CategoriesBlock";
import {StyleSheet, View, ScrollView} from "react-native";

const Home: FC = () => {
    return (
        <View style={styles.container}>
            <BannerSlider/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CategoriesBlock/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        backgroundColor: '#F9F9F9',
    },
});

export default Home;