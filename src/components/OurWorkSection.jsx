const works = [
    {
        title: "Mobile Banking App",
        description: "A modern banking application with secure authentication and real-time transactions, crafted to enhance user trust and ease of access.",
        image: "./work1.jpg",
        link: "#",
    },
    {
        title: "E-commerce Platform",
        description: "A complete e-commerce solution with intuitive UI, product management, shopping cart, and seamless payment gateway integration.",
        image: "./work2.jpg",
        link: "#",
    },
    {
        title: "Travel Booking Website",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt amet deleniti culpa sunt sapiente reprehenderit velit totam alias, voluptates dolore quos aperiam ex? At, commodi inventore! Distinctio maiores sequi in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste sapiente blanditiis nihil natus aliquam, voluptatibus, explicabo magnam maxime neque modi rerum velit vitae, similique dolore alias dolor excepturi maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores repudiandae nostrum temporibus dolore et voluptatum doloribus quo odit? Dolore quaerat atque, dignissimos doloremque ex sed temporibus vero maxime unde!",
        image: "./work3.jpg",
        link: "#",
    },
];

export default function OurWorksSection() {
    return (
        <section className="bg-[#f8fafc] py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
                    Our Works
                </h2>

                {/* Description */}
                <p className="text-[#475569] text-base sm:text-lg max-w-2xl mx-auto mb-12">
                    Discover some of our standout projects that combine creativity, technology, and purpose to drive real business results.
                </p>

                {/* Grid of works */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group flex flex-col"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between flex-grow text-left">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
                                        {work.title}
                                    </h3>
                                    <p className="text-sm text-[#64748b] line-clamp-3">
                                        {work.description}
                                    </p>
                                </div>
                                <a
                                    href={work.link}
                                    className="mt-6 inline-block text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition duration-300 self-start"
                                >
                                    Read More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
