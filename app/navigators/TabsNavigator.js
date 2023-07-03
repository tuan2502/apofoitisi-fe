import { View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen';
import Icons from '@expo/vector-icons/MaterialIcons';
import CustomBottomTabs from 'components/CustomBottomTabs';
import ProfileScreen from 'screens/Profile/ProfileScreen';

const TabsStack = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{ tabBarShowLabel: false }} tabBar={(props) => <CustomBottomTabs {...props} />}>
      <TabsStack.Screen
        name="JOBS"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="home" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="PROPOSALS"
        component={Example}
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="NOTIFICATIONS"
        component={Example}
        options={{
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props} />;
          },
        }}
      />
      <TabsStack.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarIcon(props) {
            return <Icons name="person" {...props} />;
          },
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;

const Example = () => {
  return <View />;
};
