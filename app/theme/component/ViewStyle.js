import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import BaseStyle from 'constants/BaseStyle';

const viewStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexbgColor: {
        backgroundColor: Colors.white
    },
    selfCenter: {
        alignSelf: 'center'
    },
    centerViewStyle: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
        alignSelf: 'center'
    },
    rowdirections: {
        flexDirection: 'row'
    },
    centerContain: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerViewWidth: {
        width: BaseStyle.DEVICE_WIDTH / 100 * 85,
    }
})
export default viewStyle
