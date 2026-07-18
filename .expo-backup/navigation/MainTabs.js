import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MeScreen from '../screens/MeScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#222',
        tabBarStyle: { height: 60, paddingBottom: 6, paddingTop: 6 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Text>🏠</Text> }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{ tabBarIcon: () => <Text>💬</Text> }}
      />
      <Tab.Screen
        name="Me"
        component={MeScreen}
        options={{ tabBarIcon: () => <Text>🙍</Text> }}
      />
    </Tab.Navigator>
  );
}
