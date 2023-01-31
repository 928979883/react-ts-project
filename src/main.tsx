import React from 'react'
import ReactDOM from 'react-dom/client'
//去除自带样式组件引入（优先级最高）
import 'reset-css' 
//UI框架样式引入

// 全局样式引入
import './assets/styles/global.scss'
// 特殊组件样式引入

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
