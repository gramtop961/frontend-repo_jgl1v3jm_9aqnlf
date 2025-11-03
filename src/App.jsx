import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventInfo from './components/EventInfo'
import RegisterContact from './components/RegisterContact'

function App() {
  return (
    <div className="scroll-smooth antialiased text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <EventInfo />
        <RegisterContact />
      </main>
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} PMIST University • CITA 2025. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#schedule" className="hover:text-blue-700">Schedule</a>
            <a href="#register" className="hover:text-blue-700">Register</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
