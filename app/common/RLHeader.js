import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Colors from 'constants/Colors';
import textStyle from 'theme/component/TextStyle';
import headerStyle from 'theme/component/HeaderStyle';
import {RLText, RLTextInput} from 'basecomponent';

const RLHeader = (props) => {
  const {
    SimpleHeader,
    showTitle,
    showleftsimple,
    showrightsimple,
    onPressleftSimple,
    onPressrightSimple,
    imgleftSimple,
    imgrightSimple,
    textrightSimple,
    SearchHeader,
    cartImg,
    placeholder,
    onEditTextField,
    onSubmitEditing,
    refKey,
    fieldRef,
    TitleHeader,
    titlebackgroundColor,
    title,
    onPress,
    CartHeader,
    titlerightImgstyle,
  } = props;

  //plain Header
  const _renderSimpleHeader = () => {
    return (
      <View style={[headerStyle.mainView]}>
        <View style={headerStyle.headerViewStyle}>
          <View style={headerStyle.leftViewStyle}>
            {showleftsimple && (
              <TouchableOpacity onPress={onPressleftSimple}>
                <Image
                  source={imgleftSimple}
                  style={headerStyle.leftImgStyle}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={headerStyle.leftViewStyle}>
            {showrightsimple && (
              <RLText
                text={textrightSimple}
                style={textStyle.signIntextStyle}
                onPress={onPressrightSimple}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  //search Header
  const _renderSearchHeader = () => {
    return (
      <View style={headerStyle.smainView}>
        <View style={[headerStyle.headerViewStyle]}>
          <RLTextInput
            SearchTextinput={true}
            placeholder={placeholder}
            placeholderTextColor={Colors.gray}
            onEditTextField={onEditTextField}
            onSubmitEditing={onSubmitEditing}
            refKey={refKey}
            fieldRef={fieldRef}
            onPress={onPress}
          />
          <View style={headerStyle.scartViewStyle}>
            <Image source={cartImg} style={headerStyle.scartStyle} />
          </View>
        </View>
      </View>
    );
  };

  //Title Header
  const _renderTitleHeader = () => {
    return (
      <View style={[headerStyle.mainView, {backgroundColor: '#94553a'}]}>
        <View
          style={[headerStyle.headerViewStyle, {backgroundColor: '#94553a'}]}>
          <View style={headerStyle.tleftViewStyle}>
            {showleftsimple && (
              <TouchableOpacity onPress={onPressleftSimple}>
                <Image
                  source={imgleftSimple}
                  style={headerStyle.tleftImgStyle}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={headerStyle.ttxtViewStyle}>
            {showTitle && (
              <RLText
                RlnumberOfLines={1}
                text={title}
                style={textStyle.titleHeaderTextStyle}
              />
            )}
          </View>

          <View style={headerStyle.tleftViewStyle}>
            {showrightsimple && (
              <TouchableOpacity
                style={{alignSelf: 'flex-end'}}
                onPress={onPressrightSimple}>
                <Image
                  source={imgrightSimple}
                  style={
                    titlerightImgstyle
                      ? titlerightImgstyle
                      : [headerStyle.tmenuImgStyle, headerStyle.resizeStyle]
                  }
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  //Cart Header
  const _renderCartHeader = () => {
    return (
      <View style={[headerStyle.mainView, {backgroundColor: '#94553a'}]}>
        <View style={headerStyle.headerViewStyle}>
          <View style={headerStyle.leftViewStyle}>
            {showleftsimple && (
              <TouchableOpacity onPress={onPressleftSimple}>
                <Image
                  source={imgleftSimple}
                  style={headerStyle.leftImgStyle}
                />
              </TouchableOpacity>
            )}
          </View>

          <View style={headerStyle.leftViewStyle}>
            {showrightsimple && (
              <TouchableOpacity onPress={onPressrightSimple}>
                <Image
                  source={imgrightSimple}
                  style={[headerStyle.crightImgStyle, headerStyle.resizeStyle]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      {SimpleHeader && _renderSimpleHeader()}
      {SearchHeader && _renderSearchHeader()}
      {TitleHeader && _renderTitleHeader()}
      {CartHeader && _renderCartHeader()}
    </View>
  );
};
export default RLHeader;
