import Hero from "@/components/sections/Hero";
import NewCollection from "@/components/sections/NewCollection";
import BrandValues from "@/components/sections/BrandValues";
import BrandPhilosophy from "@/components/sections/BrandPhilosophy";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import MaterialsPreview from "@/components/sections/MaterialsPreview";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import AntiGravity from "@/components/sections/AntiGravity";
import SocialProof from "@/components/sections/SocialProof";
import NewsletterSignup from "@/components/sections/NewsletterSignup";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <NewCollection />
      <BrandValues />
      <BrandPhilosophy />
      <FeaturedProducts />
      <MaterialsPreview />
      <ProcessTeaser />
      <AntiGravity />
      <SocialProof />
      <NewsletterSignup />
      <CTABanner />
    </>
  );
}
