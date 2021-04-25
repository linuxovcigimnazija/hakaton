
import { StyleSheet } from 'react-native'
import BaseStyle from 'constants/BaseStyle';

const forgotStyle = StyleSheet.create({
    otpInputStyle: {
        flexDirection: 'row',
        marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 9,
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        justifyContent: 'space-between'
    }
})
export default forgotStyle
