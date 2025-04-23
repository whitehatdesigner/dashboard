import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/style.css'
import './assets/css/card.css'
import './assets/css/table.css'
import './assets/css/darktheme.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  // {/* </StrictMode>, */}
)
