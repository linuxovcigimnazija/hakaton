
import { StyleSheet, } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors';
import ENV from 'env/index';

const notificationStyle = StyleSheet.create({
    reSizeImg: {
        resizeMode: 'contain'
    },
    emptyImgStyle: {
        height: 119,
        width: 136
    },
    emptyTitletxtStyle: {
        lineHeight: 20,
        width: BaseStyle.DEVICE_WIDTH / 100 * 75,
        marginTop: 20,
        color: Colors.gray1,
        fontSize: 12,
        fontFamily: ENV.nfontFamilyRegular,
        textAlign: 'center',
    },
    happytxtStyle: {
        color: Colors.gray1,
        fontSize: 12,
        fontFamily: ENV.nfontFamilyRegular,
        lineHeight: 20,
    },

    // RLNotification Setting
    notificationListStyle: {
        borderRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
        shadowColor: 'rgba(0,0,0, .4)',
        backgroundColor: 'white',
        alignSelf: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        paddingHorizontal: 25,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 22
    },
    imgStyle: {
        height: 15,
        width: 14,
        resizeMode: 'contain',
    },
    notificationtxtStyle: {
        fontSize: 14,
        color: Colors.activebtn,
        paddingLeft: 20,
        fontFamily: ENV.qfontFamilyBold
    },
    notiListmainViewStyle: {
        marginBottom: 15,
    },
    notitimetxtStyle: {
        paddingLeft: 55,
        color: Colors.gray1,
        fontSize: 12,
        fontFamily: ENV.nfontFamilyRegular,
        paddingTop: 5
    }
})
export default notificationStyle
