import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children:[
        {
          path:'',
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path:'products',
          component: () => import('../views/front/ProductsView.vue')
        },
        {
          path:'menu',
          component: () => import('../views/front/MenuView.vue')
        },
        {
          path:'question',
          component: () => import('../views/front/QuestionView.vue')
        },
        {
          path:'product/:id',
          component: () => import('../views/front/ProductView.vue')
        },
        {
          path:'cart',
          component: () => import('../views/front/CartView.vue')
        },
        {
          path:'cartcheck/:id',
          component: () => import('../views/front/CartcheckView.vue')
        },
        {
          path: 'paysuccess/:id',
          component: () => import('../views/front/PaysuccessView.vue')
        }

      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue')
        },
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        }
      ]
    }

  ]
})
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router
