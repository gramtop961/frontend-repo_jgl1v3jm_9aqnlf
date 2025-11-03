import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative" aria-label="CITA 2025 Hero">
      <div className="h-[78vh] sm:h-[86vh] relative overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">PMIST College Symposium</span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              CITA 2025
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">March 15–16, 2025</span>
            </h1>
            <p className="mt-4 text-gray-700 text-lg sm:text-xl">
              A premier technical symposium uniting students, faculty, and industry to explore the future of technology and innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#register" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Register Now
              </a>
              <a href="#schedule" className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-700 ring-1 ring-inset ring-blue-200 hover:bg-blue-50">
                View Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
