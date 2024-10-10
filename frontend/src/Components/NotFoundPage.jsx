const NotFoundPage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            Sorry, the page you are looking for does not exist.
          </p>
          <a
            href="/login" 
            className="mt-6 inline-block px-6 py-3 text-white bg-blue rounded-md hover:bg-green-600 transition duration-300"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  };
  
  export default NotFoundPage;
  