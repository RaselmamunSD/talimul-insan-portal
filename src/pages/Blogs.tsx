import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogsData } from "@/data/blogsData";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const blogImages: Record<string, string> = {
  "blog-1": blog1,
  "blog-2": blog2,
  "blog-3": blog3,
  "blog-4": blog4,
  "blog-5": blog5,
  "blog-6": blog6,
};

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-bengali text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ব্লগসমূহ
            </h1>
            <p className="font-bengali text-lg text-muted-foreground max-w-2xl mx-auto">
              মাদ্রাসার সকল কার্যক্রম, খবর এবং ঘোষণা পড়ুন
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6" />
          </div>
        </section>

        {/* Blog Cards Grid */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogsData.map((blog) => (
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
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bengali rounded-full">
                        {blog.category}
                      </span>
                    </div>
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blogs;
