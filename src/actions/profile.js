import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = 'http://localhost:3001'

export function getProfile() {
    axios.get('/profile').then(resp => {
        store.dispatch({
            type: 'GET_PROFILE',
            profile: resp.data
        })
    })
}