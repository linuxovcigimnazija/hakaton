import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import buttonStyle from 'theme/component/ButtonStyle';
import ENV from 'env/index';

const RLButton = (props) => {

    const {
        SimpleButton,
        ImageButton,
        simplebuttonStyle,
        simplebuttontextStyle,
        simplebuttontext,
        onpress,
        image,
        RlnumberOfLines
    } = props;

    //plain Button
    const _renderSimpleButton = () => {
        return (
            <TouchableOpacity style={simplebuttonStyle} onPress={onpress}>
                <Text numberOfLines={RlnumberOfLines} style={[simplebuttontextStyle, { fontFamily: ENV.qfontFamilyBold }]}>
                    {simplebuttontext}
                </Text>
            </TouchableOpacity>
        )
    }

    //Image Button
    const _renderImageButton = () => {
        return (
            <TouchableOpacity style={simplebuttonStyle} onPress={onpress}>
                <Image
                    source={image}
                    style={buttonStyle.imgbtnImgStyle} />
                <Text style={[simplebuttontextStyle, { fontFamily: ENV.qfontFamilyBold }]}>
                    {simplebuttontext}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            { SimpleButton && _renderSimpleButton()}
            { ImageButton && _renderImageButton()}
        </View>
    );
};
export default RLButton;