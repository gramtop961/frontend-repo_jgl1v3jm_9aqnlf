import { CalendarDays, MapPin, Users, Award, Clock } from 'lucide-react'

const schedule = [
  {
    day: 'Day 1 — March 15, 2025',
    items: [
      { time: '09:00 AM', title: 'Inauguration & Keynote', desc: 'Opening ceremony with distinguished guests' },
      { time: '10:30 AM', title: 'Paper Presentation', desc: 'Student research across AI, IoT, and Data Science' },
      { time: '02:00 PM', title: 'Coding Hackathon', desc: 'Team-based challenge solving real-world problems' },
      { time: '05:00 PM', title: 'Industry Talk', desc: 'Insights from leading tech professionals' },
    ],
  },
  {
    day: 'Day 2 — March 16, 2025',
    items: [
      { time: '09:30 AM', title: 'Workshops', desc: 'Hands-on sessions: Cloud, Cybersecurity, AR/VR' },
      { time: '12:30 PM', title: 'Project Expo', desc: 'Showcase of innovative student projects' },
      { time: '03:00 PM', title: 'Valedictory & Awards', desc: 'Certificates and recognitions for all tracks' },
    ],
  },
]

const speakers = [
  { name: 'Ananya Rao', role: 'AI Research Lead, ThinkLabs', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop' },
  { name: 'Karthik Subramanian', role: 'Cloud Architect, Nimbus', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop' },
  { name: 'Dr. Meera Iyer', role: 'Professor, PMIST', avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop' },
]

export default function EventInfo() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">About CITA 2025</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Hosted by PMIST University in Thanjavur, CITA 2025 is a two-day technical symposium that brings together brilliant minds across academia and industry. Explore cutting-edge research, participate in hands-on workshops, and network with leaders shaping the future of technology.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border p-4">
                <CalendarDays className="h-6 w-6 text-blue-600" />
                <p className="mt-2 font-semibold">March 15–16, 2025</p>
                <p className="text-sm text-gray-600">Two inspiring days</p>
              </div>
              <div className="rounded-xl border p-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <p className="mt-2 font-semibold">PMIST Campus</p>
                <p className="text-sm text-gray-600">Thanjavur, Tamil Nadu</p>
              </div>
              <div className="rounded-xl border p-4">
                <Users className="h-6 w-6 text-blue-600" />
                <p className="mt-2 font-semibold">Students & Industry</p>
                <p className="text-sm text-gray-600">Collaborative learning</p>
              </div>
            </div>
          </div>

          <div id="event" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border">
            <h3 className="text-2xl font-bold text-gray-900">Featured Tracks & Highlights</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="mt-1"><Award className="h-5 w-5 text-blue-600" /></span><span>Paper presentations across AI, IoT, Cybersecurity, and Data Science</span></li>
              <li className="flex gap-3"><span className="mt-1"><Award className="h-5 w-5 text-blue-600" /></span><span>Hands-on workshops led by industry experts</span></li>
              <li className="flex gap-3"><span className="mt-1"><Award className="h-5 w-5 text-blue-600" /></span><span>Hackathon and project showcase with exciting prizes</span></li>
              <li className="flex gap-3"><span className="mt-1"><Award className="h-5 w-5 text-blue-600" /></span><span>Certificates for participants and winners</span></li>
            </ul>

            <div id="schedule" className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900">Schedule Overview</h4>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {schedule.map((day) => (
                  <div key={day.day} className="rounded-xl border bg-white p-4">
                    <p className="font-semibold text-blue-700">{day.day}</p>
                    <ul className="mt-3 space-y-2">
                      {day.items.map((item) => (
                        <li key={item.time + item.title} className="flex gap-3">
                          <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                          <div>
                            <p className="font-medium text-gray-900">{item.time} — {item.title}</p>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900">Notable Speakers</h3>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {speakers.map((sp) => (
              <div key={sp.name} className="rounded-2xl border p-4 bg-white">
                <img src={sp.avatar} alt={sp.name} className="h-20 w-20 rounded-full object-cover" />
                <p className="mt-3 font-semibold text-gray-900">{sp.name}</p>
                <p className="text-sm text-gray-600">{sp.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
