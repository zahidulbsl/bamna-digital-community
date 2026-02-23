function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">

        <div className="md:col-span-2">
          <h3 className="text-white text-2xl font-bold mb-4">বামনা</h3>
          <p className="text-sm">নাগরিক সেবা উন্নয়নের ডিজিটাল প্ল্যাটফর্ম।</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">লিংক</h4>
          <ul className="space-y-2 text-sm">
            <li>গোপনীয়তা নীতি</li>
            <li>ব্যবহারের শর্ত</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">যোগাযোগ</h4>
          <p className="text-sm">help@bamna.app</p>
        </div>

      </div>

      <div className="text-center text-xs border-t border-gray-800 pt-8">
        © ২০২৫ বামনা স্মার্ট সেবা
      </div>
    </footer>
  )
}
export default Footer