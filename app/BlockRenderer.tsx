import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ContactForm from "../components/ContactForm";

const componentMap: any = {
  "layout.navbar": Navbar,
  "sections.hero": Hero,
  "sections.footer": Footer,
  "sections.about-section": AboutSection,
  "sections.mission-section": MissionSection,
  "sections.contact-form": ContactForm,
};

export default function BlockRenderer({ blocks }: any) {
  return (
    <>
      {blocks.map((block: any) => {
        const Component = componentMap[block.__component];

        if (!Component) return null;

        return (
          <Component key={`${block.__component}-${block.id}`} data={block} />
        );
      })}
    </>
  );
}
