import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function Header() {
  const [fontsLoaded] = useFonts({
    'AlexBrush': require('../fonts/AlexBrush-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nails Collection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D28BFF',
    paddingTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FCF0FF',
    fontSize: 40,
    fontFamily: 'AlexBrush',
    fontWeight: '500',
    textAlign: 'center',
  },
});
