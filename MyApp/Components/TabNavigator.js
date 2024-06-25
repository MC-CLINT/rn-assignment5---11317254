import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen.js";
import CardsScreen from "../CardsScreen.js";
import StatisticsScreen from "../StatisticsScreen.js";
import SettingsScreen from "../SettingsScreen.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        component={HomeScreen}
        showHeader={false}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        Style: {backgroundColor: 'black', height: 70, paddingTop: 10, paddingBottom: 10}
        }}
      
      >
        <Tab.Screen name="Home" component={HomeScreen} hideName={false}
        options={{ tabBarLabel: 'Home' ,headerShown: false, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} /> )
            }}
        />
        <Tab.Screen name="My Cards" component={CardsScreen} 
        options={{ tabBarLabel: 'My Cards' ,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cards" color={color} size={24} /> )

        }}/>
        
        <Tab.Screen name="Statistics" component={StatisticsScreen} 
        options={{ tabBarLabel: 'Statistics' ,  tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-bar" color={color} size={24} /> )
          }}/>

        <Tab.Screen name="Settings" component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' , tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={24} /> )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


 export default TabNavigator;

