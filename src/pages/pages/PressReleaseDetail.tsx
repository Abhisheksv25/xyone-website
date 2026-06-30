import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { newsData } from '../../data/data/newsData';

const PressReleaseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = newsData.find(item => item.slug === slug);

  if (!article) {
    return (
      <div className="text-center py-48">
        <h1 className="font-serif text-3xl text-navy-900 mb-4">Article not found</h1>
        <Link to="/news" className="text-primary hover:underline">Back to News</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12">
          <Link to="/news" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:underline mb-8">
            <ArrowLeft size={16} />
            Back to News
          </Link>
          <h1 className="font-serif text-3xl md:text-5xl font-medium text-navy-900 leading-tight mb-4">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-xl text-gray-500 italic">
              {article.subtitle}
            </p>
          )}
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          {article.location && <p className="lead text-gray-500 font-semibold">{article.location}</p>}
          
          {article.body?.map((section, index) => {
            if (section.type === 'paragraph') {
              return <p key={index}>{section.content}</p>;
            }
            if (section.type === 'quote') {
              return (
                <blockquote key={index} className="border-l-4 border-primary bg-gray-50 p-6 my-8">
                  <p className="text-xl font-medium italic text-navy-900">“{section.content}”</p>
                  <footer className="mt-4 text-base">
                    <cite className="font-semibold text-navy-900 not-italic">{section.author}</cite>
                    <br/>
                    <cite className="text-gray-500 not-italic">{section.title}</cite>
                  </footer>
                </blockquote>
              );
            }
            if (section.type === 'heading') {
              return <h3 key={index} className="font-serif text-2xl text-navy-900 mt-12 mb-4">{section.content}</h3>;
            }
            return null;
          })}

          {article.about?.map((section, index) => (
            <div key={index}>
              <h3 className="font-serif text-2xl text-navy-900 mt-12 mb-4">{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}

          {article.contacts && (
            <div className="mt-16 border-t border-gray-200 pt-8">
              <h3 className="font-serif text-2xl text-navy-900 mb-4">Contacts</h3>
              <p className="font-semibold">{article.contacts.title}</p>
              <a href={`mailto:${article.contacts.email}`} className="text-primary hover:underline">{article.contacts.email}</a>
              <br/>
              <a href={`https://${article.contacts.web}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{article.contacts.web}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PressReleaseDetail;