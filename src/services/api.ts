import { BlogPost, Project } from '../types';
import fetchJsonp from 'fetch-jsonp';

// Helper to strip HTML tags
const stripHtml = (html: string) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

// Helper to extract first image URL from HTML content
const extractFirstImageUrl = (html?: string): string | null => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
};

// Helper to convert Blogger/Google image URL to high resolution
const getHighResImageUrl = (url?: string): string | undefined => {
  if (!url) return undefined;
  
  let highRes = url;
  
  // Replace Blogger/Google size parameters in path (/s72-c/, /s320/, /w640-h400-p-k-no-nu/, etc.) with /s1600/
  highRes = highRes.replace(/\/(s|w|h)[0-9]+(-[a-zA-Z0-9-]+)*\//, '/s1600/');
  
  // Replace query parameter sizes (=s72-c, =w320-h180) with =s1600
  highRes = highRes.replace(/=(s|w|h)[0-9]+(-[a-zA-Z0-9-]+)*/, '=s1600');

  if (highRes.startsWith('//')) {
    highRes = 'https:' + highRes;
  }
  
  return highRes;
};

// Helper to parse Blogger JSON feed
const parseBloggerFeed = (data: any): BlogPost[] => {
  if (!data.feed || !data.feed.entry) return [];
  
  return data.feed.entry.map((entry: any) => {
    const link = entry.link.find((l: any) => l.rel === 'alternate')?.href || '#';
    
    const contentHtml = entry.content?.$t || entry.summary?.$t || '';
    const rawImageUrl = extractFirstImageUrl(contentHtml) || entry.media$thumbnail?.url;
    const image = getHighResImageUrl(rawImageUrl);

    return {
      id: entry.id.$t,
      title: entry.title.$t,
      excerpt: stripHtml(contentHtml).slice(0, 150) + '...',
      link: link,
      date: new Date(entry.published.$t).toLocaleDateString(),
      image: image
    };
  });
};

export const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    // Use JSONP to bypass CORS for Blogger feeds
    // Limit to 6 posts
    const response = await fetchJsonp('https://blog.baralaayush.com.np/feeds/posts/default?alt=json-in-script&max-results=6');
    if (!response.ok) throw new Error('Failed to fetch from Blogger');
    
    const data = await response.json();
    return parseBloggerFeed(data);
  } catch (error) {
    console.warn("Could not fetch live blogs from Blogger.", error);
    return [];
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    // Use JSONP for projects as well
    // Limit to 6 posts
    const response = await fetchJsonp('https://project.baralaayush.com.np/feeds/posts/default?alt=json-in-script&max-results=6');
    
    if (response.ok) {
      const data = await response.json();
      const blogPosts = parseBloggerFeed(data);
      
      // Convert blog posts to project structure
      return blogPosts.map(post => ({
        id: post.id,
        title: post.title,
        description: post.excerpt,
        link: post.link,
        image: post.image,
        tags: ["Project"] 
      }));
    }
    throw new Error('Failed to fetch projects');
  } catch (error) {
    console.warn("Could not fetch live projects.", error);
    return [];
  }
};
