import React from 'react'
import { CallProvider } from './context/CallContext'
import { RouterProvider, useRouter } from './router/RouterContext'
import { LandingPage } from './pages/LandingPage'
import { DashboardPage } from './pages/DashboardPage'

const AppRouter: React.FC = () => {
  const { currentPath } = useRouter()

  if (currentPath.startsWith('/dashboard')) {
    return <DashboardPage />
  }

  return <LandingPage />
}

export function App() {
  return (
    <RouterProvider>
      <CallProvider>
        <AppRouter />
      </CallProvider>
    </RouterProvider>
  )
}

export default App
