import type { Metadata } from "next";
import AstronautCandidateDossier from "@/components/AstronautCandidateDossier";
import { astronautCandidates } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Astronaut Candidate Profile – Project Torpor",
  description:
    "Official astronaut candidate information dossier and qualification profile for Project Torpor's synthetic human hibernation research.",
};

export default function AstronautCandidatePage() {
  const candidate = astronautCandidates[0];

  if (!candidate) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Astronaut candidate information is currently unavailable.</p>
      </main>
    );
  }

  return <AstronautCandidateDossier candidate={candidate} />;
}