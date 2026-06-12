export interface ProcessStep {
  title: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  date: string;
  location?: string;
  tags: string[];
  heroImage: string;
  heroVideo?: string;
  mockupImage?: string;
  overview: string;
  process: ProcessStep[];
  challenge: string[];
  approach: string[];
  methodology: { title: string; description: string }[];
  conclusion: string;
  gallery: string[];
  color: string;
}
