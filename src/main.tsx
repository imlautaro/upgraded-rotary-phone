import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

const appEl = document.getElementById('app')

if (!appEl) {
  throw new Error('Root element not found')
}

createRoot(appEl)
  .render(
    <App />
  )

