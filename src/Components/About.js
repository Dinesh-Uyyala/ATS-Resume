import React from 'react';
import AboutUsImage from './Anoutus.png'; // Ensure the path is correct
import AboutServicesImage from './Aboutservvices.png'; // Ensure the path is correct

const About = () => {
    return (
        <section
        id="about-services"
        className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center"
    >
        <div className="max-w-7xl mx-auto p-8 md:p-16 space-y-20">
            {/* Combined About Us & Services Header */}
            <div className="text-center">
                <h2 className="text-5xl font-extrabold text-white mb-4">
                    Empowering Future <span className="text-yellow-300">Technologists</span>
                </h2>
                <p className="text-xl text-white/80">
                    At <span className="font-semibold text-yellow-200">Shiva Technologies</span>, we empower students and professionals 
                    through high-quality education and practical experience. Our mission bridges the gap between 
                    theory and real-world applications with free full-stack courses and comprehensive services.
                </p>
            </div>
    
            {/* About Us & Services Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Combined Section - About Us */}
                <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
                    <img
                        src={AboutUsImage}
                        alt="Empowering Education"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">
                            About <span className="text-yellow-500">Us</span>
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                                We aim to create a learning environment where students gain hands-on experience, empowering them to 
                                become future-ready technologists. Our platform offers free courses, real-world internships, and support 
                                for career growth. We believe in bridging the gap between theory and practice by providing practical 
                                exposure to industry-relevant tools and technologies. Our courses are designed to foster critical thinking, 
                                problem-solving skills, and collaborative learning. Through personalized mentoring and continuous guidance, 
                                we ensure every learner is equipped with the knowledge and confidence needed to excel in today’s competitive 
                                job market. Join us on a journey toward transforming your passion into a rewarding career.
                            </p>
                    </div>
                </div>
    
                {/* Combined Section - Services */}
                <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
                    <img
                        src={AboutServicesImage}
                        alt="Our Services"
                        className="w-full h-72 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">
                            Our <span className="text-yellow-500">Services</span>
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                            <li>Free Full-Stack Development Courses</li>
                            <li>Internship Programs to Gain Real-World Experience</li>
                            <li>Training Sessions on Latest Technologies and Tools</li>
                            <li>Support for College Projects and Assignments</li>
                            <li>Website Development Services for Businesses</li>
                            <li>Career Guidance and Placement Assistance</li>
                            <li>Workshops and Hackathons for Skill Enhancement</li>
                            <li>Personalized Mentoring from Industry Experts</li>
                            <li>Access to Community Forums for Peer Collaboration</li>
                            <li>Regular Updates on Job Opportunities and Trends</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    );
};

export default About;
