// 路由表
import React, { lazy } from 'react'
import Home from '../views/Home'
import Login from '../views/Login'
// 路由懒加载
import { Navigate } from 'react-router-dom'
// import About from '../views/About'
const Page1 = lazy(async () => await import('../views/Page1'))// 路由懒加载
const Page2 = lazy(async () => await import('../views/Page2'))// 路由懒加载
const Page301 = lazy(async () => await import('../views/Page3_1'))// 路由懒加载
const withLoadingComponent = (comp: JSX.Element) => {
  return <React.Suspense fallback={<div>Loading...</div>}>
          {comp}
      </React.Suspense>
}

const routes = [
  // 嵌套路由
  {
    path: '/',
    element: <Navigate to='/page1' />
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1 />)
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2 />)
      },
      {
        path: '/page3/page301',
        element: withLoadingComponent(<Page301 />)
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/page1' />
  }
]

export default routes
