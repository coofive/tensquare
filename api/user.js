import request from '@/utils/request'
const api_group = 'user'
const api_name = 'user'
export default {
    sendsms(mobile) { return request({ url: `/${api_group}/${api_name}/sendsms/${mobile}`, method: 'put' }) },
    register(pojo,code) { return request({ url: `/${api_group}/${api_name}/${code}`, method:'post', data: pojo}) },
    login(mobile,password) { return request({ url: `/${api_group}/${api_name}/login`, method: 'post', data:{mobile,password} }) }
}