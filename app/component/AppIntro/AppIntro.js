import React, { Fragment, useEffect, useState, useRef } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import textStyle from 'theme/component/TextStyle';
import appIntroStyle from 'theme/component/AppIntroStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import ViewPager from '@react-native-community/viewpager';
import {
    RLButton,
    RLText
} from 'basecomponent';

const AppIntro = ({ navigation, props }) => {
    const pagerRef = useRef(null); //viewPagger Ref

    const [initialIndex, setInitialIndex] = useState(0); //inital Index

    useEffect(() => {

    }, [initialIndex])

    //================================ Start common Function ===========================================
    //scrollViewPagger 
    const _onPageScroll = ({ nativeEvent }) => {
        setInitialIndex(nativeEvent.position)
    }

    //onClickIndicator
    const _onSelectPagger = pageNumber => {
        pagerRef.current.setPage(pageNumber);
    }

    //click Next Button
    const _onClickNext = () => {
        if (initialIndex == 0) {
            pagerRef.current.setPage(1);
        } else if (initialIndex == 1) {
            pagerRef.current.setPage(2);
        } else if (initialIndex == 2) {
            navigation.navigate("SignIn")
        }
    }

    //================================ Start common componenet =========================================== 
    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />

                <View style={viewStyle.flex}>
                    <ViewPager
                        ref={pagerRef}
                        style={viewStyle.flex}
                        initialPage={initialIndex}
                        scrollEnabled={true}
                        onPageScroll={_onPageScroll}>

                        <View key={"1"} style={appIntroStyle.paggerViewStyle}>
                            <Image
                                source={Images.shoppingHome}
                                style={appIntroStyle.logoStyle} />

                            <RLText
                                text={BaseText.ShoppingHome}
                                style={[appIntroStyle.titleTextStyle]} />

                            <RLText
                                text={BaseText.IntroDetails}
                                style={appIntroStyle.introdetailStyle} />
                        </View>

                        <View key="2" style={appIntroStyle.paggerViewStyle}>
                            <Image
                                source={Images.produk}
                                style={appIntroStyle.logoStyle} />

                            <RLText
                                text={BaseText.ShoppingHome}
                                style={appIntroStyle.titleTextStyle} />

                            <RLText
                                text={BaseText.IntroDetails}
                                style={appIntroStyle.introdetailStyle} />
                        </View>

                        <View key="3" style={appIntroStyle.paggerViewStyle}>
                            <Image
                                source={Images.exoressDelivery}
                                style={appIntroStyle.logoStyle} />

                            <RLText
                                text={BaseText.ShoppingHome}
                                style={appIntroStyle.titleTextStyle} />

                            <RLText
                                text={BaseText.IntroDetails}
                                style={appIntroStyle.introdetailStyle} />
                        </View>
                    </ViewPager>
                </View>

                {/* Page  PageIndicator View */}
                <View style={appIntroStyle.pageIndicatorViewStyle}>
                    <TouchableOpacity
                        style={{
                            width: initialIndex == 0 ? 22 : 6,
                            height: 6,
                            borderRadius: 6 / 2,
                            backgroundColor: initialIndex == 0 ? Colors.lightBlue : Colors.gray
                        }}
                        onPress={() => _onSelectPagger(0)} />
                    <TouchableOpacity
                        style={{
                            width: initialIndex == 1 ? 22 : 6,
                            height: 6,
                            borderRadius: 6 / 2,
                            backgroundColor: initialIndex == 1 ? Colors.lightBlue : Colors.gray
                        }}
                        onPress={() => _onSelectPagger(1)} />
                    <TouchableOpacity
                        style={{
                            width: initialIndex == 2 ? 22 : 6,
                            height: 6,
                            borderRadius: 6 / 2,
                            backgroundColor: initialIndex == 2 ? Colors.lightBlue : Colors.gray
                        }}
                        onPress={() => _onSelectPagger(2)} />
                </View>
                {/* Skip View */}
                <View style={appIntroStyle.skipmainViewStyle}>
                    <View style={appIntroStyle.skipViewStyle}>
                        <RLText
                            text={BaseText.Skip}
                            style={textStyle.skiptextStyle}
                            onPress={() => navigation.navigate("SignIn")}
                        />
                        <RLButton
                            onpress={() => _onClickNext()}
                            SimpleButton={true}
                            simplebuttontext={BaseText.Next}
                            simplebuttontextStyle={buttonStyle.buttonTextStyle}
                            simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 40, backgroundColor: Colors.activebtn }]}
                        />
                    </View>
                </View>
            </View>
        </Fragment >
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(AppIntro);
