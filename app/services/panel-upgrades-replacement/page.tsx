import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: `Panel Upgrades & Replacement in Nashville, TN | Express Electric`,
  description: `Professional panel upgrades & replacement services in Nashville. Express Electric delivers expert results with quality workmanship and customer satisfaction guaranteed.`,
  openGraph: {
    title: `Panel Upgrades & Replacement in Nashville, TN`,
    description: `Professional panel upgrades & replacement services in Nashville. Express Electric delivers expert results with quality workmanship and customer satisfaction guaranteed.`,
    type: 'website',
  },
}

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-primary">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/#services" className="text-gray-600 hover:text-primary">
              Services
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">Panel Upgrades & Replacement</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Panel Upgrades & Replacement
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional panel upgrades & replacement services in Nashville. Express Electric delivers expert results with quality workmanship and customer satisfaction guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:6156895643"
                  className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 text-center shadow-lg"
                >
                  Call Now
                </a>
                <a
                  href="#contact"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 text-center"
                >
                  Get Free Quote
                </a>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                
                
                
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>12+ Years</span>
                </div>
                
              </div>
            </div>

            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521112390-wbkis5.webp"
                    alt="Panel Upgrades & Replacement example 1"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521112620-2xf39i.webp"
                    alt="Panel Upgrades & Replacement example 2"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521112785-muwj1.webp"
                    alt="Panel Upgrades & Replacement example 3"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Panel Upgrades & Replacement in Nashville
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  At Express Electric, we specialize in providing top-quality panel upgrades & replacement services 
                  throughout Nashville and surrounding areas. Our experienced team is dedicated to delivering 
                  exceptional results with every project.
                </p>
                <p>
                  Whether you need panel upgrades & replacement for your home or business, we have the expertise and 
                  equipment to get the job done right. We pride ourselves on our attention to detail, professional 
                  workmanship, and commitment to customer satisfaction.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-primary p-6 my-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Warranty</h3>
                  <p className="text-gray-700">12-month warranty on all workmanship and materials for Electrical services. Standard exclusions apply for normal wear and tear. Contact us for any warranty claims and we will resolve promptly.</p>
                </div>
                
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us for Panel Upgrades & Replacement?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">12+ Years of Experience</h4>
                      <p className="text-gray-600 text-sm">Proven track record of quality workmanship</p>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Licensed & Insured</h4>
                      <p className="text-gray-600 text-sm">Fully licensed, bonded, and insured for your protection</p>
                    </div>
                  </div>
                  
                  
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">24/7 Emergency Service</h4>
                      <p className="text-gray-600 text-sm">Available around the clock for urgent needs</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Quote</h3>
                <ContactForm servicePreselect="Panel Upgrades & Replacement" />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Services We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Link href="/services/electrical-repairs" className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Electrical Repairs
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional electrical repairs services with quality workmanship.
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </Link>
              
            <Link href="/services/lighting-installation" className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Lighting Installation
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional lighting installation services with quality workmanship.
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </Link>
              
            <Link href="/services/outlet-switch-installation" className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                Outlet & Switch Installation
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional outlet & switch installation services with quality workmanship.
              </p>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Learn More →
              </span>
            </Link>
              
          </div>
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free estimate on your panel upgrades & replacement project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6156895643"
              className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg"
            >
              Call 615-689-5643
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
            >
              Request Quote Online
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
