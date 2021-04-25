import React, { Fragment, useEffect } from "react";
import { View, TouchableOpacity, Image, ScrollView, FlatList, ImageBackground } from "react-native";
import { connect } from 'react-redux';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import textStyle from 'theme/component/TextStyle';
import profileStyle from 'theme/component/ProfileStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLText,
    RLProfileSettingList
} from 'basecomponent';
import ENV from 'env/index';

const Profile = ({ navigation, props }) => {

    const ProfileSettingDataList = [
        { id: 1, title: 'Account', img: Images.account },
        { id: 2, title: 'My Address', img: Images.address },
        { id: 3, title: 'My Order', img: Images.order },
        { id: 4, title: 'My Favourites', img: Images.favourites },
        { id: 5, title: 'Payment', img: Images.payment }

    ]

    useEffect(() => {
    }, [])
    //================================ Start common Function ===========================================
    //================================ Start common componenet =========================================== 
    //Profile View
    const _renderTopView = () => {
        return (
            <View style={[profileStyle.topViewStyle]}>
                <ImageBackground style={[profileStyle.topViewPhoto]}
                    source={Images.profileCover}>
                    <TouchableOpacity style={[profileStyle.profileBtnStyle]}>
                        <Image style={profileStyle.profileImgStyle} source={Images.tabUserprofile} />
                    </TouchableOpacity>

                    <RLText
                        text={'Petar Petrović'}
                        RlnumberOfLines={1}
                        style={[textStyle.textWidthStyle, textStyle.userNameTextStyle, { paddingTop: 12, fontFamily: ENV.nfontFamilyBold }]} />

                    <RLText
                        text={'petarpetrovic@gmail.com'}
                        RlnumberOfLines={1}
                        style={[textStyle.textWidthStyle, textStyle.userNameTextStyle, { fontSize: 12, paddingBottom: 8, paddingTop: 2, fontFamily: ENV.nfontFamilyBold }]} />
                    
                    <View style={profileStyle.scoreView}>
                        <RLText
                            text={'Tvoj rezultat:'}
                            RlnumberOfLines={1}
                            style={[textStyle.textWidthStyle, textStyle.userNameTextStyle, { textALignVertical: 'center', flex: 0.5, fontSize: 24, fontFamily: ENV.nfontFamilyBold }]} />
                        <View style={profileStyle.trophyView}>
                            <RLText
                                text={'4000'}
                                RlnumberOfLines={1}
                                style={[textStyle.textWidthStyle, textStyle.userNameTextStyle, { fontSize: 28, fontFamily: ENV.nfontFamilyRegular }]} />             
                            <Image
                                source={Images.trophy}
                                style={{ width: 5, height: 8, resizeMode: 'contain' }}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    //FlatList Profile Setting 
    const _renderProfileSettingFlatList = () => {
        return (
            <FlatList
                style={{ bottom: 33, marginTop: 40 }}
                data={ProfileSettingDataList}
                renderItem={({ item, index }) => _renderItemProfileSettingList({ item, index })}
                keyExtractor={item => item.id.toString()} />
        )
    }

    //Flatlist ProfileSettingList Item
    const _renderItemProfileSettingList = ({ item, index }) => {
        return (
            <RLProfileSettingList
                settingicons={item.img}
                title={item.title}
                marginTop={index == 0 ? 3 : 0}
            // onPress={() => alert(item.title)}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    {_renderTopView()}
                    {_renderProfileSettingFlatList()}
                </ScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Profile);