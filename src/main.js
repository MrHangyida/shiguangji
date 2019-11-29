import Vue from 'vue'
import ElementUI from 'element-ui' // eleUI组件库
import 'element-ui/lib/theme-chalk/index.css'; //eleUI css
import App from './App.vue' // 组件入口
import router from './router' // 路由+
import 'lib-flexible/flexible';
// import axios from 'axios'
// import './axios/request.js' //request.js的路径
import animate from 'animate.css'
// import 'default-passive-events'
// Vue.use(axios)
Vue.config.productionTip = false // 生产模式false即debug模式
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);
// 注册插件到Vue全局根实例
Vue.use(ElementUI);
// Vue.prototype.axios = axios

// Vue根实例 实例化
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')