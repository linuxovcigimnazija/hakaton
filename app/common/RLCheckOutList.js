import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import checkOutListStyle from 'theme/component/CheckOutListStyle';
import viewStyle from 'theme/component/ViewStyle';
import {
    RLText,
} from 'basecomponent';

const RLCheckOutList = (props) => {

    const {
        prodName,
        prodColor,
        pordSize,
        prodPrice,
        prodQty,
        showCheckImge,
        onPressCheck,
        prodImg
    } = props;

    return (
        <View style={[viewStyle.selfCenter, checkOutListStyle.mainViewStyle]}>
            <View style={viewStyle.centerViewStyle}>
                <View style={[viewStyle.rowdirections, checkOutListStyle.cardViewStyle]}>
                    <View style={[viewStyle.rowdirections, checkOutListStyle.imgViewStyle]}>
                        <TouchableOpacity style={[checkOutListStyle.checkbtnStyle]} onPress={onPressCheck}>
                            {showCheckImge && <Image
                                source={Images.checklis}
                                style={{ width: 22, height: 20, resizeMode: 'contain' }} />}
                        </TouchableOpacity>

                        <ImageBackground
                            style={checkOutListStyle.imgeStyle}
                            imageStyle={{}}
                            source={prodImg}
                        >
                        </ImageBackground>
                    </View>

                    <View style={checkOutListStyle.detailmainViewStyle}>
                        <View style={[viewStyle.rowdirections, checkOutListStyle.proNameViewStyle]}>
                            <RLText
                                RlnumberOfLines={1}
                                text={prodName}
                                style={[checkOutListStyle.proNametxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 35 }]}
                            />
                            <Image
                                source={Images.deleteGray}
                                style={[checkOutListStyle.deletegImgStyle, checkOutListStyle.resizeImg]} />
                        </View>

                        <RLText
                            RlnumberOfLines={1}
                            text={`${BaseText.Color}${prodColor}`}
                            style={[checkOutListStyle.coloTxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 35 }]}
                        />
                        <RLText
                            RlnumberOfLines={1}
                            text={`${BaseText.Size}${pordSize}`}
                            style={[checkOutListStyle.coloTxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 35 }]}
                        />
                        <RLText
                            RlnumberOfLines={1}
                            text={prodPrice}
                            style={[checkOutListStyle.pritxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 35 }]}
                        />

                        <View style={[viewStyle.rowdirections, checkOutListStyle.addCartViewStyle]}>
                            <TouchableOpacity style={[checkOutListStyle.subBtnStyle
                            ]}>
                                <Image
                                    source={Images.subscrtion}
                                    style={[checkOutListStyle.resizeImg, checkOutListStyle.addImgStyle]} />
                            </TouchableOpacity>

                            <TouchableOpacity style={[checkOutListStyle.qtybtnStyle]}>
                                <RLText
                                    RlnumberOfLines={1}
                                    text={prodQty}
                                    style={[checkOutListStyle.subColor, { fontSize: 12 }]}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={[checkOutListStyle.subBtnStyle, { borderBottomRightRadius: 5, borderTopRightRadius: 5 }]}>
                                <Image
                                    source={Images.addition}
                                    style={[checkOutListStyle.resizeImg, checkOutListStyle.addImgStyle]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={[viewStyle.rowdirections, checkOutListStyle.subTotalViewStyle]}>
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.SubTotal}
                        style={[checkOutListStyle.totaltxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 60 }]}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={'$152'}
                        style={[checkOutListStyle.totaltxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 25, color: Colors.pink }]}
                    />
                </View>
            </View>
        </View>
    );
};
export default RLCheckOutList;