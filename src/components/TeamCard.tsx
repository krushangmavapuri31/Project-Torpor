"use client";

import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import type { TeamMember } from "@/lib/team-data";

interface TeamCardProps {
  member: TeamMember;
  index: number;
  onClick: () => void;
}

// Short domain label for the badge (first 3 words max)
function domainBadge(domain: string): string {
  const words = domain.split(" ");
  return words.slice(0, 3).join(" ");
}

// Domain index for the "Domain XX" label
const DOMAIN_INDEX: Record<string, string> = {
  "Neuromuscular Blockade & Muscle Atrophy": "01",
  "Multimodal Anesthesia Protocols": "02",
  "Bioethics & Regulatory Frameworks": "03",
  "Microgravity Effects on Pharmacodynamics": "04",
  "Long-duration Anesthetic Delivery Systems": "05",
  "Rewarming & Safe Arousal Protocols": "06",
  "Torpor Physiology & Metabolic Suppression": "07",
  "Radiation Protection via Metabolic Suppression": "08",
  "Synthetic & Induced Torpor Induction": "09",
  "Brain Activity Monitoring in Torpor": "10",
};

export default function TeamCard({ member, index, onClick }: TeamCardProps) {
  const domainNum = DOMAIN_INDEX[member.domain] ?? "—";

  return (
    <FadeIn direction="up" delay={index * 0.07}>
      <button
        className="team-card"
        onClick={onClick}
        aria-label={`View profile of ${member.name}`}
        type="button"
      >
        {/* Photo */}
        <div className="team-card-img-wrap">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="team-card-img"
          />
        </div>

        {/* Info */}
        <div className="team-card-body">
          <h3 className="team-card-name">{member.name}</h3>
          <div className="team-card-accent" aria-hidden="true" />
          <p className="team-card-role">{member.majorRole}</p>

          {/* Domain badge */}
          <div className="team-card-badge">
            <span className="team-card-badge-num">Domain {domainNum}</span>
            <span className="team-card-badge-label">
              {domainBadge(member.domain)}
            </span>
          </div>
        </div>
      </button>
    </FadeIn>
  );
}
