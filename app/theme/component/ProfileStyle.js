import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const profileStyle = StyleSheet.create({
    topViewStyle: {
        backgroundColor: Colors.lightgray,
        height: 290
    },
    profileBtnStyle: {
        backgroundColor: Colors.white,
        height: 90,
        width: 90,
        borderRadius: 90 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
        alignSelf: 'center'
    },
    profileImgStyle: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        backgroundColor: Colors.lightgray,
    },

    //RLProfileSetting
    proListViewStyle: {
        height: 65,
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
        marginBottom: 15,
    },
    imgStyle: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
    },
    settingtextStyle: {
        fontSize: 14,
        color: Colors.activebtn,
        paddingLeft: 20,
        fontFamily: ENV.qfontFamilyBold
    }
})
export default profileStyle
