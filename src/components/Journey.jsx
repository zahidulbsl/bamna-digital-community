function Journey() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">

        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6">অ্যাকাউন্ট খুলুন ১ মিনিটে</h2>
          <p className="text-gray-600 mb-8">
            শুধু অ্যাপ ইনস্টল করুন এবং নাম ও মোবাইল নম্বর দিন।
          </p>

          <div className="space-y-6">
            <div className="flex gap-4"><span>⬇️</span><p>ইনস্টল</p></div>
            <div className="flex gap-4"><span>👤</span><p>রেজিস্ট্রেশন</p></div>
            <div className="flex gap-4"><span>🚀</span><p>সেবা নিন</p></div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="w-[300px] h-[600px] bg-gray-900 rounded-[40px] shadow-2xl flex items-center justify-center text-white">
            Animated Phone
          </div>
        </div>

      </div>
    </section>
  )
}
export default Journey