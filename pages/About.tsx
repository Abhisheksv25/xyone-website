import React from 'react';
import { Users, Building2, GraduationCap, Briefcase } from 'lucide-react';
import { leadership, directors, advisors } from '../data/team';

const About: React.FC = () => {
  return (
    <div className="bg-background-light">
      <header className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
         <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">About XYone</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-navy-900">
            Translating rigorous biology into <span className="italic text-primary">patient impact.</span>
         </h1>
         <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-8">
                <p className="text-xl text-gray-600 leading-relaxed font-light mb-6">
                    XYone Therapeutics is a biotech startup developing drugs and diagnostic solutions to address significant unmet medical needs in endocrine dysregulation and immuno-oncology.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed">
                    Founded by Harvard Medical School faculty and led by executives and advisors with deep scientific, pharma, and finance experience, XYone is advancing a platform-driven pipeline designed to translate rigorous biology into therapies with meaningful patient impact.
                </p>
            </div>
         </div>
      </header>

      {/* Strategic Focus - Cleaner Layout */}
      <section className="py-20 bg-white border-y border-gray-200">
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
      <section className="py-24 bg-background-light">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-4xl text-navy-900 mb-12 text-center">Leadership Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {leadership.map((member, i) => (
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

      {/* Board of Directors */}
      <section className="py-20 bg-white border-y border-gray-200">
           <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="font-serif text-3xl text-navy-900 mb-10">Board of Directors</h2>
              <div className="flex flex-wrap justify-center gap-6">
                   {directors.map((director, i) => (
                       <div key={i} className="px-8 py-4 bg-gray-50 border border-gray-100 rounded-lg min-w-[200px]">
                           <div className="font-bold text-navy-900">{director}</div>
                           <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Director</div>
                       </div>
                   ))}
              </div>
           </div>
      </section>

      {/* Scientific Advisory Board */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-4xl mb-4 text-center">Scientific Advisory Board</h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">World-renowned experts in endocrinology, oncology, and drug development guiding our scientific strategy.</p>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                {advisors.map((advisor, i) => (
                    <AdvisorCard 
                        key={i}
                        name={advisor.name} 
                        title={advisor.title}
                    />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

const TeamMember: React.FC<{name: string, role: string, image: string}> = ({name, role, image}) => (
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
            <p className="text-xs font-bold uppercase tracking-widest text-primary leading-relaxed">{role}</p>
        </div>
    </div>
)

const AdvisorCard: React.FC<{name: string, title: string}> = ({name, title}) => (
    <div className="flex items-start gap-4">
        <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0"></div>
        <div>
            <h4 className="font-bold text-lg text-white mb-1">{name}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{title}</p>
        </div>
    </div>
)

export default About;