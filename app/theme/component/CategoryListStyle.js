
import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors';
import ENV from 'env/index';

const categoryListStyle = StyleSheet.create({
    mainViewStyle: {
        width: 70,
        marginRight: 10,
    },
    btnStyle: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.white,
    },
    imgStyle: {
        resizeMode: 'contain',
        width: 36,
        height: 29
    },
    txtStyle: {
        textAlign: 'center',
        paddingVertical: 12,
        alignSelf: 'center',
        fontSize: 12,
        color: Colors.activebtn,
        fontFamily: ENV.qfontFamilyBold
    },
    //Topup style
    topUpImgStyle: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    topUpText: {
        marginTop: 5,
        color: Colors.activebtn,
        textAlign: 'center',
        fontSize: 12,
        fontFamily: ENV.qfontFamilyBold
    },
    topUpTouchStyle: {
        borderRadius: 10,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55
    },
})
export default categoryListStyle
