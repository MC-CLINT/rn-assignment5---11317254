import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './Components/TabNavigator';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './Components/ThemeContext';
import { StyleSheet, View } from 'react-native';


export default function App() {
  return (
    <ThemeProvider>
    <View style={styles.container}>
    
        <TabNavigator />
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
