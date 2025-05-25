import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/home';
import Header from './components/header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },
});
