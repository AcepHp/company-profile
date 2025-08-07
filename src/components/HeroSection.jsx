export default function HeroSection() {
    return (
        <section className="relative bg-[#d7f1ff] from-white via-blue-50 to-blue-100 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl z-0"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 md:py-20 sm:py-20 mt-15 md:mt-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                        Empowering Your Ideas with
                        <span className="block text-blue-600 glow-text">Custom Software</span>
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                        Kami bantu wujudkan transformasi digital bisnis Anda melalui teknologi terbaik dan solusi cerdas.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-md">
                            Konsultasi Gratis
                        </button>
                        <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-all shadow-md">
                            Lihat Portfolio
                        </button>
                    </div>
                </div>

                {/* Image / Illustration */}
                <div className="w-full lg:w-1/2 flex justify-center relative">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-130 md:h-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="./hero-section.jpg"
                            alt="Team working"
                            className="object-cover w-full h-full scale-110 hover:scale-125 transition-transform duration-700"
                        />
                    </div>
                    <div className="absolute -bottom-3 -right-0 bg-blue-500 text-white font-bold px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm">
                        #WeCodeForYou
                    </div>
                </div>
            </div>
        </section>
    );
}
