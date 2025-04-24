import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Photovoltaik from "./pages/Photovoltaik.tsx";
import Waermepumpen from "./pages/Waermepumpen.tsx";
import ScrollToTop from "@/components/ScrollToTop.tsx";
import Impressum from "@/components/Impressum.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Neue Seiten */}
          <Route path="/photovoltaik" element={<Photovoltaik />} />
          <Route path="/waermepumpen" element={<Waermepumpen />} />
          <Route path="/impressum" element={<Impressum />} />


          {/* Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
