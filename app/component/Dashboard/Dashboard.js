/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import Colors from 'constants/Colors';
import viewStyle from 'theme/component/ViewStyle';
import GeneralStatusBarColor from 'statusbarstyle/GeneralStatusBarColor';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashboard = ({navigation, props}) => {
  const timeRemaining = 7100;
  const [timeDiff, setTimeDiff] = useState(0);
  const currentTime = new Date();
  useEffect(() => {
    setInterval(() => {
      setTimeDiff(((new Date() - currentTime) / 1000).toFixed());
    }, 1000);
  }, []);

  let alarm = timeRemaining - timeDiff;
  let hours = Math.floor(alarm / 3600);
  let minutes = Math.floor((alarm - hours * 3600) / 60);
  let seconds = (alarm - minutes * 60 - hours * 3600).toFixed();
  let displaySecond = seconds < 10 ? '0' + seconds : seconds;

  const [modalVisible, setModalVisible] = useState(false);

  const onCouponPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      <Fragment>
        <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
          <GeneralStatusBarColor
            backgroundColor={Colors.lightgray}
            barStyle={'dark-content'}
          />
          <View style={styles.header}>
            <View
              style={{
                flex: 1,
                width: '100%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginLeft: 65,
              }}>
              <Image
                resizeMode="contain"
                style={{height: 55}}
                source={require('assets/added/logo-header.png')}
              />
            </View>
          </View>
          <ScrollView style={{}}>
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
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={styles.percentage}>
                    27<Text style={{fontSize: 20}}>%</Text>
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
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
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
                  <Text style={{color: '#555555'}}>
                    Kupon za besplatan Latte
                  </Text>
                </Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => onCouponPress()}
                style={[
                  styles.card,
                  {
                    backgroundColor: '#7cc269',
                    height: 220,
                    padding: 15,
                    flexDirection: 'column',
                  },
                ]}>
                <FontAwesome
                  name="star"
                  color="#ffffff"
                  size={36}
                  style={{top: 15, right: 20, position: 'absolute'}}
                />
                <Text
                  style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>
                  Preuzmi kupon!
                </Text>
                <Text
                  style={{
                    fontFamily: 'Nunito-Bold',
                    color: 'white',
                    marginTop: 20,
                    fontSize: 20,
                  }}>
                  20% popusta na SVE kafe!{'\n'}Šta čekaš? Kreni odmah u svoju
                  omiljenu pržionicu kafe!
                </Text>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    bottom: 10,
                    right: 15,
                    position: 'absolute',
                  }}>{`${hours}:${minutes}:${displaySecond}`}</Text>
              </TouchableOpacity>

              <View
                style={{
                  marginBottom: 15,
                  borderRadius: 15,
                  elevation: 3,
                  padding: 5,
                  backgroundColor: '#cab09d',
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                    color: 'white',
                    marginBottom: 10,
                  }}>
                  Koji od ponuđenih blendova niste probali?
                </Text>
                <View style={styles.answer}>
                  <Text style={styles.answerText}>Blend I</Text>
                  <Text style={styles.answerPercentage}>25%</Text>
                </View>

                <View style={styles.answer}>
                  <Text style={styles.answerText}>Blend II</Text>
                  <Text style={styles.answerPercentage}>15%</Text>
                </View>

                <View style={styles.answer}>
                  <Text style={styles.answerText}>Blend III</Text>
                  <Text style={styles.answerPercentage}>18%</Text>
                </View>

                <View style={[styles.answer, {backgroundColor: '#94553aB0'}]}>
                  <Text style={styles.answerText}>Blend IV</Text>
                  <Text style={[styles.answerPercentage, {color: 'white'}]}>
                    29%
                  </Text>
                </View>

                <View style={styles.answer}>
                  <Text style={styles.answerText}>Blend V</Text>
                  <Text style={styles.answerPercentage}>13%</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Fragment>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#00000055',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '80%',
                aspectRatio: 0.92,
                backgroundColor: '#7cc269',
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
                paddingTop: 5,
              }}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'flex-start',
                  fontSize: 21,
                  marginBottom: 5,
                  fontFamily: 'Nunito-Bold',
                }}>
                Skeniraj ovaj kod na kasi:
              </Text>
              <Image
                source={require('assets/added/Coffee.png')}
                style={{width: 285, height: 285, borderRadius: 15}}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const select = (store) => {
  return store;
};
export default connect(select)(Dashboard);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '9%',
    // backgroundColor: 'pink',
    borderBottomWidth: 2,
    borderColor: '#222222',
  },
  body: {
    padding: 30,
    flex: 1,
  },
  card: {
    height: 140,
    marginBottom: 15,
    borderRadius: 15,
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
    // fontWeight: 'bold',
    fontFamily: 'Nunito-Bold',
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
    // fontStyle: 'italic',
    color: 'white',
  },
  titleStyle: {
    color: 'white',
    fontSize: 24,
    // fontWeight: 'bold',
    // fontStyle: 'italic',
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-Bold',
  },
  subtitleStyle: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
    alignSelf: 'flex-start',
  },
  reward: {
    backgroundColor: '#cab09d',
    marginTop: -15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 15,
    height: 50,
    paddingHorizontal: 15,
    paddingTop: 10,
    justifyContent: 'center',
  },
  answer: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#94553a',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
  },
  answerText: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  answerPercentage: {
    color: '#94553a',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
