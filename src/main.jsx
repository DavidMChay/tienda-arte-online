import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar/Navbar'
import HeaderSection from './components/headerSection/HeaderSection'
import TrendingSection from './components/trendingSection/TrendingSection'
import TopCreators from './components/topCreators/TopCreators'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeaderSection />
    <TrendingSection />
    <TopCreators />
  </StrictMode>,
)
