import React from 'react';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-8">
            <img 
            src={"/data/images/logo2_xyone.png"} 
            alt="XYone Therapeutics" 
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              // Fallback if image fails
              e.currentTarget.style.display = 'none';
              // You could show the text fallback here if needed, but for now we hide broken images
            }}
          />
          {/* Fallback Text (Hidden if image loads, handled by the error above typically, but simpler to just replace) */}
              <span className="font-serif text-2xl font-bold tracking-tight">XYone Therapeutics</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              We are dedicated to develop innovative drugs and diagnostic solutions that address critical unmet needs in endocrine dysregulation and immuno-oncology.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-300">Company</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/pipeline" className="hover:text-primary transition-colors">Pipeline</Link></li>
              <li><Link to="/science" className="hover:text-primary transition-colors">Science</Link></li>
              <li><Link to="/news" className="hover:text-primary transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-gray-300">Contact</h5>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.linkedin.com/company/xyone-therapeutics-inc./about/" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="mailto:Anshu.Goyal@xyonetx.com" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Mail size={18} />
              </a>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              XYone Therapeutics Inc<br/>
              780 Dedham Road,<br/>
              Suite 800 Canton<br/>
              MA 02021
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2024 XYone Therapeutics. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;