import OrderMenu from "./components/OrderMenu.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/menu/:menuId",
    component: OrderMenu,
    name: "menu"
  }
];

export default new VueRouter({
  routes
});
