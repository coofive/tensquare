import axios from 'axios'
const url = 'localhost:8888'
export default {
    getAccessToken(code) { return axios.get(`http://${url}?operation=token&code=${code}`) },
    getUserInfo(access_token, openid) { return axios.get(`http://${url}?operation=userinfo&access_token=${access_token}&openid=${openid}`) }
}