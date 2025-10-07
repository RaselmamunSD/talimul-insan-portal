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
import PrincipalMessage from "./pages/PrincipalMessage";
import Committee from "./pages/Committee";
import Goals from "./pages/Goals";
import Features from "./pages/Features";
import HifzDepartment from "./pages/HifzDepartment";
import QawmiDepartment from "./pages/QawmiDepartment";
import NuraniDepartment from "./pages/NuraniDepartment";
import LillahBoarding from "./pages/LillahBoarding";
import Revision from "./pages/Revision";
import ResidentialHalls from "./pages/ResidentialHalls";
import AccommodationCharges from "./pages/AccommodationCharges";
import ResidentialPolicies from "./pages/ResidentialPolicies";
import DailySchedule from "./pages/DailySchedule";
import AdmissionTime from "./pages/AdmissionTime";
import AdmissionExam from "./pages/AdmissionExam";
import AdmissionTerms from "./pages/AdmissionTerms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/features" element={<Features />} />
          <Route path="/hifz-department" element={<HifzDepartment />} />
          <Route path="/qawmi-department" element={<QawmiDepartment />} />
          <Route path="/nurani-department" element={<NuraniDepartment />} />
          <Route path="/lillah-boarding" element={<LillahBoarding />} />
          <Route path="/revision" element={<Revision />} />
          <Route path="/residential-halls" element={<ResidentialHalls />} />
          <Route path="/accommodation-charges" element={<AccommodationCharges />} />
          <Route path="/residential-policies" element={<ResidentialPolicies />} />
          <Route path="/daily-schedule" element={<DailySchedule />} />
          <Route path="/admission-time" element={<AdmissionTime />} />
          <Route path="/admission-exam" element={<AdmissionExam />} />
          <Route path="/admission-terms" element={<AdmissionTerms />} />
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
