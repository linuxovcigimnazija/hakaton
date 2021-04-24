import React, { Fragment, useEffect } from "react";
import { Text, View } from "react-native";
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

const Email = ({ navigation, props }) => {
    let fieldEmailRef = React.createRef();

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
                title={BaseText.Enteryouremail}
                title1={BaseText.SignInHeaderTitle1}
                title2={BaseText.SignInHeaderTitle2}
            />
        )
    }

    //Text Input
    const _renderTextInput = () => {
        return (
            <View style={[viewStyle.selfCenter, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 9 }]}>
                <RLTextInput
                    PlainTextInput={true}
                    placeholder={BaseText.Youremailaddress}
                    placeholderTextColor={Colors.gray}
                    onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                    onSubmitEditing={() => _onSubmitEditing(fieldEmailRef)}
                    refKey={'email'}
                    fieldRef={fieldEmailRef}
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

    //Email Button
    const _renderEmailButton = () => {
        return (
            <View style={{ marginVertical: 30 }}>
                <RLButton
                    SimpleButton={true}
                    onpress={() => navigation.navigate('Phone')}
                    simplebuttontext={BaseText.SaveEmailAdd}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
                />
                <RLButton
                    SimpleButton={true}
                    simplebuttontext={BaseText.ResendLink}
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
                        {_renderEmailButton()}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Email);