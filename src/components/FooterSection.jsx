export default function FooterSection() {
    return (
        <footer className="bg-[#0f172a] text-white">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo dan Deskripsi */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">GeekGarden</h2>
                    <p className="text-sm mb-4">
                        We are more than just a software house. Let's build your ideas into reality with our experienced and passionate team.
                    </p>
                    {/* Social media */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-blue-400 transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-pink-500 transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-blue-600 transition">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>

                {/* Navigasi */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Our Services</a></li>
                        <li><a href="#" className="hover:underline">Testimonials</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Kontak */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            Jl. Contoh Alamat No. 123, Yogyakarta
                        </li>
                        <li>
                            <i className="fas fa-phone mr-2"></i>
                            +62 812 3456 7890
                        </li>
                        <li>
                            <i className="fas fa-envelope mr-2"></i>
                            contact@geekgarden.id
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bawah */}
            <div className="border-t border-white/10 py-6 text-center text-sm text-white/70">
                © {new Date().getFullYear()} GeekGarden. All rights reserved.
            </div>
        </footer>
    );
}
