import { useEffect } from "react"

function Hero() {

  useEffect(() => {
    const screens = document.querySelectorAll(".app-screen")
    let current = 0

    const interval = setInterval(() => {
      screens[current].classList.remove("active")
      current = (current + 1) % screens.length
      screens[current].classList.add("active")
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-20 hero-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        <div data-aos="fade-right">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            আপনার উপজেলার <br />
            <span className="gradient-text">ডিজিটাল সেবা ও তথ্যকেন্দ্র</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            বামনা উপজেলার নাগরিকদের জন্য একটি আধুনিক ডিজিটাল প্ল্যাটফর্ম।
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end" data-aos="fade-left">

          <div className="phone-frame w-[300px] h-[600px] z-20 bg-gray-50">
            <div className="notch"></div>

            <div className="app-screen active bg-gray-100 flex items-center justify-center">
              Screen 1
            </div>

            <div className="app-screen bg-gray-50 flex items-center justify-center">
              Screen 2
            </div>

            <div className="app-screen bg-white flex items-center justify-center">
              Screen 3
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero