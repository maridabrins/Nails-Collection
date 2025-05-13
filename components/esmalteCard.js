import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function EsmalteCard({ esmalte, onEdit, onDelete }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: esmalte.imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{esmalte.nome}</Text>
      <Text style={styles.marca}>{esmalte.marca}</Text>
      <Text style={styles.cor}>{esmalte.cor}</Text>
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
    backgroundColor: '#FFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 330,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  imagem: {
    width: 180,
    height: 168,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  marca: {
    fontSize: 18,
    color: '#666',
  },
  cor: {
    fontSize: 18,
    color: '#999',
    marginBottom: 5,
  },
  icones: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    width: 22,
    height: 22,
  },
});
