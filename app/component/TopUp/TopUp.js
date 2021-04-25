import React, { Fragment, useEffect, useState, } from "react";
import { KeyboardAvoidingView, View, Text, ScrollView, Image, Platform, Modal, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import BaseText from "constants/BaseText";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import topUpStyles from 'theme/component/TopUpStyles';
import buttonStyle from 'theme/component/ButtonStyle';
import textStyle from 'theme/component/TextStyle';
import { consoleLog } from 'utils/console';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLButton,
    RLTextInput,
    RLSucessModal,
    RLCategoryList
} from 'basecomponent';

const TopUp = ({ navigation, props }) => {
    let fieldNominalRef = React.createRef();
    let fieldAccountNameRef = React.createRef();
    let fieldBankRef = React.createRef();
    let fieldAccountNumRef = React.createRef();
    let fieldExpireRef = React.createRef();
    let fieldSecurityCodeRef = React.createRef();
    let field1Ref = React.createRef();
    let field2Ref = React.createRef();
    let field3Ref = React.createRef();
    let field4Ref = React.createRef();

    const [addDebitCard, setAddDebitCard] = useState(false); //show debitInfo  View
    const [confirmCode, setConfirmCode] = useState(false); //show oTpCode View
    const [showButton, setshowButton] = useState(true); //show Verify Code Button
    const [showSucessModal, setShowSucessModal] = useState(false); //show Sucess mOdal
    useEffect(() => {

    }, [])
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                onPressleftSimple={() => navigation.goBack()}
                TitleHeader={true}
                titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.TopUpTitle}
                showTitle={true}
            />
        )
    }

    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    // Nominal Card View
    const _renderNominalCard = () => {
        return (
            <View style={topUpStyles.nominalMAinView}>
                <RLText text={BaseText.NominalText} style={topUpStyles.nominalTextStyle} />
                <RLTextInput
                    PlainTextInput={true}
                    plainTextInputViewStyle={topUpStyles.reTextinputStyle}
                    textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 70}
                    plainTextInputStyle={{ height: 46, alignSelf: 'center', }}
                    textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 62}
                    fontSize={18}
                    placeholder={'$0'}
                    placeholderTextColor={Colors.gray}
                    onEditTextField={(value) => _onChangeTextField(value, 'nominal')}
                    onSubmitEditing={() => _onSubmitEditing(fieldNominalRef)}
                    refKey={'nominal'}
                    fieldRef={fieldNominalRef}
                />
                <View style={topUpStyles.rsMainCard}>
                    <RLCategoryList onPressTopup={() => { }} isTopUpList img={Images.coin10} rsText={BaseText.$10} topUpImgIconStyle={{ height: 20, width: 20 }} />
                    <RLCategoryList onPressTopup={() => { }} isTopUpList img={Images.coin50} rsText={BaseText.$50} topUpImgIconStyle={{ height: 25, width: 25 }} />
                    <RLCategoryList onPressTopup={() => { }} isTopUpList img={Images.coin100} rsText={BaseText.$100} topUpImgIconStyle={{ height: 35, width: 35 }} />
                    <RLCategoryList onPressTopup={() => { }} isTopUpList img={Images.coin200} rsText={BaseText.$200} topUpImgIconStyle={{ height: 35, width: 35 }} />
                </View>
            </View>
        )
    }

    // Debit Card view
    const _renderAddDebitCard = () => {
        return (
            <View style={topUpStyles.addDebitCard}>
                <View style={topUpStyles.addDebitSubCard}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 10 }}>
                        <Image source={Images.payment} style={topUpStyles.paymentIcon} />
                    </View>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 55 }}>
                        <RLText text={BaseText.AddDebitCard} style={{ color: Colors.darkGray, fontSize: 14, fontFamily: ENV.qfontFamilyBold }} />
                        <RLText text={BaseText.AddDebitCardDes} style={{ color: Colors.gray1, fontSize: 10, marginTop: 5, fontFamily: ENV.nfontFamilyRegular }} />
                    </View>
                    <TouchableOpacity style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 5 }} onPress={() => setAddDebitCard(true)}>
                        <Image source={Images.nextRound} style={topUpStyles.arrowDownIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //Continue Button
    const _renderContinueBtn = () => {
        return (
            <View style={topUpStyles.continueBtnStyle}>
                <RLButton
                    SimpleButton={true}
                    onpress={() => { addDebitCard ? _renderAddDebitOnclick() : _renderContinueOnclick() }}
                    simplebuttontext={addDebitCard ? BaseText.addDebitBtn : BaseText.Continue}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.gray }]}
                />
            </View>
        )
    }

    //On click Nominal Continue Button
    const _renderContinueOnclick = () => {
        setConfirmCode(true)
        // navigation.navigate('ConfirmOtp')
    }

    //On click Add Debit Button
    const _renderAddDebitOnclick = () => {
        consoleLog("e", "_renderAddDebitOnclick");
        // navigation.navigate('ConfirmOtp')
    }

    //Text Input
    const _renderTextInput = () => {
        return (
            <View>
                <View style={[viewStyle.selfCenter, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2, }]}>
                    <RLTextInput
                        PlainTextInput={true}
                        placeholder={BaseText.AccountName}
                        placeholderTextColor={Colors.gray}
                        onEditTextField={(value) => _onChangeTextField(value, 'accountName')}
                        onSubmitEditing={() => _onSubmitEditing(fieldBankRef)}
                        refKey={'accountName'}
                        fieldRef={fieldAccountNameRef}
                    />
                </View>
                <View style={[viewStyle.selfCenter, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2 }]}>
                    <RLTextInput
                        PasswordTextInput={true}
                        hideShowImage={Images.pressDownIcon}
                        placeholder={BaseText.Bank}
                        placeholderTextColor={Colors.gray}

                        onEditTextField={(value) => _onChangeTextField(value, 'bank')}
                        onSubmitEditing={() => _onSubmitEditing(fieldAccountNumRef)}
                        refKey={'bank'}
                        fieldRef={fieldBankRef}
                    />
                </View>
                <View style={[viewStyle.selfCenter, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2 }]}>
                    <RLTextInput
                        PlainTextInput={true}
                        placeholder={BaseText.AccountNumber}
                        placeholderTextColor={Colors.gray}
                        onEditTextField={(value) => _onChangeTextField(value, 'accountNum')}
                        onSubmitEditing={() => _onSubmitEditing(fieldExpireRef)}
                        refKey={'accountNum'}
                        fieldRef={fieldAccountNumRef}
                    />
                </View>
                <View style={topUpStyles.expireCodeView}>
                    <RLTextInput
                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 42}
                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 30}
                        PlainTextInput={true}
                        placeholder={BaseText.Expire}
                        placeholderTextColor={Colors.gray}
                        onEditTextField={(value) => _onChangeTextField(value, 'expire')}
                        onSubmitEditing={() => _onSubmitEditing(fieldSecurityCodeRef)}
                        refKey={'expire'}
                        fieldRef={fieldExpireRef}
                    />
                    <RLTextInput
                        textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 42}
                        textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 30}
                        PlainTextInput={true}
                        placeholder={BaseText.SecurityCode}
                        placeholderTextColor={Colors.gray}
                        onEditTextField={(value) => _onChangeTextField(value, 'securityCode')}
                        onSubmitEditing={() => _onSubmitEditing(fieldSecurityCodeRef)}
                        refKey={'securityCode'}
                        secureTextEntry={true}
                        fieldRef={fieldSecurityCodeRef}
                    />
                </View>
            </View>
        )
    }

    //Sucess Modal
    const _rendeShowModal = () => {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showSucessModal}
                onRequestClose={() => setShowSucessModal(false)}>
                <RLSucessModal
                    onpressOutSide={() => setShowSucessModal(false)}
                    onpressbutton={() => setShowSucessModal(false)} />
            </Modal>
        )
    }

    //Otp Input 
    const _renderConfirmCodeInputView = () => {
        return (
            <View style={[viewStyle.selfCenter, topUpStyles.confirmCodeMainView]}>
                <RLTextInput
                    OtpTextInput={true}
                    placeholderTextColor={Colors.gray}
                    maxLength={1}
                    secureTextEntry={true}
                    onEditTextField={(value) => _onChangeTextField(value, 'userName')}
                    onSubmitEditing={() => _onSubmitEditing(field2Ref)}
                    refKey={'1'}
                    fieldRef={field1Ref}
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
                />
            </View>
        )
    }

    //Otp Verrify Button
    const _renderVerifyResendCodeBtn = () => {
        return (
            <View style={topUpStyles.verifyCodeResendBtnView}>
                <RLButton
                    SimpleButton={true}
                    onpress={() => setShowSucessModal(true)}
                    simplebuttontext={BaseText.VerifyCode}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
                />
                <RLButton
                    SimpleButton={true}
                    // onpress={() => navigation.navigate('Scanner')}
                    simplebuttontext={BaseText.ResendCode}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.gray, marginTop: 15 }]}
                />
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}
                {_rendeShowModal()}

                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={viewStyle.flex}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {!addDebitCard && !confirmCode &&
                            <View style={viewStyle.flex}>
                                {_renderNominalCard()}
                                {_renderAddDebitCard()}
                                {_renderContinueBtn()}
                            </View>}
                        {addDebitCard && !confirmCode &&
                            <View style={topUpStyles.addDebitMainView}>
                                <RLText text={BaseText.AddDebitCard} style={topUpStyles.addDebitTextTitle} />
                                {_renderTextInput()}
                                {_renderContinueBtn()}
                            </View>
                        }
                        {confirmCode &&
                            <View style={topUpStyles.addDebitMainView}>
                                <RLText text={BaseText.Confirmcode} style={topUpStyles.confirmTitleText} />
                                <RLText text={BaseText.ConfirmcodeInfo} style={topUpStyles.myPayTextStyle} />
                                {_renderConfirmCodeInputView()}
                                <Text style={[textStyle.textWidthStyle, textStyle.forgetEmailTextStyle,]} >{BaseText.Codeexpireon}<Text style={{ color: Colors.activebtn }}>{`${'5'}${' minutes'}`}</Text></Text>
                                {showButton && _renderVerifyResendCodeBtn()}
                            </View>
                        }
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(TopUp);

