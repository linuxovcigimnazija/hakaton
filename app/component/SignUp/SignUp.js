import React, {Fragment, useEffect} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from 'constants/BaseText';
import Colors from 'constants/Colors';
import Images from 'constants/Images';
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import textStyle from 'theme/component/TextStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {consoleLog} from 'utils/console';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
import {
  RLButton,
  RLText,
  RLHeaderSignIn,
  RLHeader,
  RLTextInput,
} from 'basecomponent';

const SignUp = ({navigation, props}) => {
  let fieldNameRef = React.createRef();
  let fieldEmailRef = React.createRef();
  let fieldPasswordRef = React.createRef();
  let fieldCPasswordRef = React.createRef();

  useEffect(() => {
    consoleLog('Name', 'Ecommerce');
  }, []);
  //================================ Start common Function ===========================================
  //OnChange TextInput
  const _onChangeTextField = (value, type) => {};

  //Submit On TextInput
  const _onSubmitEditing = (ref, other, type) => {
    let {current: field} = ref;
    field.focus();
  };
  //================================ Start common componenet ===========================================
  //header
  const _header = () => {
    return (
      <RLHeader
        SimpleHeader={true}
        showrightsimple={true}
        textrightSimple={'PRIJAVI SE'}
        onPressrightSimple={() => navigation.navigate('SignIn')}
      />
    );
  };

  //Intro Header
  const _renderHeader = () => {
    return (
      <RLHeaderSignIn
        title={'Registruj se'}
        title1={'Unesi podatke profila ili napravi novi nalog'}
        title2={'Nalog je potreban za puno iskustvo unutar aplikacije'}
      />
    );
  };

  //Text Input
  const _renderTextInput = () => {
    return (
      <View>
        <View
          style={[
            viewStyle.selfCenter,
            {
              marginTop: (BaseStyle.DEVICE_HEIGHT / 100) * 5,
              marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 2,
            },
          ]}>
          <RLTextInput
            PlainTextInput={true}
            placeholder={'Ime'}
            placeholderTextColor={Colors.gray}
            onEditTextField={(value) => _onChangeTextField(value, 'userName')}
            onSubmitEditing={() => _onSubmitEditing(fieldEmailRef)}
            refKey={'name'}
            fieldRef={fieldNameRef}
          />
        </View>

        <View
          style={[
            viewStyle.selfCenter,
            {marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 2},
          ]}>
          <RLTextInput
            PlainTextInput={true}
            placeholder={'Email'}
            placeholderTextColor={Colors.gray}
            onEditTextField={(value) => _onChangeTextField(value, 'userName')}
            onSubmitEditing={() => _onSubmitEditing(fieldPasswordRef)}
            refKey={'email'}
            fieldRef={fieldEmailRef}
          />
        </View>

        <View
          style={[
            viewStyle.selfCenter,
            {marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 2},
          ]}>
          <RLTextInput
            PasswordTextInput={true}
            hideShowImage={Images.hidePassword}
            placeholder={'Unesi šifru'}
            placeholderTextColor={Colors.gray}
            secureTextEntry={true}
            onEditTextField={(value) => _onChangeTextField(value, 'userName')}
            onSubmitEditing={() => _onSubmitEditing(fieldCPasswordRef)}
            refKey={'password'}
            fieldRef={fieldPasswordRef}
          />
        </View>

        <View
          style={[
            viewStyle.selfCenter,
            {marginBottom: (BaseStyle.DEVICE_HEIGHT / 100) * 2},
          ]}>
          <RLTextInput
            PasswordTextInput={true}
            hideShowImage={Images.hidePassword}
            placeholder={'Unesi ponovo šifru'}
            placeholderTextColor={Colors.gray}
            secureTextEntry={true}
            onEditTextField={(value) => _onChangeTextField(value, 'userName')}
            onSubmitEditing={() => _onSubmitEditing(fieldCPasswordRef)}
            refKey={'cpassword'}
            fieldRef={fieldCPasswordRef}
          />
        </View>
      </View>
    );
  };

  //Sign Button
  const _renderSignButton = () => {
    return (
      <RLButton
        SimpleButton={true}
        simplebuttontext={'REGISTRUJ SE'}
        simplebuttontextStyle={buttonStyle.buttonTextStyle}
        simplebuttonStyle={[
          buttonStyle.commonbuttonStyle,
          {
            width: (BaseStyle.DEVICE_WIDTH / 100) * 85,
            backgroundColor: '#cab09d',
          },
        ]}
      />
    );
  };

  //Social Button
  const _renderSocialButton = () => {
    return (
      <View style={{marginBottom: 30}}>
        <RLButton
          ImageButton={true}
          image={Images.google}
          simplebuttontext={'NASTAVI UZ GOOGLE'}
          simplebuttontextStyle={[
            buttonStyle.imgbtnTextStyle,
            {color: Colors.darkGray},
          ]}
          simplebuttonStyle={[
            buttonStyle.imgbuttonStyle,
            {
              width: (BaseStyle.DEVICE_WIDTH / 100) * 85,
              backgroundColor: Colors.lightgray,
            },
          ]}
        />
        <RLButton
          ImageButton={true}
          image={Images.facebook}
          simplebuttontext={'NASTAVI UZ FACEBOOK'}
          simplebuttontextStyle={[
            buttonStyle.imgbtnTextStyle,
            {color: Colors.white},
          ]}
          simplebuttonStyle={[
            buttonStyle.imgbuttonStyle,
            {
              width: (BaseStyle.DEVICE_WIDTH / 100) * 85,
              backgroundColor: '#72bcd4',
              marginTop: (BaseStyle.DEVICE_HEIGHT / 100) * 2,
            },
          ]}
        />
      </View>
    );
  };

  //Social Text
  const _renderSocialText = () => {
    return (
      <RLText
        text={'Nastavi putem socijalnih mreža'}
        style={[textStyle.socailTextStyle, textStyle.textWidthStyle]}
      />
    );
  };

  return (
    <Fragment>
      <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
        <GeneralStatusBarColor
          backgroundColor={'#94553a'}
          barStyle={'light-content'}
        />
        {_header()}

        <KeyboardAwareScrollView
          bounces={false}
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS == 'ios' ? 120 : 100}
          scrollToEnd={true}
          keyboardShouldPersistTaps={'always'}
          nestedScrollEnabled={false}>
          <View style={[viewStyle.flex]}>
            {_renderHeader()}
            {_renderTextInput()}
            {_renderSignButton()}
            {_renderSocialText()}
            {_renderSocialButton()}
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Fragment>
  );
};

const select = (store) => {
  return store;
};
export default connect(select)(SignUp);
