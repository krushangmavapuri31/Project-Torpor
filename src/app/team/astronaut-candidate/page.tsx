import type { Metadata } from "next";
import AstronautCandidateDossier from "@/components/AstronautCandidateDossier";
import { astronautCandidates } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Astronaut Candidate Profile — Project Torpor",
  description:
    "Official astronaut candidate information dossier and qualification profile for Project Torpor's synthetic hibernation flight program.",
};

export default function AstronautCandidatePage() {
  const candidate = astronautCandidates[0];
  return <AstronautCandidateDossier candidate={candidate} />;
}