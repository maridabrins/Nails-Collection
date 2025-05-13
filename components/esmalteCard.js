import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function EsmalteCard({ esmalte, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: esmalte.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{esmalte.nome}</Text>
      <Text>{esmalte.marca}</Text>
      <Text>{esmalte.cor}</Text>
      <View style={styles.icones}>
        <TouchableOpacity onPress={() => onEdit(esmalte)}>
          <Image source={require('../assets/edit.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(esmalte)}>
          <Image source={require('../assets/delete.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center',
  },
  imagem: {
    width: 60,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  nome: {
    fontWeight: 'bold',
  },
  icones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%',
    marginTop: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
