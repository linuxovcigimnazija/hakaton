//Custom Tab Icon File
import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

const Tab = ({ tab, icon, onPress, color, key, index, profileBcolor }) => {
    if (index == 2) {
        return <TouchableOpacity onPress={onPress} style={[styles.btnStyle,]} >
            <View style={[styles.profileViewStyle, { borderColor: profileBcolor }]}>
                {icon && <Image source={icon} style={[styles.imgStyle, { borderRadius: 25 / 2 }]} />}
            </View>
        </TouchableOpacity>;
    } else {
        return <TouchableOpacity onPress={onPress} style={styles.btnStyle} >
            {icon && <Image source={icon} style={styles.imgStyle} />}
            {/* <Text style={{ color }}>{tab.name}</Text> */}
        </TouchableOpacity>;
    }

};

const styles = StyleSheet.create({
    btnStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 25,
        width: 25,
    },
    profileViewStyle: {
        height: 30,
        width: 30,
        borderRadius: 30 / 2,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default Tab;