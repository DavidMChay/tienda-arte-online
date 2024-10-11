import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar/Navbar'
import HeaderSection from './components/headerSection/HeaderSection'
import TrendingSection from './components/trendingSection/TrendingSection'
import TopCreators from './components/topCreators/TopCreators'
import InfoSection from './components/infoSection/InfoSection'
import CategoriesSection from './components/categoriesSection/CategoriesSection'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HeaderSection />
    <TrendingSection />
    <TopCreators />
    <InfoSection />
    <CategoriesSection />
  </StrictMode>,
)
