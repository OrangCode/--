/*
可以发送ajax的函数模块
函数的返回值是promise对象
 */

import axios from 'axios'
export default function ajax(url,data={},method='GET'){
  if(method === 'GET'){
    return axios.get(url,{params : data})
  }else {
    return axios.post(url,data)
  }
}
