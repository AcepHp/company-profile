import Marquee from "react-fast-marquee";

const clients = [
    { name: "Telkom", logo: "./Telkom.png" },
    { name: "Pertamina", logo: "./pertamina.png" },
    { name: "Gojek", logo: "./gojek.png" },
    { name: "BNI", logo: "./bni.png" },
    { name: "Mandiri", logo: "./mandiri.png" },
    { name: "Traveloka", logo: "./traveloka.png" },
];

export default function OurClientSection() {
    return (
        <section className="bg-[#d7f1ff] py-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
                    Our Clients
                </h2>
                <p className="text-[#334155] text-sm sm:text-base max-w-2xl mx-auto mb-12">
                    We are trusted by leading companies across Indonesia to deliver high-quality software solutions tailored to their business needs.
                </p>
                <Marquee speed={20} gradient={false} pauseOnHover={false}>
                    <div className="flex items-center gap-8 sm:gap-12 md:gap-16 px-4 sm:px-8">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="w-24 sm:w-32 md:w-40 h-16 sm:h-20 flex items-center justify-center"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 hover:scale-105 transition duration-300 ease-in-out"
                                    draggable={false}
                                    onMouseDown={(e) => e.preventDefault()}
                                />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
}
