import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

interface RouterContextType {
  currentPath: string
  navigate: (path: string) => void
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {}
})

export const useRouter = () => useContext(RouterContext)

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/'
    const path = window.location.pathname.replace(/\/+$/, '') || '/'
    return path.startsWith('/dashboard') ? '/dashboard' : '/'
  }

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath)

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/+$/, '') || '/'
      setCurrentPath(path.startsWith('/dashboard') ? '/dashboard' : '/')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      const target = path.replace(/\/+$/, '') || '/'
      const normalized = target.startsWith('/dashboard') ? '/dashboard' : '/'
      
      if (window.location.pathname !== target) {
        window.history.pushState({}, '', target)
      }
      setCurrentPath(normalized)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children: ReactNode
  className?: string
  onClick?: (e?: React.MouseEvent) => void
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className,
  onClick,
  ...rest
}) => {
  const { currentPath, navigate } = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to.startsWith('/#')) {
      e.preventDefault()
      const hash = to.replace('/', '')
      if (currentPath !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 120)
      } else {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      onClick?.(e)
      return
    }

    if (to.startsWith('#')) {
      e.preventDefault()
      if (currentPath !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.querySelector(to)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 120)
      } else {
        const el = document.querySelector(to)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      onClick?.(e)
      return
    }

    if (!to.startsWith('http') && !to.startsWith('mailto:') && !to.startsWith('tel:')) {
      e.preventDefault()
      navigate(to)
      onClick?.(e)
    }
  }

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  )
}
