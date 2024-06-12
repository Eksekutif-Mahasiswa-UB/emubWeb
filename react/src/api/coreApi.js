import axios from 'axios';

axios.defaults.withXSRFToken = true;

const coreApi = axios.create({
  baseURL: 'https://superapart-me.preview-domain.com/api/'
});

export default coreApi;