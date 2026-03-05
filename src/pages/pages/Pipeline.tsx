import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Pipeline: React.FC = () => {
  const [filter, setFilter] = useState('All Programs');

  const allRows = [
      {
        id: "XYA02",
        modality: "ADC (Exatecan/Topo1)",
        therapeuticArea: "Oncology",
        indications: "NSCLC, Ovarian, Colorectal, Gastric/GEJ",
        stage: 3, // 1: Pre-Clinical, 2: IND-Enabling, 3: Phase 1, 4: Phase 2
        mechanism: "Next-gen ADC targeting MUC1-C with Exatecan payload (DAR 4)",
        mechanismDescription: "MUC1-C–directed ADC with Exatecan payload (DAR 4; Beta-glucuronide linker). Selectively delivers a Topoisomerase I inhibitor to MUC1-C-expressing tumor cells.",
        detailsDescription: "Phase 1 initiating Summer 2026. Targeting Non-squamous NSCLC, High-grade serous ovarian, Gastric/GEJ, and Colorectal cancer. Head-to-head superiority demonstrated vs MUC1-N comparator in PDX studies."
      },
      {
        id: "XYA01",
        modality: "ADC (MMAE)",
        therapeuticArea: "Oncology",
        indications: "TNBC, Metastatic Breast Cancer (HR+/HER2−)",
        stage: 2,
        mechanism: "MUC1-C ADC with MMAE payload (DAR 4; VC linker)",
        mechanismDescription: "MUC1-C ADC with MMAE payload (DAR 4; VC linker). NCI-Led Clinical Program (NExT).",
        detailsDescription: "Phase 1 initiating late 2026. Pre-IND package submitted Jan 2026. Complete tumor suppression shown in breast and lung cancer models."
      },
      {
        id: "P-MUC1C-ALLO1",
        modality: "CAR-T",
        therapeuticArea: "Oncology",
        indications: "Multiple Solid Tumors",
        stage: 3,
        isPartnered: true,
        mechanism: "Allogeneic CAR-T targeting MUC1-C",
        mechanismDescription: "Allogeneic CAR-T targeting MUC1-C",
        detailsDescription: "Out-licensed to Poseida Therapeutics / Roche. Phase 1 human data indicates no unexpected toxicity in 45 patients, validating MUC1-C targeting."
      },
      {
        id: "XYB01",
        modality: "Bispecific Antibodies",
        therapeuticArea: "Oncology",
        indications: "Solid Tumors",
        stage: 1,
        mechanism: "Multi-modal (ADCC, TCE, Dual Payload)",
        mechanismDescription: "Multi-modal (ADCC, TCE, Dual Payload)",
        detailsDescription: "Platform extension program. Modalities include ADCC, TCE, and bi-paratopic approaches to support a broader, scalable pipeline."
      },
      {
        id: "Endocrine Platform",
        modality: "Nano/Microparticle",
        therapeuticArea: "Endocrinology",
        indications: "Hormonal Regulation",
        stage: 1,
        mechanism: "Personalized, programmable dosing",
        mechanismDescription: "Personalized, programmable dosing",
        detailsDescription: "Development-stage programs transforming hormonal disorder treatments through advanced formulation for precise and effective drug delivery."
      }
  ];

  const filteredRows = filter === 'All Programs' ? allRows : allRows.filter(row => row.therapeuticArea === filter);

  return (
    <div className="bg-background-light">
      <header className="pt-24 pb-8 px-6 max-w-7xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">Our Pipeline</span>
        <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-navy-900">Therapeutic Pipeline</h1>
        <p className="max-w-3xl text-xl text-gray-600 leading-relaxed mb-8">
          XYone Therapeutics is advancing a multi-asset pipeline built around a proprietary MUC1-C targeting platform in oncology, alongside development-stage programs supporting personalized hormone therapies and precision drug delivery.
        </p>
        <p className="text-gray-500 max-w-3xl">
          Our pipeline is designed to generate meaningful clinical catalysts starting in 2026, while expanding platform potential across multiple high-unmet-need indications.
        </p>
      </header>

      {/* Filters */}
      <section className="py-4 bg-gray-50 border-b border-gray-200 sticky top-20 z-40 shadow-sm">
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
                 <span className="w-3 h-3 bg-gray-500 rounded-full"></span> Partnered
             </div>
          </div>
        </div>
      </section>

      {/* Pipeline Chart */}
      <main className="py-8 max-w-7xl mx-auto px-6">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase tracking-widest text-gray-500">
            <div className="col-span-2 pl-8">Molecule Name</div>
            <div className="col-span-2">Therapeutic Area</div>
            <div className="col-span-4">Potential Indications</div>
            <div className="col-span-2">Status / Stage</div>
            <div className="col-span-2">Modality</div>
        </div>

        <div className="space-y-0">
            {filteredRows.map((row) => (
                <PipelineRow 
                    key={row.id}
                    data={row}
                />
            ))}
        </div>

        {/* Partnering CTA */}
        <div className="mt-12 p-12 bg-navy-900 rounded-2xl text-center text-white relative overflow-hidden">
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
        <div className="border-b border-gray-200 bg-white">
             {/* Main Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 py-6 items-center cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => setExpanded(!expanded)}>
                
                {/* Program Col */}
                <div className="col-span-1 md:col-span-2 flex items-start gap-3">
                    <ChevronDown className={`text-primary mt-1 transform transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} size={20} />
                    <div>
                        <h3 className="font-serif text-navy-900 text-lg font-bold leading-tight">{data.id}</h3>
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
                        {data.stage === 2 && "Pre-IND"}
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

export default Pipeline;