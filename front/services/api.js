import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.6:8080/colecao', // substitua pelo IP da sua máquina local
});

export default api;