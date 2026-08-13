import type { Metadata } from "next";
import CandidateProfile from "./CandidateProfile";

export const metadata: Metadata = {
  title: "Astronaut Candidate Profile – Project Torpor",
  description:
    "Official astronaut candidate information dossier and qualification profile for Project Torpor's synthetic human hibernation research.",
};

export default function AstronautCandidatePage() {
  return <CandidateProfile />;
}