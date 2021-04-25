
import { StyleSheet, Dimensions, Platform } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors';
import ENV from 'env/index';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAAX_WIDTH = 414;
const XSMAAX_HEIGHT = 896;
const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isPhonex = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAAX_WIDTH && W_HEIGHT === XSMAAX_HEIGHT
const modalStyle = StyleSheet.create({
    modalmainViewStyle: {
        flex: 1,
        backgroundColor: 'rgba(57,57,57,0.20)',
        justifyContent: 'flex-end'
    },
    mainViewStyle: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    resizeImge: {
        resizeMode: 'contain'
    },
    sildeImgStyle: {
        height: 5,
        width: 43,
        alignSelf: 'center',
        marginTop: 8
    },
    pintxtStyle: {
        color: Colors.gray1,
        fontSize: 14,
        paddingVertical: 45,
        fontFamily: ENV.nfontFamilyRegular
    },
    otpViewStyle: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        justifyContent: 'space-between'
    },
    forgetPintextStyle: {
        fontSize: 12,
        textAlign: 'right',
        color: Colors.red,
        paddingVertical: 15,
        fontFamily: ENV.qfontFamilyRegular
    },
    btnViewStyle: {
        paddingVertical: (Platform.OS === 'ios' && isPhonex) ? 30 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
    },

    //Sucess Modal
    sucessImgStyle: {
        height: 60,
        width: 60,
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 20
    },
    sucesstxtStyle: {
        color: Colors.darkGray, fontSize: 18,
        fontFamily: ENV.nfontFamilyBold
    },
    sucessInfoStyle: {
        lineHeight: 30,
        color: Colors.gray1,
        fontSize: 12,
        width: BaseStyle.DEVICE_WIDTH / 100 * 75,
        textAlign: 'center',
        paddingVertical: 38,
        fontFamily: ENV.nfontFamilyRegular
    },

    //barcode Modal
    bacodepaddingStyle: {
        paddingTop: (Platform.OS === 'ios' && isPhonex) ? 30 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
        paddingBottom: (Platform.OS === 'ios' && isPhonex) ? 40 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
    },
    bcodetxtStyle: {
        fontSize: 20,
        color: Colors.gray1,
        paddingBottom: 20,
        fontFamily: ENV.zfontFamilyMedium
    },
    bcodeImgbtnStyle: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        height: 62,
        width: 62,
    },
    bcodeImgStyle: {
        height: 36, width: 36,
    },
    bcodetImgtxtStyle: {
        fontSize: 10,
        color: Colors.activebtn,
        width: 62,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: ENV.qfontFamilyBold
    }
})
export default modalStyle
