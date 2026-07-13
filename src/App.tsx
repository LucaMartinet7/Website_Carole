import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { HomePage } from './pages/HomePage'
import { InitiationReiki } from './pages/InitiationReiki'
import { SeanceIndividuelle } from './pages/SeanceIndividuelle'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--night)] text-[var(--cream)]">
      <ScrollToTop />
      <StarfieldCanvas />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seance-individuelle" element={<SeanceIndividuelle />} />
        <Route path="/initiation-reiki" element={<InitiationReiki />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
