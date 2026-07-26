import { LucideIcon } from 'lucide-react';

export interface BlogPost {
  id: number | string;
  title: string;
  excerpt: string;
  link: string;
  date: string;
  image?: string;
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}
