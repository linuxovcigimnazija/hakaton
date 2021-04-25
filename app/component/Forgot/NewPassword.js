import React, { Fragment, useEffect } from "react";
import { View } from "react-native";
import { connect } from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import {
    RLButton,
    RLHeaderSignIn,
    RLHeader,
    RLTextInput
} from 'basecomponent';

const NewPassword = ({ navigation, props }) => {
    let fieldNewpasswordRef = React.createRef();
    let fieldCNewpasswordRef = React.createRef();

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
                title={BaseText.SetNewpassword}
                title1={BaseText.SignInHeaderTitle1}
                title2={BaseText.SignInHeaderTitle2}
            />
        )
    }

    //Text Input
    const _renderTextInput = () => {
        return (
            <View>
                <View style={[viewStyle.selfCenter, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 9, marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2 }]}>
                    <RLTextInput
                        PasswordTextInput={true}
                        hideShowImage={Images.hidePassword}
                        placeholder={BaseText.EnterNewpassword}
                        placeholderTextColor={Colors.gray}
                        secureTextEntry={true}
                        onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing={() => _onSubmitEditing(fieldCNewpasswordRef)}
                        refKey={'newPassword'}
                        fieldRef={fieldNewpasswordRef}
                    />
                </View>

                <View style={[viewStyle.selfCenter, { marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 16 }]}>
                    <RLTextInput
                        PasswordTextInput={true}
                        hideShowImage={Images.hidePassword}
                        placeholder={BaseText.ConfirmNewpassword}
                        placeholderTextColor={Colors.gray}
                        secureTextEntry={true}
                        onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing={() => _onSubmitEditing(fieldCNewpasswordRef)}
                        refKey={'newCPassword'}
                        fieldRef={fieldCNewpasswordRef}
                    />
                </View>
            </View>
        )
    }

    //Password Button
    const _renderPasswordButton = () => {
        return (
            <View style={{ marginVertical: 30 }}>
                <RLButton
                    SimpleButton={true}
                    simplebuttontext={BaseText.SavePassword}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
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
                        {_renderPasswordButton()}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(NewPassword);