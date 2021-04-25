import React from 'react';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import profileStyle from 'theme/component/ProfileStyle';
import {RLText} from 'basecomponent';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Images from '../constants/Images';

const RLProfileSettingList = (props) => {
  const {settingicons, title, onPress, marginTop} = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          profileStyle.proListViewStyle,
          {marginTop: marginTop, justifyContent: 'space-between'},
        ]}>
        <View style={[{flexDirection: 'column'}]}>
          <RLText
            text={title}
            style={[
              profileStyle.settingtextStyle,
              {color: '#94553a', fontSize: 24},
            ]}
          />
          <RLText
            text={props.number}
            style={[
              profileStyle.settingtextStyle,
              {color: '#94553a', fontSize: 18},
            ]}
          />
        </View>
        <Image
          source={settingicons}
          style={{
            width: 95,
            height: 115,
            resizeMode: 'contain',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default RLProfileSettingList;
