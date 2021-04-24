import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const categoryStyle = StyleSheet.create({
    mainViewStyle: {
        backgroundColor: Colors.lightgray,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    categorytxtStyle: {
        marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1,
        color: Colors.gray1,
        fontSize: 20,
        fontFamily: ENV.zfontFamilyMedium
    },
    sildeViewStyle: {
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    slideImgstyle: {
        height: 5,
        width: 43,
        resizeMode: 'contain'
    },

    //SubCategory List Style,
    subcatemainViewStyle: {
        width: 91,
        paddingVertical: 15,
    },
    subImgStyle: {
        height: 70,
        width: 91,
    },
    subpronameStyle: {
        color: Colors.activebtn,
        alignSelf: 'center',
        width: 80,
        textAlign: 'center'
    }
})
export default categoryStyle
