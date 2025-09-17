import Hero from "../Properties/components/Hero";
import ApartmentPlans from "../Properties/components/Plans";
import RelatedProperties from "../Properties/components/RelatedProperties";
import PropertyPage from "../Properties/components/Penthouse";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PropertyPage />
      <ApartmentPlans />
      <RelatedProperties />
    </div>
  );
}