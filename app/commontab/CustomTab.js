//Custom Tabbar File
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Keyboard} from 'react-native';
import Colors from 'constants/Colors';
import Tab from 'commontab/Tab';

const {width} = Dimensions.get('screen');

const CustomTab = ({navigation, state}) => {
  const {routes} = state;
  const [selected, setSelected] = useState('Notification'); //Defult Screen
  const [showTab, setShowTab] = useState(true); //Hide Show Tab
  const renderColor = (currentTab) =>
    currentTab === selected ? 'red' : 'black';
  const renderProfileColor = (currentTab) =>
    currentTab === selected ? Colors.activebtn : Colors.gray;

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);
  //================================ Start common Function ===========================================
  //On Click Tab Item
  const handlePress = (activetab, index) => {
    if (state.index !== index) {
      setSelected(activetab);
      navigation.navigate(activetab);
    }
  };

  const _keyboardDidShow = () => {
    setShowTab(false);
  };

  const _keyboardDidHide = () => {
    setShowTab(true);
  };

  return (
    <View style={{backgroundColor: Colors.white}}>
      {showTab && (
        <View style={styles.wraper}>
          <View style={styles.centerTab}>
            {routes.map((route, index) => (
              <Tab
                tab={route}
                icon={
                  route.name === selected
                    ? route.params.icon
                    : route.params.icon1
                }
                onPress={() => handlePress(route.name, index)}
                color={renderColor(route.name)}
                key={route.key}
                index={index}
                profileBcolor={renderProfileColor(route.name)}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wraper: {
    // position: 'absolute', //Comment for scrollview
    bottom: 30,
    width: width,
    backgroundColor: 'transparent',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerTab: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    width: 300,
    borderRadius: 50,
    borderColor: Colors.gray,
    borderBottomWidth: 0,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1.9,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: Colors.gray,
  },
});
export default CustomTab;
