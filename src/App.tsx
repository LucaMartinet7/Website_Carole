import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navigation } from './components/Navigation'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { WhatsAppButton } from './components/WhatsAppButton'
import { FormationsReiki } from './pages/FormationsReiki'
import { HomePage } from './pages/HomePage'
import { InitiationReiki } from './pages/InitiationReiki'
import { MentionsLegales } from './pages/MentionsLegales'
import { ReikiPage } from './pages/ReikiPage'
import { SeanceIndividuelle } from './pages/SeanceIndividuelle'
import { ThetaHealing } from './pages/ThetaHealing'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' })
      }, 60)
      return () => window.clearTimeout(id)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

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
        <Route path="/reiki" element={<ReikiPage />} />
        <Route path="/thetahealing" element={<ThetaHealing />} />
        <Route path="/seance-individuelle" element={<SeanceIndividuelle />} />
        <Route path="/initiation-reiki" element={<InitiationReiki />} />
        <Route path="/formations-reiki" element={<FormationsReiki />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
