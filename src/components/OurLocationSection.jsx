"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function LocationAndContactSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-[#0f172a] mb-12">
                    Keep in Touch & Our Location
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left: Contact Info */}
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700">
                            If you have any questions or want to discuss your next project, don’t hesitate to contact us!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPinIcon className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#0f172a]">Address</p>
                                    <p className="text-gray-700">Jl. Cisaranten Kulon No. 17A, Bandung</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <PhoneIcon className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#0f172a]">Phone</p>
                                    <p className="text-gray-700">+62 878-2335-3749</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <EnvelopeIcon className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#0f172a]">Email</p>
                                    <p className="text-gray-700">geekgardenbdg@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Google Maps */}
                    <div className="w-full h-[300px] md:h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9901601939436!2d107.68712227410753!3d-6.892355993099176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e98e1cf92d17%3A0x9f8c620d02ef2c93!2sGeekGarden!5e0!3m2!1sen!2sid!4v1697464264841!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            className="rounded-lg shadow-md border border-gray-200"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
