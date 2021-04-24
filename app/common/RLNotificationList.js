import React from "react";
import { View, Image, TouchableWithoutFeedback } from "react-native";
import Images from "constants/Images";
import notificationStyle from 'theme/component/NotificationStyle';
import textStyle from 'theme/component/TextStyle';
import {
    RLText
} from 'basecomponent';

const RLNotificationList = (props) => {

    const {
        title,
        onPress,
        marginTop,
        time
    } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[notificationStyle.notiListmainViewStyle]} >
                <View style={[notificationStyle.notificationListStyle, { marginTop: marginTop }]}>
                    <Image
                        source={Images.notificationDot}
                        style={notificationStyle.imgStyle} />
                    <RLText
                        text={title}
                        style={notificationStyle.notificationtxtStyle} />
                </View>
                <RLText
                    text={time}
                    style={[textStyle.textWidthStyle, notificationStyle.notitimetxtStyle]} />
            </View>
        </TouchableWithoutFeedback>
    );
};
export default RLNotificationList;