
import { StyleSheet, Dimensions, Platform, } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors';
import ENV from 'env/index';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAAX_WIDTH = 414;
const XSMAAX_HEIGHT = 896;
const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window')

let isPhonex = W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT || W_WIDTH === XSMAAX_WIDTH && W_HEIGHT === XSMAAX_HEIGHT

const checkOutStyle = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        width: BaseStyle.DEVICE_WIDTH / 100 * 100,
        alignItems: 'flex-end',
        alignSelf: 'center'
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 40,
    },
    backRightBtnRight: {
        backgroundColor: Colors.red,
        right: 0,
    },
    deleteIconWhiteStyle: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    checkOutMainViewStyle: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
        shadowColor: 'rgba(0,0,0, .4)',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: "flex-end",
        paddingVertical: (Platform.OS === 'ios' && isPhonex) ? 30 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
    },
    totalTextViewStyle: {
        paddingBottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subtxtStyle: {
        fontSize: 14, color: Colors.gray1,
        fontFamily: ENV.nfontFamilyBold
    },
    priceTxtStyle: {
        fontSize: 20,
        color: Colors.pink,
        textAlign: 'right',
        width: BaseStyle.DEVICE_WIDTH / 100 * 60,
        fontFamily: ENV.nfontFamilySemiBold
    },
})
export default checkOutStyle
