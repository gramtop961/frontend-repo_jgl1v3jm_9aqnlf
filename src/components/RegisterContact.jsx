import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function RegisterContact() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    const newErrors = {}
    if (!data.name) newErrors.name = 'Name is required'
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) newErrors.email = 'Valid email is required'
    if (!data.phone) newErrors.phone = 'Phone is required'
    if (!data.role) newErrors.role = 'Please select a role'
    if (!data.institution) newErrors.institution = 'Institution/Organization is required'

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      e.currentTarget.reset()
    }
  }

  return (
    <section id="register" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl border p-6">
            <h2 className="text-3xl font-extrabold text-gray-900">Registration</h2>
            <p className="mt-2 text-gray-700">Secure your spot for CITA 2025. Limited seats for workshops and competitions.</p>

            {submitted ? (
              <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-800">
                Thank you for registering! A confirmation email will be shared by the organizing team.
              </div>
            ) : null}

            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit} noValidate>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input name="name" type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input name="email" type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone *</label>
                <input name="phone" type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Role *</label>
                <select name="role" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <option value="">Select</option>
                  <option>Student</option>
                  <option>Faculty</option>
                  <option>Industry Professional</option>
                </select>
                {errors.role && <p className="mt-1 text-sm text-red-600">{errors.role}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Department / Domain</label>
                <input name="department" type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Institution / Organization *</label>
                <input name="institution" type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500" />
                {errors.institution && <p className="mt-1 text-sm text-red-600">{errors.institution}</p>}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Events Interested</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {['Paper Presentation', 'Hackathon', 'Workshops', 'Project Expo'].map((label) => (
                    <label key={label} className="inline-flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox" name="events" value={label} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" name="agree" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  I agree to receive updates about the event
                </label>
                <button type="submit" className="inline-flex items-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Submit Registration
                </button>
              </div>
            </form>
          </div>

          <div id="contact" className="space-y-6">
            <div className="bg-white rounded-2xl border p-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact the Organizing Committee</h3>
              <p className="mt-2 text-gray-700">Reach out for queries about registration, schedules, and participation.</p>
              <div className="mt-4 space-y-3 text-gray-700">
                <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-600" /> cita2025@pmist.ac.in</p>
                <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-600" /> +91 98765 43210</p>
                <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-600" /> PMIST, Vallam, Thanjavur, Tamil Nadu</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border">
              <iframe
                title="PMIST Campus Map"
                src="https://www.google.com/maps?q=PMIST%20University%20Thanjavur&output=embed"
                className="w-full h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
