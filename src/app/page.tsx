import BannerCarousel from "@/components/BannerCarousel";
import Gallery from "@/components/Gallery";
import ServicesSection from "@/components/ServicesSection";
import TailoringSection from "@/components/TailoringSection";
// import TestimonialsSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div>
      <BannerCarousel/>
      <TailoringSection/>
      <ServicesSection/>
      <Gallery/>
      {/* <TestimonialsSection/> */}
    </div>
  );
}
