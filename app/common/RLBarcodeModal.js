import React from "react";
import { View, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import BaseText from 'constants/BaseText';
import Colors from 'constants/Colors';
import viewStyle from 'theme/component/ViewStyle';
import modalStyle from 'theme/component/ModalStyle';
import {
    RLText
} from 'basecomponent';

const RLBarcodeModal = (props) => {
    const {
        img1,
        img2,
        img3,
        title1,
        title2,
        title3,
        onpressOutSide,
        onpress1,
        onpress2,
        onpress3
    } = props;

    return (
        <TouchableWithoutFeedback onPress={onpressOutSide}>
            <View style={[modalStyle.modalmainViewStyle]}>
                <View style={[modalStyle.mainViewStyle, modalStyle.bacodepaddingStyle, { backgroundColor: Colors.lightgray }]}>
                    <RLText
                        text={BaseText.PaySend}
                        style={[viewStyle.centerViewStyle, modalStyle.bcodetxtStyle]} />

                    <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, { justifyContent: 'space-between' }]}>
                        <View>
                            <TouchableOpacity style={[viewStyle.centerContain, modalStyle.bcodeImgbtnStyle,]} onPress={onpress1}>
                                <Image
                                    style={[modalStyle.bcodeImgStyle, modalStyle.resizeImge]}
                                    source={img1} />
                            </TouchableOpacity>
                            <RLText
                                text={title1}
                                style={[modalStyle.bcodetImgtxtStyle]} />
                        </View>
                        <View>
                            <TouchableOpacity style={[viewStyle.centerContain, modalStyle.bcodeImgbtnStyle,]} onPress={onpress2}>
                                <Image
                                    style={[modalStyle.bcodeImgStyle,]}
                                    source={img2} />
                            </TouchableOpacity>
                            <RLText
                                text={title2}
                                style={[modalStyle.bcodetImgtxtStyle]} />
                        </View>
                        <View>
                            <TouchableOpacity style={[viewStyle.centerContain, modalStyle.bcodeImgbtnStyle,]} onPress={onpress3}>
                                <Image
                                    style={[modalStyle.bcodeImgStyle, modalStyle.resizeImge]}
                                    source={img3} />
                            </TouchableOpacity>
                            <RLText
                                text={title3}
                                style={[modalStyle.bcodetImgtxtStyle]} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLBarcodeModal;