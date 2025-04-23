import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import aboutimg from "../assets/favimg.png";
import bgVideo from "../assets/bg-video.mp4"; 

const About = () => {
  return (
    <section className="relative overflow-hidden text-black py-16 px-6 md:px-12 lg:px-24">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mt-20">
        <h2 className="text-4xl font-bold text-blue-400 mb-6 animate-fadeIn">
          📚 About <span className="text-white">Book Haven</span>
        </h2>
        <p className="text-lg text-white leading-relaxed mb-8 animate-fadeIn delay-200">
          Welcome to <strong>Book Haven</strong>, a paradise for book lovers! Whether you're a
          passionate reader, student, or collector, we bring you a carefully
          curated collection of books across all genres.
        </p>
      </div>

      {/* About Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 animate-slideInLeft">
          <img
            src={aboutimg}
            alt="Book Store"
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 text-white">
          <h3 className="text-3xl font-semibold text-blue-300 mb-4 animate-slideInRight">
            Why Choose Us?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start animate-fadeInUp">
              <span className="text-blue-300 text-xl mr-3">📖</span>
              <p><strong>Vast Collection:</strong> From timeless classics to modern bestsellers.</p>
            </li>
            <li className="flex items-start animate-fadeInUp delay-200">
              <span className="text-blue-300 text-xl mr-3">🎁</span>
              <p><strong>Exclusive Discounts:</strong> Special offers and member-only perks.</p>
            </li>
            <li className="flex items-start animate-fadeInUp delay-400">
              <span className="text-blue-300 text-xl mr-3">🚀</span>
              <p><strong>Fast & Free Delivery:</strong> Get books delivered at your doorstep quickly.</p>
            </li>
            <li className="flex items-start animate-fadeInUp delay-600">
              <span className="text-blue-300 text-xl mr-3">🌍</span>
              <p><strong>Community Events:</strong> Join book clubs, author meets, and reading sessions.</p>
            </li>
          </ul>

          <div className="mt-6">
            <Link to="/shop">
              <Button
                gradientDuoTone="greenToBlue"
                size="lg"
                className="hover:scale-105 transition-all duration-300 bg-blue-600 text-white"
              >
                Explore Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 mt-16 text-center">
        <h3 className="text-3xl font-semibold text-blue-400 mb-6 animate-fadeIn">📌 Our Mission</h3>
        <p className="text-lg text-white leading-relaxed animate-fadeInUp delay-200">
          Our mission is to create a haven for book lovers where they can
          discover, learn, and grow. We believe in the <strong>power of stories</strong> to
          inspire and transform lives.
        </p>
      </div>
    </section>
  );
};

export default About;
