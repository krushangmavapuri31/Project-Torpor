import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join Torpor",
  description:
    "Apply to join Project Torpor — contribute to the future of human hibernation and deep-space exploration research.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        title="JOIN TORPOR"
        subtitle="Contribute to the future of human hibernation research. We are looking for dedicated researchers, engineers, and scientists."
        imageSrc="/images/research_abstract.png"
        labCode="APPLICATION"
      />

      <section className="py-24 md:py-32 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <JoinForm />
        </div>
      </section>
    </>
  );
}
