import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'screens/HomeScreen';
import CustomBottomTabs from 'components/CustomBottomTabs';
import ProfileScreen from 'screens/Profile/ProfileScreen';
import { Text } from '@rneui/base';
import { StyleSheet, View } from 'react-native';

const TabsStack = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator sceneContainerStyle={{paddingBottom: 70}} screenOptions={{ tabBarShowLabel: false }} tabBar={(props) => <CustomBottomTabs {...props} />}>
      <TabsStack.Screen
        name="JOBS"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <TabsStack.Screen
        name="PROPOSALS"
        component={Example}
      />
      <TabsStack.Screen
        name="NOTIFICATIONS"
        component={Example}
      />
      <TabsStack.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          headerStyle: styles.headerStyle,

          headerTitle: () => (
            <View style={styles.headerTitleView}>
              <Text style={styles.headerTitleLabel}>Earnings Available:</Text>
              <Text style={styles.headerTitleCost}><Text style={styles.headerTitleSign}>$</Text>3,289</Text>
            </View>
          ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default TabsNavigator;


const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#6eb943',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  headerTitleView: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
  },

  headerTitleLabel: { fontWeight: 'bold', fontSize: 12, fontFamily: 'Montserrat-Bold' },

  headerTitleCost: { fontWeight: 'bold', fontFamily: 'Montserrat-Bold', fontSize: 18, color: '#FFFFFF' },

  headerTitleSign: { fontSize: 14, color: '#C9F9AE' },
});

const Example = () => {
  return <View />;
};
