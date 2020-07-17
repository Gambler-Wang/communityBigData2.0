import Vue from 'vue';
import axios from 'axios';
import {API_BASE_URL} from '@/config/app.js'
import {Message} from 'element-ui'
const _this = new Vue();
axios.defaults.baseURL = API_BASE_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// POST 方法封装  (参数处理)
export const postRequest = (url, params = {}, method = "POST",header='application/x-www-form-urlencoded', token) => {
  return axios({
    method: method,
    url: url,
    data: params,
    transformRequest: [function (data) {
      if(header==='application/x-www-form-urlencoded'){
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }else return data

    }],
    headers: {
      'Content-Type': header,
      'xhuachina-auth': token,
    },
  });
}

// POST 方法封装  (文件上传)
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data',
      'xhuachina-auth': this.getCookie('token')
    }
  });
}

//  GET 方法封装
export const getRequest = (url,params,token) => {
  return axios({
    method: 'get',
    url: url,
    params,
    headers: {
      'Content-Type': 'application/json',
      'xhuachina-auth': token,
    }
  });
}

//  PUT 方法封装
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: url,
    data: params,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'xhuachina-auth': this.getCookie('token')
    }
  });
}

//  DELETE 方法封装
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: url
  });
}
axios.interceptors.request.use(config => {

    // if(config.headers['Content-Type'] === "multipart/form-data"){

    //     let formdata = new FormData(),
    //         data = _this.$sign(config.data,config.url);
    //     for(let key in data){
    //         formdata.append(key,data[key])
    //     }
    //     config.data = formdata;
    // } else if(config.method === "get"){
    //     config.params = _this.$sign(config.params,config.url);
    // } else {
    //     config.data = _this.$sign(config.data,config.url)
    // }

    return config;
}, error=>Promise.reject(error));

axios.interceptors.response.use(res=>{
      if(res.data.code === 401){
        _this.$message({
            type:'error',
            message:res.data.msg
        });
        // setTimeout(function () {
        //   window.location.href = '/';
        // },1500)
      }
      if(res.data.code === 400 || res.data.code === 500){
        _this.$message({
            type:'error',
            message:res.data.msg
        });
      }
    // if(res.data.code === 100001 || res.data.code===100081 || res.data.code ===100201 ||res.data.code ==="10005" || res.data.code === 100101 || res.data.code === 100102 || res.data.code === 100103 || res.data.code === 100091 || res.data.code === 100071
    // ){
    //     return res;
    // } else {
    //    // token失效处理
    //     if( res.data.code === 110002){
    //       localStorage.removeItem("token");
    //       localStorage.removeItem("userInfo");
    //       _this.$message({
    //           type:'error',
    //           message:res.data.msg
    //       });
    //       setTimeout(function () {
    //           window.location.href = '/';
    //       },1500)
    //       return ;
    //     }
    //     if(res.data.code === "10002" && res.data.msg==="目标文件记录id错误"){
    //         _this.$message({
    //             message:res.data.msg,
    //             type:'error',
    //             duration:1000
    //         });
    //         setTimeout(() => {
    //             window.location.href = '/';
    //         }, 1500);
    //         return ;
    //     }
    //     _this.$message({
    //         message:res.data.msg,
    //         type:'error',
    //       duration:1000
    //     });
    //     return res;
    // }
    return res.data;   //只有return data后才能完成响应


},error => Promise.reject(error))
