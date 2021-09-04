import React from 'react';
import { View, StatusBar } from 'react-native';
import AddDeckComponent from "./components/views/AddDeck"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import deck from './components/reducers/deck';
import Home from './components/views/Home';
import styles from './utils/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY} from './utils/api'
import { useDispatch } from 'react-redux';
import { AddDeck, GetDecks} from './components/actions/deck'
import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons"

const AppEntry = ()=>{
  const dispatch = useDispatch()
    useEffect(() => {
        AsyncStorage.getItem(STORAGE_KEY).then(s => dispatch(GetDecks(JSON.parse(s))))
})
    const Tab = createBottomTabNavigator();
  return (
              
        <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home-sharp'
                : 'md-home-outline';
            } else if (route.name === 'Add Deck') {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#61dafd',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add Deck" component={AddDeckComponent} />
      
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  
  
  return (
    <Provider store ={createStore(deck)}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
        />
        <AppEntry />
      </View>
    </Provider>

  );
}
