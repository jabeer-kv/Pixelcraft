import React, { useRef, useEffect, useState } from 'react';
import userImage from '../assets/image.png'; 
import './style.css';

const TestimonialsSection = () => {
    const containerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (container) {
                setShowLeftArrow(container.scrollLeft > 0);
                setShowRightArrow(container.scrollLeft + container.offsetWidth < container.scrollWidth);
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 200; // Adjust scroll amount as needed
        }
    };

    return (
        <section className="bg-white py-16 flex flex-col items-center">
                  <span className="bg-gray-100 text-purple-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
        Testimonials
      </span>

      <h2 className="text-4xl font-semibold text-center">
        What our clients are <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6DDCFF] to-[#7F60F9]">saying</span>
      </h2>

      <p className="text-xl text-blue-500 text-center mt-2">
        ipsum dolor sit amet consectetur. Sem dui viverra libero auctor
      </p>

     
      <div className="mt-6 text-center">
        <h3 className="text-3xl font-bold">2k+</h3>
        <p className="text-gray-500">Trusted by users</p>
      </div>
            {/* ... other content (title, etc.) ... */}

            <div className="relative mt-10 max-w-5xl w-full mx-auto">
                <div className="flex flex-row space-x-6 overflow-x-auto scroll-smooth no-scrollbar" ref={containerRef}>
                    {/* Card 1 */}
                    <TestimonialCard
                        image={userImage}
                        name="Jane Cooper"
                        text="ipsum dolor sit amet consectetur. Sem dui viverra libero auctor"
                        date="August 20, 2024"
                    />
                    {/* Card 2 */}
                    <TestimonialCard
                        image={userImage}
                        name="Jane Cooper"
                        text="ipsum dolor sit amet consectetur. Sem dui viverra libero auctor"
                        date="August 20, 2024"
                    />
                    {/* Card 3 */}
                    <TestimonialCard
                        image={userImage}
                        name="Jane Cooper"
                        text="ipsum dolor sit amet consectetur. Sem dui viverra libero auctor"
                        date="August 20, 2024"
                    />
                    {/* Card 4 (Added) */}
                    <TestimonialCard
                        image={userImage}
                        name="Jane Cooper"
                        text="New testimonial text here" // Replace with actual text
                        date="September 1, 2024"
                    />
                    {/* Card 5 (Added) */}
                    <TestimonialCard
                        image={userImage}
                        name="Jane Doe" // Different name
                        text="Another testimonial from a happy client" // Replace with actual text
                        date="September 5, 2024"
                    />
                </div>

                {/* Arrow buttons */}
                {showLeftArrow && (
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100 z-10" // Added z-10
                    >
                        &lt;
                    </button>
                )}

                {showRightArrow && (
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100 z-10" // Added z-10
                    >
                        &gt;
                    </button>
                )}
            </div>
        </section>
    );
};

const TestimonialCard = ({ image, name, text, date }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md w-[350px] shrink-0">
        <div className="flex items-center gap-4 mb-3">
            <img src={image} alt={name} className="w-12 h-12 rounded-full" />
            <div>
                <h4 className="font-semibold">{name}</h4>
                <div className="text-yellow-400 text-lg">★★★★★</div>
            </div>
        </div>
        <p className="text-gray-700">{text}</p>
        <p className="text-sm text-gray-500 mt-3">{date}</p>
    </div>
);

export default TestimonialsSection;