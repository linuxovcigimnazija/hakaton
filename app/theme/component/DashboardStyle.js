
import { StyleSheet } from 'react-native'
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import ENV from 'env/index';

const dashboardStyle = StyleSheet.create({
    mainViewStyle: {
        backgroundColor: Colors.lightgray,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    paymentViewStyle: {
        top: 30,
        height: 65,
        borderRadius: 10,
        backgroundColor: Colors.orange,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    priceView: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 35,
    },
    imgeresize: {
        resizeMode: 'contain'
    },
    purseImgStyle: {
        height: 20,
        width: 23.5
    },
    pricetxtStyle: {
        paddingLeft: 15,
        color: Colors.white,
        fontSize: 14,
        alignSelf: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 30,
        fontFamily: ENV.nfontFamilyBold
    },
    paymentOptionViewStyle: {
        justifyContent: 'space-between',
        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
    },
    paymentOptbtnStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    paytxtStyle: {
        color: Colors.white,
        fontSize: 10,
        paddingTop: 5,
        fontFamily: ENV.qfontFamilyBold
    },
    tooltipViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 80,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    toolimgStyle: {
        height: 20,
        width: 20,
    },
    tooltxtStyle: {
        color: Colors.activebtn,
        fontSize: 10,
        paddingTop: 8,
        fontFamily: ENV.qfontFamilyBold
    }
})
export default dashboardStyle
