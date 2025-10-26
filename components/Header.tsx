'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-6">
            
            <img
              src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/logo-1761520960317-jmltlg.webp"
              alt="Express Electric"
              className="h-20 w-auto transition-transform hover:scale-105"
              loading="eager"
            />
            
            <div>
              <h1 className="text-3xl font-bold">Express Electric</h1>
              <p className="text-blue-200 text-base">Electrical Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="hover:text-blue-200 transition text-lg">
              Services
            </Link>
            <Link href="/#about" className="hover:text-blue-200 transition text-lg">
              About
            </Link>
            <Link href="/#gallery" className="hover:text-blue-200 transition text-lg">
              Gallery
            </Link>
            <Link href="/#faqs" className="hover:text-blue-200 transition text-lg">
              FAQs
            </Link>
            <Link href="/#contact" className="hover:text-blue-200 transition text-lg">
              Contact
            </Link>
            <a
              href="tel:6156895643"
              className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition font-semibold text-lg"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Home
              </Link>
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left text-gray-700 hover:text-primary font-medium transition-colors flex items-center justify-between"
                >
                  <span>Services</span>
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    
                    <Link
                      href="/services/electrical-repairs"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Electrical Repairs
                    </Link>
                      
                    <Link
                      href="/services/panel-upgrades-replacement"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Panel Upgrades & Replacement
                    </Link>
                      
                    <Link
                      href="/services/lighting-installation"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Lighting Installation
                    </Link>
                      
                    <Link
                      href="/services/outlet-switch-installation"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Outlet & Switch Installation
                    </Link>
                      
                    <Link
                      href="/services/ceiling-fan-installation"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Ceiling Fan Installation
                    </Link>
                      
                    <Link
                      href="/services/electrical-inspections"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Electrical Inspections
                    </Link>
                      
                    <Link
                      href="/services/generator-installation"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Generator Installation
                    </Link>
                      
                    <Link
                      href="/services/ev-charger-installation"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      EV Charger Installation
                    </Link>
                      
                    <Link
                      href="/services/smoke-detector-installation"
                      className="block text-gray-600 hover:text-primary transition-colors"
                    >
                      Smoke Detector Installation
                    </Link>
                      
                  </div>
                )}
              </div>
              <Link href="/#about" className="text-gray-700 hover:text-primary font-medium transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </Link>
              <a
                href="tel:6156895643"
                className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>615-689-5643</span>
              </a>
              <a
                href="/#contact"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 text-center"
              >
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
