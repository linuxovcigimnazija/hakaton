import React, { Fragment, useEffect, useState, useRef } from "react";
import { View, Image, ScrollView, TouchableOpacity, ImageBackground, Text } from "react-native";
import { connect } from 'react-redux';
import BaseText from "constants/BaseText";
import Colors from 'constants/Colors';
import Images from "constants/Images";
import BaseStyle from 'constants/BaseStyle';
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import addCartStyle from 'theme/component/AddCartStyle';
import headerStyle from 'theme/component/HeaderStyle';
import ViewPager from '@react-native-community/viewpager';
import { SIZE_BUTTONTYPE, COLOR_BUTTONTYPE } from 'constants/Enum';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import { Rating, } from "react-native-ratings";
import {
    RLHeader,
    RLText,
    RLButton
} from 'basecomponent';

const AddCart = ({ navigation, props }) => {
    const pagerRef = useRef(null); //viewPagger Ref
    const scrollViewRef = useRef(); //viewPagger Ref

    const offset = 0;
    const [initialIndex, setInitialIndex] = useState(0); //inital Index
    const [showDescription, setShowDescription] = useState(false); //show Description
    const [selectedSizeButton, setSelectedSizeButton] = useState(''); //Size
    const [selectedColorButton, setSelectedColorButton] = useState(''); //Color

    useEffect(() => {

    }, [])
    //================================ Start common Function ===========================================
    //scrollViewPagger 
    const _onPageScroll = ({ nativeEvent }) => {
        setInitialIndex(nativeEvent.position)
    }

    //Selcet Dot
    const _onSelectPagger = pageNumber => {
        pagerRef.current.setPage(pageNumber);
    }

    //Show descriptions
    const onScroll = (nativeEvent) => {
        var currentOffset = nativeEvent.contentOffset.y;
        var direction = currentOffset > offset ? 'down' : 'up';
        if (direction == 'down') {
            setShowDescription(true)
        }
    }

    // Product Info Button Click
    const _onClickProductInfo = (buttonType) => {
        switch (buttonType) {
            case SIZE_BUTTONTYPE.S:
                setSelectedSizeButton(SIZE_BUTTONTYPE.S)
                break;
            case SIZE_BUTTONTYPE.M:
                setSelectedSizeButton(SIZE_BUTTONTYPE.M)
                break;
            case SIZE_BUTTONTYPE.L:
                setSelectedSizeButton(SIZE_BUTTONTYPE.L)
                break;
            case SIZE_BUTTONTYPE.XL:
                setSelectedSizeButton(SIZE_BUTTONTYPE.XL)
                break;
            case COLOR_BUTTONTYPE.P:
                setSelectedColorButton(COLOR_BUTTONTYPE.P)
                break;
            case COLOR_BUTTONTYPE.O:
                setSelectedColorButton(COLOR_BUTTONTYPE.O)
                break;
            case COLOR_BUTTONTYPE.G:
                setSelectedColorButton(COLOR_BUTTONTYPE.G)
                break;
            case COLOR_BUTTONTYPE.Y:
                setSelectedColorButton(COLOR_BUTTONTYPE.Y)
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
                titlebackgroundColor={Colors.white}
                showleftsimple={true}
                imgleftSimple={Images.previousArrowRound}
                showrightsimple={true}
                imgrightSimple={Images.cartRound}
                titlerightImgstyle={headerStyle.tleftImgStyle}
                onPressleftSimple={() => navigation.goBack()}
            />
        )
    }

    //Slider Image view
    const _renderSlider = () => {
        return (
            <View style={viewStyle.flex}>
                <ViewPager
                    ref={pagerRef}
                    style={viewStyle.flex}
                    initialPage={initialIndex}
                    scrollEnabled={true}
                    onPageScroll={_onPageScroll}
                    pageMargin={BaseStyle.DEVICE_WIDTH / 100 * 80} //Optional 
                >
                    <View key={"1"} style={{ backgroundColor: Colors.white, flex: 1, }}>
                        <ImageBackground
                            style={{ flex: 1, }}
                            imageStyle={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                            source={Images.serOr}>
                            <View style={[viewStyle.flex]}>
                            </View>
                            <View style={[viewStyle.rowdirections, viewStyle.centerViewStyle, addCartStyle.dotContainerViewStyle]}>
                                <View style={[viewStyle.rowdirections, addCartStyle.dotViewStyle]}>
                                    <TouchableOpacity onPress={() => _onSelectPagger(0)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 0 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => _onSelectPagger(1)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 1 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => _onSelectPagger(2)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 2 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                </View>
                                <View style={[addCartStyle.heartViewStyle, viewStyle.rowdirections]}>
                                    <TouchableOpacity>
                                        <Image
                                            style={[addCartStyle.heartImgStyle, addCartStyle.resizeImg]}
                                            source={Images.lovered} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View key={"2"} style={{ backgroundColor: Colors.white, }}>
                        <ImageBackground
                            style={{ flex: 1 }}
                            imageStyle={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                            source={Images.serOr}>
                            <View style={[viewStyle.flex]}></View>
                            <View style={[viewStyle.rowdirections, viewStyle.centerViewStyle, addCartStyle.dotContainerViewStyle]}>
                                <View style={[viewStyle.rowdirections, addCartStyle.dotViewStyle]}>
                                    <TouchableOpacity onPress={() => _onSelectPagger(0)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 0 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => _onSelectPagger(1)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 1 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => _onSelectPagger(2)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 2 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                </View>
                                <View style={[addCartStyle.heartViewStyle, viewStyle.rowdirections]}>
                                    <TouchableOpacity>
                                        <Image
                                            style={[addCartStyle.heartImgStyle, addCartStyle.resizeImg]}
                                            source={Images.lovered} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                    <View key={"3"} style={{ backgroundColor: Colors.white, }}>
                        <ImageBackground
                            style={{ flex: 1 }}
                            imageStyle={{ height: '100%', width: '100%', resizeMode: 'contain' }}
                            source={Images.serOr}>
                            <View style={[viewStyle.flex]}></View>
                            <View style={[viewStyle.rowdirections, viewStyle.centerViewStyle, addCartStyle.dotContainerViewStyle]}>
                                <View style={[viewStyle.rowdirections, addCartStyle.dotViewStyle]}>
                                    <TouchableOpacity onPress={() => _onSelectPagger(0)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 0 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => _onSelectPagger(1)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 1 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                    <TouchableOpacity onPress={() => _onSelectPagger(2)} style={[addCartStyle.dotStyle, { backgroundColor: initialIndex == 2 ? Colors.darkGray : Colors.white }]}></TouchableOpacity>
                                </View>
                                <View style={[addCartStyle.heartViewStyle, viewStyle.rowdirections]}>
                                    <TouchableOpacity>
                                        <Image
                                            style={[addCartStyle.heartImgStyle, addCartStyle.resizeImg]}
                                            source={Images.lovered} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </ViewPager >
            </View >
        )
    }

    // Cart Detail
    const _renderCartDetail = () => {
        return (
            <View style={addCartStyle.detailmainViewStyle}>
                <ScrollView
                    ref={scrollViewRef}
                    onScroll={({ nativeEvent }) => onScroll(nativeEvent)}>

                    <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
                        <Image
                            source={Images.slideUp}
                            style={[addCartStyle.slideImgStyle, viewStyle.selfCenter]} />
                    </TouchableOpacity>

                    {/* //text View */}
                    <View style={[addCartStyle.detailSubViewStyle, viewStyle.centerViewStyle, viewStyle.rowdirections, { marginVertical: 15, justifyContent: 'space-between' }]}>
                        <View style={addCartStyle.prodnameViewStyle}>
                            <RLText
                                text={'Orange Summer'}
                                RlnumberOfLines={1}
                                style={[addCartStyle.prodnametxtStyle]}
                            />
                            <View style={[viewStyle.rowdirections, { alignItems: 'center' }]}>
                                <Rating
                                    type='custom'
                                    imageSize={12}
                                    startingValue={4.5}
                                    readonly={true}
                                />
                                <RLText
                                    text={'4.5'}
                                    style={[addCartStyle.ratetxtStyle]}
                                />
                            </View>
                        </View>
                        <View style={[addCartStyle.prodnameViewStyle]}>
                            <RLText
                                text={'$97'}
                                RlnumberOfLines={1}
                                style={[addCartStyle.pricetxtStyle, { color: Colors.darkGray }]}
                            />
                        </View>
                    </View>

                    {/* Size View */}
                    <View style={[addCartStyle.detailSubViewStyle, viewStyle.centerViewStyle, viewStyle.rowdirections, { justifyContent: 'space-between' }]}>
                        <RLText
                            text={BaseText.Size}
                            RlnumberOfLines={1}
                            style={[addCartStyle.sizetxtStyle]}
                        />
                        <View style={[viewStyle.rowdirections, addCartStyle.sizebtnViewStyle]}>
                            <RLButton
                                SimpleButton={true}
                                onpress={() => _onClickProductInfo(SIZE_BUTTONTYPE.S)}
                                simplebuttonStyle={[viewStyle.centerContain, addCartStyle.sizebtnStyle, { backgroundColor: selectedSizeButton == SIZE_BUTTONTYPE.S ? Colors.activebtn : Colors.lightgray }]}
                                simplebuttontext={BaseText.S}
                                simplebuttontextStyle={{ color: selectedSizeButton == SIZE_BUTTONTYPE.S ? Colors.white : Colors.darkGray }}
                            />
                            <RLButton
                                SimpleButton={true}
                                onpress={() => _onClickProductInfo(SIZE_BUTTONTYPE.M)}
                                simplebuttonStyle={[viewStyle.centerContain, addCartStyle.sizebtnStyle, { backgroundColor: selectedSizeButton == SIZE_BUTTONTYPE.M ? Colors.activebtn : Colors.lightgray }]}
                                simplebuttontext={BaseText.M}
                                simplebuttontextStyle={{ color: selectedSizeButton == SIZE_BUTTONTYPE.M ? Colors.white : Colors.darkGray }}
                            />
                            <RLButton
                                SimpleButton={true}
                                onpress={() => _onClickProductInfo(SIZE_BUTTONTYPE.L)}
                                simplebuttonStyle={[viewStyle.centerContain, addCartStyle.sizebtnStyle, { backgroundColor: selectedSizeButton == SIZE_BUTTONTYPE.L ? Colors.activebtn : Colors.lightgray }]}
                                simplebuttontext={BaseText.L}
                                simplebuttontextStyle={{ color: selectedSizeButton == SIZE_BUTTONTYPE.L ? Colors.white : Colors.darkGray }}
                            />
                            <RLButton
                                SimpleButton={true}
                                onpress={() => _onClickProductInfo(SIZE_BUTTONTYPE.XL)}
                                simplebuttonStyle={[viewStyle.centerContain, addCartStyle.sizebtnStyle, { backgroundColor: selectedSizeButton == SIZE_BUTTONTYPE.XL ? Colors.activebtn : Colors.lightgray }]}
                                simplebuttontext={BaseText.XL}
                                simplebuttontextStyle={{ color: selectedSizeButton == SIZE_BUTTONTYPE.XL ? Colors.white : Colors.darkGray }}
                            />
                        </View>
                    </View>

                    {/* Color View */}
                    <View style={[addCartStyle.detailSubViewStyle, viewStyle.centerViewStyle, viewStyle.rowdirections, { justifyContent: 'space-between', marginVertical: 10 }]}>
                        <RLText
                            text={BaseText.Choosecolor}
                            RlnumberOfLines={1}
                            style={[addCartStyle.sizetxtStyle]}
                        />
                        <View style={[viewStyle.rowdirections, addCartStyle.sizebtnViewStyle]}>
                            <TouchableOpacity
                                style={[viewStyle.centerContain, addCartStyle.colorbtnStyle, { backgroundColor: Colors.lightgray, borderColor: selectedColorButton == COLOR_BUTTONTYPE.P ? Colors.darkGray : Colors.white }]}
                                onPress={() => _onClickProductInfo(COLOR_BUTTONTYPE.P)}>
                                <View style={[addCartStyle.colorViewStyle, { backgroundColor: '#FF809F' }]}></View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[viewStyle.centerContain, addCartStyle.colorbtnStyle, { backgroundColor: Colors.lightgray, borderColor: selectedColorButton == COLOR_BUTTONTYPE.O ? Colors.darkGray : Colors.white }]}
                                onPress={() => _onClickProductInfo(COLOR_BUTTONTYPE.O)}>
                                <View style={[addCartStyle.colorViewStyle, { backgroundColor: '#FFA771' }]}></View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[viewStyle.centerContain, addCartStyle.colorbtnStyle, { backgroundColor: Colors.lightgray, borderColor: selectedColorButton == COLOR_BUTTONTYPE.G ? Colors.darkGray : Colors.white }]}
                                onPress={() => _onClickProductInfo(COLOR_BUTTONTYPE.G)}>
                                <View style={[addCartStyle.colorViewStyle, { backgroundColor: '#C7DC5B' }]}></View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[viewStyle.centerContain, addCartStyle.colorbtnStyle, { backgroundColor: Colors.lightgray, borderColor: selectedColorButton == COLOR_BUTTONTYPE.Y ? Colors.darkGray : Colors.white }]}
                                onPress={() => _onClickProductInfo(COLOR_BUTTONTYPE.Y)}>
                                <View style={[addCartStyle.colorViewStyle, { backgroundColor: '#FED883' }]}></View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* QulityView  */}
                    <View style={[addCartStyle.detailSubViewStyle, viewStyle.centerViewStyle, viewStyle.rowdirections, { justifyContent: 'space-between', marginBottom: 2 }]}>
                        <RLText
                            text={BaseText.SelectQty}
                            RlnumberOfLines={1}
                            style={[addCartStyle.sizetxtStyle]}
                        />
                        <View style={[viewStyle.rowdirections, addCartStyle.sizebtnViewStyle]}>
                            <TouchableOpacity style={[viewStyle.centerContain, addCartStyle.sizebtnStyle]}>
                                <Image source={Images.subscrtion}
                                    style={[addCartStyle.subimgStyle, addCartStyle.resizeImg]} />
                            </TouchableOpacity>

                            <RLButton
                                SimpleButton={true}
                                RlnumberOfLines={1}
                                simplebuttonStyle={[viewStyle.centerContain, addCartStyle.qtyaddStyle]}
                                simplebuttontext={'3'}
                                simplebuttontextStyle={{ color: Colors.darkGray }} />

                            <TouchableOpacity style={[viewStyle.centerContain, addCartStyle.sizebtnStyle]}>
                                <Image source={Images.addition}
                                    style={[addCartStyle.subimgStyle, addCartStyle.resizeImg]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {showDescription &&
                        <View>
                            <RLText
                                text={BaseText.Description}
                                RlnumberOfLines={1}
                                style={[viewStyle.centerViewStyle, addCartStyle.desctxtStyle, { marginBottom: 10 }]}
                            />
                            <RLText
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus accumsan erat id facilisis. Duis aute irure dolor in reprehenderit in voluptate velit.'}
                                style={[viewStyle.centerViewStyle, addCartStyle.desctxtStyle, { lineHeight: 25, color: Colors.gray1, fontSize: 12, }]}
                            />
                        </View>
                    }
                    <RLButton
                        SimpleButton={true}
                        onpress={() => navigation.navigate('CheckOut')}
                        simplebuttontext={BaseText.AddtoCart}
                        simplebuttontextStyle={buttonStyle.buttonTextStyle}
                        simplebuttonStyle={[buttonStyle.commonbuttonStyle, addCartStyle.addCartbtnStyle]}
                    />
                </ScrollView>
            </View >
        )
    }

    return (
        <Fragment>
            <View style={[viewStyle.flex, { backgroundColor: Colors.white }]}>
                <GeneralStatusBarColor backgroundColor={Colors.white}
                    barStyle={"dark-content"} />
                {_header()}

                {_renderSlider()}
                {_renderCartDetail()}
            </View>
        </Fragment>
    );
};

const select = (store) => {
    return store;
}
export default connect(select)(AddCart);