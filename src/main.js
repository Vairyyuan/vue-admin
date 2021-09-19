import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 需要全局引入的文件都在此引入

// npm安装element UI后需要import
// 这里是全局引入，也可以按需引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
