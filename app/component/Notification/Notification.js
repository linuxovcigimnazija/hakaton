/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const Notification = ({navigation, props}) => {
  const [visible, setVisible] = useState(false);
  const [points, setPoints] = useState(0);
  const [latte, setLatte] = useState(0);

  const storePoints = async (value) => {
    try {
      await AsyncStorage.setItem('POINTS', value.toString());
    } catch (e) {
      console.error(e);
    }
  };

  const storeLatte = async (value) => {
    try {
      await AsyncStorage.setItem('LATTE', value.toString());
    } catch (e) {
      console.error(e);
    }
  };

  const getPoints = async () => {
    try {
      const value = await AsyncStorage.getItem('POINTS');
      if (value !== null) {
        return parseInt(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const getLatte = async () => {
    try {
      const value = await AsyncStorage.getItem('LATTE');
      if (value !== null) {
        return parseInt(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const f = async () => {
      const bar = await getLatte();
      const foo = await getPoints();
      if (bar !== null && foo !== null) {
        setVisible(true);

        setLatte(bar);
        setPoints(foo);
      }
    };
    f();
  }, []);

  const QRcodeOperations = async (string) => {
    let foo = points;
    setPoints(foo + parseInt(string.substring(2, 4)));
    string.substring(0, 2) == '01' ? setLatte(latte + 1) : console.log(latte);
    await storePoints(points);
    await storeLatte(latte);
    navigation.navigate('Dashboard');
  };

  const barcodeRecognized = ({barcodes}) => {
    barcodes.forEach((barcode) =>
      barcode.data[0] !== '{'
        ? QRcodeOperations(barcode.data) //navigation.navigate('Dashboard')
        : console.log('Kod nije prepoznat'),
    );
  };

  if (visible) {
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
        </View>
      </Fragment>
    );
  } else {
    return <View />;
  }
};
const select = (store) => {
  return store;
};
export default connect(select)(Notification);

const styles = StyleSheet.create({});
