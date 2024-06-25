import React from "react";
import { View, Text,StyleSheet, Switch } from "react-native";
import { useTheme } from "./Components/ThemeContext";


export default function SettingsScreen() {

    const { theme, toggleTheme } = useTheme();
const backgroundColor = theme === 'dark' ? 'black' : 'white';
const textColor = theme === 'dark' ? 'white' : 'black';

        const menuItems = [
          { label: 'Language', icon: '▶' },
          { label: 'My Profile', icon: '▶' },
          { label: 'Contact Us', icon: '▶' },
          { label: 'Change Password', icon: '▶' },
          { label: 'Privacy Policy', icon: '▶' },
        ];


  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Text style={{color: textColor}}>Settings</Text>
        <View>
            {menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
                <Text style={[styles.menuLabel , {color: textColor}]}>{item.label}</Text>
                <Text style={{color: textColor}}>{item.icon}</Text>
            </View>
            ))}
    </View>

    <Text style={[styles.theme,{color: textColor}]}>Theme</Text>
    <Switch  onValueChange={toggleTheme} value={theme === 'dark'} style={{top: 63, left:140}} />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 50,
        padding: 20,
        width: 330,
        borderBottomWidth: 0.5,
        borderColor:'lightgrey',
        borderBottomColor: 'black',
    },

    menuLabel: {
        fontSize: 20,
        color: 'black',
        opacity: 0.9,
        fontWeight: '500',
    },
    theme: {
        fontSize: 30,
        color: 'black',
        opacity: 0.6,
        top: 100,
        fontWeight: '500',
        right:110,
    },
    });