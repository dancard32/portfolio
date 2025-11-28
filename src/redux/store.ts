import { create } from 'zustand'

function isMobile() {
  const userAgent = navigator.userAgent.toLowerCase()
  const mobileRegex = /android|iphone|ipod|ipad/i

  if (mobileRegex.test(userAgent)) {
    return true
  } else {
    return false
  }
}

interface StyleStore {
  isDark: boolean
  isMobile: boolean
  toggleDarkMode: () => void
}

const useStylingStore = create<StyleStore>((set) => ({
  isDark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  isMobile: isMobile(),
  toggleDarkMode: () => set((state) => ({ isDark: !state.isDark })),
}))

export default useStylingStore
