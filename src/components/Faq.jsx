function Faq() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        <div className="space-y-4">

          <details className="bg-gray-50 p-6 rounded-xl">
            <summary className="font-bold text-lg">এই অ্যাপটি ফ্রি?</summary>
            <p className="text-gray-600 mt-4">হ্যাঁ সম্পূর্ণ ফ্রি।</p>
          </details>

          <details className="bg-gray-50 p-6 rounded-xl">
            <summary className="font-bold text-lg">তথ্য নিরাপদ?</summary>
            <p className="text-gray-600 mt-4">হ্যাঁ নিরাপদ।</p>
          </details>

        </div>
      </div>
    </section>
  )
}
export default Faq