import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import ScrollToTop from './utils/scroll-to-top'
import Header from './Header'
import Footer from './Footer'
import Loading from './pages/loading'
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./Presentation/Contact/Contact'))
const About = lazy(() => import('./Presentation/About/About'))
const HenStagParty = lazy(() => import('./pages/HenStagParty'))
const CorporateEvents = lazy(() => import('./pages/Corporate'))
import './App.scss'

const App = (): JSX.Element => {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/stag-hen-events' element={<HenStagParty />} />
              <Route path='/corporate-events' element={<CorporateEvents />} />
              <Route path='/' element={<Home />} />
              {/* 404 */}
              <Route path='*' element={<Home />} />
            </Routes>
          </Suspense>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  )
}

export default App
