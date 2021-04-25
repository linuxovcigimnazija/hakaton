import React, { Fragment, useEffect } from "react";
import { View, ScrollView, Image, FlatList } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import notificationStyle from 'theme/component/NotificationStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLButton,
    RLNotificationList
} from 'basecomponent';

const Notification = ({ navigation, props }) => {
    const notificationDataList = [
        { id: 1, title: 'Your order has been received.', time: 'Now' },
        { id: 2, title: 'Please review your order.', time: '1h ago' },
        { id: 3, title: 'You have some items in your wishlist.', time: '05 march 2021' },
    ]

    useEffect(() => {
    }, [])
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.Notification}
                showTitle={true}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Empty Notification
    const _renderEmptyNitification = () => {
        return (
            <View style={[viewStyle.flex, viewStyle.centerContain]}>
                <Image style={[notificationStyle.emptyImgStyle, notificationStyle.reSizeImg]}
                    source={Images.emptyNotification} />
                <RLText
                    text={BaseText.EmptyNotificationTitle}
                    style={[viewStyle.selfCenter, notificationStyle.emptyTitletxtStyle]} />
                <RLText
                    text={BaseText.HappyDay}
                    style={[viewStyle.selfCenter, notificationStyle.happytxtStyle]} />
                <RLButton
                    SimpleButton={true}
                    onpress={() => navigation.navigate('Dashboard')}
                    simplebuttontext={BaseText.ReturnHome}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn, marginTop: 55 }]}
                />
            </View>
        )
    }

    //Notification
    const _renderNotification = () => {
        return (
            <FlatList
                style={{ marginBottom: 20 }}
                bounces={false}
                data={notificationDataList}
                renderItem={({ item, index }) => _renderItemNotificationList({ item, index })}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    //Flatlist NotificationList Item
    const _renderItemNotificationList = ({ item, index }) => {
        return (
            <RLNotificationList
                title={item.title}
                marginTop={index == 0 ? 8 : 0}
                // onPress={() => alert(item.title)}
                time={item.time}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}

                <ScrollView contentContainerStyle={{ flexGrow: 1, }} bounces={false}>
                    {notificationDataList.length > 0 && _renderNotification()}
                    {notificationDataList.length <= 0 && _renderEmptyNitification()}
                </ScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Notification);