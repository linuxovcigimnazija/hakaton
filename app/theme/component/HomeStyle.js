import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';

const homestyle = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        textAlign: "center",
    },
    logoStyle: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    btnStyle: {
        backgroundColor: Colors.red,
        marginTop: 5,
        width: BaseStyle.DEVICE_WIDTH / 100 * 50,
        height: BaseStyle.DEVICE_HEIGHT / 100 * 4,
    },
    chnageTitleText: {
        color: Colors.white,
        alignSelf: 'center'
    },
    loginInputView: {
        height: BaseStyle.DEVICE_HEIGHT / 100 * 6,
        alignSelf: 'center'
    },
})
export default homestyle
