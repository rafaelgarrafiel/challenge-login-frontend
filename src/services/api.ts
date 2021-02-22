import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6033331ea223790017acfe39.mockapi.io/api/v1/',
});

export default api;
