
import { StyleSheet } from 'react-native'
import BaseStyle from 'constants/BaseStyle'
import Colors from 'constants/Colors'

const textInputStyle = StyleSheet.create({
    //plain TextInput
    plainInputViewStyle: {
        borderRadius: 30,
        backgroundColor: Colors.lightgray
    },
    plainInputStyle: {
        height: 60,
        alignSelf: 'center',
    },
    //password TextInput
    passwordInputViewStyle: {
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    passwordbtnStyle: {
        alignSelf: 'center',
    },
    hidepasswordImgStyle: {
        resizeMode: 'contain',
        height: 20,
        width: 21,
    },
    //Search TextInput
    sInputViewStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    sbtnSearchStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 15,
        borderRadius: 20,
        backgroundColor: Colors.lightBlue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    serachImgStyle: {
        resizeMode: 'center',
        height: 12,
        width: 12
    }
})
export default textInputStyle
