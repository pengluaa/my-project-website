export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  coverImage: string;
  images: string[];
  featured: boolean;
  status: 'active' | 'completed' | 'archived';
  startDate: string;
  endDate: string | null;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  avatar: string;
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
}
