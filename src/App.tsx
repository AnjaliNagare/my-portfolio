import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from '@/context/ThemeContext'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollProgress, BackToTop } from '@/components/ScrollProgress'
import { Home } from '@/pages/Home'
import { ProjectDetails } from '@/pages/ProjectDetails'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

function App() {
  const location = useLocation()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
