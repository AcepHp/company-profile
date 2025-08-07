import {
    Cog6ToothIcon,
    UserGroupIcon,
    PaintBrushIcon,
    CloudIcon,
    ChartBarIcon,
    ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        id: 1,
        title: "Custom Software Development",
        description:
            "Tailor-made software to meet your business needs, from web to mobile applications.",
        icon: Cog6ToothIcon,
    },
    {
        id: 2,
        title: "IT Manpower Sharing",
        description:
            "Scale your team with skilled developers from Indonesia to accelerate your projects.",
        icon: UserGroupIcon,
    },
    {
        id: 3,
        title: "UI/UX Design",
        description:
            "Design seamless and engaging user experiences for both mobile and web platforms.",
        icon: PaintBrushIcon,
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        description:
            "Deploy and manage your infrastructure with scalable and reliable cloud solutions.",
        icon: CloudIcon,
    },
    {
        id: 5,
        title: "Digital Transformation",
        description:
            "Transform your business with modern technology and streamlined digital systems.",
        icon: ChartBarIcon,
    },
    {
        id: 6,
        title: "Cybersecurity Consulting",
        description:
            "Protect your systems and data with our certified security solutions and audits.",
        icon: ShieldCheckIcon,
    },
];

export default function ServiceSection() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
                    Our Services
                </h2>
                <p className="text-[#334155] text-sm sm:text-base max-w-2xl mx-auto mb-12">
                    We offer a wide range of digital solutions to help your business grow,
                    innovate, and stay ahead of the competition.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map(({ id, title, description, icon: Icon }) => (
                        <div
                            key={id}
                            className="bg-[#f8fafc] p-6 rounded-xl shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4 mx-auto">
                                <Icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-[#475569]">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
