import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function FooterSection() {
    return (
        <footer className="bg-[#0f172a] text-white">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo dan Deskripsi */}
                <div>
                    <h2 className="text-3xl font-extrabold mb-5 tracking-wide">Turing.ID</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We are more than just a software house. Let's build your ideas into reality with our experienced and passionate team.
                    </p>
                    {/* Social media */}
                    <div className="flex space-x-5 mt-8">
                        <a href="#" className="bg-blue-600 hover:bg-blue-700 transition rounded-full p-3">
                            <i className="fab fa-facebook-f text-white text-lg"></i>
                        </a>
                        <a href="#" className="bg-sky-400 hover:bg-sky-500 transition rounded-full p-3">
                            <i className="fab fa-twitter text-white text-lg"></i>
                        </a>
                        <a href="#" className="bg-pink-500 hover:bg-pink-600 transition rounded-full p-3">
                            <i className="fab fa-instagram text-white text-lg"></i>
                        </a>
                        <a href="#" className="bg-blue-700 hover:bg-blue-800 transition rounded-full p-3">
                            <i className="fab fa-linkedin-in text-white text-lg"></i>
                        </a>
                    </div>
                </div>

                {/* Navigasi */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-gray-300 text-base">
                        <li><a href="#" className="hover:text-white transition">Home</a></li>
                        <li><a href="#" className="hover:text-white transition">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition">Our Services</a></li>
                        <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* Kontak */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                    <ul className="space-y-6 text-gray-300 text-base">
                        <li className="flex items-start space-x-3">
                            <MapPinIcon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                            <span>Jl. Ujungjaya-Conggeang, Desa Cipelang, Kecamatan Ujungjaya, Sumedang Jawa Barat</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <PhoneIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <span>+62 823 1616 7554</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <EnvelopeIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                            <span>turing.id@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bawah */}
            <div className="border-t border-white/20 py-6 text-center text-sm text-gray-400 select-none">
                © {new Date().getFullYear()} Turing.ID. All rights reserved.
            </div>
        </footer>
    );
}
