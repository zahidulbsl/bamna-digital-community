function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <i className="fa-solid fa-map-location-dot text-xl"></i>
          </div>
          <span className="text-xl font-bold text-gray-800">বামনা</span>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
          <a href="#features" className="hover:text-green-600">ফিচার</a>
          <a href="#about" className="hover:text-green-600">আমাদের সম্পর্কে</a>
          <a href="#faq" className="hover:text-green-600">প্রশ্ন ও উত্তর</a>
        </div>

        <a href="#download" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-green-700 text-sm flex items-center gap-2">
          <i className="fa-solid fa-download"></i> অ্যাপ ডাউনলোড
        </a>
      </div>
    </nav>
  )
}

export default Navbar