
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/signin-page.vue') },
      { path: 'home', component: () => import('pages/home-page.vue') },
      { path: 'signup', component: () => import('pages/signup-page.vue') },
      { path: 'transaction', component: () => import('pages/transaction-page.vue') },
      { path: 'transfer1', component: () => import('pages/transfer1-page.vue') },
      { path: 'transfer2', component: () => import('pages/transfer2-page.vue') },
      { path: 'qr2', component: () => import('pages/qrpayment2-page.vue') },
      { path: 'qr', component: () => import('pages/qrscan-page.vue') },
      { path: 'selectbank', component: () => import('pages/selectbank-page.vue') },
      { path: 'confirm', component: () => import('pages/confirm-page.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
