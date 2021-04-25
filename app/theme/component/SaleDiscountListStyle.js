import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import ENV from 'env/index';

const saleDiscountListStyle = StyleSheet.create({
    mainViewStyle: {
        height: 173,
        borderRadius: 10,
        width: 130,
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
        marginRight: 10,
    },
    disImgStyle: {
        height: 51,
        width: 42,
        alignSelf: 'flex-end',
        marginRight: 10
    },
    reSizeImg: {
        resizeMode: 'contain'
    },
    detailmainViewStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    pricetxtStyle: {
        fontSize: 14,
        width: 40,
        color: Colors.activebtn,
        fontFamily: ENV.nfontFamilyBold
    },
    tpricetxtStyle: {
        fontSize: 8,
        alignSelf: 'center',
        width: 60,
        color: Colors.gray1,
        fontFamily: ENV.nfontFamilySemiBold
    },
    heartImgstyle: {
        width: 14,
        height: 12,
    },
})
export default saleDiscountListStyle
