import React from 'react';
import { Users, Building2, GraduationCap, Briefcase, Linkedin } from 'lucide-react';
import { leadership, scientificTeam, strategicAdvisors } from '../../data/data/team';

const About: React.FC = () => {
  const leadershipTeam = [...leadership, ...scientificTeam];

  return (
    <div className="bg-background-light">
      <header className="pt-24 pb-8 px-6 max-w-7xl mx-auto">
         <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">About XYone</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-navy-900">
            Translating rigorous biology into <span className="italic text-primary">patient impact.</span>
         </h1>
         <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-10">
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-6 text-justify">
                    Every year, approximately 1.2 million people in the U.S. are diagnosed with MUC1-positive solid tumors, including lung, ovarian, breast, gastric, and colorectal cancers. The National Cancer Institute has ranked MUC1 as the second most important cancer antigen. We are targeting MUC1-C, the permanently membrane-bound domain that acts as a central oncogenic driver across the majority of solid tumors. By focusing on this stable and functionally essential target, we are working to unlock new pathways for durable cancer therapies and more precise diagnostic solutions.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed font-light text-justify">
                    We have two assests entering clincial trials in 2026. Founded in 2021, XYone has transformed 20 years of research into a clinical-stage platform validated by leading institutions like Roche, Poseida Therapeutics and the National Cancer Institute (NCI)
                </p>
            </div>
         </div>
      </header>

      {/* Strategic Focus - Cleaner Layout */}
      <section className="py-12 bg-white border-y border-gray-200">
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
      <section className="py-12 bg-background-light">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-4xl text-navy-900 mb-12 text-center">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  {leadershipTeam.map((member, i) => (
                      <TeamMember 
                        key={i} 
                        name={member.name} 
                        role={member.title} 
                        image={member.image} 
                        bio={member.bio}
                        linkedin={member.linkedin}
                      />
                  ))}
              </div>
          </div>
      </section>

      {/* Strategic & Regulatory Advisors */}
      <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-4xl text-navy-900 mb-12 text-center">Strategic & Regulatory Advisors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                  {strategicAdvisors.map((member, i) => (
                      <TeamMember 
                        key={i} 
                        name={member.name} 
                        role={member.title} 
                        image={member.image} 
                        bio={member.bio}
                        linkedin={member.linkedin}
                      />
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};

const TeamMember: React.FC<{name: string, role: string, image: string, bio?: string, linkedin?: string}> = ({name, role, image, bio, linkedin}) => (
    <div className="group w-full max-w-[300px] bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
        <div className="h-80 bg-gray-100 relative overflow-hidden flex items-center justify-center group/image shrink-0">
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
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy-900/95 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                {bio && (
                    <p className="text-white/90 text-sm leading-relaxed mb-6 overflow-y-auto max-h-[80%] text-justify">
                        {bio}
                    </p>
                )}
                {linkedin && (
                    <a 
                        href={linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-white hover:text-primary transition-colors mt-auto shadow-lg"
                    >
                        <Linkedin size={18} />
                    </a>
                )}
            </div>
        </div>
        <div className="p-4 text-center flex-grow flex flex-col justify-start">
            <h3 className="font-serif text-lg font-bold text-navy-900 mb-1 leading-tight">{name}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-primary leading-relaxed">{role}</p>
        </div>
    </div>
)

export default About;