import { StyleSheet } from 'react-native';
import Colors from 'constants/Colors';
import ENV from 'env/index';

const scannerStyle = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        margin: 0,
        padding: 0,
    },
    scanerRectangle: {
        height: 222,
        width: 218,
        alignItems: "center",
        justifyContent: "center",
    },
    scanSize: {
        height: 60,
        width: 60,
        position: "absolute",
    },
    scanerTopLeft: {
        borderTopWidth: 3,
        borderLeftWidth: 3,
        left: -1,
        top: -1,
        borderLeftColor: "#126881",
        borderTopColor: "#126881"
    },
    scanerTopRight: {
        borderTopWidth: 3,
        borderRightWidth: 3,
        right: -1,
        top: -1,
        borderRightColor: "#126881",
        borderTopColor: "#126881"
    },
    scanerBottomLeft: {
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        left: -1,
        bottom: -1,
        borderLeftColor: "#126881",
        borderBottomColor: "#126881"
    },
    scanerBottomRight: {
        borderBottomWidth: 3,
        borderRightWidth: 3,
        right: -1,
        bottom: -1,
        borderRightColor: "#126881",
        borderBottomColor: "#126881"
    },
    cameraViewStyle: {
        height: '100%',
        width: '100%',
        margin: 0,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    scantxtStyle: {
        fontSize: 12,
        color: Colors.white,
        position: 'absolute',
        bottom: 20,
        fontFamily: ENV.nfontFamilyRegular
    }
})
export default scannerStyle
