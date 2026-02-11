import React from 'react';
import { Target, Zap, Shield, Activity, Share2, ArrowRight } from 'lucide-react';

const Science: React.FC = () => {
  return (
    <div className="bg-background-light">
      {/* Hero Section */}
      <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
         <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">Our Science</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-navy-900">
            Precision Oncology & <br/> <span className="italic text-primary">Endocrine Innovation</span>.
         </h1>
         <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-light">
            XYone Therapeutics is building first-in-class programs translating deep target biology, engineered delivery systems, and rigorous preclinical validation into therapies designed for meaningful patient impact.
         </p>
      </header>

      {/* MUC1-C Platform Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
                <div className="lg:col-span-5">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-4">Oncology Platform</h2>
                    <h3 className="font-serif text-4xl text-navy-900 mb-8">Why MUC1-C?</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        MUC1 is a clinically important cancer antigen and a compelling, tumor-cell–specific target across many solid tumors. While MUC1-N is continuously shed into circulation creating an antigen "sink", <strong>MUC1-C remains permanently cell-associated</strong>.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our approach targets the oncogenic, non-shedding MUC1-C subunit. This avoids the sequestration issues of MUC1-N and bypasses glycosylation heterogeneity, enabling uniform binding and a predictable ADC strategy.
                    </p>
                </div>
                
                {/* Diagrammatic representation using CSS/HTML structures */}
                <div className="lg:col-span-7 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h4 className="font-serif text-xl mb-8 text-center text-navy-900">The MUC1-C Advantage</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* MUC1-N Limitation - RED THEME */}
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100 relative overflow-hidden">
                             <div className="absolute top-0 right-0 bg-red-100 text-red-800 text-[10px] font-bold px-2 py-1 uppercase">Standard Approach</div>
                             <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Target className="text-red-400" size={24}/>
                             </div>
                             <h5 className="font-bold text-center mb-2 text-red-900">Targeting MUC1-N</h5>
                             <ul className="text-sm space-y-2 text-red-800">
                                <li className="flex items-start gap-2"><span className="text-red-600 text-xs">✕</span> High shedding rate</li>
                                <li className="flex items-start gap-2"><span className="text-red-600 text-xs">✕</span> Antigen "sink" effect</li>
                                <li className="flex items-start gap-2"><span className="text-red-600 text-xs">✕</span> Variable glycosylation</li>
                             </ul>
                        </div>

                        {/* MUC1-C Advantage - GREEN THEME */}
                        <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-500/20 shadow-lg relative overflow-hidden transform md:-translate-y-4">
                             <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 uppercase">XYone Approach</div>
                             <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <Target className="text-emerald-600" size={24}/>
                             </div>
                             <h5 className="font-bold text-center mb-2 text-emerald-900">Targeting MUC1-C</h5>
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
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Next-Generation ADC Engineering</h2>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
                We combine precise tumor targeting with clinically validated linker–payload chemistry. Our platform is built for broad applicability across multiple solid tumors, focused on generating compelling efficacy with a favorable therapeutic window.
            </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
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

      {/* Preclinical Validation */}
      <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="border-l-4 border-primary pl-8 py-2 mb-12">
                <h2 className="font-serif text-3xl text-navy-900 mb-2">Preclinical Validation</h2>
                <p className="text-gray-600 max-w-2xl">
                    In head-to-head comparisons across extensive in vitro and CDX/PDX datasets, XYone reports superior performance for its MUC1-C ADC approach versus MUC1-N targeting analogs.
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
      <section className="py-16 bg-gray-50 border-t border-gray-200">
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
      <section className="py-16 bg-white border-t border-gray-200">
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

const AssetCard: React.FC<{title: string, subtitle: string, description: string, tags: string[], features: string[]}> = ({title, subtitle, description, tags, features}) => (
    <div className="bg-navy-800 rounded-xl p-8 text-left border border-white/10 hover:border-primary/50 transition-all group">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-3xl font-serif text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
                <div className="text-sm font-bold text-primary uppercase tracking-wider">{subtitle}</div>
            </div>
            <div className="bg-white/10 p-2 rounded-full">
                <Share2 size={20} className="text-white" />
            </div>
        </div>
        
        <p className="text-gray-300 mb-6 leading-relaxed h-20">
            {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10">
                    {tag}
                </span>
            ))}
        </div>
        
        <div className="border-t border-white/10 pt-6">
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
)

export default Science;