import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { BlogPost } from '../types';
import { fetchBlogs } from '../services/api';
import { ArrowRight, Calendar } from 'lucide-react';

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
      setLoading(false);
    };
    loadBlogs();
  }, []);

  return (
    <section id="blog" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey in tech.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {blog.image && (
                  <div className="h-48 overflow-hidden shrink-0">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {blog.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                    {blog.excerpt}
                  </p>
                  <a 
                    href={blog.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors mt-auto"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://blog.baralaayush.com.np" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
