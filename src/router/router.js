import { createWebHistory, createRouter } from "vue-router";
import NotFound from "../screen/NotFound.vue";
import Index from "../screen/IndexScreen.vue";
const webHistory = createWebHistory();
const routes = [
  { path: "/", redirect: "/index" },
  {
    name: "index",
    path: "/index",
    component: Index,
  },
  { path: "/:notfound(.*)", component: NotFound },
  // {
  //   name: "article-main",
  //   path: "/index/article/:id",
  //   component: ArticleContent,
  // },
];

const router = createRouter({
  history: webHistory,
  routes,
});

export default router;
