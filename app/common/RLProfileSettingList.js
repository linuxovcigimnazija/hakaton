import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import profileStyle from 'theme/component/ProfileStyle';
import {
    RLText
} from 'basecomponent';

const RLProfileSettingList = (props) => {

    const {
        settingicons,
        title,
        onPress,
        marginTop
    } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[profileStyle.proListViewStyle, { marginTop: marginTop }]}>
                <Image
                    source={settingicons}
                    style={profileStyle.imgStyle} />

                <RLText
                    text={title}
                    style={profileStyle.settingtextStyle} />
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLProfileSettingList;