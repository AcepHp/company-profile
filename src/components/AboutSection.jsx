import {
    BriefcaseIcon,
    GlobeAltIcon,
    ChartBarIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function AboutSection() {
    const stats = [
        { id: 1, value: "10+", label: "Years of Experience", icon: BriefcaseIcon },
        { id: 2, value: "95%", label: "SLA Success Rate", icon: CheckCircleIcon },
        { id: 3, value: "50+", label: "Areas of Expertise", icon: ChartBarIcon },
        { id: 4, value: "100+", label: "Clients Worldwide", icon: GlobeAltIcon },
    ];

    return (
        <section className="bg-[#d7f1ff] py-16">
            <div className="bg-white rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16 p-6 sm:p-10 md:p-14">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Left Title */}
                    <div className="lg:w-1/2">
                        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-[#0f172a] text-center lg:text-left">
                            At GeekGarden, we're more than just Software House.
                        </h2>
                    </div>
                    {/* Right Placeholder */}
                    <div className="lg:w-1/2" />
                </div>

                {/* Main Content */}
                <div className="md:mt-2 flex flex-col lg:flex-row gap-12">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6">
                        <div className="text-[#334155] text-sm sm:text-base font-medium space-y-4 text-justify">
                            <p>
                                For over a decade, our team in Indonesia has helped startups, SMEs,
                                and enterprises grow with custom applications and scalable digital
                                solutions. We work with clients worldwide, bridging ideas and
                                execution through real-time collaboration, workshops, and full
                                transparency.
                            </p>
                            <p>
                                Whether you need to scale your team, streamline operations, or
                                modernize your business, we offer IT Manpower Sharing or IT
                                Outsourcing, Custom Software Development, and Digital
                                Transformation Solutions to match your goals.
                            </p>
                            <p>
                                Certified by DUNS, PSE Kominfo, ISO 9001, and ISO 27001, we deliver
                                secure, high-quality results you can trust. From consultation to
                                deployment, we keep you involved every step of the way.
                            </p>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-10 items-start sm:items-center">
                        {stats.map((item) => (
                            <div key={item.id} className="flex items-start gap-4">
                                <div className="h-17 w-1 bg-blue-500 rounded-sm"></div>
                                <div>
                                    <h3 className="text-3xl sm:text-5xl font-bold text-[#0f172a]">
                                        {item.value}
                                    </h3>
                                    <p className="text-[#334155] text-sm sm:text-base font-medium">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
