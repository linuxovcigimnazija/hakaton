import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';
import ENV from 'env/index';

const searchProductListStyle = StyleSheet.create({
    mainViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 40,
    },
    imgBackStyle: {
        backgroundColor: Colors.gray2,
        borderRadius: 20
    },
    imgeresize: {
        resizeMode: 'contain'
    },
    likeViewStyle: {
        justifyContent: 'flex-end',
        flex: 1,
        paddingBottom: 15,
    },
    likeBtnStyle: {
        alignSelf: 'flex-end',
        marginHorizontal: 20
    },
    likeimgStyle: {
        width: 18,
        height: 15,
    },
    infoViewStyle: {
        justifyContent: 'space-between',
        marginVertical: 10
    },
    productDetailViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 22,
        justifyContent: 'center'
    },
    nameStyle: {
        fontSize: 12,
        color: Colors.gray1,
        fontFamily: ENV.zfontFamilyMedium
    },
    rateValueStyle: {
        fontSize: 10,
        color: Colors.darkGray,
        paddingLeft: 10,
        fontFamily: ENV.nfontFamilySemiBold
    },
    priceViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 18,
        justifyContent: 'center'
    },
    pricetxtStyle: {
        fontSize: 18,
        color: Colors.activebtn,
        textAlign: 'right',
        fontFamily: ENV.nfontFamilySemiBold
    }
})
export default searchProductListStyle
