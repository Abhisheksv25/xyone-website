import React from 'react';
import { Users, Building2, GraduationCap, Briefcase } from 'lucide-react';
import { leadership, scientificTeam, strategicAdvisors } from '../../data/data/team';

const About: React.FC = () => {
  const leadershipTeam = [...leadership, ...scientificTeam];

  return (
    <div className="bg-background-light">
      <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
         <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">About XYone</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-navy-900">
            Translating rigorous biology into <span className="italic text-primary">patient impact.</span>
         </h1>
         <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-6">
                    Every year, approximately 1.2 million people in the U.S. are diagnosed with MUC1-positive solid tumors, including lung, ovarian, breast, gastric, and colorectal cancers. The National Cancer Institute has ranked MUC1 as one of the most important cancer antigen. Today we are targeting MUC1-C, the permanently membrane-bound domain that acts as a central oncogenic driver across the majority of solid tumors. By focusing on this stable and functionally essential target, we are working to unlock new pathways for durable cancer therapies and more precise diagnostic solutions.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                    Founded in 2021, XYone has transformed 20 years of research into a clinical-stage platform validated by leading institutions. With two programs entering trials in 2026, we're backed by institutions that wants to address critical unmet needs in immuno-oncology
                </p>
            </div>
         </div>
      </header>

      {/* Strategic Focus - Cleaner Layout */}
      <section className="py-16 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16">
                  <div className="relative pl-8 border-l-2 border-primary/20">
                       <h3 className="font-serif text-3xl text-navy-900 mb-4">Immuno-Oncology</h3>
                       <p className="text-gray-600 leading-relaxed text-lg">
                           Developing precision therapeutics targeting the MUC1-C oncoprotein in solid tumors.
                       </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-primary/20">
                       <h3 className="font-serif text-3xl text-navy-900 mb-4">Endocrinology</h3>
                       <p className="text-gray-600 leading-relaxed text-lg">
                           Creating formulations aimed at improving how hormonal imbalances are measured and treated, with a focus on personalized, programmable dosing.
                       </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background-light">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-4xl text-navy-900 mb-12 text-center">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                  {leadershipTeam.map((member, i) => (
                      <TeamMember 
                        key={i} 
                        name={member.name} 
                        role={member.title} 
                        image={member.image} 
                      />
                  ))}
              </div>
          </div>
      </section>

      {/* Strategic & Regulatory Advisors */}
      <section className="py-16 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-4xl text-navy-900 mb-12 text-center">Strategic & Regulatory Advisors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {strategicAdvisors.map((member, i) => (
                      <TeamMember 
                        key={i} 
                        name={member.name} 
                        role={member.title} 
                        image={member.image} 
                      />
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

const TeamMember: React.FC<{name: string, role: string, image: string, bio?: string}> = ({name, role, image, bio}) => (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col">
        <div className="h-72 bg-gray-100 relative overflow-hidden flex items-center justify-center">
            <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-navy-900');
                  const fallback = document.createElement('div');
                  fallback.className = 'text-white font-serif text-4xl';
                  fallback.innerText = name.split(' ').map(n => n[0]).join('');
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
            />
        </div>
        <div className="p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-navy-900 mb-1">{name}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-primary leading-relaxed mb-3">{role}</p>
            {bio && <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>}
        </div>
    </div>
)

export default About;