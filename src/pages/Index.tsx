import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TimelineSection from "@/components/home/TimelineSection";
import { PackagesPreview } from "@/components/home/Packagespreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesPreview />
      <TimelineSection />
    </Layout>
  );
};

export default Index;
