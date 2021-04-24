import React, {Fragment, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import BaseStyle from 'constants/BaseStyle';
import BaseText from 'constants/BaseText';
import Colors from 'constants/Colors';
import Images from 'constants/Images';
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
  RLPopularList,
} from 'basecomponent';

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
      </View>
    </Fragment>
  );
};

const select = (store) => {
  return store;
};
export default connect(select)(Dashboard);
