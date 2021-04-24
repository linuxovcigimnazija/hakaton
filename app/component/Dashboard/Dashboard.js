/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import Colors from 'constants/Colors';
import viewStyle from 'theme/component/ViewStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Dashboard = ({navigation, props}) => {
  useEffect(() => {}, []);
  //================================ Start common Function ===========================================

  return (
    <Fragment>
      <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
        <GeneralStatusBarColor
          backgroundColor={Colors.lightgray}
          barStyle={'dark-content'}
        />
        <View style={styles.body}>
          <View style={[styles.card, {backgroundColor: '#cab09d'}]}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                marginLeft: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginTop: 10,
                  width: '90%',
                }}>
                <View style={styles.imageContainer}>
                  <Feather name="coffee" size={50} color={'#94553a'} />
                </View>
                <Text style={styles.number}>
                  40<Text style={{fontSize: 22}}> / </Text>150
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.textStyle}>
                  Besplatna kafa te čeka! Skeniraj QR kod na šolji.
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.percentage}>
                25<Text style={{fontSize: 20}}>%</Text>
              </Text>
            </View>
          </View>

          <View
            style={[
              styles.card,
              {backgroundColor: '#94553a', marginBottom: 0},
            ]}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                marginLeft: 15,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.titleStyle}>Sedmični izazov:</Text>
                <Text style={styles.subtitleStyle}>Skeniraj 3 Latte-a</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  width: '80%',
                  paddingHorizontal: 5,
                  flexDirection: 'row',
                  marginBottom: 10,
                }}>
                <View style={[styles.imageContainer]}>
                  <Ionicon name="timer" size={50} color={'#cab09d'} />
                </View>
                <Text style={styles.number}>
                  1<Text style={{fontSize: 22}}> / </Text>3
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={[
                  styles.percentage,
                  {
                    backgroundColor: '#cab09d',
                    color: '#94553a',
                  },
                ]}>
                33<Text style={{fontSize: 20}}>%</Text>
              </Text>
            </View>
          </View>
          <View style={styles.reward}>
            <Text style={styles.textStyle}>
              Nagrada:{' '}
              <Text style={{color: '#555555'}}>Kupon za besplatan Latte</Text>
            </Text>
          </View>

          <View
            style={[
              styles.card,
              {backgroundColor: '#7cc269', height: '40%'},
            ]}></View>
        </View>
      </View>
    </Fragment>
  );
};

const select = (store) => {
  return store;
};
export default connect(select)(Dashboard);

const styles = StyleSheet.create({
  body: {
    padding: 30,
    flex: 1,
  },
  card: {
    height: '22%',
    marginBottom: 20,
    borderRadius: 20,
    elevation: 3,
    flexDirection: 'row',
    padding: 5,
  },
  percentage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#94553a',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 7,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    aspectRatio: 1,
    alignSelf: 'center',
  },
  number: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignSelf: 'flex-start',
  },
  subtitleStyle: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  reward: {
    backgroundColor: '#cab09d',
    marginTop: '-5%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    height: '8%',
    paddingHorizontal: 15,
    paddingTop: 10,
    justifyContent: 'center',
  },
});
