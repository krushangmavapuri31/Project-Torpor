"use client";

import { useState, useMemo } from "react";
import { teamMembers, type TeamMember, type TeamCategory } from "@/lib/team-data";
import TeamCard from "./TeamCard";
import TeamProfileDrawer from "./TeamProfileDrawer";

type FilterOption = "all" | TeamCategory;

const FILTERS: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "leadership", label: "Leadership" },
  { value: "research", label: "Research" },
  { value: "engineering", label: "Engineering" },
  { value: "communications", label: "Communications" },
  { value: "advisor", label: "Advisors" },
];

interface TeamGridProps {
  members?: TeamMember[];
}

export default function TeamGrid({
  members = teamMembers,
}: TeamGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return members;
    return members.filter((m) => m.category === activeFilter);
  }, [activeFilter, members]);

  // Count per category for badges
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: members.length };
    for (const m of members) {
      c[m.category] = (c[m.category] ?? 0) + 1;
    }
    return c;
  }, [members]);

  console.log("Members passed to TeamGrid:", members.map(m => m.name));

  return (
    <>
      {/* Filter tabs */}
      <div className="team-filters" role="tablist" aria-label="Filter team by category">
        {FILTERS.map(({ value, label }) => {
          const count = counts[value] ?? 0;
          if (value !== "all" && count === 0) return null;
          return (
            <button
              key={value}
              role="tab"
              aria-selected={activeFilter === value}
              className={`team-filter-btn ${activeFilter === value ? "team-filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(value)}
              type="button"
            >
              {label}
              <span className="team-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="team-grid">
        {filtered.map((member, index) => (
          <TeamCard
            key={member.name}
            member={member}
            index={index}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {/* Profile drawer */}
      <TeamProfileDrawer
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </>
  );
}
