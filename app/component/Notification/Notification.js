/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import BaseText from 'constants/BaseText';
import BaseStyle from 'constants/BaseStyle';
import Colors from 'constants/Colors';
import Images from 'constants/Images';
import viewStyle from 'theme/component/ViewStyle';
import buttonStyle from 'theme/component/ButtonStyle';
import notificationStyle from 'theme/component/NotificationStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import {RLHeader, RLText, RLButton, RLNotificationList} from 'basecomponent';
import homestyle from 'theme/component/HomeStyle';
import {RNCamera} from 'react-native-camera';

const Notification = ({navigation, props}) => {
  let timer1;
  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach((barcode) =>
      barcode.data[0] !== '{'
        ? (timer1 = setTimeout(() => {
            navigation.navigate('Dashboard');
            clearTimeout(timer1);
          }, 500))
        : console.log('Kod nije prepoznat'),
    );
  };

  return (
    <Fragment>
      <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
        <GeneralStatusBarColor
          backgroundColor={Colors.white}
          barStyle={'dark-content'}
        />
        <RNCamera
          // ref={(ref) => {
          //   this.camera = ref;
          // }}
          style={{
            flex: 1,
            width: '100%',
          }}
          onGoogleVisionBarcodesDetected={barcodeRecognized}
        />
        <View style={styles.overlay}>
          <View style={styles.object} />
        </View>
      </View>
    </Fragment>
  );
};

const select = (store) => {
  return store;
};
export default connect(select)(Notification);

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  object: {
    width: '60%',
    aspectRatio: 1,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: '#a2e98e',
    borderStyle: 'dashed',
  },
});
