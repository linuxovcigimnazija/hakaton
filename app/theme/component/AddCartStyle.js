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

const addCartStyle = StyleSheet.create({
    // pagger Style
    dotContainerViewStyle: {
        marginBottom: 20,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    dotViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 15,
        justifyContent: 'space-between',
    },
    dotStyle: {
        height: 8,
        width: 8,
        borderRadius: 8 / 2,
    },
    heartViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 35,
        justifyContent: 'flex-end'
    },
    resizeImg: {
        resizeMode: 'contain'
    },
    heartImgStyle: {
        height: 20,
        width: 24
    },
    detailmainViewStyle: {
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
        shadowColor: 'rgba(0,0,0, .4)',
        justifyContent: 'flex-end',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    slideImgStyle: {
        height: 5, width: 43, marginTop: 8
    },
    prodnameViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 42,
    },
    prodnametxtStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
        paddingBottom: 8,
        color: Colors.darkGray,
        fontSize: 18,
        fontFamily: ENV.zfontFamilyMedium
    },
    ratetxtStyle: {
        color: Colors.gray1,
        fontSize: 12,
        paddingLeft: 10,
        fontFamily: ENV.nfontFamilyRegular
    },
    pricetxtStyle: {
        fontSize: 30, textAlign: 'right',
        fontFamily: ENV.nfontFamilySemiBold
    },
    sizetxtStyle: {
        color: Colors.gray1,
        fontSize: 12,
        alignSelf: 'center',
        fontFamily: ENV.nfontFamilyRegular
    },
    sizebtnViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
        justifyContent: 'space-between'
    },
    sizebtnStyle: {
        height: 30,
        width: 30,
        backgroundColor: Colors.lightgray,
        borderRadius: 5,
    },
    colorbtnStyle: {
        height: 30, width: 30,
        borderRadius: 30 / 2,
        borderWidth: 0.5
    },
    colorViewStyle: {
        height: 25,
        width: 25,
        borderRadius: 25
    },
    subimgStyle: {
        height: 11, width: 10,
    },
    qtyaddStyle: {
        height: 30,
        width: 70,
        backgroundColor: Colors.lightgray,
        borderRadius: 5,
    },
    desctxtStyle: {
        color: Colors.gray1, fontSize: 12,
        fontFamily: ENV.nfontFamilyRegular
    },
    addCartbtnStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        backgroundColor: Colors.activebtn,
        marginVertical: (Platform.OS === 'ios' && isPhonex) ? 30 : (Platform.OS === 'ios' && !isPhonex) ? 20 : 20,
    },
})
export default addCartStyle
