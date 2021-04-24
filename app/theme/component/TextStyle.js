
import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle'
import ENV from 'env/index';

const textStyle = StyleSheet.create({
    skiptextStyle: {
        alignSelf: 'center',
        color: Colors.gray,
        fontSize: 14,
        fontFamily: ENV.qfontFamilyRegular
    },
    signIntextStyle: {
        textAlign: 'right',
        color: Colors.white,
        fontSize: 14,
        fontFamily: ENV.qfontFamilyBold
    },
    textWidthStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center',
    },
    forgettextStyle: {
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 2,
        textAlign: 'right',
        color: Colors.red,
        fontSize: 12,
        fontFamily: ENV.qfontFamilyRegular
    },
    socailTextStyle: {
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 5.5,
        color: Colors.gray1,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: ENV.nfontFamilyRegular
    },
    forgetEmailTextStyle: {
        color: Colors.gray,
        fontSize: 12,
        textAlign: 'center',
        fontFamily: ENV.nfontFamilyRegular
    },
    categoryTextStyle: {
        color: Colors.gray1,
        fontSize: 20,
        marginVertical: BaseStyle.DEVICE_HEIGHT / 100 * 4,
        fontFamily: ENV.zfontFamilyMedium
    },
    userNameTextStyle: {
        fontSize: 18,
        color: Colors.darkGray,
        textAlign: 'center',
    },
    titleHeaderTextStyle: {
        color: Colors.gray1,
        fontSize: 14,
        textAlign: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 43,
        fontFamily: ENV.qfontFamilyBold
    }
})
export default textStyle
