import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAAX_WIDTH = 414;
const XSMAAX_HEIGHT = 896;
const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isPhonex = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAAX_WIDTH && W_HEIGHT === XSMAAX_HEIGHT

const TopUpStyles = StyleSheet.create({

    // Top Up Main Screen Styles
    nominalMAinView: {
        backgroundColor: Colors.lightgray,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 2
    },
    nominalTextStyle: {
        alignSelf: 'center',
        marginVertical: 20,
        width: BaseStyle.DEVICE_WIDTH / 100 * 70,
        fontSize: 14,
        color: Colors.gray1,
        fontFamily: ENV.nfontFamilyRegular
    },
    reTextinputStyle: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        alignSelf: 'center',
    },
    rsMainCard: {
        flexDirection: 'row',
        marginVertical: 20,
        width: BaseStyle.DEVICE_WIDTH / 100 * 70,
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    addDebitCard: {
        backgroundColor: Colors.lightgray,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addDebitSubCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: BaseStyle.DEVICE_WIDTH / 100 * 75,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    paymentIcon: {
        resizeMode: 'contain',
        width: 30,
        height: 30
    },
    arrowDownIcon: {
        resizeMode: 'contain',
        width: 18,
        height: 18
    },
    continueBtnStyle: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: (Platform.OS === 'ios' && isPhonex) ? 30 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
    },
    expireCodeView: {
        marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center'
    },
    // Add a Debit Card Styles
    addDebitMainView: {
        flex: 1,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center'
    },
    addDebitTextTitle: {
        color: Colors.darkGray,
        fontSize: 20,
        marginTop: 25,
        marginBottom: 20,
        fontFamily: ENV.zfontFamilyMedium
    },
    // confirm Code styles
    confirmCodeMainView: {
        flexDirection: 'row',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        justifyContent: 'space-between',
        marginVertical: 90
    },
    verifyCodeResendBtnView: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingVertical: (Platform.OS === 'ios' && isPhonex) ? 30 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
    },
    confirmTitleText: {
        fontSize: 20,
        color: Colors.darkGray,
        alignSelf: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        paddingBottom: 25,
        paddingTop: 10,
        fontFamily: ENV.zfontFamilyMedium
    },
    myPayTextStyle: {
        lineHeight: 25,
        fontSize: 14,
        color: Colors.gray1,
        alignSelf: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        fontFamily: ENV.nfontFamilyRegular
    }
})
export default TopUpStyles
