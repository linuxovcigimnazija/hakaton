import React from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import BaseText from 'constants/BaseText';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import saleDiscountListStyle from 'theme/component/SaleDiscountListStyle';
import viewStyle from 'theme/component/ViewStyle';
import {
    RLText,
} from 'basecomponent';
import ENV from 'env/index';

const RLSaleDiscount = (props) => {

    const {
        marginLeft,
        discount,
        productName,
        price,
        tprice,
        prodImg
    } = props;

    return (
        <View style={[saleDiscountListStyle.mainViewStyle, { marginLeft: marginLeft, }]}>
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{ height: '100%', width: '100%', }}
                    imageStyle={{ height: '100%', width: '100%', }}
                    source={prodImg}
                >
                    <ImageBackground
                        style={[saleDiscountListStyle.disImgStyle, viewStyle.centerContain]}
                        imageStyle={[saleDiscountListStyle.reSizeImg, { height: '100%', width: '100%' }]}
                        source={Images.discountCard} >
                        <Text style={{ color: Colors.white, fontSize: 10, fontFamily: ENV.qfontFamilyMedium }}>{BaseText.Disc}</Text>
                        <Text numberOfLines={1} style={{ color: Colors.white, fontSize: 12, fontFamily: ENV.qfontFamilyBold }}>{discount}</Text>
                    </ImageBackground>
                </ImageBackground>
            </View>

            <View style={saleDiscountListStyle.detailmainViewStyle}>
                <RLText
                    RlnumberOfLines={1}
                    text={productName}
                    style={{ fontSize: 12, color: Colors.darkGray, fontFamily: ENV.zfontFamilyMedium }}
                />
                <View style={[viewStyle.rowdirections, { paddingTop: 5 }]}>
                    <View style={[viewStyle.rowdirections, { width: 100 }]}>
                        <RLText
                            RlnumberOfLines={1}
                            text={price}
                            style={[saleDiscountListStyle.pricetxtStyle]}
                        />
                        <RLText
                            RlnumberOfLines={1}
                            text={tprice}
                            style={[saleDiscountListStyle.tpricetxtStyle]}
                        />
                    </View>
                    <TouchableOpacity >
                        <Image
                            source={Images.lovered}
                            style={[saleDiscountListStyle.heartImgstyle, saleDiscountListStyle.reSizeImg,]} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default RLSaleDiscount;