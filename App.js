import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './components/Profile';
import Home from './components/Home';
import Fotos from './components/Fotos';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}
function PhotosScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Photos</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
      options={{tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons name="home" />
      )}}/>
      <Tab.Screen name="Profile" component={Profile} 
       options={{tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons name="account-circle" />
      )}}/>
      <Tab.Screen name="Photos" component={Fotos}
      options={{tabBarIcon:({color,size}) => (
        <MaterialCommunityIcons name="image-multiple-outline" />
      )}} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
