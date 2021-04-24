import React from "react";
import { View, TouchableOpacity, Image, ImageBackground } from "react-native";
import Images from "constants/Images";
import viewstyle from 'theme/component/ViewStyle';
import searchProductListStyle from 'theme/component/SearchProductListStyle';
import { Rating, } from "react-native-ratings";
import {
    RLText,
} from 'basecomponent';
const WATER_IMAGE = require('assets/CommonIcon/ratingIcon.png')
const RLSearchProductList = (props) => {

    const {
        imgBackgroundHeight,
        productName,
        onPress,
        productImg
    } = props;

    return (
        <View style={searchProductListStyle.mainViewStyle}>
            <TouchableOpacity onPress={onPress}>
                <ImageBackground
                    style={[searchProductListStyle.imgBackStyle, { height: imgBackgroundHeight, }]}
                    imageStyle={[searchProductListStyle.imgBackStyle, { height: imgBackgroundHeight, }]}
                    source={productImg}>
                    <View style={searchProductListStyle.likeViewStyle}>
                        <TouchableOpacity style={searchProductListStyle.likeBtnStyle}>
                            <Image
                                source={Images.lovered}
                                style={[searchProductListStyle.likeimgStyle, searchProductListStyle.imgeresize]} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableOpacity>

            <View style={[viewstyle.rowdirections, searchProductListStyle.infoViewStyle]}>
                <View style={searchProductListStyle.productDetailViewStyle}>
                    <RLText
                        RlnumberOfLines={1}
                        text={productName}
                        style={searchProductListStyle.nameStyle}
                    />
                    <View style={[viewstyle.rowdirections, { alignItems: 'center' }]}>
                        <Rating
                            type='custom'
                            imageSize={10}
                            startingValue={3}
                            readonly={true}
                        // ratingImage={WATER_IMAGE}
                        // style={{
                        //     imgBackStyle: {
                        //         backgroundColor: 'transparent',
                        //         zIndex: 20
                        //     },
                        // }}

                        // ratingColor={'transparent'}
                        // ratingBackgroundColor={'transparent'}
                        />

                        <RLText
                            text={'4.5'}
                            style={searchProductListStyle.rateValueStyle}
                        />
                    </View>
                </View>

                <View style={searchProductListStyle.priceViewStyle}>
                    <RLText
                        RlnumberOfLines={1}
                        text={'$97'}
                        style={searchProductListStyle.pricetxtStyle}
                    />
                </View>
            </View>
        </View>
    );
};
export default RLSearchProductList;
