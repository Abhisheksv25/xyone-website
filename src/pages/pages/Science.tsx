import React from 'react';
import { Target, Zap, Shield, Activity, Share2, ArrowRight } from 'lucide-react';

const Science: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <header className="pt-24 pb-8 px-6 max-w-7xl mx-auto">
         <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">Our Science</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-navy-900">
            Precision Oncology & <br/> <span className="italic text-primary">Endocrine Innovation</span>.
         </h1>
         <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
            XYone Therapeutics is building first-in-class therapeutics targeting MUC1-C, the non-shedding oncogenic driver present across ~80% of solid tumors, translating mechanisms-grounded innovation into durable tumor control.
         </p>
      </header>

      {/* MUC1-C Platform Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-4">Oncology Platform</h2>
                    <h3 className="font-serif text-4xl text-navy-900 mb-8">Why MUC1-C?</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                        MUC1-C is a membrane-retained oncogenic driver broadly expressed across epithelial cancers. While the MUC1-N domain is continuously shed into circulation, creating antigen sink and limiting tumor exposure. MUC1-C remains permanently cell-associated. Prior programs targeting MUC1-N encountered serum sequestration, limited tumor delivery, and constrained efficacy.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-justify">
                        XYone selectively targets MUC1-C, avoiding these failures entirely. Clinical experience with MUC1-C-directed CAR-T therapy further supports target safety, with no on-target off-tumor toxicities observed, substantially de-risking the antigen.
                    </p>
                </div>
                
                {/* Diagrammatic representation using CSS/HTML structures */}
                <div className="lg:col-span-7 bg-gray-50 rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                    <h4 className="font-serif text-3xl mb-8 text-center text-navy-900">The MUC1-C Advantage</h4>
                    <div className="grid md:grid-cols-2 gap-8 flex-grow">
                        {/* MUC1-N Limitation - RED THEME */}
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100 relative overflow-hidden flex flex-col justify-center">
                             <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 uppercase">Standard Approach</div>
                             <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Target className="text-red-400" size={24}/>
                             </div>
                             <h5 className="font-bold text-center mb-4 text-red-900">Targeting MUC1-N</h5>
                             <ul className="text-sm space-y-2 text-red-800">
                                <li className="flex items-start gap-2"><span className="text-red-600 text-xs">✕</span> High shedding rate</li>
                                <li className="flex items-start gap-2"><span className="text-red-600 text-xs">✕</span> Antigen "sink" effect</li>
                                <li className="flex items-start gap-2"><span className="text-red-600 text-xs">✕</span> Variable glycosylation</li>
                             </ul>
                        </div>

                        {/* MUC1-C Advantage - GREEN THEME */}
                        <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-500/20 shadow-lg relative overflow-hidden flex flex-col justify-center">
                             <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 uppercase">XYone Approach</div>
                             <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Target className="text-emerald-600" size={24}/>
                             </div>
                             <h5 className="font-bold text-center mb-4 text-emerald-900">Targeting MUC1-C</h5>
                             <ul className="text-sm space-y-2 text-emerald-900">
                                <li className="flex items-start gap-2"><span className="text-emerald-600 text-xs">✓</span> Non-shedding domain</li>
                                <li className="flex items-start gap-2"><span className="text-emerald-600 text-xs">✓</span> Stable membrane retention</li>
                                <li className="flex items-start gap-2"><span className="text-emerald-600 text-xs">✓</span> Uniform binding profile</li>
                             </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ADC Engineering */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Next-Generation ADC Engineering</h2>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
                We combine precise tumor targeting with clinically validated linker–payload chemistry. Our platform is built for broad applicability across multiple solid tumors, focused on generating compelling efficacy with a favorable therapeutic window.
            </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AssetCard 
                title="XY017-Exa" 
                subtitle="MUC1-C–DIRECTED ADC · EXATECAN (TOPO1)"
                description="Targeting high-proliferation epithelial tumors via replication stress amplification."
                tags={['DAR 4', 'Exatecan Payload']}
                features={[
                    "Converts baseline genomic instability into irreversible clonogenic collapse",
                    "No on-target off-tumor toxicities in MUC1-C CAR-T experience",
                    "Sustained tumor growth inhibition in preclinical models"
                ]}
            />
            <AssetCard 
                title="XYA02" 
                subtitle="Exatecan (Topo1) ADC"
                description="Phase 1 initiating Summer 2026. Targeting Non-squamous NSCLC, High-grade serous ovarian, Gastric/GEJ, and Colorectal cancer."
                tags={['DAR 4', 'Beta-glucuronide Linker']}
                features={[
                    "Dramatic efficacy in large ovarian PDX studies",
                    "Head-to-head superiority vs MUC1-N comparator"
                ]}
            />
            <AssetCard 
                title="XYA01" 
                subtitle="MMAE ADC"
                description="Selected by NCI NExT program. Initial indications in Metastatic Breast Cancer (HR+/HER2-) and TNBC."
                tags={['DAR 4', 'VC Linker', 'NCI NExT Selected']}
                features={[
                    "Complete tumor suppression in breast/lung models",
                    "NCI conducting IND-enabling activities"
                ]}
            />
        </div>
      </section>

      {/* Why XY017-Exa Works */}
      <section className="py-16 bg-navy-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Why XY017-Exa Works: The Science Behind the Strategy</h2>
            
            <div className="grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider">Payload Mechanism: Replication Stress Conversion</h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                        Exatecan induces replication-associated DNA strand breaks that overwhelm ATR/CHK1-mediated repair in rapidly proliferating tumors. The result is replication fork collapse and irreversible loss of clonogenic survival. This mechanism aligns with high-growth epithelial malignancies and supports broad indication expansion.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider">Translational Implications</h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                        Preclinical data demonstrate sustained tumor growth inhibition consistent with durable cytotoxicity. With antigen safety established, development risk centers on optimized ADC pharmacology rather than target liability. The program supports biomarker-driven enrichment based on MUC1 expression and replication stress signatures.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider">Scalable MUC1-C Franchise</h3>
                    <p className="text-gray-300 leading-relaxed text-justify">
                        XY017-Exa combines validated target biology with a clinically established payload class and optimized linker design. The differentiation lies in correct antigen selection, enabling a scalable MUC1-C franchise across high-prevalence solid tumors.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Preclinical Validation */}
      <section className="py-12 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="border-l-4 border-primary pl-8 py-2 mb-12">
                <h2 className="font-serif text-3xl text-navy-900 mb-2">Preclinical Validation</h2>
                <p className="text-gray-600 max-w-2xl">
                    In head-to-head comparisons across extensive in vitro and CDX/PDX datasets, XYone reports superior performance for its MUC1-C ADC approach. XY017-Exa preclinical data demonstrate sustained tumor growth inhibition consistent with durable cytotoxicity.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                    <Shield className="text-primary mb-4" size={32} />
                    <h4 className="font-bold text-navy-900 mb-2">Tumor Suppression</h4>
                    <p className="text-sm text-gray-600">Complete tumor suppression shown in representative breast and lung cancer models for XYA01.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <Zap className="text-primary mb-4" size={32} />
                    <h4 className="font-bold text-navy-900 mb-2">Efficacy Profile</h4>
                    <p className="text-sm text-gray-600">Dramatic efficacy demonstrated in large ovarian PDX studies for XYA02.</p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                    <Activity className="text-primary mb-4" size={32} />
                    <h4 className="font-bold text-navy-900 mb-2">Superior Specificity</h4>
                    <p className="text-sm text-gray-600">Avoids shedding-related sequestration and glycosylation-driven variability seen with MUC1-N strategies.</p>
                </div>
            </div>
         </div>
      </section>

      {/* Endocrinology */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div>
                  <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Endocrinology</h2>
                  <h3 className="font-serif text-4xl text-navy-900 mb-6">Personalized, Programmable Dosing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    XYone is transforming hormonal disorder treatments through personalized, programmable dosing. Our formulation work includes engineering advanced nano/microparticle delivery systems designed for precise drug delivery.
                  </p>
                  <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-navy-900 font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Consistent exposure profiles
                      </li>
                      <li className="flex items-center gap-3 text-navy-900 font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Patient-centered treatment strategies
                      </li>
                      <li className="flex items-center gap-3 text-navy-900 font-medium">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Improved translational solutions
                      </li>
                  </ul>
              </div>
              <div className="relative">
                  {/* Abstract visual for particles */}
                  <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-primary/10 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center opacity-30">
                           <div className="w-[120%] h-[120%] border border-primary/20 rounded-full animate-spin-slow"></div>
                           <div className="w-[80%] h-[80%] border border-primary/30 rounded-full absolute animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                       </div>
                       <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center z-10">
                           <Activity className="text-primary" size={48} />
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Collaborations */}
      <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="font-serif text-3xl text-navy-900 mb-12">Scientific Collaborations & Validation</h2>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale">
                  {/* Text-based logos for simplicity, or placeholders */}
                  {['National Cancer Institute', 'National Institutes of Health', 'Roche', 'Poseida Therapeutics', 'Dana-Farber Cancer Institute', 'Mass General Brigham', 'Fred Hutchinson Cancer Center', 'Memorial Sloan Kettering'].map((partner) => (
                      <div key={partner} className="text-lg font-bold text-gray-400 uppercase tracking-tight hover:text-navy-900 transition-colors cursor-default">
                          {partner}
                      </div>
                  ))}
              </div>
              <div className="mt-8 text-sm text-gray-500">
                  And other leading research centers including Huntsman Cancer Institute, Roswell Park, Johns Hopkins University, and Peter MacCallum Cancer Centre.
              </div>
          </div>
      </section>
    </div>
  );
};

const AssetCard: React.FC<{title: string, subtitle: string, description: string, tags: string[], features: string[]}> = ({title, subtitle, description, tags, features}) => {
    return (
    <div className="bg-navy-800 rounded-xl p-8 text-left border border-white/10 hover:border-primary/50 transition-all group flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-3xl font-serif text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
                <div className="text-sm font-bold text-primary uppercase tracking-wider">{subtitle}</div>
            </div>
            <div className="bg-white/10 p-2 rounded-full">
                <Share2 size={20} className="text-white" />
            </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed min-h-[5rem]">
            {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">
                    {tag}
                </span>
            ))}
        </div>
        
        <div className="border-t border-white/10 pt-6 mt-auto">
            <h4 className="text-xs font-bold uppercase text-gray-500 mb-3">Key Highlights</h4>
            <ul className="space-y-2">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <ArrowRight size={14} className="mt-1 text-primary shrink-0" />
                        {feat}
                    </li>
                ))}
            </ul>
        </div>
    </div>
    );
}

export default Science;