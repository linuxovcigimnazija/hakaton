
import { StyleSheet } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors';
import { Platform, Dimensions } from 'react-native';
import ENV from 'env/index';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAAX_WIDTH = 414;
const XSMAAX_HEIGHT = 896;
const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isPhonex = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAAX_WIDTH && W_HEIGHT === XSMAAX_HEIGHT

const appIntroStyle = StyleSheet.create({
    paggerViewStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoStyle: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 265,
        height: 230,
    },
    titleTextStyle: {
        fontSize: 18,
        color: Colors.darkGray,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 5,
        alignSelf: 'center',
        fontFamily: ENV.zfontFamilyMedium
    },
    introdetailStyle: {
        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 4,
        alignSelf: 'center',
        color: Colors.gray,
        fontSize: 12,
        width: BaseStyle.DEVICE_WIDTH / 100 * 50,
        textAlign: 'center',
        lineHeight: 20,
        fontFamily: ENV.nfontFamilyRegular
    },
    pageIndicatorViewStyle: {
        flexDirection: 'row',
        width: BaseStyle.DEVICE_WIDTH / 100 * 20,
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    skipmainViewStyle: {
        justifyContent: "flex-end",
    },
    skipViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: (Platform.OS === 'ios' && isPhonex) ? 40 : (Platform.OS === 'ios' && !isPhonex) ? 30 : 30
    }
})
export default appIntroStyle
