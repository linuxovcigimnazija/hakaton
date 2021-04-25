import React, { Fragment, useEffect, useState } from "react";
import { View, Image, ScrollView, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { connect } from 'react-redux';
import ENV from 'env/index';
import BaseStyle from 'constants/BaseStyle';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import categoryStyle from 'theme/component/CategoryStyle';
import textStyle from 'theme/component/TextStyle';
import headerStyle from 'theme/component/HeaderStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {
    RLHeader,
    RLText,
    RLPopularList
} from 'basecomponent';

const Category = ({ navigation, props }) => {

    const categoryDataList = [
        { id: 1, title: 'Sofa', img: Images.catsofa },
        { id: 2, title: 'Chair', img: Images.catchair },
        { id: 3, title: 'Bed', img: Images.catbed },
        { id: 4, title: 'Drawer', img: Images.catDraw },
        { id: 5, title: 'Plant', img: Images.catPlant },
        { id: 6, title: 'Pillow', img: Images.catPillow },
        // { id: 7, title: 'Hobby', img: Images.hobby },
        // { id: 8, title: 'Electronic', img: Images.electrinoc },
    ];
    const categoryPopulorDataList = [
        { id: 1, title: 'Green Chair', img: Images.catpGchair },
        { id: 2, title: 'Spring sofa', img: Images.catpsprisofa },
        { id: 3, title: 'Annalis', img: Images.catpAnn },
        // { id: 4, title: 'Drawer', img: Images.catDraw },
        // { id: 5, title: 'Plant', img: Images.catPlant },
        // { id: 6, title: 'Pillow', img: Images.catPillow },
        // { id: 7, title: 'Hobby', img: Images.hobby },
        // { id: 8, title: 'Electronic', img: Images.electrinoc },
    ];


    const [showCategory, setShowCategory] = useState(false); //show More Category

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //Set Single item of last row 
    const formatData = (categoryDataList, numColumns) => {
        const totalRows = Math.floor(categoryDataList.length / numColumns)
        let totalLastRow = categoryDataList.length - (totalRows * numColumns)

        while (totalLastRow !== 0 && totalLastRow !== numColumns) {
            categoryDataList.push({ id: 'blank', empty: true })
            totalLastRow++
        }
        return categoryDataList
    }

    //on Click ListItem
    const _onClickItem = (parms) => {
        switch (parms) {
            case 1:
                navigation.navigate('SubCategory')
                break;
            case 2:
                break;
            default:
                break;
        }
    }
    //================================ Start common componenet =========================================== 
    //header
    const _header = () => {
        return (
            <RLHeader
                TitleHeader={true}
                titlebackgroundColor={Colors.lightgray}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                title={'Furniture'}
                showTitle={true}
                showrightsimple={true}
                imgrightSimple={Images.cartRound}
                titlerightImgstyle={headerStyle.tleftImgStyle}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //CategoryView
    const _renderCategory = () => {
        return (
            <View style={[categoryStyle.mainViewStyle]}>
                <RLText
                    text={BaseText.Category}
                    style={[categoryStyle.categorytxtStyle, viewStyle.centerViewStyle]}
                />

                <FlatList
                    scrollEnabled={false}
                    style={[viewStyle.centerViewStyle, { marginVertical: 12 }]}
                    bounces={false}
                    data={formatData(categoryDataList, 3)}
                    renderItem={({ item, index }) => _renderItemCategoryList({ item, index })}
                    numColumns={3}
                    keyExtractor={item => item.id.toString()}
                />

                <View style={categoryStyle.sildeViewStyle} >
                    <TouchableOpacity onPress={() => setShowCategory(!showCategory)}>
                        <Image
                            source={Images.slideUp}
                            style={[categoryStyle.slideImgstyle, viewStyle.selfCenter]}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //Flatlist CategoryList Item
    const _renderItemCategoryList = ({ item, index }) => {
        if (item.empty) {
            return <View style={[viewStyle.flex, viewStyle.centerContain, { width: 91, backgroundColor: 'transparent' }]}></View>
        }
        //Show 3 Items
        if (showCategory == false && index < 3) {
            return (
                <View style={[viewStyle.flex, viewStyle.centerContain, categoryStyle.subcatemainViewStyle]}>
                    <TouchableOpacity style={[categoryStyle.subImgStyle, { backgroundColor: Colors.gray2 }]}
                        onPress={() => _onClickItem(1)}>
                        <ImageBackground
                            source={item.img}
                            style={[categoryStyle.subImgStyle, { backgroundColor: Colors.white }]}
                        />
                    </TouchableOpacity>
                    <RLText
                        RlnumberOfLines={1}
                        text={item.title}
                        style={[categoryStyle.subpronameStyle, { fontSize: 18, paddingTop: 10, fontFamily: ENV.qfontFamilyBold }]}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={'12 Items'}
                        style={[categoryStyle.subpronameStyle, { fontSize: 12, fontFamily: ENV.qfontFamilyRegular }]}
                    />
                </View>
            )
        }
        //Show All Items
        if (showCategory == true) {
            return (
                <View style={[viewStyle.flex, viewStyle.centerContain, categoryStyle.subcatemainViewStyle]}>
                    <TouchableOpacity style={[categoryStyle.subImgStyle, { backgroundColor: Colors.gray2 }]}
                        onPress={() => _onClickItem(1)}>
                        <ImageBackground
                            source={item.img}
                            style={[categoryStyle.subImgStyle, { backgroundColor: Colors.white }]}
                        />
                    </TouchableOpacity>
                    <RLText
                        RlnumberOfLines={1}
                        text={item.title}
                        style={[categoryStyle.subpronameStyle, { fontSize: 18, paddingTop: 10, fontFamily: ENV.qfontFamilyBold }]}
                    />
                    <RLText
                        RlnumberOfLines={1}
                        text={'12 Items'}
                        style={[categoryStyle.subpronameStyle, { fontSize: 12, fontFamily: ENV.qfontFamilyRegular }]}
                    />
                </View>
            )
        }
    }

    //Popular 
    const _renderPopular = () => {
        return (
            <View>
                <RLText
                    text={BaseText.Popular}
                    style={[textStyle.textWidthStyle, textStyle.categoryTextStyle,]} />

                <FlatList
                    style={{ marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 5, }}
                    data={categoryPopulorDataList}
                    renderItem={({ item, index }) => _renderItemPopularList({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }

    //Flatlist PopularList Item
    const _renderItemPopularList = ({ item, index }) => {
        return (
            <RLPopularList
                productName={item.title}
                price={'$97'}
                rateValue={'4.5'}
                ratestarValue={4.5}
                prodImg={item.img}
            />
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.lightgray}
                    barStyle={"dark-content"} />
                {_header()}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    {_renderCategory()}
                    {_renderPopular()}
                </ScrollView>
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Category);