// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/common.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/index.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './utils/directives'
import Methods from './utils/methods'
import 'jquery'
import 'babel-polyfill'
import { borderBox12 } from '@jiaminghi/data-view'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

// import dataV from '@jiaminghi/data-view'
// Vue.use(dataV)

let options = {
  tapToClose: true, //点击图片默认关闭
  closeEl:true,    //显示关闭按钮
  captionEl: true,    
  fullscreenEl: false,//全屏
  zoomEl: false,    //放大镜
  shareEl: false,//分享
  counterEl: true,//页数
  history:true,//打开历史记录（点击返回可回原来页面）
}
Vue.use(preview,options)

Vue.use(borderBox12)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
// import limitData from './config/limit.js';
// import {getRequest, postRequest} from './utils/axios.config'
// import {API_BASE_URL} from '@/config/app.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Methods)
// Vue.prototype.limitData =limitData;
// 定义一个全局混合对象
Vue.mixin({
  data() {
    return {
      api: require('./config/api.js'),
      BASE: require('./config/app.js'),
    }
  },
  methods: {
    request:function (url, params = {},method = "post",header='application/x-www-form-urlencoded', token = 'Bearer ' + this.getCookie('token')) {
      if(method === 'post'||method === 'POST'){
        return this.postRequest(url,params,method,header,token)
      }
      if(method === 'get'||method === 'GET'){
        return this.getRequest(url,params,token)
      }
      console.log(method)
    },
    
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
