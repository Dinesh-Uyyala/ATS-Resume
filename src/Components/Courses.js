import React from 'react';
import { Link } from 'react-router-dom';


const Courses = () => {
    return (

<section id="courses" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
    <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600">Our Courses</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Row 1 - Example course cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
    <img
        src="https://via.placeholder.com/400x200/007BFF/FFFFFF?text=Front+END"
        alt="Front END Development"
        className="w-full h-40 object-cover"
    />
    <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-blue-600">Front END Development</h3>
        <p className="text-gray-700 mb-4">Learn the latest JavaScript frameworks and tools to become a front-end developer.</p>
        <Link to="/FrontendDetails" className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
            Enroll Now
        </Link>
    </div>
</div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/28A745/FFFFFF?text=Back+END" // Replace with your image URL
                alt="Back END Development"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-green-600">Back END Development</h3>
                <p className="text-gray-700 mb-4">Master Node.js and Express.js for back-end development.</p>
                <a href="#" className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/DC3545/FFFFFF?text=Devops" // Replace with your image URL
                alt="Devops"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-red-600">DevOps</h3>
                <p className="text-gray-700 mb-4">Learn about continuous integration and continuous deployment (CI/CD).</p>
                <a href="#" className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        {/* Row 2 - Additional course cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/6F42C1/FFFFFF?text=JavaScript" // Replace with your image URL
                alt="JavaScript"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-600">Database Management</h3>
                <p className="text-gray-700 mb-4">Get a solid understanding of database design and management.</p>
                <a href="#" className="inline-block px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/FFC107/FFFFFF?text=Python" // Replace with your image URL
                alt="Python"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-600">Python Programming</h3>
                <p className="text-gray-700 mb-4">Learn Python from scratch and build your first application.</p>
                <a href="#" className="inline-block px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/17A2B8/FFFFFF?text=UI+Design" // Replace with your image URL
                alt="UI Design"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-cyan-600">UI/UX Design</h3>
                <p className="text-gray-700 mb-4">Learn the principles of user interface and user experience design.</p>
                <a href="#" className="inline-block px-4 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow hover:bg-cyan-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        {/* Row 3 - Additional course cards */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/343A40/FFFFFF?text=Web+Development" // Replace with your image URL
                alt="Web Development"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">SAP</h3>
                <p className="text-gray-700 mb-4">Explore enterprise solutions with SAP technology.</p>
                <a href="#" className="inline-block px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow hover:bg-gray-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/007BFF/FFFFFF?text=Data+Science" // Replace with your image URL
                alt="Data Science"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-600">Data Science</h3>
                <p className="text-gray-700 mb-4">Learn data analysis and machine learning using Python.</p>
                <a href="#" className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
            <img
                src="https://via.placeholder.com/400x200/6610F2/FFFFFF?text=Cyber+Security" // Replace with your image URL
                alt="Cyber Security"
                className="w-full h-40 object-cover"
            />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-600">Cyber Security</h3>
                <p className="text-gray-700 mb-4">Understand the fundamentals of cyber security and data protection.</p>
                <a href="#" className="inline-block px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300">
                    Enroll Now
                </a>
            </div>
        </div>
    </div>
</section>



    );
}

export default Courses;
