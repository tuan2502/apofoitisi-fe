import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Animated, { color } from 'react-native-reanimated';
import { scale, verticalScale, moderateScale, ScaledSheet } from 'react-native-size-matters';



const CustomBottomTabs = (props) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.bottomTab}>
      <View style={styles.container}>
        {props.state.routes.map((route, i) => {
          const isActive = i == props.state.index;
          return <TabItem key={i} isActive={isActive} routeName={route.name} navigation={props.navigation} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default CustomBottomTabs;

const TabItem = ({ routeName, isActive, navigation }) => {
  const { colors } = useTheme();

  const onTap = () => {
    navigation.navigate(routeName);
  };

  return (
    <Pressable onPress={onTap} style={styles.tabButton}>
      <Animated.View style={[{ backgroundColor: isActive ? '#f1f9ed' : '#fafafa' }, styles.tabIconContainer]}>
        <Icons
          name={
            routeName === 'JOBS'
              ? 'business-center'
              : routeName === 'PROPOSALS'
              ? 'article'
              : routeName === 'NOTIFICATIONS'
              ? 'notifications'
              : routeName === 'PROFILE'
              ? 'person'
              : ''
            //assignment-turned-in && article
          }
          size={scale(20)}
          color={isActive ? '#6eb943' : colors.text}
          style={{
            opacity: isActive ? 1 : 0.5,
          }}
        />
      </Animated.View>
      <Text style={[{ color: colors.text }, styles.tabLabel, isActive ? colors.primary : colors.text]}>
        {routeName}
      </Text>
    </Pressable>
  );
};
const styles = ScaledSheet.create({
  bottomTab: { backgroundColor: 'transparent', position: 'absolute', left: '0@s', bottom: '-8@s', right: '0@s' },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    // paddingHorizontal: 10,
    borderRadius: 20,
    paddingVertical: '5@s',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 10,
    elevation: 8,
    marginHorizontal: '15@s',
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '8@s',
  },

  tabIconContainer: {
    width: '35@s',
    height: '35@s',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  tabLabel: {
    marginTop: 5,
    fontSize: scale(9),
    fontFamily: 'Montserrat',
  },
});
