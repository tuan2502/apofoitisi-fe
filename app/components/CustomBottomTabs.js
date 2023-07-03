import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import Animated, { color } from 'react-native-reanimated';

const CustomBottomTabs = (props) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView edges={['bottom']} style={[{ backgroundColor: colors.card}, styles.bottomTabs]}>
      <View
        style={styles.container}
      >
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
    <Pressable
      onPress={onTap}
      style={styles.tabButton}
    >
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
          size={24}
          color={isActive ? '#6eb943' : colors.text}
          style={{
            opacity: isActive ? 1 : 0.5,
          }}
        />
      </Animated.View>
      <Text style={[{ color: colors.text }, styles.tabLabel, isActive ? colors.primary : colors.text]}>{routeName}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  bottomTabs: {
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 10,
    elevation: 8,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },

  tabIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  tabLabel: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Montserrat'
  },
});

