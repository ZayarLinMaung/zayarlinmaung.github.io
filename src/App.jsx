import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Education from './components/Education'
import Studio from './components/Studio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <div className="noise" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Education />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
