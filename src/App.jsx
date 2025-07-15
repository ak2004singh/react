import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4">
          Welcome to Tailwind!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          You're using <span className="font-bold text-indigo-600">React</span> +{" "}
          <span className="font-bold text-pink-600">Tailwind CSS</span> +{" "}
          <span className="font-bold text-red-600">Parcel</span>.
        </p>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-transform">
          Let’s Go 🚀
        </button>
      </div>
    </div>
  );
}

export default App