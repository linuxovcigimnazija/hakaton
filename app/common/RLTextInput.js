import React from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import Images from "constants/Images";
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import textInputStyle from 'theme/component/TextInputStyle';
import ENV from 'env/index';

const RLTextInput = (props) => {
    const {
        PlainTextInput,
        PasswordTextInput,
        OtpTextInput,
        textInputViewWidth,
        fontSize,
        textInputWidth,
        placeholderTextColor,
        keyboardType,
        placeholder,
        secureTextEntry,
        hideShowImage,
        maxLength,
        passwordInputViewWidth,
        SearchTextinput,
        backgroundColor,
        onPress,
        MultiTextInput,
        returnKeyLabel,
        returnKeyType,
        onFocus,
        plainTextInputViewStyle,
        plainTextInputStyle
    } = props;

    //Onchnage Props
    const _onEditText = (value, type) => {
        props.onEditTextField(value, type);
    }

    //Plain TextInput
    const _renderPlainTextInput = () => {
        return (
            <View style={[textInputStyle.plainInputViewStyle, plainTextInputViewStyle, { width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 85, }]}>
                <TextInput
                    style={[textInputStyle.plainInputStyle, plainTextInputStyle, { fontSize: fontSize ? fontSize : 14, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 75, fontFamily: ENV.nfontFamilyBold }]}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                />
            </View>
        )
    }

    //Password TextInput
    const _renderPasswordTextInput = () => {
        return (
            <View style={[textInputStyle.plainInputViewStyle, { width: BaseStyle.DEVICE_WIDTH / 100 * 85 }]}>
                <View style={[textInputStyle.passwordInputViewStyle, { width: passwordInputViewWidth ? passwordInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 75, }]}>
                    <TextInput
                        style={{ height: 60, fontSize: fontSize ? fontSize : 14, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 65, fontFamily: ENV.nfontFamilyBold, }}
                        ref={props.fieldRef}
                        placeholder={placeholder}
                        onSubmitEditing={(event) => {
                            props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                        }}
                        onChangeText={(value, type) => _onEditText(value, type)}
                        secureTextEntry={secureTextEntry}
                        maxLength={maxLength}
                        keyboardType={keyboardType ? keyboardType : 'default'}
                        placeholderTextColor={placeholderTextColor}
                    />
                    <TouchableOpacity style={textInputStyle.passwordbtnStyle}>
                        <Image
                            source={hideShowImage}
                            style={textInputStyle.hidepasswordImgStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //Otp TextInput
    const _renderOtpTextInput = () => {
        return (
            <View style={[textInputStyle.plainInputViewStyle, { width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 17, borderRadius: 10 }]}>
                <TextInput
                    style={[textInputStyle.plainInputStyle, { fontSize: fontSize ? fontSize : 14, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 17, textAlign: 'center', fontFamily: ENV.nfontFamilyBold, }]}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                    returnKeyType={returnKeyType}
                />
            </View>
        )
    }

    //Search TextInput
    const _renderSearchTextInput = () => {
        return (
            <View style={[textInputStyle.passwordInputViewStyle, { width: textInputViewWidth ? textInputViewWidth : BaseStyle.DEVICE_WIDTH / 100 * 72, backgroundColor: backgroundColor ? backgroundColor : Colors.white, borderRadius: 30, }]}>
                <TextInput
                    style={{ height: 36, fontSize: fontSize ? fontSize : 14, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 56, paddingLeft: 15, fontFamily: ENV.nfontFamilyRegular, }}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                />
                <TouchableOpacity style={textInputStyle.sbtnSearchStyle} onPress={onPress}>
                    <Image
                        source={Images.search}
                        style={textInputStyle.serachImgStyle} />
                </TouchableOpacity>
            </View>
        )
    }

    //Multi TextInput
    const _renderMultiTextInput = () => {
        return (
            <View style={{ height: 84, width: BaseStyle.DEVICE_WIDTH / 100 * 85, borderRadius: 10, borderColor: Colors.gray, borderWidth: 0.5, justifyContent: 'center' }}>
                <TextInput
                    style={{ textAlignVertical: 'top', height: 75, fontSize: fontSize ? fontSize : 14, width: textInputWidth ? textInputWidth : BaseStyle.DEVICE_WIDTH / 100 * 80, alignSelf: 'center', }}
                    ref={props.fieldRef}
                    placeholder={placeholder}
                    onSubmitEditing={(event) => {
                        props.onSubmitEditing(props.fieldNextRef, props.refKey + '')
                    }}
                    onChangeText={(value, type) => _onEditText(value, type)}
                    secureTextEntry={secureTextEntry}
                    maxLength={maxLength}
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    placeholderTextColor={placeholderTextColor}
                    multiline={true}
                    blurOnSubmit={true}
                    numberOfLines={4}
                    returnKeyLabel={returnKeyLabel}
                    returnKeyType={returnKeyType}
                    onFocus={onFocus}
                />
            </View>
        )
    }

    return (
        <View>
            {PlainTextInput && _renderPlainTextInput()}
            {PasswordTextInput && _renderPasswordTextInput()}
            {OtpTextInput && _renderOtpTextInput()}
            {SearchTextinput && _renderSearchTextInput()}
            {MultiTextInput && _renderMultiTextInput()}
        </View>
    );
};
export default RLTextInput;