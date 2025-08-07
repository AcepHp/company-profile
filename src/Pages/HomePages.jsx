import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

export default function HomePages() {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <main className="p-8">
                <div className="h-[2000px] bg-gray-50">
                    <h2 className="text-2xl font-bold">Scroll untuk tes sticky</h2>
                </div>
            </main>

        </div>
    )
}
