
import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const headerStyle = StyleSheet.create({
    //Simple Header
    mainView: {
        backgroundColor: Colors.lightBlue
    },
    headerViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center',
        alignItems: 'center',
        marginVertical: 18
    },
    leftViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 40
    },
    leftImgStyle: {
        resizeMode: 'contain',
        width: 11.67,
        height: 10
    },

    //Sign in Header
    signViewStyle: {
        backgroundColor: Colors.lightBlue,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    signtitleStyle: {
        fontSize: 30,
        color: Colors.white,
        marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 7,
        fontFamily: ENV.zfontFamilyMedium
    },
    signtitle1Style: {
        lineHeight: 35,
        fontSize: 12,
        color: Colors.white,
        paddingTop: 10,
        fontFamily: ENV.nfontFamilyRegular
    },
    signtitle2Style: {
        fontSize: 12,
        color: Colors.white,
        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 6,
        fontFamily: ENV.nfontFamilyRegular
    },
    //Search Header
    smainView: {
        backgroundColor: Colors.lightgray
    },
    scartViewStyle: {
        width: 36
        , backgroundColor: Colors.lightBlue,
        borderRadius: 36 / 2,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scartStyle: {
        height: 18,
        width: 18,
        resizeMode: 'contain',
    },

    //TitleHeader
    tleftViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 20
    },
    tleftImgStyle: {
        height: 36,
        width: 36,
        resizeMode: 'contain'
    },
    ttxtViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 45
    },
    tmenuImgStyle: {
        height: 23,
        width: 5,
    },
    resizeStyle: {
        resizeMode: 'contain',
    },

    // CartHeader
    crightImgStyle: {
        alignSelf: 'flex-end',
        height: 17,
        width: 18,
    }
})
export default headerStyle
