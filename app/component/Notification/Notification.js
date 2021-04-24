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

const Notification = ({navigation, props}) => {
  return (
    <Fragment>
      <View style={[viewStyle.flex, viewStyle.flexbgColor]}>
        <GeneralStatusBarColor
          backgroundColor={Colors.white}
          barStyle={'dark-content'}
        />
        <Text>dsdaskh</Text>
      </View>
    </Fragment>
  );
};

const select = (store) => {
  return store;
};
export default connect(select)(Notification);

const styles = StyleSheet.create({});
