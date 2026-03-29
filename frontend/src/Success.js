import { useNavigate } from "react-router-dom"

function Success() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 px-12 bg-black bg-opacity-90 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 font-bold text-3xl tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            NETFLIX
          </h1>
          <ul className="hidden md:flex gap-4 text-sm font-medium">
            <li className="font-bold cursor-pointer">Home</li>
            <li className="text-gray-300 hover:text-gray-400 cursor-pointer transition">TV Shows</li>
            <li className="text-gray-300 hover:text-gray-400 cursor-pointer transition">Movies</li>
            <li className="text-gray-300 hover:text-gray-400 cursor-pointer transition">New & Popular</li>
            <li className="text-gray-300 hover:text-gray-400 cursor-pointer transition">My List</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/")} className="text-sm font-medium hover:underline text-gray-300">
            Sign Out
          </button>
          <div className="w-8 h-8 bg-blue-600 rounded"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] bg-gradient-to-t from-[#141414] via-transparent to-[#141414] flex items-center mb-10 border-b border-gray-800">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 px-12 max-w-2xl">
          <h2 className="text-5xl font-bold mb-4 drop-shadow-md">Welcome Back!</h2>
          <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
            You have successfully logged in. This is your dummy dashboard featuring a collection of amazing content to watch.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200 transition flex items-center gap-2">
              <span className="text-xl">▶</span> Play
            </button>
            <button className="bg-gray-500/70 text-white px-6 py-2 rounded font-bold hover:bg-gray-500/50 transition flex items-center gap-2">
              <span className="text-xl">ⓘ</span> More Info
            </button>
          </div>
        </div>
      </div>

      {/* Rows */}
      <div className="px-12 pb-20 space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Trending Now</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scroll-bar">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="min-w-[200px] h-[112px] md:min-w-[250px] md:h-[140px] bg-zinc-800 rounded hover:scale-105 transition duration-300 cursor-pointer"></div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Continue Watching for You</h3>
          <div className="flex gap-4 overflow-x-auto pb-4 hide-scroll-bar">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="min-w-[200px] h-[112px] md:min-w-[250px] md:h-[140px] bg-zinc-800 rounded hover:scale-105 transition duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute bottom-0 left-0 h-1 bg-red-600" style={{ width: `${Math.random() * 80 + 10}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success