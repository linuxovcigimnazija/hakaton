import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const popularListStyle = StyleSheet.create({
    mainViewStyle: {
        marginBottom: 10
    },
    productImgViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 30,
        height: 132,
        backgroundColor: Colors.white,
        borderRadius: 15,
        zIndex: 15
    },
    detailmainViewStyle: {
        height: 102,
        borderColor: 'gray',
        width: BaseStyle.DEVICE_WIDTH / 100 * 55,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        paddingHorizontal: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        shadowColor: 'rgba(0,0,0, .4)',
        backgroundColor: Colors.white,
    },
    pnametxtStyle: {
        fontSize: 14,
        color: Colors.darkGray,
        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
        fontFamily: ENV.zfontFamilyMedium
    },
    heartImgStyle: {
        width: 14,
        height: 12,
    },
    resizeImg: {
        resizeMode: 'contain'
    },
    pricetxtStyle: {
        fontSize: 18,
        color: Colors.activebtn,
        width: BaseStyle.DEVICE_WIDTH / 100 * 50,
        fontFamily: ENV.nfontFamilyBold
    },
    ratemainViewStyle: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cartbtnStyle: {
        alignItems: 'flex-end'
    },
    cartImgStyle: {
        width: 51,
        height: 24,
    }
})
export default popularListStyle
