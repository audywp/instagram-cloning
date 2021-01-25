import React, {useState} from 'react';
import {View, TextInput, Alert} from 'react-native';
import Poppins from '../../../Shared/Component/Poppins';
import {moderateScale} from 'react-native-size-matters';
import {PhoneStyle} from './style';
import {BlueButton} from '../../../Shared/Component/Button';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {actionRegister} from '../action';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  actionRegister,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(function Phone(props) {
  const [Phone, setPhone] = useState('');
  const [ErrorPhone, setErrorPhone] = useState(false);

  const {actionRegister} = props;

  const handlePhoneNumber = (value) => {
    if (Phone.length) {
      console.log(Phone);
      actionRegister({phoneNumber: Phone});
    } else {
      Alert.alert('error', 'Phone Number must be filled');
    }
  };

  console.log(Phone);
  console.log(props);

  return (
    <>
      <View style={PhoneStyle.MainContainer}>
        <View>
          <View style={PhoneStyle.container}>
            <View style={PhoneStyle.codeContainer}>
              <Poppins
                style={{marginTop: moderateScale(3)}}
                title="ID +62"
                color="#9CADB3"
                size={moderateScale(13)}
              />
            </View>
            <View style={PhoneStyle.inputContainer}>
              <TextInput
                keyboardType="numeric"
                onChangeText={(text) => setPhone(`+62${text}`)}
                placeholder="Phone Number"
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: widthPercentageToDP(92),
          marginBottom: moderateScale(20),
        }}>
        <Poppins
          style={{textAlign: 'center'}}
          title="You may receive SMS updates from Instagram and can opt out at any time"
          color="#9CADB3"
          size={moderateScale(12)}
        />
      </View>
      <BlueButton
        onPress={handlePhoneNumber}
        title="Next"
        fontSize={moderateScale(12)}
        textColor="white"
      />
    </>
  );
});
