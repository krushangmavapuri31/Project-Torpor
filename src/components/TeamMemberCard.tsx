"use client";

import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import type { TeamMember } from "@/lib/team-data";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <FadeIn direction="up" delay={index * 0.12}>
      <article className="team-profile">
        {/* ── Header: Photo + Name/Education ── */}
        <div className="team-profile-header">
          <div className="team-profile-image-wrap">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="team-profile-image"
            />
          </div>
          <div className="team-profile-identity">
            <h3 className="team-profile-name">{member.name}</h3>
            <div className="team-profile-accent" aria-hidden="true" />
            {member.education && (
              <p className="team-profile-education">{member.education}</p>
            )}
          </div>
        </div>

        {/* ── Detail sections ── */}
        <div className="team-profile-details">
          {/* Major */}
          {member.majorRole && (
            <div className="team-profile-section">
              <span className="team-profile-label">Major</span>
              <h4 className="team-profile-section-title">
                {member.majorRole}
              </h4>
              {member.majorDescription && (
                <p className="team-profile-section-desc">
                  {member.majorDescription}
                </p>
              )}
            </div>
          )}

          {/* Special */}
          {member.specialRole && (
            <div className="team-profile-section">
              <span className="team-profile-label">Special</span>
              <h4 className="team-profile-section-title">
                {member.specialRole}
              </h4>
              {member.specialDescription && (
                <p className="team-profile-section-desc">
                  {member.specialDescription}
                </p>
              )}
            </div>
          )}

          {/* Domain */}
          {member.domain && (
            <div className="team-profile-section">
              <span className="team-profile-label">Domain</span>
              <h4 className="team-profile-section-title">
                {member.domain}
              </h4>
              {member.domainDescription && (
                <p className="team-profile-section-desc">
                  {member.domainDescription}
                </p>
              )}
            </div>
          )}
        </div>
      </article>
    </FadeIn>
  );
}
