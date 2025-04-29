import BannerCarousel from "@/components/BannerCarousel";
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
      <LatestCollection/>
      <SuitsForSaleSection/>
    </div>
  );
}
