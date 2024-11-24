import React from 'react';
import HomepageImage from './Homepage.png'; // Update path accordingly
import TrainingImage from './Trainings.png'; // Image for the Trainings section
import internshipImg from './Internshipimage.png';

const HomePage = () => {
  return (
    <>
      {/* Main Section */}
      <main>
        <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 flex items-center px-4">
          <div className="max-w-6xl mx-auto w-full p-8">
            <h1 className="text-6xl font-extrabold text-indigo-700 mb-8 tracking-wide">
              Shiva Technologies
            </h1>

            <div className="flex flex-col md:flex-row items-stretch gap-10">
              {/* Text Section */}
              <div className="md:w-2/3 flex flex-col justify-between">
                <p className="text-gray-800 text-xl leading-relaxed text-center md:text-left">
                  Shiva Technologies is a leading software company specializing in{" "}
                  <span className="text-indigo-600 font-semibold">
                    web development, training, internships,
                  </span>{" "}
                  and support for college projects. Our mission is to empower the next
                  generation of developers by providing high-quality services to students
                  and professionals alike.
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <a
                    href="#"
                    className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md 
                    hover:bg-indigo-700 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <div className="md:w-1/3 flex-grow h-full">
                <img
                  src={HomepageImage}
                  alt="Shiva Technologies"
                  className="w-full h-full object-cover rounded-xl shadow-md transform transition hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trainings Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
            Our Training Programs
          </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Training Program 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={TrainingImage}
                    alt="Full-Stack Development Training"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                      Full-Stack Development Training
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Master front-end and back-end technologies to build dynamic web applications.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Explore Training &rarr;
                    </a>
                  </div>
                </div>

                {/* Training Program 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={TrainingImage}
                    alt="Data Science"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                      Data Science
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Gain expertise in data analysis, machine learning, and artificial intelligence.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Explore Training &rarr;
                    </a>
                  </div>
                </div>

                {/* Training Program 3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={TrainingImage}
                    alt="UI/UX Design"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                      UI/UX Design
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Learn how to create intuitive and engaging user interfaces with best design practices.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Explore Training &rarr;
                    </a>
                  </div>
                </div>

                {/* Training Program 4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={TrainingImage}
                    alt="Internship Programs"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                    Testing
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Get real-world experience by working on live projects guided by industry experts.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Explore Training &rarr;
                    </a>
                  </div>
                </div>

                {/* Training Program 5 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={TrainingImage}
                    alt="Internship Programs"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                    SAP
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Get real-world experience by working on live projects guided by industry experts.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Explore Training &rarr;
                    </a>
                  </div>
                </div>

              {/* Training Program 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={TrainingImage}
                    alt="Internship Programs"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                    AI Tools
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Get real-world experience by working on live projects guided by industry experts.
                    </p>
                    <a
                      href="#"
                      className="text-indigo-600 font-semibold hover:underline"
                    >
                      Explore Training &rarr;
                    </a>
                  </div>
                </div>     
              </div>
            </div>
      </section>

{/* Internship Section */}
<section className="bg-orange-100 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">
      Our Internship Programs
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Internship Program 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            Web Development Internship
          </h3>
          <p className="text-gray-700 mb-4">
            Work on real-world web development projects using the latest technologies. Explore Internship opportunities that allow you to develop your skills in a collaborative environment, engage with industry experts, and gain practical experience.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Explore Internship &rarr;
          </a>
        </div>
        <img
          src={"https://via.placeholder.com/150"} // Replace with your image URL
          alt="Web Development Internship"
          className="w-48 h-48 object-cover" // Adjust width and height here
        />
      </div>

      {/* Internship Program 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            Data Analysis Internship
          </h3>
          <p className="text-gray-700 mb-4">
            Gain hands-on experience in data analysis and reporting with industry tools. This internship offers practical knowledge and mentorship, preparing you for a successful career in data-driven decision-making.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Explore Internship &rarr;
          </a>
        </div>
        <img
          src={"https://via.placeholder.com/150"} // Replace with your image URL
          alt="Data Analysis Internship"
          className="w-48 h-48 object-cover" // Adjust width and height here
        />
      </div>

      {/* Internship Program 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            Graphic Design Internship
          </h3>
          <p className="text-gray-700 mb-4">
            Collaborate with our design team to create compelling graphics for various projects. This internship focuses on enhancing your creative skills and applying them in real-world scenarios.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Explore Internship &rarr;
          </a>
        </div>
        <img
          src={"https://via.placeholder.com/150"} // Replace with your image URL
          alt="Graphic Design Internship"
          className="w-48 h-48 object-cover" // Adjust width and height here
        />
      </div>

      {/* Internship Program 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            Marketing Internship
          </h3>
          <p className="text-gray-700 mb-4">
            Assist our marketing team in developing strategies and executing campaigns. This internship provides insights into market trends and effective communication strategies.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Explore Internship &rarr;
          </a>
        </div>
        <img
          src={"https://via.placeholder.com/150"} // Replace with your image URL
          alt="Marketing Internship"
          className="w-48 h-48 object-cover" // Adjust width and height here
        />
      </div>

      {/* Internship Program 5 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            Software Testing Internship
          </h3>
          <p className="text-gray-700 mb-4">
            Learn about software testing methodologies and contribute to our QA processes. This internship emphasizes the importance of quality assurance in the software development lifecycle.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Explore Internship &rarr;
          </a>
        </div>
        <img
          src={"https://via.placeholder.com/150"} // Replace with your image URL
          alt="Software Testing Internship"
          className="w-48 h-48 object-cover" // Adjust width and height here
        />
      </div>

      {/* Internship Program 6 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
        <div className="p-6 flex-1">
          <h3 className="text-2xl font-bold text-indigo-600 mb-2">
            AI Development Internship
          </h3>
          <p className="text-gray-700 mb-4">
            Dive into artificial intelligence and machine learning projects with mentorship. This internship is designed for those looking to expand their knowledge in cutting-edge technologies.
          </p>
          <a
            href="#"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Explore Internship &rarr;
          </a>
        </div>
        <img
          src={"https://via.placeholder.com/150"} // Replace with your image URL
          alt="AI Development Internship"
          className="w-48 h-48 object-cover" // Adjust width and height here
        />
      </div>
    </div>
  </div>
</section>


      {/* College Projects Section */}
<section className="bg-gray-100 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
      Our College Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* College Project 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your project image URL
          alt="College Project 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            Innovative Project Idea
          </h3>
          <p className="text-gray-700 mb-4">
            A project aimed at developing innovative solutions for everyday challenges faced by students.
          </p>
          <a
            href="#"
            className="text-red-600 font-semibold hover:underline"
          >
            Explore Project &rarr;
          </a>
        </div>
      </div>

      {/* College Project 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your project image URL
          alt="College Project 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            Collaborative Development
          </h3>
          <p className="text-gray-700 mb-4">
            Collaborate with peers on developing applications that enhance productivity and learning.
          </p>
          <a
            href="#"
            className="text-red-600 font-semibold hover:underline"
          >
            Explore Project &rarr;
          </a>
        </div>
      </div>

      {/* College Project 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your project image URL
          alt="College Project 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            Research-Based Project
          </h3>
          <p className="text-gray-700 mb-4">
            Engage in research projects that contribute to academic knowledge and practical applications.
          </p>
          <a
            href="#"
            className="text-red-600 font-semibold hover:underline"
          >
            Explore Project &rarr;
          </a>
        </div>
      </div>

      {/* College Project 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your project image URL
          alt="College Project 4"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-red-600 mb-2">
            Community Engagement
          </h3>
          <p className="text-gray-700 mb-4">
            Projects focused on serving the community and addressing social issues through technology.
          </p>
          <a
            href="#"
            className="text-red-600 font-semibold hover:underline"
          >
            Explore Project &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>




{/* Development Services Section */}
<section className="bg-yellow-50 py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-yellow-600 mb-12">
      Our Development Services
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Development Service 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your service image URL
          alt="Web Development"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">
            Web Development
          </h3>
          <p className="text-gray-700 mb-4">
            Creating responsive and high-performance websites tailored to your needs.
          </p>
          <a
            href="#"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Explore Service &rarr;
          </a>
        </div>
      </div>

      {/* Development Service 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your service image URL
          alt="Mobile App Development"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">
            Mobile App Development
          </h3>
          <p className="text-gray-700 mb-4">
            Building intuitive mobile applications for both iOS and Android platforms.
          </p>
          <a
            href="#"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Explore Service &rarr;
          </a>
        </div>
      </div>

      {/* Development Service 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your service image URL
          alt="API Development"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">
            API Development
          </h3>
          <p className="text-gray-700 mb-4">
            Designing and implementing robust APIs for seamless integration with various systems.
          </p>
          <a
            href="#"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Explore Service &rarr;
          </a>
        </div>
      </div>

      {/* Development Service 4 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={""} // Replace with your service image URL
          alt="E-commerce Solutions"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-yellow-600 mb-2">
            E-commerce Solutions
          </h3>
          <p className="text-gray-700 mb-4">
            Creating comprehensive e-commerce platforms to enhance your online business presence.
          </p>
          <a
            href="#"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Explore Service &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer Section */}
<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Company Information */}
      <div>
        <h2 className="text-lg font-bold mb-4">About Us</h2>
        <p className="text-gray-300 mb-2">
          We are dedicated to providing innovative solutions for our clients, empowering their success through technology.
        </p>
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
        <ul>
          <li>
            <a href="#" className="text-gray-300 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:underline">
              Internships
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:underline">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
          <div>
      <h2 className="text-lg font-bold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a href="#" aria-label="Facebook" className="hover:opacity-75">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" // Facebook logo URL
            alt="Facebook"
            className="h-6 w-6"
          />
        </a>
        <a href="#" aria-label="Twitter" className="hover:opacity-75">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_bird_logo_2012.svg" // Twitter logo URL
            alt="Twitter"
            className="h-6 w-6"
          />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" // LinkedIn logo URL
            alt="LinkedIn"
            className="h-6 w-6"
          />
        </a>
      </div>
    </div>  
    </div>
  </div>
</footer>


    </>
  );
};

export default HomePage;
