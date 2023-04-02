export interface Post {
  title: string;
  subtitle?: string;
  date: Date;
  onderwerp: string;
  auteur: string;
  tags: string[];
  html: string;
  photos: string;
  slug: string;
}
