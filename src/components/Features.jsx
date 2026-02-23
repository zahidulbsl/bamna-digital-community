function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">প্রিমিয়াম ফিচারসমূহ</h2>
          <p className="text-gray-500">ডিজিটাল সহায়তা প্ল্যাটফর্ম</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {["কমিউনিটি আপডেট","লাইভ ব্লাড সাপোর্ট","ডিজিটাল ডিরেক্টরি","নোটিশ","অভিযোগ","ভেরিফিকেশন"].map((title,i)=>(
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition border">
              <h4 className="text-xl font-bold mb-3">{title}</h4>
              <p className="text-gray-500 text-sm">বিস্তারিত ফিচার বিবরণ।</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
export default Features