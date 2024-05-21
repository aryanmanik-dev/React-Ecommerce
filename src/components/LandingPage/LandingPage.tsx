import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="relative h-screen">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3206296/3206296-hd_1920_1080_25fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        {/* Content */}
        <div className="text-center text-white">
          <Link to="/collections">
            <h1 className="text-4xl font-bold mb-4 transition-colors duration-300 hover:text-black cursor-pointer">
              Welcome to Our Store
            </h1>
            <p className="text-lg mb-8 transition-colors duration-300 hover:text-black cursor-pointer">
              Discover the latest collections and shop now.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300">
            Discover Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
