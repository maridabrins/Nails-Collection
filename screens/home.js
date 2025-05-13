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
} from 'react-native';
import EsmalteCard from '../components/esmalteCard';

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
    <View style={styles.container}>
      {/* Barra de busca */}
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
        data={esmaltes.filter(e =>
          e.nome.toLowerCase().includes(busca.toLowerCase())
        )}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EsmalteCard
            esmalte={item}
            onEdit={item => {
              setModoEdicao(true);
              setEsmalteAtual(item);
              setModalVisivel(true);
            }}
            onDelete={item => {
              setEsmalteAtual(item);
              setConfirmarDelete(true);
            }}
          />
        )}
        contentContainerStyle={styles.listaContainer}
      />

      {/* Modal de criação/edição */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },
  searchContainer: {
    flexDirection: 'row',
    margin: 12,
    backgroundColor: '#FFF',
    borderRadius: 35,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0B0FF',
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
  listaContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
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
    marginTop: 70,
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
