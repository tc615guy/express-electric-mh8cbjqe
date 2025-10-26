'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <script key="schema-0" type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Electrician\",\n  \"name\": \"Express Electric\",\n  \"url\": \"https://example.com\",\n  \"telephone\": \"615-689-5643\",\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"addressLocality\": \"Nashville\",\n    \"addressRegion\": \"TN\",\n    \"addressCountry\": \"US\"\n  },\n  \"priceRange\": \"$$\",\n  \"image\": \"https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/logo-1761520960317-jmltlg.webp\",\n  \"email\": \"joshlanius@yahoo.com\",\n  \"areaServed\": [\n    \"Murfreesboro\",\n    \"Spring Hill\",\n    \"Franklin\",\n    \"Brentwood\",\n    \"Columbia\",\n    \"Gallatin\",\n    \"Hendersonville\"\n  ],\n  \"sameAs\": [\n    \"Https://facebook.com/expresselectric\"\n  ]\n}" }} />
      <script key="schema-1" type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Service\",\n  \"serviceType\": \"Electrical\",\n  \"provider\": {\n    \"@type\": \"LocalBusiness\",\n    \"name\": \"Express Electric\"\n  },\n  \"areaServed\": {\n    \"@type\": \"City\",\n    \"name\": \"Nashville, TN\"\n  },\n  \"hasOfferCatalog\": {\n    \"@type\": \"OfferCatalog\",\n    \"name\": \"Electrical Services\",\n    \"itemListElement\": [\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Electrical Repairs\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Panel Upgrades & Replacement\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Lighting Installation\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Outlet & Switch Installation\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Ceiling Fan Installation\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Electrical Inspections\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Generator Installation\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"EV Charger Installation\"\n        }\n      },\n      {\n        \"@type\": \"Offer\",\n        \"itemOffered\": {\n          \"@type\": \"Service\",\n          \"name\": \"Smoke Detector Installation\"\n        }\n      }\n    ]\n  }\n}" }} />
      <script key="schema-2" type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"FAQPage\",\n  \"mainEntity\": [\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Are your electricians licensed and certified?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Yes, all our electricians are fully licensed, certified, and insured. They undergo continuous training to stay updated on the latest electrical codes, safety standards, and technologies.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Do you handle emergency electrical repairs?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Absolutely. We offer 24/7 emergency electrical services for urgent issues like power outages, exposed wiring, or electrical fires. Safety is our top priority, and we respond quickly to protect your property.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Can you help with electrical panel upgrades?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Yes, we specialize in electrical panel upgrades and replacements. If your home has an outdated panel or you're experiencing frequent breaker trips, we can assess your needs and install a modern, safer system.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Do you provide free estimates?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Yes, we offer free, no-obligation estimates for all electrical projects. We'll assess your needs, explain your options, and provide transparent pricing before any work begins.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"How long does a typical electrical job take?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"The timeline depends on the scope of work. Simple repairs like outlet replacements can be done in under an hour, while larger projects like whole-home rewiring may take several days. We'll provide a clear timeline during your estimate.\"\n      }\n    },\n    {\n      \"@type\": \"Question\",\n      \"name\": \"Do you offer warranties on your electrical work?\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"Yes, we back all our work with comprehensive warranties. We use high-quality materials and expert craftsmanship to ensure your electrical system is safe, reliable, and built to last.\"\n      }\n    }\n  ]\n}" }} />
      
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              We Help Keep The Lights On
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Serving Murfreesboro, Spring Hill, Franklin and more
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Licensed & Insured
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ 24/7 Emergency Service
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                ✓ Satisfaction Guaranteed
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6156895643"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-orange-600 transition transform hover:scale-105"
              >
                📞 615-689-5643
              </a>
              <a
                href="#contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-bold border-2 border-blue-900 hover:bg-blue-50 transition"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      
      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional Electrical solutions for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Electrical Repairs</h3>
                  <p className="text-gray-600 text-sm">Professional electrical repairs services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Panel Upgrades & Replacement</h3>
                  <p className="text-gray-600 text-sm">Professional panel upgrades & replacement services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Lighting Installation</h3>
                  <p className="text-gray-600 text-sm">Professional lighting installation services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Outlet & Switch Installation</h3>
                  <p className="text-gray-600 text-sm">Professional outlet & switch installation services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ceiling Fan Installation</h3>
                  <p className="text-gray-600 text-sm">Professional ceiling fan installation services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Electrical Inspections</h3>
                  <p className="text-gray-600 text-sm">Professional electrical inspections services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Generator Installation</h3>
                  <p className="text-gray-600 text-sm">Professional generator installation services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">EV Charger Installation</h3>
                  <p className="text-gray-600 text-sm">Professional ev charger installation services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Smoke Detector Installation</h3>
                  <p className="text-gray-600 text-sm">Professional smoke detector installation services with quality workmanship and attention to detail.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
  


      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-xl text-gray-600">See the quality we deliver</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521112390-wbkis5.webp" alt="Portfolio" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521112620-2xf39i.webp" alt="Portfolio" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521112785-muwj1.webp" alt="Portfolio" className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
          </div>
        </div>
      </section>
  


      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About Jerry Jones</h2>
              
              
              <div className="mb-6">
                
                
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                          <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521054811-gttw9.webp" alt="Certification" className="h-12 w-auto object-contain" />
                        </div><div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                          <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521055178-25ecgu.webp" alt="Certification" className="h-12 w-auto object-contain" />
                        </div>
                </div>
                
              </div>
              
              
              <p className="text-lg text-gray-700 mb-10 leading-relaxed whitespace-pre-line">I have been in the Electrical business for 12 years. My passion has become a commitment to delivering exceptional service to my community.

