import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ClientSection from '../components/ClientSection'

export default function HomePages() {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <ClientSection/>
            <main className="p-8">
                <div className="h-[2000px] bg-gray-50">
                    <h2 className="text-2xl font-bold">Scroll untuk tes sticky</h2>
                </div>
            </main>

        </div>
    )
}
