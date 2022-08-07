// 入口js
// 创建vur实例
import Vue from "./vue.browser.js";
import App from "./App.js"

// 渲染组件
new Vue({

    // 两种写法

    // components:{
    //     App
    // },
    // template:`<App />`,

    render(h) {
        return h(App)
    }
    // 更简洁的写法 箭头函数
    // render(h)=>h(App)
}).$mount("#app")