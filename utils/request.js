import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://127.0.0.1:7300/mock/5b7bfe48019a2a1692614d8f/tensquare',
    timeout: 30000 // 请求超时时间
})

export default service