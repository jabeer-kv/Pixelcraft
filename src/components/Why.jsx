import React from 'react';

const WhyPixelCraft = () => {
    return (
        <section className="py-16 bg-white text-left">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-famly text-center mb-8">
                    Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">PixelCraft</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-13 justify-items-center "> 
                    <div>
                        <h3 className="text-2xl font-famly mb-4">Custom Development</h3>
                        <div className="text-gray-700 font-famly leading-relaxed">
                            <p className="text-xl mb-6">Tailored websites and web apps for seamless </p>
                            <p className="text-xl mb-6">user experiences.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-famly mb-4">User-Focused & SEO-Optimized</h3>
                        <div className="text-gray-700 font-famly leading-relaxed">
                            <p className="text-xl mb-6">High-performing, search-friendly digital</p>
                            <p className="text-xl mb-6">solutions.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-famly mb-4">Marketing That Works</h3>
                        <div className="text-gray-700 font-famly leading-relaxed">
                            <p className="text-xl mb-6">SEO, PPC, and content strategies to</p>
                            <p className="text-xl mb-6">boost growth.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-famly mb-4">Reliable & Scalable</h3>
                        <div className="text-gray-700 font-famly leading-relaxed">
                            <p className="text-xl mb-6">End-to-end support for long-term</p>
                            <p className="text-xl mb-6">success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyPixelCraft;