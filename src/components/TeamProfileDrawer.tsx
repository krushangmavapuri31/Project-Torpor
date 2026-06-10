"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";
import { X } from "lucide-react";

interface TeamProfileDrawerProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamProfileDrawer({
  member,
  onClose,
}: TeamProfileDrawerProps) {
  const isOpen = member !== null;

  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`team-drawer-overlay ${isOpen ? "team-drawer-overlay--open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`team-drawer ${isOpen ? "team-drawer--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={member ? `${member.name} profile` : "Member profile"}
      >
        {/* Close button */}
        <button
          className="team-drawer-close"
          onClick={onClose}
          aria-label="Close profile"
          type="button"
        >
          <X size={20} />
        </button>

        {member && (
          <div className="team-drawer-content">
            {/* Header: Photo + identity */}
            <div className="team-drawer-header">
              <div className="team-drawer-img-wrap">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="team-drawer-img"
                />
              </div>
              <div className="team-drawer-identity">
                <h2 className="team-drawer-name">{member.name}</h2>
                <p className="team-drawer-education">{member.education}</p>
              </div>
            </div>

            <div className="team-drawer-divider" />

            {/* Detail sections */}
            <div className="team-drawer-sections">
              {/* Major */}
              <div className="team-drawer-section">
                <span className="team-drawer-label">Major</span>
                <h3 className="team-drawer-section-title">
                  {member.majorRole}
                </h3>
                <p className="team-drawer-section-desc">
                  {member.majorDescription}
                </p>
              </div>

              {/* Special */}
              <div className="team-drawer-section">
                <span className="team-drawer-label">Special</span>
                <h3 className="team-drawer-section-title">
                  {member.specialRole}
                </h3>
                <p className="team-drawer-section-desc">
                  {member.specialDescription}
                </p>
              </div>

              {/* Domain */}
              <div className="team-drawer-section">
                <span className="team-drawer-label">Research Domain</span>
                <h3 className="team-drawer-section-title">{member.domain}</h3>
                <p className="team-drawer-section-desc">
                  {member.domainDescription}
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
