import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePages() {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <div className="h-[2000px] bg-gray-50">
                    <h2 className="text-2xl font-bold">Scroll untuk tes sticky</h2>
                </div>
            </main>

        </div>
    )
}
