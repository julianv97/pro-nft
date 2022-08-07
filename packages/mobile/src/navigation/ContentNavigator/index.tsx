import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, CartScreen, LikesScreen, SettingsScreen } from '../../screens';
import { TabBarItem, StatusBar } from '../../components';
import RootStackParamList, { Screens } from '../../types/navigation';
import Icons from '../../types/icons';
import styles from './styles';
import Colors from '../../theme/colors';

const Tab = createBottomTabNavigator<RootStackParamList>();

const ContentNavigator = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          })}
        >
          <Tab.Screen
            name={Screens.HOME}
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.GRID} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
          <Tab.Screen
            name={Screens.CART}
            component={CartScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.CART} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
          <Tab.Screen
            name={Screens.LIKES}
            component={LikesScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.HEART} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
          <Tab.Screen
            name={Screens.SETTINGS}
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.SETTINGS} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ContentNavigator;