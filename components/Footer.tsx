'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Express Electric</h3>
            <p className="text-gray-400">Electrical Services</p>
            <p className="text-gray-400">Nashville, TN</p>
            
            <p className="text-gray-400 mt-2 text-sm">License ##676767</p>
            
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <a href="tel:6156895643" className="text-gray-400 hover:text-white transition block mb-2">615-689-5643</a>
            <a href="mailto:joshlanius@yahoo.com" className="text-gray-400 hover:text-white transition block">joshlanius@yahoo.com</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              
              <a href="Https://facebook.com/expresselectric" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              
              
              
              
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            
            <p className="text-gray-400 text-sm">Mon. - Fri. 7 am - 5 p.m.</p>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <div className="bg-white/10 p-3 rounded-lg">
                    <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521054811-gttw9.webp" alt="Certification" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition" />
                  </div><div className="bg-white/10 p-3 rounded-lg">
                    <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521055178-25ecgu.webp" alt="Certification" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition" />
                  </div>
            <div className="bg-white/10 p-3 rounded-lg">
                    <img src="https://qsaefjpdhmcwuiytcvan.supabase.co/storage/v1/object/public/portfolio-photos/home-service-pro/1761521144223-71g8h.webp" alt="Financing Partner" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition" />
                  </div>
            
          </div>
        </div>
        

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Express Electric. All rights reserved.
          </p>
          
          <div className="mt-4">
            <a
              href="https://autotaco.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-500 hover:text-white transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Built with AutoTaco</span>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  )
}
