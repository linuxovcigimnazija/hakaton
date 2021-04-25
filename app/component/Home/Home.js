import React, { Fragment, useEffect } from "react";
import { View, Image } from "react-native";
import { connect } from 'react-redux';
import BaseText from 'constants/BaseText';
import Images from 'constants/Images';
import homestyle from 'theme/component/HomeStyle';
import {
    RLText,
} from "basecomponent";

const Home = ({ navigation, props }) => {

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================

    //================================ Start common componenet =========================================== 
    //Screen Title
    const _renderTitle = () => {
        return (
            <View>
                <RLText
                    text={BaseText.HomeScreen}
                />
                <Image source={Images.orangelogo} style={homestyle.logoStyle}></Image>
            </View>
        )
    }

    return (
        <Fragment>
            <View style={homestyle.containerStyle}>
                {_renderTitle()}
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Home);