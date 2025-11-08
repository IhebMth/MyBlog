'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaHome, FaInfoCircle, FaEnvelope, FaBars, FaTimes, FaNewspaper } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'الرئيسية', icon: FaHome },
    { href: '/about', label: 'من نحن', icon: FaInfoCircle },
    { href: '/contact', label: 'اتصل بنا', icon: FaEnvelope },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <FaNewspaper className="text-white text-2xl" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                مدونتي
              </span>
              <span className="text-xs text-gray-500">
                دليلك للمعرفة
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-2 items-center">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                  >
                    <Icon className="text-lg" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                    >
                      <Icon className="text-xl" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}