import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newJob, setNewJob] = useState({
        title: '',
        description: '',
        location: '',
        salary: '',
        passedOutYear: '',
        experience: '',
    });

    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
        setJobs(savedJobs);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewJob((prevJob) => ({
            ...prevJob,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const jobExists = jobs.some(
            (job) =>
                job.title === newJob.title &&
                job.description === newJob.description &&
                job.location === newJob.location
        );

        if (jobExists) {
            alert('This job already exists. Please post a different job.');
            return;
        }

        const updatedJobs = [...jobs, { ...newJob, id: Date.now() }];
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setJobs(updatedJobs);

        setNewJob({
            title: '',
            description: '',
            location: '',
            salary: '',
            passedOutYear: '',
            experience: '',
        });
        setShowForm(false); // Close the form after submission
    };

    const handleDelete = (id) => {
        const updatedJobs = jobs.filter((job) => job.id !== id);
        localStorage.setItem('jobs', JSON.stringify(updatedJobs));
        setJobs(updatedJobs);
    };

    return (
        <section
            id="careers"
            className="min-h-screen flex flex-col items-center justify-start bg-gray-100 py-10"
        >
            <div className="w-full max-w-7xl px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-extrabold text-center text-blue-600">
                        Job Notifications
                    </h2>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300"
                    >
                        {showForm ? 'Close Form' : 'Post Job Notification'}
                    </button>
                </div>

                {showForm ? (
                    <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-3xl font-bold text-blue-600 mb-4">Post a New Job</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Job Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={newJob.title}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Job Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={newJob.description}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows="4"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={newJob.location}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="salary">
                                    Salary
                                </label>
                                <input
                                    type="text"
                                    id="salary"
                                    name="salary"
                                    value={newJob.salary}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passedOutYear">
                                    Passed Out Year
                                </label>
                                <input
                                    type="number"
                                    id="passedOutYear"
                                    name="passedOutYear"
                                    value={newJob.passedOutYear}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                                    Experience (Years)
                                </label>
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    value={newJob.experience}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-blue-600">{job.title}</h3>
                                    <p className="text-gray-700 mb-4">{job.description}</p>
                                    <p className="text-sm text-gray-500">Location: {job.location}</p>
                                    <p className="text-sm text-gray-500">Salary: {job.salary}</p>
                                    <p className="text-sm text-gray-500">Passed Out Year: {job.passedOutYear}</p>
                                    <p className="text-sm text-gray-500">Experience: {job.experience} year(s)</p>
                                    <button onClick={() => handleDelete(job.id)} className="px-4 py-2 mt-4 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition duration-300">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Careers;