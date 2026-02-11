import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen">
      <header className="pt-24 pb-8 px-6 max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight max-w-4xl text-navy-900">
            Collaborate for the future of <span className="text-primary italic">precision medicine</span>.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            We are building the next generation of precision oncology therapeutics and programmable delivery systems. Reach out to discuss partnerships, research collaborations, or general inquiries.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
                <h2 className="text-2xl font-serif mb-8 text-navy-900">Get in Touch</h2>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name</label>
                            <input type="text" id="name" placeholder="Jane Doe" className="w-full bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-primary px-0 py-2 transition-colors placeholder:text-gray-300" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                            <input type="email" id="email" placeholder="jane@organization.com" className="w-full bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-primary px-0 py-2 transition-colors placeholder:text-gray-300" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="org" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Organization</label>
                        <input type="text" id="org" placeholder="Research Institute or Company Name" className="w-full bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-primary px-0 py-2 transition-colors placeholder:text-gray-300" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Message</label>
                        <textarea rows={4} id="message" placeholder="How can we help you?" className="w-full bg-transparent border-0 border-b border-gray-300 focus:ring-0 focus:border-primary px-0 py-2 transition-colors resize-none placeholder:text-gray-300"></textarea>
                    </div>
                    <button type="submit" className="inline-flex items-center space-x-4 bg-primary text-white px-8 py-4 rounded-sm hover:bg-red-700 transition-all group">
                        <span className="font-medium">Send Inquiry</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>

            {/* Sidebar Info & Map */}
            <aside className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <MapPin className="text-primary" size={20} />
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">Headquarters</h3>
                        </div>
                        <p className="text-lg font-medium leading-relaxed text-navy-900">
                            XYone Therapeutics Inc<br/>
                            780 Dedham Road, Suite 800<br/>
                            Canton, MA 02021<br/>
                            United States
                        </p>
                    </div>
                    
                    {/* Map Embed */}
                    <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-inner">
                        <iframe 
                            src="https://maps.google.com/maps?q=780+Dedham+Road,+Canton,+MA+02021&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="XYone Location"
                        ></iframe>
                    </div>
                </div>
            </aside>
        </div>
      </main>
    </div>
  );
};

export default Contact;