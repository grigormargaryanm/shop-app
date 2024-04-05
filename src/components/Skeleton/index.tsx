import {FC} from "react";
import {StyleSheet, View} from "react-native";

const SkeletonLoader: FC = () => {
    return (
        <View style={styles.skeletonContainer}>
            {[...Array(8)].map((_, index) => (
                <View style={styles.skeletonItem} key={index}/>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
    skeletonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 12
    },
    skeletonItem: {
        width: '48%',
        height: 180,
        backgroundColor: '#ddd',
        borderRadius: 10,
        marginBottom: 12,
    },
});

export default SkeletonLoader;