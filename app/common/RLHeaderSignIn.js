import React from "react";
import { View } from "react-native";
import textStyle from 'theme/component/TextStyle';
import headerStyle from 'theme/component/HeaderStyle';
import {
    RLText
} from 'basecomponent';

const RLHeaderSignIn = (props) => {
    const {
        title,
        title1,
        title2
    } = props;

    return (
        <View style={headerStyle.signViewStyle}>
            <RLText
                text={title}
                style={[textStyle.textWidthStyle, headerStyle.signtitleStyle]} />
            <RLText
                text={title1}
                style={[textStyle.textWidthStyle, headerStyle.signtitle1Style]} />
            <RLText
                text={title2}
                style={[textStyle.textWidthStyle, headerStyle.signtitle2Style]} />
        </View>
    );
};
export default RLHeaderSignIn;