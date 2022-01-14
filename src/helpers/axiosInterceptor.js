import axios from 'axios';
import { apiConstants } from '../helpers/constants';


axios.defaults.headers.common = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
axios.defaults.baseURL = apiConstants.baseUrl


export default axios;
