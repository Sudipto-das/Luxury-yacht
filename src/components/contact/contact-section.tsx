import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT: Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-normal text-gray-700 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-normal text-gray-700 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-normal text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-normal text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-normal text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full border border-gray-300 rounded-md p-3 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
                >
                  <option value="">Select a subject</option>
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-normal text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[var(--color-third)] hover:opacity-90 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT: Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
              Contact Information
            </h2>

            {/* Athens Office */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Athens Office</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-third)] shrink-0" />
                  123 Marina Boulevard, Athens, Greece
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--color-third)]" />
                  +30 123 456 7890
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--color-third)]" />
                  athens@luxuryyachts.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-third)]" />
                  Mon–Fri: 9:00 AM – 6:00 PM
                </li>
              </ul>
            </div>

            {/* Limassol Office */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Limassol Office</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[var(--color-third)] shrink-0" />
                  456 Harbor Street, Limassol, Cyprus
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[var(--color-third)]" />
                  +357 99 123 456
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[var(--color-third)]" />
                  limassol@luxuryyachts.com
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-third)]" />
                  Mon–Fri: 9:00 AM – 6:00 PM
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-medium text-gray-800 mb-3">Follow Us</p>
              <div className="flex gap-4 text-gray-600">
                <a
                  href="#"
                  className="hover:text-[var(--color-third)] text-blue-500 bg-slate-100 rounded-full p-3"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--color-third)] text-blue-500 bg-slate-100 rounded-full p-3"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--color-third)] text-blue-500 bg-slate-100 rounded-full p-3"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-[var(--color-third)] text-blue-500 bg-slate-100 rounded-full p-3"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-[var(--color-primary)] mb-6">
            Our Locations
          </h2>
          <div className="w-full h-96 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509276!2d144.95373631531696!3d-37.8162797797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b8e362c3d897!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1695750233824!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
