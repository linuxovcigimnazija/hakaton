import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const searchProductStyle = StyleSheet.create({
    filterViewStyle: {
        marginBottom: 18,
        justifyContent: 'space-between'
    },
    foundtxtStyle: {
        fontSize: 12,
        color: Colors.gray,
        width: BaseStyle.DEVICE_WIDTH / 100 * 50,
        fontFamily: ENV.nfontFamilyRegular
    },
    imgeresize: {
        resizeMode: 'contain'
    },
    filImgStyle: {
        height: 10,
        width: 12,
    },
    filtertxtStyle: {
        fontSize: 12,
        color: Colors.gray,
        paddingLeft: 15,
        fontFamily: ENV.qfontFamilyRegular
    },
})
export default searchProductStyle
