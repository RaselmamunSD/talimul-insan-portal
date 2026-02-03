import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogsData } from "@/data/blogsData";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogImages: Record<string, string> = {
  "blog-1": blog1,
  "blog-2": blog2,
  "blog-3": blog3,
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-bengali text-2xl font-bold text-foreground mb-4">
              ব্লগ পাওয়া যায়নি
            </h1>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-primary hover:underline font-bengali"
            >
              <ArrowLeft className="w-4 h-4" />
              সকল ব্লগ দেখুন
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={blogImages[blog.image]}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
            <div className="container mx-auto">
              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-bengali text-sm">ব্লগে ফিরে যান</span>
              </Link>
              <h1 className="font-bengali text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-4xl">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <section className="py-10 sm:py-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pb-6 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bengali text-sm">{blog.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span className="font-bengali text-sm">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-primary" />
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bengali rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {blog.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-bengali text-foreground leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Back Button */}
              <div className="mt-10 pt-6 border-t border-border">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-bengali text-sm font-medium hover:bg-primary/90 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  সকল ব্লগ দেখুন
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogDetail;
