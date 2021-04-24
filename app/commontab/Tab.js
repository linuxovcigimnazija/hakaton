//Custom Tab Icon File
import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = ({
  tab,
  icon,
  onPress,
  color,
  key,
  index,
  profileBcolor,
  selected,
}) => {
  let iconName =
    selected === 'Dashboard'
      ? 'coffee'
      : selected === 'Notification'
      ? 'qrcode'
      : 'user';

  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      {icon && (
        <FontAwesome
          name={iconName}
          size={26}
          color={selected ? '#94553a' : '#cab09d'}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    height: 25,
    width: 25,
  },
  profileViewStyle: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Tab;
