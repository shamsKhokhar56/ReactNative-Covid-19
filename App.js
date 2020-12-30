import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen';
import WorldStatistics from './components/WorldStatistics';
import CountryNames from './components/CountryNames'
import CountryView from './components/CountryView'
import Favourite from './components/Favourite'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="World Statistics" component={WorldStatistics} />
        <Drawer.Screen name="Country Statistics" component={CountryNames} />
        <Drawer.Screen name="Favourites" component={Favourite} />
        <Drawer.Screen options={{ drawerLabel: () => null, title: () => null }} name="Country View" component={CountryView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
