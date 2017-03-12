import axios from 'axios';

const SERVER_URL = 'https://i2x-challenge.herokuapp.com';

const LOGIN_URL = '/core/login/';

const RECORDINGS_URL = '/ai/recording/list/';

export default {
    login: (email, password)  => {
        return axios.post(SERVER_URL+LOGIN_URL, {
            email,
            password
        })
    },
    getRecordings: (token) => {
        const headers = {
            'Authorization': `JWT ${token}`
        };
        return axios.get(SERVER_URL+RECORDINGS_URL, {
            headers: headers
        });
    }
}
