import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import modalStyle from 'theme/component/ModalStyle';
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import {
    RLText,
    RLButton,
} from 'basecomponent';

const RLSucessModal = (props) => {

    const {
        onpressbutton,
        onpressOutSide
    } = props;

    return (
        <TouchableWithoutFeedback onPress={onpressOutSide}>
            <View style={[modalStyle.modalmainViewStyle]}>
                <View style={[modalStyle.mainViewStyle]}>
                    <Image
                        source={Images.slideUp}
                        style={[modalStyle.sildeImgStyle, modalStyle.resizeImge]} />
                    <Image
                        source={Images.success}
                        style={[modalStyle.sucessImgStyle, modalStyle.resizeImge]} />

                    <RLText
                        text={BaseText.Success}
                        style={[modalStyle.sucesstxtStyle, viewStyle.selfCenter]} />

                    <RLText
                        text={BaseText.SucessShoppingInfo}
                        style={[viewStyle.selfCenter, modalStyle.sucessInfoStyle]} />

                    <View style={[modalStyle.btnViewStyle]}>
                        <RLButton
                            SimpleButton={true}
                            onpress={onpressbutton}
                            simplebuttontext={BaseText.ContinueShopping}
                            simplebuttontextStyle={buttonStyle.buttonTextStyle}
                            simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLSucessModal;