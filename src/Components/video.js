import React, { useState } from 'react';

const Video = () => {
  const [videos, setVideos] = useState([]);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      const newVideo = {
        title: file.name,
        url: videoURL,
      };
      setVideos((prevVideos) => [...prevVideos, newVideo]);
    }
  };

  const handlePlay = (courseTitle) => {
    alert(`Playing: ${courseTitle}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Course Videos</h1>
        
        {/* Hidden input for uploading files */}
        <label htmlFor="upload" className="cursor-pointer">
          <span className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition duration-300">
            Upload Video
          </span>
          <input
            id="upload"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dynamically render uploaded videos */}
        {videos.map((video, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <video
                src={video.url}
                className="w-full h-48 object-cover"
                controls
              />
              <button
                onClick={() => handlePlay(video.title)}
                className="absolute bottom-2 right-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
              >
                Play Video
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
              <p className="text-gray-600">Uploaded Video</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Video;
