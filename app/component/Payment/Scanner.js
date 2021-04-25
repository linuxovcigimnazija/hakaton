import React, { Fragment, useEffect, useState, useRef } from "react";
import { View, Text, Modal } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import headerStyle from 'theme/component/HeaderStyle';
import scannerStyle from 'theme/component/ScannerStyle';
import { consoleLog } from 'utils/console';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
    RLHeader,
    RLBarcodeModal
} from 'basecomponent';

const Scanner = ({ navigation, props }) => {

    const [showBarCodeModal, setShowBarCodeModal] = useState(false); //show payment Modal

    useEffect(() => {
    }, []);
    //================================ Start common Function ===========================================
    //Scan On QRcode
    const _onScanCode = (e) => {
        consoleLog("e", typeof e.data); //String
        if (e.data != '') {
            setShowBarCodeModal(true)
        }
    }

    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={'transparent'}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.Pay}
                showTitle={true}
                showrightsimple={true}
                imgrightSimple={Images.takePicture}
                titlerightImgstyle={headerStyle.tleftImgStyle}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Scanner View
    const _renderScanner = () => {
        return (
            <View style={[scannerStyle.mainViewStyle]}>
                <QRCodeScanner
                    showMarker={true}
                    onRead={(e) => _onScanCode(e)}
                    customMarker={
                        <View style={[scannerStyle.scanerRectangle]}>
                            <View style={[scannerStyle.scanSize, scannerStyle.scanerTopLeft]}></View>
                            <View style={[scannerStyle.scanSize, scannerStyle.scanerTopRight]}></View>
                            <View style={[scannerStyle.scanSize, scannerStyle.scanerBottomLeft]}></View>
                            <View style={[scannerStyle.scanSize, scannerStyle.scanerBottomRight]}></View>
                        </View>
                    }
                    containerStyle={[scannerStyle.mainViewStyle]}
                    cameraStyle={scannerStyle.cameraViewStyle}
                    topViewStyle={{ height: 0 }}
                    bottomViewStyle={{ height: 0 }}
                    bottomContent={
                        <Text style={[scannerStyle.scantxtStyle]}>{BaseText.ScanQRCode}</Text>
                    }
                />
            </View>
        )
    }

    //Payment Option modal
    const _renderModal = () => {
        return (
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={showBarCodeModal}
                onRequestClose={() => setShowBarCodeModal(false)}>
                <RLBarcodeModal
                    img1={Images.telephone}
                    img2={Images.bank}
                    img3={Images.barCode}
                    title1={BaseText.ToPhoneNumber}
                    title2={BaseText.ToBankAccount}
                    title3={BaseText.UseCode}
                    onpressOutSide={() => setShowBarCodeModal(false)}
                    // onpress1={() =>}
                    onpress2={() => { navigation.navigate('PaymentType'), setShowBarCodeModal(false) }}
                // onpress3={}
                />
            </Modal>
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}
                {_renderModal()}

                {_renderScanner()}
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Scanner);

