import React from 'react';
import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';
import AppLoading from 'expo-app-loading'; // se estiver usando SDK antigo

export default function App() {
  let [fontsLoaded] = useFonts({ AlexBrush_400Regular });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <EsmaltesProvider>
    <HomeScreen />
  </EsmaltesProvider>
  );
}
