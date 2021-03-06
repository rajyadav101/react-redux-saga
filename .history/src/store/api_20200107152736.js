import { create } from 'apisauce';

// Base API Init
const api = create({
  baseURL: 'https://hn.algolia.com'

// Functions list init
let func = {};

func.getUser = async () => {
  try {
    const response = await api.get('/api/v1/search?query=redux');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};