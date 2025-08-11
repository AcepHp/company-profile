"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const testimonials = [
    {
        name: "Andi Pratama",
        position: "CTO at GlobalTech",
        feedback: "Turing.id helped us hire top-tier remote developers in record time. Seamless process and great talent!",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Sarah Wijaya",
        position: "CEO at FinPro",
        feedback: "Thanks to Turing.id, we scaled our engineering team quickly without sacrificing quality.",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Michael Santoso",
        position: "Head of Product at NovaApp",
        feedback: "The developers we hired through Turing.id exceeded our expectations in skill and communication.",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Rina Kusuma",
        position: "Project Manager at CloudWorks",
        feedback: "Professional, reliable, and efficient. Turing.id made remote hiring stress-free.",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Budi Hartono",
        position: "Founder of StartUpGo",
        feedback: "From first interview to onboarding, Turing.id delivered an outstanding hiring experience.",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
];

export default function TestimonialSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="relative py-20 px-4 sm:px-8 bg-gradient-to-b from-blue-100 via-white to-blue-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                    Hear from Turing.id Clients
                </h2>
                <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
                    Discover how Turing.id has helped companies build high-performing remote teams worldwide.
                </p>

                <div className="relative">
                    {/* Left arrow */}
                    <div
                        ref={prevRef}
                        className="absolute top-1/2 -left-8 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>

                    {/* Right arrow */}
                    <div
                        ref={nextRef}
                        className="absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3500 }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white/60 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center min-h-[330px] transition-transform hover:scale-105 duration-300">
                                    <div className="relative">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-lg"
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                                    </div>
                                    <p className="text-gray-700 italic my-4 text-base leading-relaxed">"{item.feedback}"</p>
                                    <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                                    <span className="text-sm text-gray-500">{item.position}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
