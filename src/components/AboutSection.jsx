import {
    BriefcaseIcon,
    GlobeAltIcon,
    ChartBarIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function AboutSection() {
    const stats = [
        { id: 1, value: "1,000+", label: "Talents Available", icon: BriefcaseIcon },
        { id: 2, value: "98%", label: "Client Satisfaction Rate", icon: CheckCircleIcon },
        { id: 3, value: "120+", label: "Tech Stacks", icon: ChartBarIcon },
        { id: 4, value: "200+", label: "Global Clients", icon: GlobeAltIcon },
    ];

    return (
        <section className="bg-[#d7f1ff] py-16">
            <div className="bg-white rounded-3xl shadow-md mx-4 sm:mx-8 lg:mx-16 p-6 sm:p-10 md:p-14">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Left Title */}
                    <div className="lg:w-1/2">
                        <h2 className="text-xl sm:text-xl md:text-2xl font-bold text-[#0f172a] text-center lg:text-left">
                            At Turing.id, we connect top tech talents with global opportunities.
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
                                Turing.id is a platform that helps companies hire vetted remote software
                                developers from around the world. We make it easy for businesses to build
                                high-quality tech teams without geographical limitations.
                            </p>
                            <p>
                                Our talent pool covers a wide range of expertise, from frontend and backend
                                development to AI, data engineering, and DevOps. Each talent is tested for
                                technical and soft skills, ensuring they meet global standards.
                            </p>
                            <p>
                                With our rigorous vetting process, seamless onboarding, and dedicated support,
                                we help companies scale faster, reduce hiring risks, and achieve their goals
                                with confidence.
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
