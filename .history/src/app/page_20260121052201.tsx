import BannerCarousel from "@/components/BannerCarousel";
import Gallery from "@/components/Gallery";
import LatestCollection from "@/components/LatestCollection";
import ServicesSection from "@/components/ServicesSection";
import SuitsForSaleSection from "@/components/SuitForSaleSection";
import TailoringSection from "@/components/TailoringSection";

export default function Home() {
  return (
    <div>
      <BannerCarousel/>
      <TailoringSection/>
      <ServicesSection/>
      <Gallery/>
      <LatestCollection/>
      <SuitsForSaleSection/>
    </div>
  );
}
