import React, { Fragment, useEffect } from "react";
import { View, } from "react-native";
import { connect } from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
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

const SignIn = ({ navigation, props }) => {
    let fieldEmailRef = React.createRef();
    let fieldPasswordRef = React.createRef();

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
                showrightsimple={true}
                textrightSimple={BaseText.Sign_Up}
                onPressrightSimple={() => navigation.navigate('SignUp')}
            />
        )
    }

    //Intro Header
    const _renderHeader = () => {
        return (
            <RLHeaderSignIn
                title={BaseText.SignIn}
                title1={BaseText.SignInHeaderTitle1}
                title2={BaseText.SignInHeaderTitle2}
            />
        )
    }

    //Text Input
    const _renderTextInput = () => {
        return (
            <View>
                <View style={[viewStyle.selfCenter, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 5, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2 }]}>
                    <RLTextInput
                        PlainTextInput={true}
                        placeholder={BaseText.Youremail}
                        placeholderTextColor={Colors.gray}
                        onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing={() => _onSubmitEditing(fieldPasswordRef)}
                        refKey={'email'}
                        fieldRef={fieldEmailRef}
                    />
                </View>

                <View style={[viewStyle.selfCenter]}>
                    <RLTextInput
                        PasswordTextInput={true}
                        hideShowImage={Images.hidePassword}
                        placeholder={BaseText.Yourpassword}
                        placeholderTextColor={Colors.gray}
                        secureTextEntry={true}
                        onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing={() => _onSubmitEditing(fieldPasswordRef)}
                        refKey={'password'}
                        fieldRef={fieldPasswordRef}
                    />
                </View>
            </View>
        )
    }

    //Sign Button
    const _renderSignButton = () => {
        return (
            <RLButton
                SimpleButton={true}
                onpress={() => navigation.navigate('Dashboard')}
                simplebuttontext={BaseText.Sign_IN}
                simplebuttontextStyle={buttonStyle.buttonTextStyle}
                simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
            />
        )
    }

    //Forget Text
    const _renderForgetText = () => {
        return (
            <RLText
                text={BaseText.Forgotpassword}
                style={[textStyle.textWidthStyle, textStyle.forgettextStyle]}
                onPress={() => navigation.navigate('ForgotPassword')}
            />
        )
    }

    //Social Button
    const _renderSocialButton = () => {
        return (
            <View style={{ marginBottom: 30 }}>
                <RLButton
                    ImageButton={true}
                    image={Images.google}
                    simplebuttontext={BaseText.ContinueGoogle}
                    simplebuttontextStyle={[buttonStyle.imgbtnTextStyle, { color: Colors.darkGray }]}
                    simplebuttonStyle={[buttonStyle.imgbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.lightgray }]}
                />
                <RLButton
                    ImageButton={true}
                    image={Images.facebook}
                    simplebuttontext={BaseText.ContinueFacebook}
                    simplebuttontextStyle={[buttonStyle.imgbtnTextStyle, { color: Colors.white }]}
                    simplebuttonStyle={[buttonStyle.imgbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.blue, marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2 }]}
                />
            </View>
        )
    }

    //Social Text
    const _renderSocialText = () => {
        return (
            <RLText
                text={BaseText.OrSign}
                style={[textStyle.socailTextStyle, textStyle.textWidthStyle]} />
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
                    scrollToEnd={true}
                    keyboardShouldPersistTaps={'always'}
                    enableOnAndroid={true}
                    extraScrollHeight={Platform.OS == 'ios' ? 120 : 100}
                    nestedScrollEnabled={false}>
                    <View style={[viewStyle.flex]}>
                        {_renderHeader()}
                        {_renderTextInput()}
                        {_renderForgetText()}
                        {_renderSignButton()}
                        {_renderSocialText()}
                        {_renderSocialButton()}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(SignIn);