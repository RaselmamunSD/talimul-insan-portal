import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdmissionInstructions from "./pages/AdmissionInstructions";
import AdmissionForm from "./pages/AdmissionForm";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import Donate from "./pages/Donate";
import Contact from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admission-instructions" element={<AdmissionInstructions />} />
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admission" element={<AdmissionInstructions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
