import React from 'react';
import { ArrowRight, Activity, Dna, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { leadership } from '../data/team';

const Home: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        {/* Geometric Motif Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
             style={{
                 backgroundImage: 'radial-gradient(#CA2128 1px, transparent 1px)',
                 backgroundSize: '32px 32px'
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">
                XYone Therapeutics
              </span>
              <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] mb-8 text-navy-900">
                Solving Key Challenges in <span className="text-primary italic">Immuno-Oncology</span> and <span className="text-primary italic">Endocrine Dysregulation</span>.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
                We are dedicated to develop innovative drugs and diagnostic solutions that address critical unmet needs in immuno-oncology and endocrine dysregulation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/science" className="bg-primary text-white px-8 py-4 font-medium flex items-center group rounded-sm shadow-md hover:bg-red-700 transition-all">
                  Explore Our Technology
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link to="/pipeline" className="border border-navy-900 text-navy-900 px-8 py-4 font-medium hover:bg-navy-900 hover:text-white transition-all rounded-sm">
                  View Pipeline
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 relative hidden lg:block">
               {/* Abstract visual */}
               <div className="relative w-full aspect-[4/5] bg-gradient-to-tr from-navy-900 to-navy-800 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
                  <Dna size={120} className="text-white/10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas (Formerly Features) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Our Focus Areas</h2>
            <h3 className="font-serif text-4xl font-medium text-navy-900">Two Pillars of Innovation</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Oncology Block */}
            <div className="group p-10 border border-gray-100 bg-gray-50 rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-8 w-16 h-16 flex items-center justify-center bg-white shadow-sm rounded-md text-navy-900 group-hover:text-primary transition-colors">
                <Dna strokeWidth={1.5} size={32} />
              </div>
              <h4 className="font-serif text-3xl font-medium mb-4 text-navy-900">XYone Oncology</h4>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Focused on discovering and advancing first-in-class agents against the MUC1-C oncoprotein.
              </p>
              <Link to="/science" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:underline">
                Our Approach <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            {/* Endocrinology Block */}
            <div className="group p-10 border border-gray-100 bg-gray-50 rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-8 w-16 h-16 flex items-center justify-center bg-white shadow-sm rounded-md text-navy-900 group-hover:text-primary transition-colors">
                <Activity strokeWidth={1.5} size={32} />
              </div>
              <h4 className="font-serif text-3xl font-medium mb-4 text-navy-900">XYone Endocrinology</h4>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                Focused on new diagnostics and formulations that improve how hormonal imbalances (including hypogonadism, hypothyroidism, and hypoandrogenism) are measured and treated in collaboration with research partners.
              </p>
              <Link to="/science" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:underline">
                Our Approach <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-primary pl-6 mb-16">
            <h2 className="font-serif text-4xl font-bold mb-2 text-navy-900">Therapeutic Pipeline</h2>
            <p className="text-gray-600">Advancing a robust portfolio of first-in-class therapies.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 border-b border-gray-100 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
              <div className="md:col-span-3">Program</div>
              <div className="md:col-span-3">Indication</div>
              <div className="md:col-span-6 grid grid-cols-4 gap-1">
                 <div className="text-center">Pre-clinical</div>
                 <div className="text-center">IND-Enabled</div>
                 <div className="text-center">Phase 1/2</div>
                 <div className="text-center">Phase 3</div>
              </div>
            </div>
            
            {/* Row 1 - XYA02 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="md:col-span-3">
                  <div className="font-bold text-navy-900">XYA02</div>
                  <div className="text-xs text-gray-500 mt-1">ADC (Exatecan/Topo1)</div>
              </div>
              <div className="md:col-span-3 text-gray-700 font-medium">Oncology (MUC1-C)</div>
              <div className="md:col-span-6 relative h-4 mt-2 md:mt-0">
                <div className="absolute inset-0 grid grid-cols-4 gap-1 h-full w-full pointer-events-none">
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                </div>
                {/* 55% Progress - Approaching Phase 1 */}
                <div className="absolute top-1/2 -translate-y-1/2 h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary w-[55%]"></div>
                </div>
              </div>
            </div>

            {/* Row 2 - XYA01 */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="md:col-span-3">
                  <div className="font-bold text-navy-900">XYA01</div>
                  <div className="text-xs text-gray-500 mt-1">ADC (MMAE)</div>
              </div>
              <div className="md:col-span-3 text-gray-700 font-medium">Oncology (MUC1-C)</div>
              <div className="md:col-span-6 relative h-4 mt-2 md:mt-0">
                <div className="absolute inset-0 grid grid-cols-4 gap-1 h-full w-full pointer-events-none">
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                </div>
                {/* 45% Progress - IND Enabling */}
                <div className="absolute top-1/2 -translate-y-1/2 h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary w-[45%]"></div>
                </div>
              </div>
            </div>

             {/* Row 3 - Endocrine Platform */}
             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 items-center hover:bg-gray-50 transition-colors">
              <div className="md:col-span-3">
                  <div className="font-bold text-navy-900">Endocrine Platform</div>
                  <div className="text-xs text-gray-500 mt-1">Nano/Microparticle</div>
              </div>
              <div className="md:col-span-3 text-gray-700 font-medium">Hormonal Regulation</div>
              <div className="md:col-span-6 relative h-4 mt-2 md:mt-0">
                <div className="absolute inset-0 grid grid-cols-4 gap-1 h-full w-full pointer-events-none">
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                    <div className="border-r border-gray-100 last:border-0 h-full"></div>
                </div>
                {/* 30% Progress - Pre-clinical */}
                <div className="absolute top-1/2 -translate-y-1/2 h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-primary w-[30%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex justify-between items-end mb-12">
                 <h2 className="font-serif text-3xl text-navy-900">Our Team</h2>
                 <Link to="/about" className="hidden md:inline-flex items-center text-primary text-sm font-bold uppercase tracking-widest hover:underline">
                    View All <ArrowRight size={14} className="ml-2"/>
                 </Link>
             </div>
             
             <div className="grid md:grid-cols-4 gap-8">
                {leadership.slice(0, 4).map((person, i) => (
                    <div key={i} className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col">
                        <div className="h-64 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                             <img 
                                src={person.image} 
                                alt={person.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                onError={(e) => {
                                  // Fallback to initial if image fails
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.parentElement?.classList.add('bg-navy-900');
                                  const fallback = document.createElement('div');
                                  fallback.className = 'text-white font-serif text-4xl';
                                  fallback.innerText = person.name.split(' ').map(n => n[0]).join('');
                                  e.currentTarget.parentElement?.appendChild(fallback);
                                }}
                             />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="font-serif text-lg font-medium text-navy-900 mb-2">{person.name}</h3>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-primary leading-tight">{person.title}</div>
                        </div>
                    </div>
                ))}
             </div>
             
             <div className="mt-8 md:hidden text-center">
                <Link to="/about" className="text-primary text-sm font-bold uppercase tracking-widest">View All</Link>
             </div>
          </div>
      </section>

      {/* Latest News & Publications */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="font-serif text-3xl text-navy-900 mb-2">Publications</h2>
                <p className="text-gray-500">Key research validating our approach.</p>
             </div>
             <Link to="/news" className="hidden md:inline-flex items-center text-primary text-sm font-bold uppercase tracking-widest hover:underline">
                View All Publications <ArrowRight size={14} className="ml-2"/>
             </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {/* Card 1 */}
             <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Carcinogenesis • Sep 2020</span>
                   </div>
                   <h3 className="font-serif text-xl font-medium text-navy-900 mb-4 leading-tight">
                     MUC1-C in chronic inflammation and carcinogenesis
                   </h3>
                   <Link to="/news" className="text-navy-900 text-sm font-bold flex items-center group/link hover:text-primary transition-colors mt-auto pt-4">
                      Read More <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform"/>
                   </Link>
                </div>
             </div>

             {/* Card 2 */}
             <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">JCI Insight • Jun 2020</span>
                   </div>
                   <h3 className="font-serif text-xl font-medium text-navy-900 mb-4 leading-tight">
                     MUC1-C drives stemness in colitis to CRC progression
                   </h3>
                   <Link to="/news" className="text-navy-900 text-sm font-bold flex items-center group/link hover:text-primary transition-colors mt-auto pt-4">
                      Read More <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform"/>
                   </Link>
                </div>
             </div>

             {/* Card 3 */}
             <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">JCI Insight • Jun 2018</span>
                   </div>
                   <h3 className="font-serif text-xl font-medium text-navy-900 mb-4 leading-tight">
                     Antibody-drug conjugate targeting MUC1-C
                   </h3>
                   <Link to="/news" className="text-navy-900 text-sm font-bold flex items-center group/link hover:text-primary transition-colors mt-auto pt-4">
                      Read More <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform"/>
                   </Link>
                </div>
             </div>
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/news" className="text-primary text-sm font-bold uppercase tracking-widest">View All Publications</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-red-800"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 transform translate-x-1/4">
            <svg viewBox="0 0 200 200" className="w-full h-full text-white fill-current">
                <path d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,77.6,-43.3C85.1,-29.2,88.3,-12.8,87.6,3.4C86.9,19.6,82.3,35.6,73.4,49.1C64.5,62.6,51.3,73.6,36.5,79.4C21.7,85.2,5.3,85.8,-11.2,82.5C-27.7,79.2,-44.3,72,-57.3,60.8C-70.3,49.6,-79.7,34.4,-84.3,18C-88.9,1.6,-88.7,-16.1,-82.3,-31.6C-75.9,-47.1,-63.3,-60.4,-48.9,-67.2C-34.5,-74,-18.2,-74.3,-1,-72.6C16.2,-70.9,31.1,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl font-medium mb-8">Partner with us</h2>
          <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
            We are actively seeking strategic partnerships to expand the reach of our platforms across new therapeutic areas.
          </p>
          <Link to="/contact" className="bg-white text-primary px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-navy-900 hover:text-white transition-all rounded-sm shadow-xl inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;