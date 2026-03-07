import React, { useState } from 'react';
import { ArrowRight, Activity, Dna, FileText, Target, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { leadership } from '../../data/data/team';

const Home: React.FC = () => {
  const pipelineData = [
    {
      id: "XYA02",
      modality: "ADC (Exatecan/Topo1)",
      therapeuticArea: "Oncology",
      indications: "NSCLC, Ovarian, Colorectal, Gastric/GEJ",
      stage: 3,
      mechanismDescription: "MUC1-C–directed ADC with Exatecan payload (DAR 4; Beta-glucuronide linker). Selectively delivers a Topoisomerase I inhibitor to MUC1-C-expressing tumor cells.",
      detailsDescription: "Phase 1 initiating Summer 2026. Targeting Non-squamous NSCLC, High-grade serous ovarian, Gastric/GEJ, and Colorectal cancer. Head-to-head superiority demonstrated vs MUC1-N comparator in PDX studies."
    },
    {
      id: "XYA01",
      modality: "ADC (MMAE)",
      therapeuticArea: "Oncology",
      indications: "TNBC, Metastatic Breast Cancer (HR+/HER2−)",
      stage: 2,
      mechanismDescription: "MUC1-C ADC with MMAE payload (DAR 4; VC linker). NCI-Led Clinical Program (NExT).",
      detailsDescription: "Phase 1 initiating late 2026. Pre-IND package submitted Jan 2026. Complete tumor suppression shown in breast and lung cancer models."
    },
  ];

  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <section className="relative pt-14 pb-6 md:pt-24 md:pb-10 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <h1 className="font-serif text-3xl md:text-5xl leading-tight text-navy-900 mb-2">
                We Solved What the Industry Got Wrong About <span className="text-primary italic">MUC1</span>
              </h1>
              <p className="text-base text-gray-500 italic mb-6 font-medium">
                Precision Targeting of MUC1-C to Unlock Durable Solid Tumor Suppression
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl text-justify">
                XYone’s platform is built on a fundamental insight: prior MUC1 therapies failed because they targeted the shedding MUC1-N domain. We are building a first-in-class therapeutics selectively targeting MUC1-C, the non-shedding, membrane-anchored oncogenic driver present across ~80% of solid tumors. This avoids serum sink, enabling improved therapeutic index and durable tumor elimination, unlocking a differentiated path to solid tumor control.
              </p>
              
              <Link to="/science" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                Explore our Platform
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>

            {/* Right Column - Clinical Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-gradient-to-br from-navy-900 to-black rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
                {/* Top Border Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-red-400"></div>
                
                <div className="text-xs font-bold tracking-[0.15em] uppercase text-white/50 mb-4">Entering Clinical Trials</div>
                
                <h2 className="font-sans text-5xl font-bold text-white mb-6 leading-none">
                  2026
                </h2>
                
                <div className="space-y-6 mb-8">
                  {/* Asset 1 */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-0 w-1 bg-gradient-to-b from-red-400 to-transparent rounded-full"></div>
                    <div className="text-xl font-bold text-red-400 mb-1">XYA02</div>
                    <div className="text-sm font-semibold text-white/90 mb-1">Phase 1 • Summer 2026</div>
                    <div className="text-sm text-white/60">
                        NSCLC, Ovarian, Gastric, Colorectal
                    </div>
                  </div>
                  
                  {/* Asset 2 */}
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 bottom-0 w-1 bg-gradient-to-b from-red-400 to-transparent rounded-full"></div>
                    <div className="text-xl font-bold text-red-400 mb-1">XYA01</div>
                    <div className="text-sm font-semibold text-white/90 mb-1">Phase 1 • Late 2026</div>
                    <div className="text-sm text-white/60">
                        Triple-Negative & Metastatic Breast Cancer
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/10 mb-6">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/50 mb-3">Validated By</div>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-2.5 py-1.5 bg-white/10 border border-white/10 rounded-md text-[11px] font-semibold text-white/90">NCI Partnership</div>
                    <div className="px-2.5 py-1.5 bg-white/10 border border-white/10 rounded-md text-[11px] font-semibold text-white/90">Harvard Medical</div>
                    <div className="px-2.5 py-1.5 bg-white/10 border border-white/10 rounded-md text-[11px] font-semibold text-white/90">Roche/Poseida Partnership</div>
                  </div>
                </div>
                
                <Link to="/pipeline" className="flex items-center justify-center gap-3 w-full py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-semibold transition-all backdrop-blur-sm group">
                  View Full Pipeline
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas (Formerly Features) */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-4">Our Focus Areas</h2>
            <h3 className="font-serif text-4xl font-medium text-navy-900">Strategic Pillars</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* MUC1-C Oncology Platform */}
            <div className="group p-8 border border-gray-100 bg-gray-50 rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-6 w-14 h-14 flex items-center justify-center bg-white shadow-sm rounded-md text-navy-900 group-hover:text-primary transition-colors">
                <Target strokeWidth={1.5} size={28} />
              </div>
              <h4 className="font-serif text-2xl font-medium mb-4 text-navy-900">MUC1-C Oncology Platform</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm text-justify">
                Our platform is built on precision biology: selectively targeting the membrane-retained MUC1-C subunit that drives oncogenic signaling. By avoiding the shed extracellular domain, we eliminate antigen sink and improve tumor selectivity. This enables higher effective dosing, broader applicability across epithelial cancers, and a scalable solid tumor opportunity.
              </p>
              <Link to="/science" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:underline">
                Our Approach <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
            
            {/* Next-Generation ADC Engineering */}
            <div className="group p-8 border border-gray-100 bg-gray-50 rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-6 w-14 h-14 flex items-center justify-center bg-white shadow-sm rounded-md text-navy-900 group-hover:text-primary transition-colors">
                <Zap strokeWidth={1.5} size={28} />
              </div>
              <h4 className="font-serif text-2xl font-medium mb-4 text-navy-900">Next-Generation ADC Engineering</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm text-justify">
                We design antibody–drug conjugates with plasma stability, controlled intracellular release, and optimized drug-to-antibody ratios. Rather than relying solely on payload potency, we engineer around target biology to expand therapeutic index. Our approach integrates target selection, antibody specificity, and payload architecture into a unified strategy.
              </p>
              <Link to="/science" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:underline">
                Our Approach <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Translational Endocrinology */}
            <div className="group p-8 border border-gray-100 bg-gray-50 rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-6 w-14 h-14 flex items-center justify-center bg-white shadow-sm rounded-md text-navy-900 group-hover:text-primary transition-colors">
                <Activity strokeWidth={1.5} size={28} />
              </div>
              <h4 className="font-serif text-2xl font-medium mb-4 text-navy-900">Translational Endocrinology</h4>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm text-justify">
                We extend our platform into endocrine disorders, applying the same structural and delivery engineering principles used in oncology. By combining accurate hormone quantification with programmable release formulations, we move beyond empirical dosing. Starting with testosterone, we aim to correct long-standing pharmacokinetic and diagnostic limitations. Our approach enables personalized, physiology-aligned hormone therapy.
              </p>
              <Link to="/science" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-xs hover:underline">
                Our Approach <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Section */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-l-4 border-primary pl-6 mb-10">
            <h2 className="font-serif text-4xl font-bold mb-2 text-navy-900">Therapeutic Pipeline</h2>
            <p className="text-gray-600">Advancing a robust portfolio of first-in-class therapies.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            {/* Header Row */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase tracking-widest text-gray-500">
                <div className="col-span-2 pl-8">Molecule Name</div>
                <div className="col-span-2">Therapeutic Area</div>
                <div className="col-span-4">Potential Indications</div>
                <div className="col-span-2">Status / Stage</div>
                <div className="col-span-2">Modality</div>
            </div>
            
            <div className="space-y-0">
                {pipelineData.map((row) => (
                    <PipelineRow 
                        key={row.id}
                        data={row}
                    />
                ))}
            </div>

            <div className="p-6 text-center border-t border-gray-100 bg-gray-50/50">
              <Link to="/pipeline" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:underline">
                View Full Pipeline <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex justify-between items-end mb-8">
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
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-8">
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
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">npj Precision Oncology • May 2024</span>
                   </div>
                   <h3 className="font-serif text-xl font-medium text-navy-900 mb-4 leading-tight">
                     Mucin-1: a promising pan-cancer therapeutic target
                   </h3>
                   <a href="https://www.nature.com/articles/s41698-025-01016-2" target="_blank" rel="noopener noreferrer" className="text-navy-900 text-sm font-bold flex items-center group/link hover:text-primary transition-colors mt-auto pt-4">
                      Read More <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform"/>
                   </a>
                </div>
             </div>

             {/* Card 2 */}
             <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">ESMO • Oct 2025</span>
                   </div>
                   <h3 className="font-serif text-xl font-medium text-navy-900 mb-4 leading-tight">
                     Novel MUC1-C-ADC Exhibits Remarkable Anti-Tumor Potency in the Treatment of Triple Negative Breast Cancer (TNBC)
                   </h3>
                   <a href="/images/ESMO_2025.png" target="_blank" rel="noopener noreferrer" className="text-navy-900 text-sm font-bold flex items-center group/link hover:text-primary transition-colors mt-auto pt-4">
                      View Poster <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform"/>
                   </a>
                </div>
             </div>

             {/* Card 3 */}
             <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-2 mb-4">
                      <FileText size={16} className="text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Frederick National Lab • Feb 2024</span>
                   </div>
                   <h3 className="font-serif text-xl font-medium text-navy-900 mb-4 leading-tight">
                     Antibody-drug conjugate targeting MUC1-C
                   </h3>
                   <a href="https://frederick.cancer.gov/news/biopharmaceutical-development-program-embarks-new-work-targeted-cancer" target="_blank" rel="noopener noreferrer" className="text-navy-900 text-sm font-bold flex items-center group/link hover:text-primary transition-colors mt-auto pt-4">
                      Read More <ArrowRight size={14} className="ml-2 group-hover/link:translate-x-1 transition-transform"/>
                   </a>
                </div>
             </div>
          </div>
          
          <div className="mt-8 md:hidden text-center">
             <Link to="/news" className="text-primary text-sm font-bold uppercase tracking-widest">View All Publications</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-primary text-white">
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

interface PipelineRowProps {
    data: {
        id: string;
        therapeuticArea: string;
        indications: string;
        stage: number;
        modality: string;
        mechanismDescription: string;
        detailsDescription: string;
        isPartnered?: boolean;
    }
}

const PipelineRow: React.FC<PipelineRowProps> = ({ data }) => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="border-b border-gray-200 bg-white last:border-0">
             {/* Main Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-6 items-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setExpanded(!expanded)}>
                
                {/* Program Col */}
                <div className="col-span-1 md:col-span-2 flex items-start gap-3">
                    <ChevronDown className={`text-primary mt-1 transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} size={20} />
                    <div>
                        <h3 className="font-serif text-navy-900 text-lg font-bold leading-tight" style={{ fontVariantNumeric: 'lining-nums', fontFeatureSettings: '"tnum" 1' }}>{data.id}</h3>
                    </div>
                </div>
                
                <div className="col-span-1 md:col-span-2 text-sm text-gray-700 font-medium">{data.therapeuticArea}</div>
                <div className="col-span-1 md:col-span-4 text-sm text-gray-700">{data.indications}</div>
                
                {/* Timeline Col */}
                <div className="col-span-1 md:col-span-2">
                    <div className="flex gap-1 mb-1.5">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= data.stage ? (data.isPartnered ? 'bg-gray-500' : 'bg-primary') : 'bg-gray-100'}`} />
                        ))}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        {data.stage === 1 && "Discovery"}
                        {data.stage === 2 && "Filing IND Soon"}
                        {data.stage === 3 && "Phase 1"}
                        {data.stage === 4 && "Phase 2"}
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 text-sm text-gray-700">{data.modality}</div>
            </div>

            {/* Details Panel */}
            {expanded && (
                <div className="bg-[#f9fafb] px-4 py-8 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-12 md:pl-8">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mechanism of Action</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{data.mechanismDescription}</p>
                        </div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Program Details</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{data.detailsDescription}</p>
                        </div>
                    </div>
                </div>
             )}
        </div>
    )
}

export default Home;