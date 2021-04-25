import React, { Fragment, useEffect, } from "react";
import { View, Image, } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import paymentTypeStyle from 'theme/component/PaymentTypeStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLTextInput,
} from 'basecomponent';

const PaymentType = ({ navigation, props }) => {
    let fieldSearchRef = React.createRef();

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
        // Keyboard.dismiss()
    }
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                // titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.ToBankAccount}
                showTitle={true}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Search
    const _renderSearch = () => {
        return (
            <RLTextInput
                SearchTextinput={true}
                placeholder={'Find a bank or account'}
                onEditTextField={(value) => _onChangeTextField(value, 'description')}
                textInputViewWidth={BaseStyle.DEVICE_WIDTH / 100 * 85}
                textInputWidth={BaseStyle.DEVICE_WIDTH / 100 * 65}
                refKey={'search'}
                fieldRef={fieldSearchRef}
                onSubmitEditing={() => _onSubmitEditing(fieldSearchRef)}
            />
        )
    }

    //Transfer Accout
    const _renderTransfer = () => {
        return (
            <View style={[viewStyle.rowdirections, viewStyle.centerViewStyle, paymentTypeStyle.paymainViewStyle]}>
                <View style={[viewStyle.rowdirections]}>
                    <Image
                        source={Images.bank}
                        style={[paymentTypeStyle.resizeImg, paymentTypeStyle.bankimgStyle, viewStyle.selfCenter]} />
                    <View style={[viewStyle.selfCenter, { paddingLeft: 15 }]} >
                        <RLText
                            text={BaseText.Transferaccount}
                            style={[paymentTypeStyle.accoutTxtStyle]} />
                        <RLText
                            text={BaseText.Choosedestinationbank}
                            style={[paymentTypeStyle.banktxtStyle]} />
                    </View>
                </View>
                <Image
                    source={Images.nextRound}
                    style={[paymentTypeStyle.nextImgStyle, paymentTypeStyle.resizeImg, viewStyle.selfCenter]} />
            </View>
        )
    }

    //List Title View
    const _renderListTitle = () => {
        return (
            <View style={[paymentTypeStyle.listViewStyle]}>
                <RLText
                    text={BaseText.ListAccount}
                    style={[viewStyle.centerViewStyle, paymentTypeStyle.listtxtStyle]} />
            </View>
        )
    }

    //Empty View
    const _renderEmptyList = () => {
        return (
            <View style={[paymentTypeStyle.listMainViewStyle]}>
                <Image
                    source={Images.infoIcon}
                    style={[paymentTypeStyle.infoImgStyle, paymentTypeStyle.resizeImg]} />
                <RLText
                    text={BaseText.NotAvailable}
                    style={[paymentTypeStyle.emptytxtStyle]} />
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor, { backgroundColor: Colors.lightgray }]}>
                <GeneralStatusBarColor backgroundColor={Colors.lightgray}
                    barStyle={"dark-content"} />
                {_header()}
                {_renderSearch()}
                {_renderTransfer()}
                {_renderListTitle()}
                {_renderEmptyList()}
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(PaymentType);