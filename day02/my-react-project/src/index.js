// 编写react代码，通过react渲染内容
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(<App />)