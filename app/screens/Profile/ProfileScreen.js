import { useTheme } from '@react-navigation/native';
import { Image, Text } from '@rneui/base';
import React from 'react'
import { ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/MaterialIcons';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ScaledSheet, scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';


const AVATAR_URL =
  'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80';


let valueProgress = 96;

const ProfileScreen = () => {
  const { colors } = useTheme();

  return (
    <ScrollView>
      <SafeAreaView>
        {/* Avatar Section */}
        <View style={styles.container}>
          <ProgressCircle/>
          <Avatar/>
          <Information/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;


const ProgressCircle = () => {
  return (
    <View>
      <CircularProgress
        rotation={180}
        value={valueProgress}
        radius={97}
        duration={2000}
        maxValue={100}
        showProgressValue = {false}
        progressValueColor={'#4a4a4a'}
        activeStrokeColor={'#5bc0eb'}
        inActiveStrokeColor={'#ccc'}
        strokeLinecap = 'butt'
        activeStrokeWidth={6}
        inActiveStrokeWidth={6}
      />
      {/* <Text style={{ transform: [{ rotate: '-180deg' }], position: 'relative' }}>JOBS SUCCESS</Text> */}
    </View>
  );
};

const Avatar = () => {
  return (
    <View style={styles.imageContainer}>
      <View style = {{aspectRatio: 1, borderRadius: 165, height: 165, minWidth: 165, overflow: 'hidden'}}>
        <Image source={{ uri: AVATAR_URL }} style={styles.image} resizeMode="cover" />
        <View style={styles.subTitle}>
          <Text style={{ fontSize: scale(8), fontFamily: 'Montserrat'}}>JOBS SUCCESS</Text>
          <Text style={{ fontSize: scale(10), fontFamily: 'Montserrat-Bold' }}>{valueProgress}%</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Icons name="edit" size={16} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const Information = () =>{
  return (
    <View style={styles.informationContainer}>
        <Text style={{ fontSize: scale(15), fontFamily: 'Montserrat-Bold' }}>Nguyễn Hữu Phạm Tuân</Text>
        <Text style={{ fontSize: scale(10), fontFamily: 'Montserrat-Bold', color: '#ccc' }}><Icons name="location-on" size={scale(14)} color="#ccc" />Hà Tĩnh, Việt Nam</Text>
    </View>
  )
}



//Styles

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //Circle progress
  circleView: { transform: [{ rotate: '-180deg' }] },
  
  //Image
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 14,
    zIndex: 1,
  },
  
  image: {aspectRatio: 1, borderRadius: 165, height: 165, minWidth: 165 },

  subTitle: {
    top: '-30@s',
    left: '9@s',
    width: 150,
    height: '30@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cccccc99',
  },

  editButton: {
    position: 'absolute',
    top: '-90@s',
    left: '120@s',
    width: '30@s',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6eb943',
    borderRadius: 52,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  //Information
  informationContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
