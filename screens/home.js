import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  const [esmaltes, setEsmaltes] = useState([]);
  const [busca, setBusca] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [esmalteAtual, setEsmalteAtual] = useState({});
  const [confirmarDelete, setConfirmarDelete] = useState(false);

  const salvarEsmalte = () => {
    if (modoEdicao) {
      setEsmaltes(prev =>
        prev.map(e => (e.id === esmalteAtual.id ? esmalteAtual : e))
      );
    } else {
      setEsmaltes(prev => [
        ...prev,
        { ...esmalteAtual, id: Date.now().toString() },
      ]);
    }
    setModalVisivel(false);
    setEsmalteAtual({});
  };

  const excluirEsmalte = () => {
    setEsmaltes(prev => prev.filter(e => e.id !== esmalteAtual.id));
    setConfirmarDelete(false);
    setEsmalteAtual({});
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com logo e título */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Nails Collection</Text>
      </View>

      {/* Barra de busca com lupa */}
      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/lupa.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Buscar na coleção"
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
          style={styles.searchInput}
        />
      </View>

      {/* Texto Minha Coleção */}
      <Text style={{ fontFamily: 'AlexBrush_400Regular', fontSize: 32, color: 'white' }}>
  Nails Collection
</Text>

      {/* Botão adicionar esmalte */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setModoEdicao(false);
          setEsmalteAtual({ nome: '', marca: '', cor: '', imagem: '' });
          setModalVisivel(true);
        }}
      >
        <Text style={styles.addButtonText}>+ Adicionar esmalte</Text>
      </TouchableOpacity>

      {/* Lista de esmaltes */}
      <FlatList
        data={esmaltes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.marca}>{item.marca}</Text>
            <Text style={styles.cor}>{item.cor}</Text>
            <View style={styles.icones}>
              <TouchableOpacity
                onPress={() => {
                  setModoEdicao(true);
                  setEsmalteAtual(item);
                  setModalVisivel(true);
                }}
              >
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setEsmalteAtual(item);
                  setConfirmarDelete(true);
                }}
              >
                <Image
                  source={require('../assets/delete.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Modal criar/editar */}
      <Modal visible={modalVisivel} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            placeholder="URL da imagem"
            value={esmalteAtual.imagem}
            onChangeText={texto =>
              setEsmalteAtual({ ...esmalteAtual, imagem: texto })
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Nome"
            value={esmalteAtual.nome}
            onChangeText={texto =>
              setEsmalteAtual({ ...esmalteAtual, nome: texto })
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Marca"
            value={esmalteAtual.marca}
            onChangeText={texto =>
              setEsmalteAtual({ ...esmalteAtual, marca: texto })
            }
            style={styles.input}
          />
          <TextInput
            placeholder="Cor"
            value={esmalteAtual.cor}
            onChangeText={texto =>
              setEsmalteAtual({ ...esmalteAtual, cor: texto })
            }
            style={styles.input}
          />
          <View style={styles.modalBotoes}>
            <TouchableOpacity onPress={() => setModalVisivel(false)}>
              <Text style={styles.cancelar}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={salvarEsmalte}>
              <Text style={styles.salvar}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal confirmar exclusão */}
      <Modal visible={confirmarDelete} transparent animationType="fade">
        <View style={styles.modalExcluir}>
          <Text>Deseja excluir esse esmalte?</Text>
          <View style={styles.modalBotoes}>
            <TouchableOpacity onPress={() => setConfirmarDelete(false)}>
              <Text style={styles.cancelar}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={excluirEsmalte}>
              <Text style={styles.excluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },
  header: {
    backgroundColor: '#6A1B9A',
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 12,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  searchIcon: {
    width: 18,
    height: 18,
    tintColor: '#999',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
  },
  collectionTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  addButton: {
    backgroundColor: '#BA68C8',
    marginHorizontal: 60,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    margin: 8,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
  },
  imagem: {
    width: 70,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  marca: {
    fontSize: 14,
  },
  cor: {
    fontSize: 14,
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
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
  modalBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cancelar: {
    color: '#999',
  },
  salvar: {
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
  excluir: {
    color: 'red',
    fontWeight: 'bold',
  },
  modalExcluir: {
    backgroundColor: '#FFF',
    padding: 20,
    margin: 50,
    borderRadius: 10,
    alignItems: 'center',
  },
});
