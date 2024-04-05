import {FC} from 'react';
// @ts-ignore
import {SliderBox} from "react-native-image-slider-box";
import {StyleSheet, View} from "react-native";
import {images} from '../../../../constants/bannerData'
import {COLORS} from "../../../../constants/colors";

const BannerSlider: FC = () => {
    return (
        <View style={styles.bannerWrapper}>
            <SliderBox
                images={images}
                dotColor={COLORS.black}
                inactiveDotColor={COLORS.white}
                autoplay
                ImageComponentStyle={{borderRadius: 10, width: '92%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    bannerWrapper: {
        marginBottom: 12
    },
});

export default BannerSlider;