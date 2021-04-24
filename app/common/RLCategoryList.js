import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import categoryListStyle from 'theme/component/CategoryListStyle';
import {
    RLText,
} from 'basecomponent';

const RLCategoryList = (props) => {

    const {
        categoryImg,
        catname,
        marginLeft,
        isTopUpList,
        img,
        rsText,
        mainViewStyle,
        onPressTopup,
        topUpImgIconStyle,
        isDashboardCategoryList,
        onPress,
    } = props;

    // Dashboard Category
    const _renderDashboardCategoryList = () => {
        return (
            <View style={[categoryListStyle.mainViewStyle, { marginLeft: marginLeft }]}>
                <TouchableOpacity onPress={onPress} style={categoryListStyle.btnStyle}>
                    <Image
                        source={categoryImg}
                        style={categoryListStyle.imgStyle}
                    />
                </TouchableOpacity>
                <RLText
                    RlnumberOfLines={2}
                    text={catname}
                    style={categoryListStyle.txtStyle}
                />
            </View>
        )
    }

    // TopupList
    const _renderTopUpList = () => {
        return (
            <View style={mainViewStyle}>
                <TouchableOpacity onPress={onPressTopup} style={categoryListStyle.topUpTouchStyle}>
                    <Image style={[categoryListStyle.topUpImgStyle, topUpImgIconStyle]} source={img} />
                </TouchableOpacity>
                <RLText text={rsText} style={categoryListStyle.topUpText} />
            </View>
        )
    }

    return (
        <View>
            {isDashboardCategoryList && _renderDashboardCategoryList()}
            {isTopUpList && _renderTopUpList()}
        </View>
    );
};
export default RLCategoryList;