import path from 'path'
export const getChildRoutes = (routes) => {
  return routes.filter(route => route.children && route.children.length > 0)
}
export const filterRoutes = (routes) => {
  // 获取含有子集路由的路由
  const childrenRoutes = getChildRoutes(routes)
  // 剔除获取含有子集路由的路由
  return routes.filter(route => {
    return childrenRoutes.find(childrenRoute =>
      childrenRoute.path === route.path)
  })
}
function isNull (data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
export const generateMemu = (routes, basePath = '') => {
  console.log(routes)
  const result = []
  routes.forEach(item => {
    // 没有meta，没有children
    if (isNull(item.meta) && isNull(item.chlidren)) {
      return
    }
    // 有children没有meta

    if (isNull(item.meta) && !isNull(item.chlidren)) {
      result.push(generateMemu(item.chlidren))
      return
    }
    // 有meta没有children 递归出口 有meta有children
    // 因为最终的menu需要进行跳转，此刻我们需要合并path

    const routePath = path.resolve(basePath, item.path)
    let route = result.find(item => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }
      console.log(item)

      if (item.meta.title) {
        result.push(route)
      }
      console.log(!isNull(item.children))
      if (!isNull(item.children)) {
        route.children.push(generateMemu(item.children))
      }
    }
  })
  return result
}
