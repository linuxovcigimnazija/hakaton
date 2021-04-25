import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';


const profileStyle = StyleSheet.create({
    topViewPhoto: {
        backgroundColor: Colors.lightgray,
        flex: 1
    },
    topViewStyle: {
        backgroundColor: Colors.darkbrown,
        marginHorizontal: 10,
        marginTop: 15,
        height: 340,
        justifyContent: 'space-between',
        borderRadius: 20,
        overflow: 'hidden'
    },
    scoreView: {
        flexDirection: 'row',
        width: '95%',
        height: 60,
        marginTop: 20,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    trophyView: {        
        flexDirection: 'row',
        flex: 0.5,
        justifyContent: 'center'
    },
    profileBtnStyle: {
        backgroundColor: Colors.white,
        height: 130,
        width: 130,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        alignSelf: 'center'
    },
    profileImgStyle: {
        height: 120,
        width: 120,
        borderRadius: 80 / 2,
        backgroundColor: Colors.lightgray,
    },

    //RLProfileSetting
    proListViewStyle: {
        height: 120,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
        shadowColor: 'rgba(0,0,0, .5)',
        backgroundColor: 'white',
        alignSelf: 'center',
        width: BaseStyle.DEVICE_WIDTH / 100 * 90,
        paddingHorizontal: 16,
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
        fontFamily: ENV.qfontFamilyBold
    }
})
export default profileStyle
