import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import {RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className=''>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
   
    </AuthProvider>
  </StrictMode>,
)
