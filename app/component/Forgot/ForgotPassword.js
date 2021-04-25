import React, { Fragment, useEffect } from "react";
import { Text, View } from "react-native";
import { connect } from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import forgotStyle from 'theme/component/ForgotStyle';
import textStyle from 'theme/component/TextStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import {
    RLButton,
    RLText,
    RLHeaderSignIn,
    RLHeader,
    RLTextInput
} from 'basecomponent';

const ForgotPassword = ({ navigation, props }) => {
    let field1Ref = React.createRef();
    let field2Ref = React.createRef();
    let field3Ref = React.createRef();
    let field4Ref = React.createRef();

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {

    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                SimpleHeader={true}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowWhite}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Intro Header
    const _renderHeader = () => {
        return (
            <RLHeaderSignIn
                title={BaseText.ForgotpasswordText}
                title1={BaseText.SignInHeaderTitle1}
                title2={BaseText.SignInHeaderTitle2}
            />
        )
    }

    //Text Input
    const _renderTextInput = () => {
        return (
            <View style={[viewStyle.selfCenter, forgotStyle.otpInputStyle]}>
                <RLTextInput
                    OtpTextInput={true}
                    placeholderTextColor={Colors.gray}
                    maxLength={1}
                    secureTextEntry={true}
                    onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                    onSubmitEditing={() => _onSubmitEditing(field2Ref)}
                    refKey={'1'}
                    fieldRef={field1Ref}
                    keyboardType={'number-pad'}
                />
                <RLTextInput
                    OtpTextInput={true}
                    placeholderTextColor={Colors.gray}
                    maxLength={1}
                    secureTextEntry={true}
                    onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                    onSubmitEditing={() => _onSubmitEditing(field3Ref)}
                    refKey={'2'}
                    fieldRef={field2Ref}
                    keyboardType={'number-pad'}
                />
                <RLTextInput
                    OtpTextInput={true}
                    placeholderTextColor={Colors.gray}
                    maxLength={1}
                    secureTextEntry={true}
                    onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                    onSubmitEditing={() => _onSubmitEditing(field4Ref)}
                    refKey={'3'}
                    fieldRef={field3Ref}
                    keyboardType={'number-pad'}
                />
                <RLTextInput
                    OtpTextInput={true}
                    placeholderTextColor={Colors.gray}
                    maxLength={1}
                    secureTextEntry={true}
                    onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                    onSubmitEditing={() => _onSubmitEditing(field4Ref)}
                    refKey={'4'}
                    fieldRef={field4Ref}
                    keyboardType={'number-pad'}
                />
            </View>
        )
    }

    //Email Text
    const _renderEmailText = () => {
        return (
            <View style={{ marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 10, }}>
                <RLText
                    text={BaseText.Codesendemail}
                    style={[textStyle.forgetEmailTextStyle, textStyle.textWidthStyle]} />

                <RLText
                    text={'Kylie_04@gmail.com'}
                    style={[textStyle.forgetEmailTextStyle, textStyle.textWidthStyle, { color: Colors.activebtn }]} />
            </View>
        )
    }

    //Otp Text
    const _renderOtpText = () => {
        return (
            <Text style={[textStyle.textWidthStyle, textStyle.forgetEmailTextStyle,]} >{BaseText.Codeexpireon}<Text style={{ color: Colors.activebtn }}>{`${'5'}${' minutes'}`}</Text></Text>
        )
    }

    //Forgot Button
    const _renderForgotButton = () => {
        return (
            <View style={{ marginVertical: 30 }}>
                <RLButton
                    SimpleButton={true}
                    onpress={() => navigation.navigate('Email')}
                    simplebuttontext={BaseText.VerifyCode}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
                />
                <RLButton
                    SimpleButton={true}
                    simplebuttontext={BaseText.ResendCode}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.gray, marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2 }]}
                />
            </View>

        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.lightBlue}
                    barStyle={"light-content"} />
                {_header()}

                <KeyboardAwareScrollView
                    bounces={false}
                    enableOnAndroid={true}
                    extraScrollHeight={Platform.OS == 'ios' ? 120 : 100}
                    scrollToEnd={true}
                    keyboardShouldPersistTaps={'always'}
                    nestedScrollEnabled={false}>
                    <View style={[viewStyle.flex]}>
                        {_renderHeader()}
                        {_renderTextInput()}
                        {_renderEmailText()}
                        {_renderOtpText()}
                        {_renderForgotButton()}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(ForgotPassword);