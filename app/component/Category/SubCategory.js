import React, { Fragment, useEffect, useState } from "react";
import { View, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import headerStyle from 'theme/component/HeaderStyle';
import searchProductStyle from 'theme/component/SearchProductStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLSearchProductList
} from 'basecomponent';

const SubCategory = ({ navigation, props }) => {
    const SearchDataList = [
        { id: 1, title: 'Vionata', img: Images.ptVio, },
        { id: 2, title: 'Opuntia', img: Images.ptopu, },
        { id: 3, title: 'Annalis', img: Images.ptann, },
        { id: 4, title: 'Columnar', img: Images.ptcol, },
        { id: 5, title: 'Milaria', img: Images.ptmil, },
        { id: 6, title: 'Inca', img: Images.ptinc, },
        // { id: 7, title: 'Floral', img: Images.kitchentools, },
        // { id: 8, title: 'Emerald', img: Images.furniture, },
        // { id: 9, title: 'Floral', img: Images.kitchentools, },
        // { id: 10, title: 'Emerald', img: Images.furniture, },
        // { id: 11, title: 'Floral', img: Images.kitchentools, },
        // { id: 12, title: 'Emerald', img: Images.furniture, },
    ]
    const ArrayList1 = [] //Array1
    const ArrayList2 = [] //Array2
    const [data1, setData1] = useState([]);//Array1
    const [data2, setData2] = useState([]);//Array2

    useEffect(() => {
        SearchDataList.map((item, index) => {
            if (index % 2 == 0) {
                ArrayList1.push(item)
                setData1(ArrayList1)
            }
            else {
                ArrayList2.push(item)
                setData2(ArrayList2)
            }
        })  //Slice Array
    }, [])
    //================================ Start common Function ===========================================

    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={Colors.lightgray}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={'Plant'}
                showTitle={true}
                showrightsimple={true}
                imgrightSimple={Images.cartRound}
                titlerightImgstyle={headerStyle.tleftImgStyle}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Filter
    const _renderFillter = () => {
        return (
            <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, searchProductStyle.filterViewStyle]}>
                <RLText
                    RlnumberOfLines={1}
                    text={'20 Items Found'}
                    style={searchProductStyle.foundtxtStyle}
                />

                <View style={[viewStyle.rowdirections, { alignItems: 'center' }]}>
                    <TouchableOpacity>
                        <Image
                            style={[searchProductStyle.filImgStyle, searchProductStyle.imgeresize]}
                            source={Images.fillter}
                        />
                    </TouchableOpacity>
                    <RLText
                        RlnumberOfLines={1}
                        text={BaseText.Filters}
                        style={searchProductStyle.filtertxtStyle}
                    />
                </View>
            </View>
        )
    }

    //Search Product
    const _renderSearchProduct = () => {
        return (
            <View style={[viewStyle.rowdirections, viewStyle.centerViewStyle, { marginBottom: 30 }]}>
                <FlatList
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                    showsVerticalScrollIndicator={false}
                    data={data1}
                    renderItem={({ item, index }) => _renderItemSearchList1({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />

                <FlatList
                    contentContainerStyle={{ alignItems: 'flex-end' }}
                    showsVerticalScrollIndicator={false}
                    data={data2}
                    renderItem={({ item, index }) => _renderItemSearchList2({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }

    //Flatlist SearchList1 Item
    const _renderItemSearchList1 = ({ item, index }) => {
        return (
            <RLSearchProductList
                imgBackgroundHeight={index % 2 == 0 ? 262 : 169}
                productName={item.title}
                productImg={item.img}
            // onPress={() => navigation.navigate('CheckOut')}
            />
        )
    }

    //Flatlist SearchList2 Item
    const _renderItemSearchList2 = ({ item, index }) => {
        return (
            <RLSearchProductList
                imgBackgroundHeight={index % 2 == 0 ? 169 : 262}
                productName={item.title}
                productImg={item.img}
            // onPress={() => navigation.navigate('CheckOut')}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor, { backgroundColor: Colors.lightgray }]}>
                <GeneralStatusBarColor backgroundColor={Colors.lightgray}
                    barStyle={"dark-content"} />
                {_header()}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    {_renderFillter()}
                    {_renderSearchProduct()}
                </ScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(SubCategory);