import React, { Fragment, useEffect, useState } from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import checkOutStyle from 'theme/component/CheckOutStyle';
import checkOutListStyle from 'theme/component/CheckOutListStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import { SwipeListView } from 'react-native-swipe-list-view';
import {
    RLHeader,
    RLText,
    RLButton,
    RLCheckOutList
} from 'basecomponent';

const CheckOut = ({ navigation, props }) => {
    const SearchDataList = [
        { id: 1, title: 'Levi’s Jeans', color: 'Dark Gray', size: 'L', price: '$76', qty: 5, img: Images.chekLeviJens },
        { id: 2, title: 'Milano Parada', color: 'Dark Gray', size: 'L', price: '$76', qty: 5, img: Images.checkMilano },
        // { id: 3, title: 'Levi’s Jeans', color: 'Dark Gray', size: 'L', price: '$76', qty: 5 },
        // { id: 4, title: 'Levi’s Jeans', color: 'Dark Gray', size: 'L', price: '$76', qty: 5 },
        // { id: 5, title: 'Levi’s Jeans', color: 'Dark Gray', size: 'L', price: '$76', qty: 5 },
        // { id: 6, title: 'Levi’s Jeans', color: 'Dark Gray', size: 'L', price: '$76', qty: 5 },
    ]
    const [check, setCheck] = useState(false);

    useEffect(() => {
    }, [])
    //================================ Start common Function ===========================================
    const _onClickCheckItem = () => {
        setCheck(!check)
    }
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={BaseText.MyCart}
                showrightsimple={true}
                showTitle={true}
                imgrightSimple={Images.menu}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Item Separator
    const FlatListItemSeparator = () => {
        return (
            <View style={[checkOutListStyle.itemSepStyle]} />
        );
    };

    //Flatlist CheckOut Item
    const renderItem = data => (
        <RLCheckOutList
            prodName={data.item.title}
            prodColor={data.item.color}
            pordSize={data.item.size}
            prodPrice={data.item.price}
            prodQty={data.item.qty}
            prodImg={data.item.img}
            showCheckImge={check ? true : false}
            onPressCheck={() => _onClickCheckItem()} />
    );

    //Hide Item 
    const renderHiddenItem = (data, rowMap) => (
        <View style={[checkOutStyle.rowBack]}>
            <TouchableOpacity
                style={[checkOutStyle.backRightBtn, checkOutStyle.backRightBtnRight]}
            // onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Image
                    source={Images.deleteWhite}
                    style={checkOutStyle.deleteIconWhiteStyle}
                />
            </TouchableOpacity>
        </View>
    );

    // Check Out Button
    const _renderCheckOutButton = () => {
        return (
            <View style={checkOutStyle.checkOutMainViewStyle}>
                <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, checkOutStyle.totalTextViewStyle]}>
                    <RLText
                        text={BaseText.smallSubTotal}
                        style={checkOutStyle.subtxtStyle}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={'$152'}
                        style={[checkOutStyle.priceTxtStyle]}
                    />
                </View>
                <RLButton
                    SimpleButton={true}
                    onpress={() => navigation.navigate('Payment')}
                    simplebuttontext={BaseText.CheckOut}
                    simplebuttontextStyle={buttonStyle.buttonTextStyle}
                    simplebuttonStyle={[buttonStyle.commonbuttonStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85, backgroundColor: Colors.activebtn }]}
                />
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor, { backgroundColor: Colors.lightgray }]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    <SwipeListView
                        style={{ marginTop: 10 }}
                        bounces={false}
                        data={SearchDataList}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        ItemSeparatorComponent={FlatListItemSeparator}
                        leftOpenValue={0}
                        rightOpenValue={-40}
                        previewRowKey={0}
                        previewOpenValue={0}
                        previewOpenDelay={3000}
                        keyExtractor={item => item.id.toString()}
                    />
                </ScrollView>
                {_renderCheckOutButton()}
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(CheckOut);