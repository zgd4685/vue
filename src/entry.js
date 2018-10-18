/*导入Vue模块*/
import Vue from "vue";
/*导入app模块*/
import app from "./app.vue";

/*导入vue-router模块*/
import VueRouter from "vue-router";
/*注册路由*/
Vue.use(VueRouter);
/*导入tabbar模板对象*/
import tabbar from "./router-item/tabbar.vue";
/*导入chat模板对象*/
import chat from "./router-item/chat.vue";
/*导入contact模板对象*/
import contact from "./router-item/contact.vue";
/*导入map模板对象*/
import map from "./router-item/map.vue";

/*按需导入mint-ui模块*/
import {Header} from "mint-ui";
/*导入mint-ui样式*/
import "../node_modules/mint-ui/lib/style.css"
/*注册组件*/
Vue.component(Header.name, Header);

/*导入mui的样式文件*/
import "../lib/mui-master/dist/css/mui.css"

/*创建vue-router实例*/
const router = new VueRouter({
    routes: [
        /*重定向*/
        {path: "/",redirect: "/tabbar"},
        {path: "/tabbar",component: tabbar},
        {path: "/tabbar-with-chat",component: chat},
        {path: "/tabbar-with-contact",component: contact},
        {path: "/tabbar-with-map",component: map},
    ]
});

/*创建vue实例*/
const vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    render(c){
        return c(app);
    },
    router//挂载到vue
});