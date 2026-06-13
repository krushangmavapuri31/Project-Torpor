// ============================================================
// Centralized research domain data for /work and /work/[slug]
// ============================================================

export interface WorkDomain {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  labCode: string;
  heroDescription: string;
  sections: {
    heading: string;
    body: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  futureDirection: string;
}

export const workDomains: WorkDomain[] = [
  {
    slug: "project-atlas",
    title: "Project Atlas",
    subtitle: "Space Mission Protocols",
    description: "Project Atlas focuses on developing the scientific and operational protocols required for future synthetic torpor missions.",
    labCode: "LAB_01",
    heroDescription: "Project Atlas focuses on developing the scientific and operational protocols required for future synthetic torpor missions.",
    sections: [
      {
        heading: "Overview",
        body: "Project Atlas focuses on developing the scientific and operational protocols required for future synthetic torpor missions."
      }
    ],
    features: [
      { title: "Astronaut Monitoring", description: "Frameworks for continuous physiological and neurological monitoring during torpor cycles." },
      { title: "Life-Support Integration", description: "Integration of automated support systems for oxygen, nutrition, temperature, and recovery." },
      { title: "Mission Safety Procedures", description: "Safety architectures for maintaining stability during prolonged metabolic suppression." },
      { title: "Emergency Recovery Systems", description: "Rapid recovery protocols in case of biological instability or mission-critical failure." },
      { title: "Deep-Space Operations", description: "Operational models for long-duration torpor missions to Moon, Mars, and beyond." }
    ],
    futureDirection: "Developing the scientific and operational protocols required for future synthetic torpor missions to Moon, Mars, and beyond."
  },
  {
    slug: "neural-systems-lab",
    title: "Neural Systems Laboratory",
    subtitle: "Brain-Controlled Metabolic Regulation",
    description: "Investigating the neural mechanisms that regulate metabolism, thermoregulation, consciousness, and survival states.",
    labCode: "LAB_02",
    heroDescription: "Investigating the neural mechanisms that regulate metabolism, thermoregulation, consciousness, and survival states.",
    sections: [
      {
        heading: "Overview",
        body: "Investigating the neural mechanisms that regulate metabolism, thermoregulation, consciousness, and survival states."
      }
    ],
    features: [
      { title: "Hypothalamic Control Networks", description: "Studying brain regions responsible for energy balance and temperature control." },
      { title: "Autonomic Nervous System", description: "Understanding involuntary body regulation during hypometabolic states." },
      { title: "Circadian Rhythm Systems", description: "Researching how biological clocks influence torpor induction and recovery." },
      { title: "Brain-State Monitoring", description: "Continuous neural monitoring for safe torpor control." },
      { title: "Neuroprotection", description: "Preventing brain damage during extended low-energy states." },
      { title: "Neuromodulation Technologies", description: "Focused ultrasound, neuroimaging, and targeted stimulation for torpor control." }
    ],
    futureDirection: "Can the brain safely guide the body into prolonged metabolic conservation while preserving cognition, health, and recovery?"
  },
  {
    slug: "metabolic-engineering",
    title: "Metabolic Engineering Division",
    subtitle: "Biological Foundations of Synthetic Torpor",
    description: "Focused on cellular energy regulation, mitochondrial biology, metabolic suppression, and molecular adaptations observed in naturally hibernating species. This division seeks to understand how human metabolism might be safely modified for extended low-energy states.",
    labCode: "LAB_03",
    heroDescription: "Focused on cellular energy regulation, mitochondrial biology, metabolic suppression, and molecular adaptations observed in naturally hibernating species. This division seeks to understand how human metabolism might be safely modified for extended low-energy states.",
    sections: [
      {
        heading: "Overview",
        body: "Focused on cellular energy regulation, mitochondrial biology, metabolic suppression, and molecular adaptations observed in naturally hibernating species. This division seeks to understand how human metabolism might be safely modified for extended low-energy states."
      }
    ],
    features: [
      { title: "Human Metabolic Suppression", description: "Investigating methods to safely reduce human metabolic activity while maintaining long-term physiological stability." },
      { title: "Energy Conservation Pathways", description: "Studying biological mechanisms that allow cells and organs to function with significantly reduced energy requirements." },
      { title: "Hibernation-Inspired Biology", description: "Analyzing metabolic adaptations observed in natural hibernators to identify pathways applicable to human torpor systems." },
      { title: "Mitochondrial Activity Regulation", description: "Exploring how cellular energy production can be modulated during prolonged hypometabolic states." },
      { title: "Synthetic Torpor Induction Protocols", description: "Developing biochemical and physiological frameworks for initiating and maintaining reversible torpor states." },
      { title: "Cellular Protection Mechanisms", description: "Investigating how cells resist damage during extended periods of reduced metabolism and inactivity." },
      { title: "Muscle & Tissue Preservation", description: "Researching strategies to minimize muscle atrophy and tissue degradation during long-duration torpor." },
      { title: "DNA Stability & Repair", description: "Examining mechanisms that protect genetic material from oxidative stress and radiation-induced damage." },
      { title: "Radiation Response During Torpor", description: "Exploring how metabolic suppression may influence cellular resilience to deep-space radiation exposure." },
      { title: "Spaceflight Metabolic Adaptation", description: "Studying how synthetic torpor could reduce resource consumption and physiological stress during long-duration missions." }
    ],
    futureDirection: "Understanding how human metabolism might be safely modified for extended low-energy states."
  },
  {
    slug: "radiation-resilience",
    title: "Radiation & Space Biology Program",
    subtitle: "Biological Defense Against Deep-Space Radiation",
    description: "Exploring biological strategies to protect human health against the challenges of deep-space radiation exposure. Research includes cellular resilience, oxidative stress reduction, DNA protection mechanisms, and potential interactions between torpor states and radiation response.",
    labCode: "LAB_04",
    heroDescription: "Exploring biological strategies to protect human health against the challenges of deep-space radiation exposure. Research includes cellular resilience, oxidative stress reduction, DNA protection mechanisms, and potential interactions between torpor states and radiation response.",
    sections: [
      {
        heading: "Overview",
        body: "Exploring biological strategies to protect human health against the challenges of deep-space radiation exposure. Research includes cellular resilience, oxidative stress reduction, DNA protection mechanisms, and potential interactions between torpor states and radiation response."
      }
    ],
    features: [
      { title: "Deep-Space Radiation Biology", description: "Studying the biological effects of galactic cosmic rays and solar particle radiation on human tissues." },
      { title: "Radiation Resilience During Torpor", description: "Investigating whether hypometabolic states can improve cellular resistance to radiation-induced damage." },
      { title: "DNA Damage & Repair Mechanisms", description: "Exploring how synthetic torpor may influence genomic stability and DNA repair pathways." },
      { title: "Cellular Protection Systems", description: "Researching natural and engineered biological defenses against oxidative stress and radiation exposure." },
      { title: "Oxidative Stress Reduction", description: "Examining how reduced metabolism may decrease oxidative damage during long-duration missions." },
      { title: "Neuroprotection in Space", description: "Studying methods to protect the brain from radiation, isolation, and deep-space environmental stressors." },
      { title: "Musculoskeletal Preservation", description: "Investigating torpor-inspired approaches to reduce muscle atrophy and bone loss during prolonged inactivity and microgravity." },
      { title: "Microgravity Physiology", description: "Understanding how reduced gravity affects the human body and how torpor systems may mitigate these effects." },
      { title: "Long-Duration Mission Health Systems", description: "Developing biological countermeasures for months-to-years-long space missions." },
      { title: "Spaceflight Survival Modeling", description: "Creating biological models that evaluate astronaut health during future lunar, Martian, and deep-space missions." }
    ],
    futureDirection: "Exploring biological strategies to protect human health against the challenges of deep-space radiation exposure."
  },
  {
    slug: "torpor-systems",
    title: "Synthetic Torpor Systems Initiative",
    subtitle: "Integrated Torpor Architecture",
    description: "Developing integrated torpor architectures combining neuroscience, medical technology, physiological monitoring, automation, and life-support systems.",
    labCode: "LAB_05",
    heroDescription: "Developing integrated torpor architectures combining neuroscience, medical technology, physiological monitoring, automation, and life-support systems.",
    sections: [
      {
        heading: "Overview",
        body: "Developing integrated torpor architectures combining neuroscience, medical technology, physiological monitoring, automation, and life-support systems."
      }
    ],
    features: [
      { title: "Physiological Monitoring", description: "Continuous tracking of vital signs and metabolic state during synthetic torpor." },
      { title: "Automated Control Systems", description: "AI-driven regulation of temperature, pharmacology, and environmental parameters." },
      { title: "Medical Safety Systems", description: "Redundant safety protocols and immediate intervention mechanisms." },
      { title: "Recovery Protocols", description: "Standardized procedures for safe and efficient arousal from torpor states." },
      { title: "Life Support Infrastructure", description: "Integration with spacecraft life support for resource optimization." }
    ],
    futureDirection: "Developing integrated torpor architectures combining neuroscience, medical technology, physiological monitoring, automation, and life-support systems."
  },
  {
    slug: "research-archive",
    title: "Research Publications & Archive",
    subtitle: "Scientific Progress Documentation",
    description: "A collection of published papers, technical reports, concept studies, research milestones, and ongoing investigations documenting Project Torpor.",
    labCode: "LAB_06",
    heroDescription: "A collection of published papers, technical reports, concept studies, research milestones, and ongoing investigations documenting Project Torpor.",
    sections: [
      {
        heading: "Overview",
        body: "A collection of published papers, technical reports, concept studies, research milestones, and ongoing investigations documenting Project Torpor."
      }
    ],
    features: [
      { title: "Published Papers", description: "Peer-reviewed research and scientific publications on synthetic torpor." },
      { title: "Technical Reports", description: "Detailed engineering, systems architecture, and laboratory documentation." },
      { title: "Concept Studies", description: "Theoretical models and mission planning studies for deep-space torpor applications." },
      { title: "Research Milestones", description: "Key breakthroughs, experimental results, and historical milestones from Project Torpor." }
    ],
    futureDirection: "A collection of published papers, technical reports, concept studies, research milestones, and ongoing investigations documenting Project Torpor."
  }
];

export function getWorkDomain(slug: string): WorkDomain | undefined {
  return workDomains.find((d) => d.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return workDomains.map((d) => d.slug);
}
