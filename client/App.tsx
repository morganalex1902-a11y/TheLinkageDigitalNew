import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import PortfolioAdmin from "./pages/PortfolioAdmin";
import BlogAdmin from "./pages/BlogAdmin";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import { CancellationPolicy, PrivacyPolicy, RefundPolicy, TermsAndConditions } from "./pages/Policies";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidgets from "./components/ChatWidgets";

const queryClient = new QueryClient();

export const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      {!isAdminRoute && <ChatWidgets />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/portfolio" element={<PortfolioAdmin />} />
        <Route path="/admin/blog" element={<BlogAdmin />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </TooltipProvider>
  </QueryClientProvider>
  );
};
