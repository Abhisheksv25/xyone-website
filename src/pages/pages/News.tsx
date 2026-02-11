import React, { useState } from 'react';
import { ArrowUpRight, FileText, Mic, Calendar, Download, Star } from 'lucide-react';

type Category = 'All' | 'Press Release' | 'Publication' | 'Event' | 'Whitepaper';

interface NewsItem {
  id: number;
  date: string;
  category: Exclude<Category, 'All'>;
  title: string;
  source?: string;
  link: string;
  summary?: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    date: 'October 1, 2022',
    category: 'Press Release',
    title: 'XYone Awarded $2.5M for Androgen Dysregulation Research',
    link: '#',
    summary: 'XYone announced the award of two NIA/SBIR grants totaling over $2.5 million to advance studies in androgen dysregulation.'
  },
  {
    id: 2,
    date: 'April 1, 2022',
    category: 'Press Release',
    title: 'XYone Congratulates Poseida on Phase 1 CAR-T Cell Trial',
    link: '#',
    summary: 'XYone congratulated Poseida Therapeutics on the start of its Phase 1 study of P-MUC1C-ALLO1 allogeneic CAR-T cells.'
  }
];

const News: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const filteredNews = newsData.filter(item => filter === 'All' || item.category === filter);

  return (
    <div className="bg-background-light min-h-screen">
      <header className="pt-32 pb-12 px-6 max-w-7xl mx-auto border-b border-gray-200">
         <span className="inline-block px-3 py-1 rounded-sm bg-primary/10 text-primary text-base font-bold tracking-widest uppercase mb-6">Updates</span>
         <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-navy-900">
            News & <span className="italic text-primary">Presentations</span>
         </h1>
         <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            XYone shares scientific progress and company updates across our oncology and endocrinology platforms—highlighting key milestones, non-dilutive funding, strategic collaborations, and scientific presentations as we advance first-in-class programs toward the clinic.
         </p>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        
        {/* Featured Item */}
        <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <Star size={14} className="fill-primary" /> Featured Presentation
            </h2>
            <a 
                href="https://xyonetx.com/wp-content/uploads/2025/01/onco-whitepaper-scientific-dec-01-2023.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-navy-900 text-white rounded-xl p-8 md:p-10 shadow-xl relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all"
            >
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
                    <FileText size={120} />
                </div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Download size={12} /> Whitepaper
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 leading-tight">
                        Development of First-inClass Therapeutics for MUC1-C Driven Solid Tumors
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
                        This whitepaper outlines the scientific rationale for targeting MUC1-C (the non-shedding, oncogenic subunit of MUC1) and summarizes XYone’s approach to developing next-generation therapeutics against this target, including external validation and translational progress across solid tumors.
                    </p>
                    <span className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                        Download PDF <ArrowUpRight size={16} className="ml-2" />
                    </span>
                </div>
            </a>
        </div>

        {/* Filter */}
        <div className="mb-8 flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {['All', 'Press Release', 'Publication', 'Event'].map((cat) => (
                <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-5 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-colors ${
                    filter === cat 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                }`}
                >
                {cat}
                </button>
            ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-6">
            {filteredNews.map((item) => (
                <article key={item.id} className="group bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-3">
                    <div className="text-sm font-bold text-gray-400 mb-3">{item.date}</div>
                    <div className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm border ${
                        item.category === 'Press Release' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                        item.category === 'Publication' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        item.category === 'Event' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                        'bg-amber-50 text-amber-700 border-amber-100'
                    }`}>
                        {item.category === 'Press Release' && <Mic size={10} />}
                        {item.category === 'Publication' && <FileText size={10} />}
                        {item.category === 'Event' && <Calendar size={10} />}
                        {item.category === 'Whitepaper' && <Download size={10} />}
                        {item.category}
                    </div>
                    </div>
                    <div className="md:col-span-8">
                    <h2 className="text-xl font-serif font-medium text-navy-900 mb-3 group-hover:text-primary transition-colors cursor-pointer leading-tight">
                        <a href={item.link}>{item.title}</a>
                    </h2>
                    {item.source && (
                        <div className="text-sm text-gray-800 font-bold mb-2">Published in {item.source}</div>
                    )}
                    {item.summary && (
                        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">{item.summary}</p>
                    )}
                    </div>
                    <div className="md:col-span-1 flex justify-end">
                    <a href={item.link} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                    </a>
                    </div>
                </div>
                </article>
            ))}
        </div>

      </div>
    </div>
  );
};

export default News;