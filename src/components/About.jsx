function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">

        <div className="md:w-1/2">
          <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[200px] max-w-[350px] md:h-[280px] md:max-w-[500px]">
            <div className="rounded-lg overflow-hidden h-full bg-gray-50 flex items-center justify-center text-gray-400">
              Laptop Preview
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-wide mb-2">আমাদের লক্ষ্য</h2>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">বামনার জন্য একক ডিজিটাল সেবা কেন্দ্র</h3>
          <p className="text-gray-600 mb-6">
            আমরা বিশ্বাস করি নাগরিকদের জন্য প্রয়োজনীয় তথ্য ও সেবা সহজভাবে পৌঁছে দেওয়া।
          </p>

          <a href="#download" className="px-6 py-3 rounded-md text-white bg-green-600 hover:bg-green-700">
            অ্যাপ ডাউনলোড করুন
          </a>
        </div>

      </div>
    </section>
  )
}
export default About