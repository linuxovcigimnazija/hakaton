
import { StyleSheet } from 'react-native'
import Colors from 'constants/Colors';

const buttonStyle = StyleSheet.create({
    commonbuttonStyle: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 60,
    },
    buttonTextStyle: {
        fontSize: 14,
        color: Colors.white,
        textAlign: 'center'
    },
    imgbuttonStyle: {
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        height: 60,
        flexDirection: 'row'
    },
    imgbtnTextStyle: {
        fontSize: 14
    },
    imgbtnImgStyle: {
        resizeMode: 'contain', width: 29, height: 30, marginHorizontal: 28
    }
})
export default buttonStyle
