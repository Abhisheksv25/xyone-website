export type Category = 'All' | 'Press Release' | 'Publication' | 'Event' | 'Whitepaper';

export type BodySection = 
  | { type: 'paragraph'; content: string }
  | { type: 'quote'; content: string; author: string; title: string }
  | { type: 'heading'; content: string };

export interface NewsItem {
  id: number;
  date: string;
  category: Exclude<Category, 'All'>;
  title: string;
  source?: string;
  link?: string; // For external links
  slug?: string; // For internal links
  summary?: string;
  // Fields for the detail page
  subtitle?: string;
  location?: string;
  body?: BodySection[];
  about?: { title: string; content: string }[];
  contacts?: { title: string; email: string; web: string };
}

export const newsData: NewsItem[] = [
  {
    id: 9,
    date: 'June 25, 2026',
    category: 'Press Release',
    title: 'XYone Therapeutics Advances XYA02 Program with FDA Orphan Drug Designation in Gastric Cancer',
    slug: 'xya02-gastric-cancer-orphan-drug-designation',
    summary: 'XYone Therapeutics is pleased to announce that the U.S. Food and Drug Administration has granted Orphan Drug Designation to XYA02, the company’s investigational MUC1-C-targeted antibody-drug conjugate, for the treatment of gastric cancer.',
    subtitle: 'Second Orphan Drug Designation for XYA02 follows prior designation in pancreatic cancer',
    location: 'CANTON, MA — June 25, 2026',
    body: [
      { type: 'paragraph', content: 'XYone Therapeutics is pleased to announce that the U.S. Food and Drug Administration has granted Orphan Drug Designation to XYA02, the company’s investigational MUC1-C-targeted antibody-drug conjugate, for the treatment of gastric cancer.' },
      { type: 'paragraph', content: 'This marks the second Orphan Drug Designation for XYA02, following the FDA’s prior designation for the treatment of pancreatic cancer in 2025. Together, these designations represent an important regulatory milestone for the XYA02 program and support XYone’s continued development of targeted oncology therapeutics for aggressive gastrointestinal cancers.' },
      { type: 'quote', content: 'Receiving a second Orphan Drug Designation for XYA02 is an important milestone for XYone and reinforces our commitment to advancing targeted therapies for patients with difficult-to-treat cancers.', author: 'Anshu Goyal', title: 'Chief Executive Officer and Co-Founder of XYone Therapeutics' },
      { type: 'paragraph', content: 'XYone expects to initiate a first-in-human trial of XYA02 in Q3 of 2026.' },
      { type: 'paragraph', content: 'Gastric and pancreatic cancers remain serious malignancies that are often diagnosed at advanced stages and have limited treatment options, particularly in recurrent, metastatic, or treatment-resistant settings. These challenges underscore the need for new therapeutic approaches designed to address tumor biology more precisely and expand potential options for patients.' },
      { type: 'paragraph', content: 'ODD designation by FDA provides several regulatory and financial benefits, including the potential for seven years of market exclusivity upon approval, federal tax credits, fee waivers, and enhanced interaction with and guidance from the U.S. FDA throughout the development process.' },
    ],
    about: [
      { title: 'About XYA02', content: 'XYA02 is an investigational antibody-drug conjugate being developed by XYone Therapeutics as part of its MUC1-C-directed oncology pipeline. XYA02 is designed to target MUC1-C using proprietary antibodies. MUC1-C is a tumor-associated oncoprotein implicated in cancer growth, survival signaling, inflammation, metastasis, immune evasion, and resistance to therapy across multiple solid tumors.' },
      { title: 'About XYone Therapeutics', content: 'XYone Therapeutics, Inc. is a Boston-based biotechnology company focused on developing targeted oncology therapeutics for difficult-to-treat solid tumors. The company’s pipeline is centered on MUC1-C-directed therapeutic strategies, including multiple antibody-drug conjugates, bispecifics, TCE, and cell therapies licensed to Roche.' },
    ],
    contacts: {
      title: 'Media & Investor Relations',
      email: 'info@xyonetx.com',
      web: 'www.xyonetx.com'
    }
  },
  {
    id: 6,
    date: 'May, 2025',
    category: 'Press Release',
    title: 'XYA02 Receives FDA Orphan Drug Designation for Pancreatic Cancer',
    link: '#',
    summary: 'The U.S. Food and Drug Administration (FDA) has granted Orphan Drug Designation to XYA02 for the treatment of pancreatic cancers.'
  },
  // {
  //   id: 8,
  //   date: 'July 02, 2025',
  //   category: 'Publication',
  //   title: 'Mucin-1: a promising pan-cancer therapeutic target',
  //   source: 'npj Precision Oncology',
  //   link: 'https://www.nature.com/articles/s41698-025-01016-2',
  //   summary: "A comprehensive review in Nature Partner Journals highlighting Mucin-1 (MUC1) as a high-value target for pan-cancer therapy, reinforcing the scientific rationale behind XYone's MUC1-C-focused platform."
  // },
  {
    id: 3,
    date: 'Feb 27, 2024',
    category: 'Press Release',
    title: 'Antibody-drug conjugate targeting MUC1-C',
    source: 'Frederick National Lab',
    link: 'https://frederick.cancer.gov/news/biopharmaceutical-development-program-embarks-new-work-targeted-cancer',
    summary: 'Research highlighting the development of a novel antibody-drug conjugate targeting the MUC1-C oncoprotein.'
  },
  {
    id: 1,
    date: 'October 1, 2022',
    category: 'Press Release',
    title: 'XYone Awarded $2.5M for Androgen Dysregulation Research',
    link: '#',
    summary: 'XYone announced the award of two NIA/SBIR grants totaling over $2.5 million to advance studies in androgen dysregulation.'
  },
  {
    id: 7,
    date: 'November 26, 2024',
    category: 'Press Release',
    title: 'Roche inks $1.5B Poseida buyout to land off-the-shelf CAR-Ts',
    source: 'Fierce Biotech',
    link: 'https://www.fiercebiotech.com/biotech/roche-inks-15b-poseida-buyout-betting-shelf-car-ts-will-democratize-access-cell-therapies',
    summary: 'Roche acquired Poseida Therapeutics, including the out-licensed P-MUC1C-ALLO1 program, validating the potential of allogeneic CAR-T therapies targeting MUC1-C.'
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