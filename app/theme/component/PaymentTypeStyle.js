
import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors';
import ENV from 'env/index';

const paymentTypeStyle = StyleSheet.create({
    paymainViewStyle: {
        marginVertical: 10,
        paddingLeft: 10,
        paddingRight: 15,
        borderRadius: 10,
        paddingVertical: 20,
        backgroundColor: Colors.white,
        justifyContent: 'space-between',
    },
    resizeImg: {
        resizeMode: 'contain'
    },
    bankimgStyle: {
        height: 34, width: 45,
    },
    accoutTxtStyle: {
        fontSize: 14,
        color: Colors.darkGray,
        paddingBottom: 7,
        fontFamily: ENV.qfontFamilyBold
    },
    banktxtStyle: {
        fontSize: 10,
        color: Colors.gray1,
        fontFamily: ENV.nfontFamilyRegular
    },
    nextImgStyle: {
        height: 17,
        width: 17,
    },
    listViewStyle: {
        paddingVertical: 15,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    listtxtStyle: {
        fontSize: 20,
        color: Colors.gray1,
        fontFamily: ENV.zfontFamilyMedium
    },
    listMainViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    infoImgStyle: {
        height: 60,
        width: 60,
    },
    emptytxtStyle: {
        paddingTop: 15,
        fontSize: 20,
        color: Colors.gray,
        fontFamily: ENV.nfontFamilySemiBold
    }
})
export default paymentTypeStyle
