import Layout from '@/views/layout/index.vue'
export default {
  path: '/article',
  redirect: '/article/manage',
  component: Layout,
  meta: {
    title: '文章'
  },
  children: [

    {

      path: '/article/manage',
      component: () => import('@/views/user/manage.vue'),
      meta: {
        title: '文章gun'
      }
    }

  ]

}
