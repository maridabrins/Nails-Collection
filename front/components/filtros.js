import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function Filtro({ termoBusca, setTermoBusca }) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar por nome, marca ou cor"
        style={styles.input}
        value={termoBusca}
        onChangeText={setTermoBusca}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
});