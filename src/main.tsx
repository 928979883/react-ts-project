import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css' //优先于App：为了去除原始样式
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
