import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ClientSection from '../components/ClientSection'
import OurWorkSection from '../components/OurWorkSection'
import TestimonialSection from '../components/TestimonialSection'
import OurLocationSection from '../components/OurLocationSection'
import FooterSection from '../components/FooterSection'

export default function HomePages() {
    return (
        <div>
            <Navbar />
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <ClientSection/>
            <OurWorkSection/>
            <TestimonialSection/>
            <OurLocationSection/>
            <FooterSection/>
        </div>
    )
}
