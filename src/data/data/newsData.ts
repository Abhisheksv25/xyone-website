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
    id: 10,
    date: 'September 25, 2026',
    category: 'Press Release',
    title: 'XYone Therapeutics Announces First Patient Dosed in First-in-Human Clinical Trial of XYA02 (AT2021), a Novel Antibody Drug Conjugate Targeting MUC1-C',
    slug: 'xya02-first-patient-dosed',
    summary: 'XYone Therapeutics announced the first patient dosing in its first-in-human Phase 1b/2 trial of XYA02 (AT2021), its lead MUC1-C–targeted antibody-drug conjugate.',
    location: 'CANTON, Mass. — September 25, 2026',
    body: [
      { type: 'paragraph', content: 'XYone Therapeutics, Inc. (“XYone”), a clinical-stage biotechnology company, announced that the first patient has been dosed in the first-in-human Phase 1b/2 clinical trial of XYA02 (also known as AT2021), the Company’s lead antibody-drug conjugate (“ADC”) targeting MUC1-C.' },
      { type: 'paragraph', content: 'The multicenter, open-label study is evaluating XYA02 in patients with advanced, relapsed and/or refractory solid tumors. The study is designed to characterize the safety and tolerability of XYA02, identify appropriate dose levels for further clinical development, and assess pharmacokinetics, pharmacodynamics and preliminary antitumor activity. The study is registered on ClinicalTrials.gov as NCT07670312, “Evaluation of XYA02 in Patients with Advanced Solid Tumors.”' },
      { type: 'quote', content: 'Dosing the first patient with XYA02 represents the culmination of several years of work to develop a differentiated therapeutic approach against MUC1-C. This marks a significant milestone in XYone’s transition to a clinical stage company.', author: 'Anshu Goyal', title: 'Chief Executive Officer and Co-Founder of XYone Therapeutics' },
      { type: 'paragraph', content: 'The clinical study includes patients with advanced solid tumors in non-small cell lung, ovarian, gastric/GEJ & colorectal cancers. The study will initially assess escalating doses of XYA02, followed by further evaluation in selected tumor types based on emerging safety, pharmacokinetic, biomarker and antitumor activity data.' },
      { type: 'paragraph', content: '“MUC1 has been recognized as an important pan-cancer target for decades, but the biology of targeting the specific domain (MUC1-C) addresses several vexing issues,” said Dr. Ravi Jasuja, Co-Founder and Chief Scientific Officer of XYone Therapeutics. “MUC1-C is expressed across multiple solid tumors and, unlike the shed extracellular MUC1-N domain, remains tumor anchored. Compared to MUC1-C, heterogeneous glycosylation of MUC1-N further compounds the complexity in therapeutic targeting of the extracellular domain. Accordingly, MUC1-C targeting with an antibody-drug conjugate provides a compelling rationale for an improved therapeutic index.”' },
      { type: 'quote', content: 'We are excited that the U.S. Food and Drug Administration has granted XYA02 Orphan Drug Designation (ODD) for the treatment of both pancreatic cancer and gastric cancer, with additional applications pending in other indications. These designations recognize the potential of XYA02 to treat patients with these difficult-to-treat solid tumors.', author: 'Dr. Surender Kharbanda', title: 'Chief Operating Officer of XYone Therapeutics' },
    ],
    about: [
      { title: 'About XYA02', content: 'XYA02 is a novel MUC1-C targeting ADC for the treatment of multiple solid tumors. It was engineered with a novel, proprietary antibody conjugated with Exatecan payload. XYA02 is an investigational drug and has not been approved by the U.S. Food and Drug Administration, the Australian Therapeutic Goods Administration, or any other regulatory authority. Its safety and efficacy have not been established.' },
      { title: 'About XYone Therapeutics', content: 'XYone Therapeutics, Inc. is a clinical-stage biotechnology company, based in greater Boston, MA with innovative programs in oncology and endocrinology. XYone’s pipeline includes multiple antibody-drug conjugates, T-cell engagers (TCEs) and other MUC1-C–directed therapeutic modalities. For more information, visit XYone Therapeutics’ website: www.xyonetx.com' },
    ],
    contacts: {
      title: 'Media and Investor Contact',
      email: 'info@xyonetx.com',
      web: 'www.xyonetx.com'
    }
  },
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
    title: 'XYA02 Receives FDA Orphan Drug Designation for Pancreatic Cance',
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