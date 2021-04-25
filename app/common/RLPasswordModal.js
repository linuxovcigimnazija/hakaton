import React from "react";
import { View, Image, Platform, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import modalStyle from 'theme/component/ModalStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import {
    RLText,
    RLButton,
    RLTextInput,
} from 'basecomponent';

const RLPasswordModal = (props) => {

    const {
        onEditTextField1,
        onSubmitEditing1,
        refKey1,
        fieldRef1,
        onEditTextField2,
        onSubmitEditing2,
        refKey2,
        fieldRef2,
        onEditTextField3,
        onSubmitEditing3,
        refKey3,
        fieldRef3,
        onEditTextField4,
        onSubmitEditing4,
        refKey4,
        fieldRef4,
        onpressbutton,
        onpressOutSide
    } = props;

    return (
        <KeyboardAvoidingView style={[viewStyle.flex]}
            behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={onpressOutSide}>
                <View style={[modalStyle.modalmainViewStyle]}>
                    <View style={modalStyle.mainViewStyle}>
                        <Image
                            source={Images.slideUp}
                            style={[modalStyle.sildeImgStyle, modalStyle.resizeImge]}
                        />
                        <RLText
                            text={BaseText.EnterPaypin}
                            style={[viewStyle.selfCenter, modalStyle.pintxtStyle]}
                        />
                        <View style={[modalStyle.otpViewStyle]}>
                            <RLTextInput
                                OtpTextInput={true}
                                placeholderTextColor={Colors.gray}
                                maxLength={1}
                                secureTextEntry={true}
                                onEditTextField={onEditTextField1}
                                onSubmitEditing={onSubmitEditing1}
                                refKey={refKey1}
                                fieldRef={fieldRef1}
                                keyboardType={'number-pad'} />
                            <RLTextInput
                                OtpTextInput={true}
                                placeholderTextColor={Colors.gray}
                                maxLength={1}
                                secureTextEntry={true}
                                onEditTextField={onEditTextField2}
                                onSubmitEditing={onSubmitEditing2}
                                refKey={refKey2}
                                fieldRef={fieldRef2}
                                keyboardType={'number-pad'} />
                            <RLTextInput
                                OtpTextInput={true}
                                placeholderTextColor={Colors.gray}
                                maxLength={1}
                                secureTextEntry={true}
                                onEditTextField={onEditTextField3}
                                onSubmitEditing={onSubmitEditing3}
                                refKey={refKey3}
                                fieldRef={fieldRef3}
                                keyboardType={'number-pad'} />
                            <RLTextInput
                                OtpTextInput={true}
                                placeholderTextColor={Colors.gray}
                                maxLength={1}
                                secureTextEntry={true}
                                onEditTextField={onEditTextField4}
                                onSubmitEditing={onSubmitEditing4}
                                refKey={refKey4}
                                fieldRef={fieldRef4}
                                keyboardType={'number-pad'} />
                        </View>

                        <RLText
                            text={BaseText.Forgotpin}
                            style={[viewStyle.centerViewStyle, modalStyle.forgetPintextStyle]} />
                        <View style={[modalStyle.btnViewStyle]}>
                            <RLButton
                                SimpleButton={true}
                                onpress={onpressbutton}
                                simplebuttontext={BaseText.Buy}
                                simplebuttontextStyle={buttonStyle.buttonTextStyle}
                                simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]} />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};
export default RLPasswordModal;