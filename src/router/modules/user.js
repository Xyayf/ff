import Layout from '@/views/layout/index.vue'
export default {
  path: '/user',
  redirect: '/user/manage',
  component: Layout,
  meta: {
    title: '个人中心'
  },
  children: [

    {

      path: '/user/upload',
      component: () => import('@/views/upload/upload.vue'),
      meta: {
        title: '上传文件'
      }
    },
    {

      path: '/user/two',
      component: () => import('@/views/user/manage.vue'),
      meta: {
        title: '管理页面2'
      }
    }

  ]

}
