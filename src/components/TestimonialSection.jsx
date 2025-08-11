import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const testimonials = [
    {
        name: "Randy Wijaya",
        position: "Founder of Finloop",
        feedback: "Fast, professional, and effective. We’ve seen significant growth after the redesign.",
        avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
        name: "Rizky Ramadhan",
        position: "CEO of TechNova",
        feedback: "GeekGarden transformed our digital presence with incredible results. Their team is top-notch!",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        name: "Sinta Dewi",
        position: "Marketing Manager at KreatifID",
        feedback: "The UI/UX they designed was beyond our expectations. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Dimas Saputra",
        position: "CTO of CloudCore",
        feedback: "Their developers are skilled, communicative, and delivered before the deadline. Fantastic!",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        name: "Ayunda Rahma",
        position: "Project Lead at StartApp",
        feedback: "Working with GeekGarden was a breeze. They understood our needs and executed flawlessly.",
        avatar: "https://i.pravatar.cc/150?img=4",
    },
];

export default function TestimonialSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className="bg-blue-50 py-20 px-4 sm:px-8 relative">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                    Hear directly from our satisfied clients and partners who have experienced the GeekGarden difference.
                </p>

                {/* Slider wrapper with relative positioning for button placement */}
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
