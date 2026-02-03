import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogsData } from "@/data/blogsData";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogImages: Record<string, string> = {
  "blog-1": blog1,
  "blog-2": blog2,
  "blog-3": blog3,
};

const BlogSection = () => {
  const displayBlogs = blogsData.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ব্লগসমূহ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Blog Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={blogImages[blog.image]}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Blog Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-bengali text-lg sm:text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-primary/80 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="font-bengali text-sm text-muted-foreground mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bengali text-sm">{blog.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bengali text-base font-medium hover:bg-primary/90 transition-all duration-300 hover:gap-3 shadow-md hover:shadow-lg"
          >
            <span>আরও দেখুন</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
