import React from 'react';

const ContactUs = () => {
return (
    <section className="py-16 bg-white flex flex-col items-center">
        <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm mb-4">
            Contact Us
        </span>
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
                <div className="md:w-1/2 flex flex-col items-center text-center">
                    <div className="rounded-lg py-8 px-6">
                        <h2 className="text-3xl font-bold mb-4">Connect with Us</h2>
                        <h3 className="text-2xl mb-6 text-indigo-500">Effortlessly</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Get in touch with our team for seamless support and tailored digital solutions.
                            Whether you have a project idea or need expert guidance, PixelCraft is here to
                            help you achieve your goals.
                        </p>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <div className="rounded-lg py-8 px-6">
                        <form className="flex flex-col">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-3 py-2 rounded-md border-2 border-transparent focus:outline-none"
                                    style={{
                                        borderImage: 'linear-gradient(to right, #82cdff, #6060ea) 1',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                    }}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-3 py-2 rounded-md border-2 border-transparent focus:outline-none"
                                    style={{
                                        borderImage: 'linear-gradient(to right, #82cdff, #6060ea) 1',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                    }}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full px-3 py-2 rounded-md border-2 border-transparent focus:outline-none"
                                    style={{
                                        borderImage: 'linear-gradient(to right, #82cdff, #6060ea) 1',
                                        borderWidth: '2px',
                                        borderStyle: 'solid',
                                    }}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full px-6 py-2  rounded-lg  border-2 border-transparent focus:outline-none"
                                    style={{
                                        borderImage: 'linear-gradient(to right, #82cdff, #6060ea) 1',
                                        borderWidth: '2px',
                                        borderStyle: "solid",
                                      


                                    }}
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative group">
                                    <button className="relative px-6 py-2 rounded-lg font-medium border-2 border-transparent bg-white text-black transition-all duration-300 group-hover:text-white">
                                        <span className="relative z-10">Submit</span>
                                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        <span className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#6DDCFF] group-hover:border-gradient-to-r group-hover:from-[#6DDCFF] group-hover:to-[#7F60F9]"></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default ContactUs;