Every project I undertake is treated with the same level of care. My philosophy is that quality workmanship and honest communication form the foundation of lasting customer relationships.

Nothing gives me more satisfaction than seeing a satisfied customer and knowing I have made a difference in their home.</p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Why Choose Us?</h3>
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">There are several compelling reasons why Express Electric is the ideal choice for Electrical services:

Firstly, we possess 12 years of experience which translates to comprehensive solutions for virtually every scenario.

Beyond experience, our distinguishing factor is our commitment to excellence. We maintain uncompromising standards and ensure complete customer satisfaction.

Additionally, we are fully licensed and insured, providing assurance of our professional qualifications. Our passion for our craft is evident in every project we undertake.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                <div className="grid grid-cols-2 gap-3">
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Murfreesboro</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Spring Hill</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Franklin</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Brentwood</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Columbia</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Gallatin</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Hendersonville</span>
                  </div>
                  
                </div>
              </div>
              
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-xl border-2 border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">Financing Available</h3>
                </div>
                <p className="text-gray-700 mb-4">Flexible payment options to fit your budget</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow flex items-center justify-center">
                              <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521144223-71g8h.webp" alt="Financing Partner" className="max-h-12 w-auto" />
                            </div>
                </div>
                
              </div>
              
              
              
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet the Owner</h3>
                <div className="flex flex-col items-center text-center">
                  <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/logo-1761521039179-key4vd.webp" alt="Jerry Jones" className="w-48 h-48 rounded-lg object-cover shadow-lg mb-4" loading="eager" />
                  <p className="text-lg font-semibold text-gray-900">Jerry Jones</p>
                  <p className="text-gray-600">Owner & Operator</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
  


      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Express Electric?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are several compelling reasons why Express Electric is the ideal choice for Electrical services:

Firstly, we possess 12 years of experience which translates to comprehensive solutions for virtually every scenario.

Beyond experience, our distinguishing factor is our commitment to excellence. We maintain uncompromising standards and ensure complete customer satisfaction.

Additionally, we are fully licensed and insured, providing assurance of our professional qualifications. Our passion for our craft is evident in every project we undertake.
            </p>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                12+ Years Experience
              </h3>
              <p className="text-gray-600">
                Proven track record of quality workmanship and customer satisfaction
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed, bonded, and insured for your protection and peace of mind
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Emergency Service
              </h3>
              <p className="text-gray-600">
                Available around the clock for urgent repairs and emergencies
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Flexible Financing
              </h3>
              <p className="text-gray-600">
                Affordable payment options to fit your budget
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comprehensive Warranty
              </h3>
              <p className="text-gray-600">
                12-month warranty on all workmanship and materials for Electrical services. Standard exclusions apply for normal wear and tear. Contact us for any war...
              </p>
            </div>
            
          </div>
        </div>
      </section>
  


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-lg mb-6 italic">
                "These guys are great!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  S
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Sara P.</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-lg mb-6 italic">
                "So happy with worked with Express Electric!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  T
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Tommy D.</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <svg className="w-10 h-10 text-primary/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 text-lg mb-6 italic">
                "Happy customer here!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">Jackie L.</p>
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
  


      {/* FAQs Section */}
      <section id="faqs" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions</p>
          </div>
          <div className="space-y-4">
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Are your electricians licensed and certified?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, all our electricians are fully licensed, certified, and insured. They undergo continuous training to stay updated on the latest electrical codes, safety standards, and technologies.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you handle emergency electrical repairs?</h3>
              <p className="text-gray-700 leading-relaxed">Absolutely. We offer 24/7 emergency electrical services for urgent issues like power outages, exposed wiring, or electrical fires. Safety is our top priority, and we respond quickly to protect your property.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Can you help with electrical panel upgrades?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, we specialize in electrical panel upgrades and replacements. If your home has an outdated panel or you're experiencing frequent breaker trips, we can assess your needs and install a modern, safer system.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you provide free estimates?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, we offer free, no-obligation estimates for all electrical projects. We'll assess your needs, explain your options, and provide transparent pricing before any work begins.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How long does a typical electrical job take?</h3>
              <p className="text-gray-700 leading-relaxed">The timeline depends on the scope of work. Simple repairs like outlet replacements can be done in under an hour, while larger projects like whole-home rewiring may take several days. We'll provide a clear timeline during your estimate.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you offer warranties on your electrical work?</h3>
              <p className="text-gray-700 leading-relaxed">Yes, we back all our work with comprehensive warranties. We use high-quality materials and expert craftsmanship to ensure your electrical system is safe, reliable, and built to last.</p>
            </div>
            
          </div>
        </div>
      </section>
  


      {/* Warranty Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Our Warranty Promise</h2>
            <p className="text-xl text-blue-100 leading-relaxed">12-month warranty on all workmanship and materials for Electrical services. Standard exclusions apply for normal wear and tear. Contact us for any warranty claims and we will resolve promptly.</p>
          </div>
        </div>
      </section>
  

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get your free quote today - we typically respond within 24 hours</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:6156895643" className="text-blue-200 hover:text-white transition">
                        615-689-5643
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:joshlanius@yahoo.com" className="text-blue-200 hover:text-white transition">
                        joshlanius@yahoo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Service Area</p>
                      <p className="text-blue-100">Murfreesboro, Spring Hill, Franklin and more</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">24/7 Emergency Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Satisfaction Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
