import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import {
  Card,
  H1,
  Text,
} from '@blueprintjs/core'
import useStylingStore from './redux/store'
import { useShallow } from 'zustand/react/shallow'
import { Spinner } from '@blueprintjs/core'

import 'normalize.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/select/lib/css/blueprint-select.css'
import '@blueprintjs/table/lib/css/table.css'

import routes from '~react-pages'
import PageNotFound from './_pages/PageNotFound'
import ResponsiveNavbar from './feature/nav/NavBar'

export function App() {
  const { isDark, isMobile } = useStylingStore(
    useShallow((state) => ({ isDark: state.isDark, isMobile: state.isMobile }))
  )

  return (
    <Suspense
      fallback={
        <div className={isDark ? 'bp6-dark' : 'bp6'} style={{ width: '100vw', height: '100vh' }}>
          <Card className='loading-content flex justify-center w-full h-full'>
            <Card className='flex-col justify-center w-1/2 h-3/4'>
              <H1 className='text-center' style={{ fontFamily: 'impact' }}>
                <strong>DanCard()</strong>
              </H1>
              <Text className='text-center my-4'>Loading...</Text>
              <Spinner />
            </Card>
          </Card>
        </div>
      }
    >
      <div className={`${isDark ? 'bp6-dark' : 'bp6'} 100vw! 100vh!`}>
        {!isMobile ? <ResponsiveNavbar /> : null}
        <div className='main-content h-[90vh]! w-full'>
          {useRoutes([...routes, { path: '*', element: <PageNotFound /> }])}
        </div>
        {isMobile ? <ResponsiveNavbar /> : null}
      </div>
    </Suspense>
  )
}

const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
