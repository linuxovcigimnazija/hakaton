import React, { Fragment, useEffect, useState } from "react";
import { View, StatusBar, Image, ScrollView, TouchableOpacity, FlatList, Platform } from "react-native";
import { connect } from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import viewStyle from 'theme/component/ViewStyle';
import dashboardStyle from 'theme/component/DashboardStyle';
import textStyle from 'theme/component/TextStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import Tooltip from 'react-native-walkthrough-tooltip';
import {
    RLHeader,
    RLText,
    RLCategoryList,
    RLSaleDiscount,
    RLPopularList
} from 'basecomponent';

const Dashboard = ({ navigation, props }) => {
    let fieldSearchRef = React.createRef();

    const categoryDataList = [
        { id: 1, title: 'Women Fashion', img: Images.women },
        { id: 2, title: 'Men  Fashion', img: Images.men },
        { id: 3, title: 'Child Fashion', img: Images.child },
        { id: 4, title: 'Food  & Drink', img: Images.fooddrink },
        { id: 5, title: 'Kitchen Tools', img: Images.kitchentools },
        { id: 6, title: 'Furniture', img: Images.furniture },
        { id: 7, title: 'Hobby', img: Images.hobby },
        { id: 8, title: 'Electronic', img: Images.electrinoc },
    ];
    const saleDiscountDataList = [
        { id: 1, title: 'Camelia Heels', img: Images.sdheels },
        { id: 2, title: 'Converse Shoes', img: Images.sdShoes },
        { id: 3, title: 'Levi’s Jacket', img: Images.sdjacket },
        { id: 4, title: 'Aphira Chair', img: Images.sdChair },
        { id: 5, title: 'Pan', img: Images.sdPan },
    ];
    const populorDataList = [
        { id: 1, title: 'Vinta Backpack', img: Images.popbeg },
        { id: 2, title: 'Kimono Clogs', img: Images.pophanky },
    ]

    const [toolTipVisible, setToolTipVisible] = useState(false); //show toolTip

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //OnChange TextInput
    const _onChangeTextField = (value, type) => {
    }

    //Submit On TextInput
    const _onSubmitEditing = (ref, other, type) => {
        let { current: field } = ref;
        field.focus()
    }

    //on Click ListItem
    const _onClickItem = (parms) => {
        switch (parms) {
            case 1:
                navigation.navigate('Category')
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
                SearchHeader={true}
                cartImg={Images.shoppingCart}
                placeholder={BaseText.Search}
                onEditTextField={(value) => _onChangeTextField(value, 'search')}
                onSubmitEditing={() => _onSubmitEditing(fieldSearchRef)}
                refKey={'search'}
                fieldRef={fieldSearchRef}
                onPress={() => navigation.navigate('SearchProduct')} />
        )
    }

    //TopView 
    const _renderTopView = () => {
        return (
            <View style={dashboardStyle.mainViewStyle}>
                <RLText
                    text={BaseText.Category}
                    style={[textStyle.textWidthStyle, textStyle.categoryTextStyle, { marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 1 }]}
                />

                <FlatList
                    bounces={false}
                    data={categoryDataList}
                    renderItem={({ item, index }) => _renderItemCategoryList({ item, index })}
                    horizontal={true}
                    keyExtractor={item => item.id.toString()}
                />

                <View style={[viewStyle.centerViewStyle, viewStyle.rowdirections, dashboardStyle.paymentViewStyle]}>
                    <View style={[viewStyle.rowdirections, dashboardStyle.priceView]}>
                        <TouchableOpacity>
                            <Image
                                style={[dashboardStyle.imgeresize, dashboardStyle.purseImgStyle]}
                                source={Images.purse} />
                        </TouchableOpacity>

                        <RLText
                            RlnumberOfLines={1}
                            text={'$1.5005'}
                            style={dashboardStyle.pricetxtStyle}
                        />
                    </View>

                    <View style={[viewStyle.rowdirections, dashboardStyle.paymentOptionViewStyle]}>
                        <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} onPress={() => navigation.navigate('Scanner')} >
                            <Image
                                style={[dashboardStyle.imgeresize, dashboardStyle.purseImgStyle]}
                                source={Images.pay} />
                            <RLText
                                text={BaseText.Pay}
                                style={dashboardStyle.paytxtStyle}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} onPress={() => navigation.navigate('TopUp')}>
                            <Image
                                style={[dashboardStyle.imgeresize, dashboardStyle.purseImgStyle]}
                                source={Images.topUp} />
                            <RLText
                                text={BaseText.TopUp}
                                style={dashboardStyle.paytxtStyle}
                            />
                        </TouchableOpacity>

                        <Tooltip
                            contentStyle={{ borderRadius: 10, height: 65, justifyContent: 'center' }}
                            animated={true}
                            topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
                            arrowSize={{ width: 20, height: 18, }}
                            backgroundColor="rgba(0,0,0,0.5)"
                            isVisible={toolTipVisible}
                            content={
                                <View style={[viewStyle.rowdirections, dashboardStyle.tooltipViewStyle]}>
                                    <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} >
                                        <Image
                                            style={[dashboardStyle.imgeresize, dashboardStyle.toolimgStyle]}
                                            source={Images.tpCharge} />
                                        <RLText
                                            text={BaseText.Charge}
                                            style={dashboardStyle.tooltxtStyle}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} >
                                        <Image
                                            style={[dashboardStyle.imgeresize, dashboardStyle.toolimgStyle]}
                                            source={Images.tpTransfer} />
                                        <RLText
                                            text={BaseText.Transfer}
                                            style={dashboardStyle.tooltxtStyle}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} >
                                        <Image
                                            style={[dashboardStyle.imgeresize, dashboardStyle.toolimgStyle]}
                                            source={Images.tpCredit} />
                                        <RLText
                                            text={BaseText.Credit}
                                            style={dashboardStyle.tooltxtStyle}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} >
                                        <Image
                                            style={[dashboardStyle.imgeresize, dashboardStyle.toolimgStyle]}
                                            source={Images.tpPaylater} />
                                        <RLText
                                            text={BaseText.PayLater}
                                            style={dashboardStyle.tooltxtStyle}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle} >
                                        <Image
                                            style={[dashboardStyle.imgeresize, dashboardStyle.toolimgStyle]}
                                            source={Images.tpSetting} />
                                        <RLText
                                            text={BaseText.Settings}
                                            style={dashboardStyle.tooltxtStyle}
                                        />
                                    </TouchableOpacity>
                                </View>
                            }
                            placement="bottom"
                            onClose={() => setToolTipVisible(false)}
                            showChildInTooltip={false}>

                            <TouchableOpacity style={dashboardStyle.paymentOptbtnStyle}
                                onPress={() => setToolTipVisible(true)} >
                                <Image
                                    style={[dashboardStyle.imgeresize, dashboardStyle.purseImgStyle]}
                                    source={Images.more} />
                                <RLText
                                    text={BaseText.More}
                                    style={dashboardStyle.paytxtStyle}
                                />
                            </TouchableOpacity>
                        </Tooltip>
                    </View>
                </View>
            </View>
        )
    }

    //Flatlist CategoryList Item
    const _renderItemCategoryList = ({ item, index }) => {
        return (
            <RLCategoryList
                isDashboardCategoryList={true}
                categoryImg={item.img}
                catname={item.title}
                marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 7.5 : 0}
                onPress={() => _onClickItem(1)} />
        )
    }

    //Flatlist SaleDiscountList Item
    const _renderItemSaleDiscountList = ({ item, index }) => {
        return (
            <RLSaleDiscount
                marginLeft={index == 0 ? BaseStyle.DEVICE_WIDTH / 100 * 7.5 : 0}
                discount={'50%'}
                productName={item.title}
                price={'$64'}
                tprice={'$125'}
                prodImg={item.img}
            />
        )
    }

    //Flatlist PopularList Item
    const _renderItemPopularList = ({ item, index }) => {
        return (
            <RLPopularList
                productName={item.title}
                price={'$78'}
                rateValue={'4.5'}
                ratestarValue={4.5}
                prodImg={item.img}
            />
        )
    }

    //Sale Discount
    const _renderSaleDiscount = () => {
        return (
            <View>
                <RLText
                    text={BaseText.SaleDiscount}
                    style={[textStyle.textWidthStyle, textStyle.categoryTextStyle, {
                        marginTop: BaseStyle.DEVICE_HEIGHT / 100 * 8, color: Colors.gray1,
                        fontSize: 20,
                        marginBottom: BaseStyle.DEVICE_HEIGHT / 100 * 4,
                    }]}
                />

                <FlatList
                    bounces={false}
                    data={saleDiscountDataList}
                    renderItem={({ item, index }) => _renderItemSaleDiscountList({ item, index })}
                    horizontal={true}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
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
                    data={populorDataList}
                    renderItem={({ item, index }) => _renderItemPopularList({ item, index })}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
                <GeneralStatusBarColor backgroundColor={Colors.lightgray}
                    barStyle={"dark-content"} />
                {_header()}

                <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
                    {_renderTopView()}
                    {_renderSaleDiscount()}
                    {_renderPopular()}
                </ScrollView>
            </View>
        </Fragment >
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(Dashboard);