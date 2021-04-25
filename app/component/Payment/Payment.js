import React, { Fragment, useEffect, useState, } from "react";
import { Keyboard, View, ImageBackground, Image, Switch, Modal } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import BaseText from "constants/BaseText";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import checkOutStyle from 'theme/component/CheckOutStyle';
import paymentStyle from 'theme/component/PaymentStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';
import {
    RLHeader,
    RLText,
    RLButton,
    RLTextInput,
    RLPasswordModal,
    RLSucessModal
} from 'basecomponent';

const Payment = ({ navigation, props }) => {
    let fieldDescriptionRef = React.createRef();
    let field1Ref = React.createRef();
    let field2Ref = React.createRef();
    let field3Ref = React.createRef();
    let field4Ref = React.createRef();

    const [showPasswordModal, setShowPasswordModal] = useState(false);//Show Password Modal
    const [showSucessModal, setShowSucessModal] = useState(false);//show Sucess Modal
    const [showButton, setshowButton] = useState(true);

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
        Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

        return () => {
            Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
        };
    }, []);
    //================================ Start common Function ===========================================
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {

    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
        // Keyboard.dismiss()
    }

    const _keyboardDidShow = () => {
        setshowButton(false);
    };

    const _keyboardDidHide = () => {
        setshowButton(true);
    };

    //onClick Modal
    const _onClickBtn = (parms) => {
        if (parms == 'Buy') {
            setShowSucessModal(true)
        } else if (parms == 'Continue') {
            setShowSucessModal(false)
            setShowPasswordModal(false)
        }
    }

    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.Payment}
                showTitle={true}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Address
    const _renderShippingAdd = () => {
        return (
            <View style={[paymentStyle.cartmainViewStyle]}>
                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, paymentStyle.shipaddmainViewStyle]}>
                    <View style={[viewStyle.rowdirections]}>
                        <Image
                            source={Images.address}
                            style={[paymentStyle.locationImgStyle, paymentStyle.resizeImg]} />
                        <RLText
                            text={BaseText.ShippingAddress}
                            style={[paymentStyle.shipaddtxtStyle, { paddingLeft: 15 }]} />
                    </View>
                    <RLText
                        text={BaseText.Edit}
                        style={[paymentStyle.shipaddtxtStyle]} />
                </View>

                <View style={[viewStyle.centerViewWidth, { paddingLeft: 25, paddingVertical: 10 }]}>
                    <RLText
                        text={'Kylie'}
                        style={[paymentStyle.userNametxtStyle]} />
                    <RLText
                        text={'California Street, Blok 4F No.9'}
                        style={[paymentStyle.shipaddtxtStyle]} />
                    <RLText
                        text={'San Fransisco'}
                        style={[paymentStyle.shipaddtxtStyle]} />
                    <RLText
                        text={'California'}
                        style={[paymentStyle.shipaddtxtStyle]} />
                    <RLText
                        text={'0214-0000-0000'}
                        style={[paymentStyle.shipaddtxtStyle, { paddingBottom: 5 }]} />
                </View>
            </View>
        )
    }

    //Product Info
    const _renderProductInfo = () => {
        return (
            <View style={[paymentStyle.cartmainViewStyle]}>
                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, paymentStyle.containSpac, { paddingVertical: 10 }]}>
                    <View style={{ width: BaseStyle.DEVICE_WIDTH / 100 * 20, }}>
                        <ImageBackground
                            style={paymentStyle.prodImgStyle}
                            imageStyle={{}}
                            source={Images.chekLeviJens}>
                        </ImageBackground>
                    </View>

                    <View style={[paymentStyle.prodMainViewStyle]} >
                        <RLText
                            RlnumberOfLines={1}
                            text={'Levi’s Jeans'}
                            style={paymentStyle.prodnametxtStyle}
                        />
                        <RLText
                            RlnumberOfLines={1}
                            text={`${BaseText.Color}${' dark gray'}${' | '}${BaseText.Size}${'L'}`}
                            style={[paymentStyle.colortxtStyle]}
                        />
                        <View style={[viewStyle.rowdirections, paymentStyle.containSpac,]}>
                            <RLText
                                RlnumberOfLines={1}
                                text={'$76'}
                                style={paymentStyle.prodpricetxtStyle}
                            />
                            <RLText
                                RlnumberOfLines={1}
                                text={'x2'}
                                style={[paymentStyle.shipaddtxtStyle, { color: Colors.darkGray }]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    // DeliverySevices
    const _renderExpressDelivery = () => {
        return (
            <View style={[paymentStyle.cartmainViewStyle]}>
                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, paymentStyle.shipaddmainViewStyle]}>
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.DeliveryService}
                        style={[paymentStyle.shipaddtxtStyle]}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.Edit}
                        style={[paymentStyle.shipaddtxtStyle]}
                    />
                </View>
                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, paymentStyle.containSpac, { paddingVertical: 10 }]}>
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.ExpressDelivery}
                        style={[paymentStyle.shipaddtxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 30, fontFamily: ENV.nfontFamilyBold }]}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={'$2'}
                        style={[paymentStyle.shipaddtxtStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 50, textAlign: 'right', fontFamily: ENV.nfontFamilyBold }]}
                    />
                </View>
            </View>
        )
    }

    //Address Description
    const _renderAddDescription = () => {
        return (
            <View style={[paymentStyle.cartmainViewStyle]}>
                <View style={[viewStyle.centerViewWidth, { paddingVertical: 10 }]} >
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.AddDescription}
                        style={[paymentStyle.shipaddtxtStyle, { paddingBottom: 10 }]}
                    />
                    <RLTextInput
                        MultiTextInput={true}
                        onEditTextField={(value) => _onChangeTextField(value, 'description')}
                        onSubmitEditing={() => _onSubmitEditing(fieldDescriptionRef)}
                        refKey={'description'}
                        fieldRef={fieldDescriptionRef}
                        returnKeyType={'done'}
                        scrollEnabled={true}
                    />
                </View>
            </View>
        )
    }

    // Payment Method
    const _renderPaymentMethod = () => {
        return (
            <View style={[paymentStyle.cartmainViewStyle]}>
                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, paymentStyle.shipaddmainViewStyle, { alignItems: 'center' }]}>
                    <RLText
                        text={BaseText.PaymentMethod}
                        style={[paymentStyle.shipaddtxtStyle]}
                    />
                    <View style={viewStyle.rowdirections}>
                        <Image
                            source={Images.puresPink}
                            style={[paymentStyle.paymentImgStyle, paymentStyle.resizeImg]}
                        />
                        <RLText
                            text={BaseText.MyPay}
                            style={paymentStyle.mypaytxtStyle}
                        />
                        <Image
                            source={Images.nextRound}
                            style={[paymentStyle.nextImgStyle, paymentStyle.resizeImg]}
                        />
                    </View>
                </View>

                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, { paddingVertical: 10, }]}>
                    <View style={[paymentStyle.paymethodPriceViewStyle]} >
                        <RLText
                            text={BaseText.SubTpro}
                            style={[paymentStyle.subtotaltxtStyle]}
                        />
                        <RLText
                            text={BaseText.SubTship}
                            style={[paymentStyle.subtotaltxtStyle, { paddingVertical: 5 }]}
                        />
                        <RLText
                            text={BaseText.TotalPayment}
                            style={[paymentStyle.shipaddtxtStyle]}
                        />
                    </View>
                    <View style={[paymentStyle.paymethodPriceViewStyle, { alignItems: 'flex-end' }]} >
                        <RLText
                            RlnumberOfLines={1}
                            text={'$152'}
                            style={[paymentStyle.subtotaltxtStyle, { textAlign: 'right', width: BaseStyle.DEVICE_WIDTH / 100 * 40, }]}
                        />
                        <RLText
                            RlnumberOfLines={1}
                            text={'$2'}
                            style={[paymentStyle.subtotaltxtStyle, { textAlign: 'right', paddingVertical: 5 }]}
                        />
                        <RLText
                            RlnumberOfLines={1}
                            text={'$154'}
                            style={[paymentStyle.shipaddtxtStyle, { textAlign: 'right', }]}
                        />
                    </View>
                </View>
            </View>
        )
    }

    //Switch View
    const _renderSwitch = () => {
        return (
            <View style={[paymentStyle.cartmainViewStyle, { marginBottom: 10, }]}>
                <View style={[viewStyle.rowdirections, viewStyle.centerViewWidth, paymentStyle.containSpac, { paddingVertical: 10, alignItems: 'center' }]}>
                    <RLText
                        text={BaseText.SendDropshipper}
                        style={{ fontSize: 12, color: Colors.darkGray, fontFamily: ENV.nfontFamilyRegular }}
                    />
                    <Switch
                        // value={switchvalue}
                        // onValueChange={onValueChange}
                        // style={{ transform: [{ scaleX: Platform.OS == 'ios' ? 0.80 : 1.2 }, { scaleY: Platform.OS == 'ios' ? 0.58 : 1.2 }] }}
                        style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                        thumbColor={Colors.gray}
                        trackColor={{ false: Colors.lightgray, true: Colors.lightgray }}
                    />
                </View>
            </View>
        )
    }

    //Modal 
    const _rendeShowModal = () => {
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={showPasswordModal}
                onRequestClose={() => setShowPasswordModal(false)}>
                {!showSucessModal &&
                    <RLPasswordModal
                        // onpressOutSide={() => setShowPasswordModal(false)}
                        onEditTextField1={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing1={() => _onSubmitEditing(field2Ref)}
                        refKey1={'1'}
                        fieldRef1={field1Ref}
                        onEditTextField2={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing2={() => _onSubmitEditing(field3Ref)}
                        refKey2={'2'}
                        fieldRef2={field2Ref}
                        onEditTextField3={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing3={() => _onSubmitEditing(field4Ref)}
                        refKey3={'3'}
                        fieldRef3={field3Ref}
                        onEditTextField4={(value) => _onChangeTextField(value, 'userName')}
                        onSubmitEditing4={() => _onSubmitEditing(field4Ref)}
                        refKey4={'4'}
                        fieldRef4={field4Ref}
                        onpressbutton={() => _onClickBtn('Buy')}
                    />
                }
                {showSucessModal &&
                    <RLSucessModal
                        onpressOutSide={() => setShowSucessModal(false)}
                        onpressbutton={() => _onClickBtn('Continue')} />
                }
            </Modal>
        )
    }

    //Buy NowButton
    const _renderBuyNowButton = () => {
        return (
            <View style={[checkOutStyle.checkOutMainViewStyle,]}>
                <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, checkOutStyle.totalTextViewStyle]}>
                    <RLText
                        text={BaseText.Total}
                        style={checkOutStyle.subtxtStyle}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={'$152'}
                        style={checkOutStyle.priceTxtStyle}
                    />
                </View>
                <RLButton
                    SimpleButton={true}
                    onpress={() => setShowPasswordModal(true)}
                    simplebuttontext={BaseText.BuyNow}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
                />
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor, { backgroundColor: Colors.lightgray }]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}
                {_rendeShowModal()}

                <KeyboardAwareScrollView
                    bounces={false}
                    enableAutomaticScroll={true}
                    scrollToEnd={true}
                    keyboardShouldPersistTaps={'always'}
                    nestedScrollEnabled={false}>
                    <View style={[viewStyle.flex]}>
                        {_renderShippingAdd()}
                        {_renderProductInfo()}
                        {_renderExpressDelivery()}
                        {_renderAddDescription()}
                        {_renderPaymentMethod()}
                        {_renderSwitch()}
                    </View>
                </KeyboardAwareScrollView>

                {showButton &&
                    _renderBuyNowButton()
                }
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Payment);

