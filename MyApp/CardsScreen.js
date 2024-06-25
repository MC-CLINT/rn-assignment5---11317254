import React from "react";
import { View, Text, StyleSheet } from "react-native";



export default function CardsScreen() {
  return (
    <View style={styles.container}>
      <Text>My Cards</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    });