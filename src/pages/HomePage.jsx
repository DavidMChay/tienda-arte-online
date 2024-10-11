import React from 'react';
import Navbar from '../components/navbar/Navbar'
import HeaderSection from '../components/headerSection/HeaderSection'
import TrendingSection from '../components/trendingSection/TrendingSection'
import TopCreators from '../components/topCreators/TopCreators'
import InfoSection from '../components/infoSection/InfoSection'
import CategoriesSection from '../components/categoriesSection/CategoriesSection'
import CategoryCarousel from '../components/categoryCarousel/CategoryCarousel'
import ThreeStepSection from '../components/threeStepsSection/ThreeStepsSection'
import NewsletterSection from '../components/newsLetterSection/NewsLetterSection'
import Footer from '../components/footer/Footer'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <HeaderSection />
            <TrendingSection />
            <TopCreators />
            <InfoSection />
            <CategoriesSection />
            <CategoryCarousel />
            <ThreeStepSection />
            <NewsletterSection />
            <Footer />
        </div>
    );
}
