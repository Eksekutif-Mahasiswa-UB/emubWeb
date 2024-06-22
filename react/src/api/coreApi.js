import axios from 'axios';



const coreApi = axios.create({
  baseURL: 'https://superapart-me.preview-domain.com/api/'
});

export default coreApi;