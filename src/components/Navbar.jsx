import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#event', label: 'Event Details' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#register', label: 'Register' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-white/50'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3">
          <img src="https://pmist.ac.in/wp-content/uploads/2022/03/pmist-logo.png" alt="PMIST" className="h-10 w-auto" />
          <div className="leading-tight">
            <p className="font-extrabold text-xl tracking-tight text-gray-900">CITA 2025</p>
            <p className="text-xs text-gray-600">PMIST University, Thanjavur</p>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#register" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Register Now
          </a>
        </div>

        <button aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100" onClick={() => setOpen((v) => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">
                {item.label}
              </a>
            ))}
            <a href="#register" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-blue-600 px-3 py-2 text-center font-semibold text-white hover:bg-blue-700">
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
