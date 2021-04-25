
import { StyleSheet } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors';
import ENV from 'env/index';

const checkOutListStyle = StyleSheet.create({
    mainViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 100,
        backgroundColor: Colors.white
    },
    cardViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        justifyContent: 'space-between',
    },
    imgViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
    },
    checkbtnStyle: {
        borderColor: Colors.darkGray,
        borderWidth: 0.5,
        height: 20,
        width: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    imgeStyle: {
        backgroundColor: Colors.white,
        height: 114,
        width: 114,
        borderRadius: 10,
        marginVertical: 15,
        marginHorizontal: 12
    },
    detailmainViewStyle: {
        paddingLeft: 10,
        width: BaseStyle.DEVICE_WIDTH / 100 * 45,
        marginVertical: 15,
        justifyContent: 'space-between'
    },
    proNameViewStyle: {
        justifyContent: 'space-between'
    },
    proNametxtStyle: {
        color: Colors.darkGray,
        fontSize: 14,
        fontFamily: ENV.zfontFamilyMedium
    },
    deletegImgStyle: {
        width: 12,
        height: 15,
    },
    resizeImg: {
        resizeMode: 'contain'
    },
    coloTxtStyle: {
        color: Colors.gray1,
        fontSize: 10,
        fontFamily: ENV.nfontFamilyRegular
    },
    pritxtStyle: {
        fontSize: 18,
        color: Colors.activebtn,
        fontFamily: ENV.nfontFamilyRegular
    },
    addCartViewStyle: {
        width: 105, height: 25,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.gray
    },
    subBtnStyle: {
        width: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subColor: {
        color: Colors.darkGray,
        fontFamily: ENV.qfontFamilyBold
    },
    subTotalViewStyle: {
        borderTopWidth: 0.5,
        borderColor: Colors.gray,
        paddingVertical: 7,
    },
    totaltxtStyle: {
        textAlign: 'right',
        color: Colors.darkGray,
        fontFamily: ENV.nfontFamilyBold
    },
    itemSepStyle: {
        backgroundColor: Colors.lightgray,
        height: 10,
        width: BaseStyle.DEVICE_WIDTH / 100 * 100,
    },
    addImgStyle: {
        height: 10,
        width: 10
    },
    qtybtnStyle: {
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.gray,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
    }
})
export default checkOutListStyle
