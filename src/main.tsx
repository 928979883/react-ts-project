import React from 'react'
import ReactDOM from 'react-dom/client'
// 去除自带样式组件引入（优先级最高）
import 'reset-css'
// UI框架样式引入

// 全局样式引入 @相当于src，该文件所在父级目录
import '@/assets/styles/global.scss'
// 特殊组件样式引入
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 严格模式，开发环境会导致两次render
  // <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  // </React.StrictMode>
)
