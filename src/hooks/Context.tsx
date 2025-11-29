import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

function checkIsMobile() {
  const userAgent = navigator.userAgent.toLowerCase()
  const mobileRegex = /android|iphone|ipod|ipad/i

  if (mobileRegex.test(userAgent)) {
    return true
  } else {
    return false
  }
}

function checkUserThemeSetting() {
  if (localStorage.getItem('isDark') !== null) {
    return localStorage.getItem('isDark') === 'true' ? true : false
  }

  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

// 1. Define the possible isDark types and the shape of the context value
interface ThemeContextType {
  isDark: boolean
  isMobile: boolean
  toggleDarkMode: () => void
}

// 2. Create the context with a default value
// The default value here is used if the hook is called outside a provider.
// We provide a "no-op" function for the setter to satisfy TypeScript's initial type check.
const ThemeContext = createContext<ThemeContextType>({
  isDark: localStorage.getItem('isDark') === 'true' ? true : false,
  isMobile: false,
  toggleDarkMode: () => console.warn('useTheme must be used within a ThemeProvider'),
})

// 3. Create a custom hook to use the isDark context
export const useTheme = () => useContext(ThemeContext)

// 4. Create the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setTheme] = useState<boolean>(checkUserThemeSetting())
  const [isMobile, setIsMobile] = useState<boolean>(checkIsMobile())

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setIsMobile])

  const toggleDarkMode = () => {
    localStorage.setItem('isDark', !isDark as unknown as string)
    setTheme((prevTheme) => !prevTheme)
  }

  const contextValue = {
    isDark,
    isMobile,
    toggleDarkMode,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
