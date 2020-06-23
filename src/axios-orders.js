import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-84b45.firebaseio.com'
});

export const axiosForAuthReq = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
});

export default instance;