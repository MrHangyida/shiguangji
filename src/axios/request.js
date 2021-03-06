import axios from "axios";
import qs from "qs";
import app from "../main.js";
/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: process.env.BASE_URL, // api的base_url
    timeout: 5000 // 请求超时时间
});
/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => { //成功请求到数据
        app.$vux.loading.hide();
        //这里根据后端提供的数据进行对应的处理
        if (response.data.result === 'TRUE') {
            return response.data;
        } else {
            app.$vux.toast.show({ //常规错误处理
                type: 'warn',
                text: response.data.data.msg
            });
        }
    },
    error => { //响应错误处理
        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));

        let text = JSON.parse(JSON.stringify(error)).response.status === 404 ?
            '404' :
            '网络异常，请重试';
        app.$vux.toast.show({
            type: 'warn',
            text: text
        });

        return Promise.reject(error)
    }
);
export default service;