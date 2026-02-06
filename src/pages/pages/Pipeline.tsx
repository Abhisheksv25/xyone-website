import React, { useState } from 'react';
import { ArrowRight, Moon, Plus, Minus, Share2 } from 'lucide-react';

const Pipeline: React.FC = () => {
  const [filter, setFilter] = useState('All Programs');

  const allRows = [
      {
        id: "XYA02",
        modality: "ADC (Exatecan/Topo1)",
        area: "Oncology",
        target: "MUC1-C",
        progress: 55, // Past IND-Enabling, approaching Phase 1
        isPartnered: false,
        mechanism: "Next-gen ADC targeting MUC1-C with Exatecan payload (DAR 4)",
        description: "Lead Clinical Candidate. First-in-human Phase 1 planned for June/July 2026 across 6 sites in Australia. Initial indications: Non-squamous NSCLC, High-grade serous ovarian, Gastric/GEJ, and CRC."
      },
      {
        id: "XYA01",
        modality: "ADC (MMAE)",
        area: "Oncology",
        target: "MUC1-C",
        progress: 45, // IND-Enabling
        isPartnered: false,
        isNCI: true,
        mechanism: "MUC1-C ADC with MMAE payload (DAR 4; VC linker)",
        description: "NCI-Led Clinical Program (NExT). Phase 1 initiating late 2026. Pre-IND package submitted Jan 2026. Initial indications: Metastatic Breast Cancer (HR+/HER2-) and TNBC."
      },
      {
        id: "P-MUC1C-ALLO1",
        modality: "CAR-T",
        area: "Oncology",
        target: "MUC1-C",
        progress: 75, // Phase 1 complete/ongoing
        isPartnered: true,
        mechanism: "Allogeneic CAR-T targeting MUC1-C",
        description: "Out-licensed to Poseida Therapeutics / Roche. Phase 1 human data indicates no unexpected toxicity in 45 patients, validating MUC1-C targeting."
      },
      {
        id: "XYB01",
        modality: "Next-Gen Platform",
        area: "Oncology",
        target: "MUC1-C x Undisclosed",
        progress: 15, // Discovery
        isPartnered: false,
        mechanism: "Multi-modal (ADCC, TCE, Dual Payload)",
        description: "Platform extension program. Modalities include ADCC, TCE, and bi-paratopic approaches to support a broader, scalable pipeline."
      },
      {
        id: "Endocrine Platform",
        modality: "Nano/Microparticle",
        area: "Endocrinology",
        target: "Hormonal Regulation",
        progress: 30, // Preclinical
        isPartnered: false,
        mechanism: "Personalized, programmable dosing",
        description: "Development-stage programs transforming hormonal disorder treatments through advanced formulation for precise and effective drug delivery."
      }
  ];

  const filteredRows = filter === 'All Programs' ? allRows : allRows.filter(row => row.area === filter);

  return (
    <div className="bg-background-light">
      <header className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-navy-900">Therapeutic Pipeline</h1>
          <p className="max-w-3xl text-xl text-gray-600 leading-relaxed mb-8">
            XYone Therapeutics is advancing a multi-asset pipeline built around a proprietary MUC1-C targeting platform in oncology, alongside development-stage programs supporting personalized hormone therapies and precision drug delivery.
          </p>
          <p className="text-gray-500 max-w-3xl">
            Our pipeline is designed to generate meaningful clinical catalysts starting in 2026, while expanding platform potential across multiple high-unmet-need indications.
          </p>
        </div>
      </header>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {['All Programs', 'Oncology', 'Endocrinology'].map((f) => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${filter === f ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
             <div className="flex items-center gap-2">
                 <span className="w-3 h-3 bg-primary rounded-full"></span> Internal
             </div>
             <div className="flex items-center gap-2">
                 <span className="w-3 h-3 bg-gray-300 rounded-full"></span> Partnered
             </div>
          </div>
        </div>
      </section>

      {/* Pipeline Chart */}
      <main className="py-16 max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 mb-6 px-6 text-xs font-black uppercase tracking-wider text-black border-b border-gray-200 pb-4">
            <div className="col-span-2">Program</div>
            <div className="col-span-3">Indication</div>
            <div className="col-span-7 grid grid-cols-5">
                <div className="text-center border-l border-gray-200 pl-2">Discovery</div>
                <div className="text-center border-l border-gray-200 pl-2">Pre-Clinical</div>
                <div className="text-center border-l border-gray-200 pl-2">IND-Enabling</div>
                <div className="text-center border-l border-gray-200 pl-2">Phase 1</div>
                <div className="text-center border-l border-gray-200 pl-2">Phase 2</div>
            </div>
        </div>

        <div className="space-y-4">
            {filteredRows.map((row) => (
                <PipelineRow 
                    key={row.id}
                    {...row}
                />
            ))}
        </div>

        {/* Partnering CTA */}
        <div className="mt-24 p-12 bg-navy-900 rounded-2xl text-center text-white relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl font-serif mb-6">Partnering for the future of Medicine</h2>
                <p className="max-w-xl mx-auto mb-8 text-gray-300 text-lg">
                    We are actively seeking strategic collaborations to accelerate the development of our programmable delivery platforms.
                </p>
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors rounded-sm">
                    Explore Opportunities <ArrowRight size={16} />
                </a>
            </div>
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
        </div>
      </main>
    </div>
  );
};

interface PipelineRowProps {
    id: string;
    modality: string;
    area: string;
    target: string;
    progress: number;
    isPartnered: boolean;
    isNCI?: boolean;
    mechanism: string;
    description: string;
}

const PipelineRow: React.FC<PipelineRowProps> = ({ id, modality, area, target, progress, isPartnered, isNCI, mechanism, description }) => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="bg-white border border-gray-200 rounded-lg group hover:border-primary/30 transition-all shadow-sm overflow-hidden">
             {/* Main Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 cursor-pointer transition-colors hover:bg-gray-50 items-center min-h-[100px]" onClick={() => setExpanded(!expanded)}>
                
                {/* Program Col */}
                <div className="col-span-1 md:col-span-2 flex flex-col justify-center p-6 border-r border-transparent md:border-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                         {isPartnered && <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 uppercase font-black">Partnered</span>}
                         {isNCI && <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 uppercase font-black">NCI-Led</span>}
                    </div>
                    <h3 className="text-xl font-serif text-navy-900 leading-none">{id}</h3>
                    <span className="text-xs text-gray-400 mt-1 font-semibold">{modality}</span>
                </div>
                
                {/* Indication Col */}
                <div className="col-span-1 md:col-span-3 flex flex-col justify-center p-6 md:pl-0 border-r border-transparent md:border-gray-50">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{area}</span>
                    <p className="text-sm font-medium text-gray-700 leading-tight">{target}</p>
                </div>
                
                {/* Timeline Col */}
                <div className="col-span-1 md:col-span-7 flex items-center relative h-full px-6 py-6 md:py-0">
                    {/* Background Grid Lines for Chart */}
                    <div className="absolute inset-0 grid grid-cols-5 pointer-events-none mx-6">
                        <div className="border-l border-gray-100 h-full"></div>
                        <div className="border-l border-gray-100 h-full"></div>
                        <div className="border-l border-gray-100 h-full"></div>
                        <div className="border-l border-gray-100 h-full"></div>
                        <div className="border-l border-gray-100 h-full"></div>
                    </div>

                    <div className="w-[calc(100%-40px)] h-3 bg-gray-100 rounded-full relative z-10">
                        <div 
                            className={`h-full relative rounded-l-full ${isPartnered ? 'bg-gray-400' : 'bg-primary'}`}
                            style={{ width: `${progress}%` }}
                        >
                            {/* Arrowhead at end instead of circle */}
                            <div 
                                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] ${isPartnered ? 'border-l-gray-400' : 'border-l-primary'}`}
                            ></div>
                        </div>
                    </div>

                    <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
                         <button 
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expanded ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-primary group-hover:text-white'}`}
                         >
                            {expanded ? <Minus size={14} /> : <Plus size={14} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Details Panel */}
            {expanded && (
                <div className="px-6 pb-6 bg-gray-50 border-t border-gray-100 animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-8 pt-6">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mechanism of Action</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{mechanism}</p>
                        </div>
                         <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Program Details</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
                        </div>
                    </div>
                </div>
             )}
        </div>
    )
}

export default Pipeline;