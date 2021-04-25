
import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const paymentStyle = StyleSheet.create({
    cartmainViewStyle: {
        marginTop: 10,
        width: BaseStyle.DEVICE_WIDTH / 100 * 100,
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    shipaddmainViewStyle: {
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.gray,
        paddingVertical: 10
    },
    resizeImg: {
        resizeMode: 'contain'
    },
    locationImgStyle: {
        height: 15,
        width: 11.5,
    },
    shipaddtxtStyle: {
        fontSize: 12,
        color: Colors.darkGray,
        fontFamily: ENV.nfontFamilyRegular
    },
    userNametxtStyle: {
        fontSize: 18,
        color: Colors.darkGray,
        paddingBottom: 5,
        fontFamily: ENV.nfontFamilyBold
    },
    containSpac: {
        justifyContent: 'space-between',
    },
    prodImgStyle: {
        height: 57,
        width: 57,
        borderRadius: 5,
        backgroundColor: Colors.white
    },
    prodMainViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 65,
        justifyContent: 'space-between',
    },
    prodnametxtStyle: {
        fontSize: 14,
        color: Colors.darkGray,
        fontFamily: ENV.zfontFamilyMedium
    },
    colortxtStyle: {
        fontSize: 10,
        color: Colors.gray1,
        fontFamily: ENV.nfontFamilyRegular
    },
    prodpricetxtStyle: {
        fontSize: 14,
        color: Colors.activebtn,
        width: BaseStyle.DEVICE_WIDTH / 100 * 55,
        fontFamily: ENV.nfontFamilyRegular
    },
    paymentImgStyle: {
        height: 15,
        width: 17.5,
    },
    mypaytxtStyle: {
        fontSize: 12,
        color: Colors.pink,
        paddingLeft: 5,
        paddingRight: 10,
        fontFamily: ENV.nfontFamilyRegular
    },
    nextImgStyle: {
        height: 17,
        width: 17,
    },
    paymethodPriceViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 42.5,
    },
    subtotaltxtStyle: {
        fontSize: 12, color: Colors.gray1,
        fontFamily: ENV.nfontFamilyRegular
    },
})
export default paymentStyle
