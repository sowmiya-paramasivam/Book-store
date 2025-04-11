import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import Authprovidor from './contexts/Authprovidor.jsx'
import CartProvider from './contexts/CartProvider.jsx'
import WishlistProvider from './contexts/WishlistProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovidor>
   <CartProvider> 
    <WishlistProvider>
        <RouterProvider router={router} />
    </WishlistProvider>
      </CartProvider>
   </Authprovidor>
  </StrictMode>,
)
