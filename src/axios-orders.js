import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-84b45.firebaseio.com'
});

export default instance;