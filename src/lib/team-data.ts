// ============================================================
// Centralized team member data for /team/ttm-members
// ============================================================

export type TeamCategory =
  | "leadership"
  | "research"
  | "engineering"
  | "communications"
  | "advisor";

export interface TeamMember {
  name: string;
  education: string;
  image: string;
  majorRole: string;
  majorDescription: string;
  specialRole: string;
  specialDescription: string;
  domain: string;
  domainDescription: string;
  category: TeamCategory;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Krushang Mavapuri",
    education: "B.Tech CSE | IIIT Pune | IEEE & ACM",
    majorRole: "Research Publisher Helper",
    majorDescription:
      "Formats papers and assists journal submissions, manages documentation workflow.",
    specialRole: "Technical Writer",
    specialDescription:
      "Produces structured research reports and algorithm documentation for the team.",
    domain: "Neuromuscular Blockade & Muscle Atrophy",
    domainDescription:
      "Microgravity immobility and disuse atrophy countermeasures.",
    image: "/images/team/KRUSHANG.png",
    category: "research",
  },

  {
    name: "Dr. Shubham Khot",
    education: "Asst. Professor | Pharma | Pune",
    majorRole: "Primary Researcher",
    majorDescription:
      "Leads formulation experiments, manages drug protocols, and oversees laboratory documentation.",
    specialRole: "Research Publisher",
    specialDescription:
      "Supports manuscript writing, journal submissions, and peer-review coordination.",
    domain: "Multimodal Anesthesia Protocols",
    domainDescription:
      "Combining sedative agents while minimizing toxicity during long-duration missions.",
    image: "/images/team/DR. SHUBHAM.png",
    category: "research",
  },

  {
    name: "Lakshmi Vijayakumar Nair",
    education: "B.Sc Aviation Engineering | KTU | Lithuania",
    majorRole: "Media Handler",
    majorDescription:
      "Produces vlogs, video content, and public-facing science communication for Project Torpor.",
    specialRole: "Environmental Data Analyst",
    specialDescription:
      "Contributes to microgravity pharmacodynamics research through NASA GLOBE data analysis and environmental monitoring.",
    domain: "Microgravity Effects on Pharmacodynamics",
    domainDescription:
      "Investigates how weightlessness alters drug distribution, metabolism, and anesthetic efficacy.",
    image: "/images/team/LAKSHMI.png",
    category: "communications",
  },

  {
    name: "Manjunatha R",
    education: "Associate Professor | Structural Engineering | Mysuru",
    majorRole: "Institution Approach Lead",
    majorDescription:
      "Coordinates collaborations with universities, engineering bodies, and space agencies.",
    specialRole: "Conference & Symposium Liaison",
    specialDescription:
      "Represents the project at technical conferences and coordinates research presentations.",
    domain: "Long-duration Anesthetic Delivery Systems",
    domainDescription:
      "Explores closed-loop hardware engineering and delivery mechanisms for long-duration spacecraft missions.",
    image: "/images/team/PROF.MANJUNATHA.png",
    category: "advisor",
  },

  {
    name: "Karina Fuentes Chiu",
    education: "Mechatronics Engineer | Robotics Educator | Mexico",
    majorRole: "Seminar Content Strategist",
    majorDescription:
      "Develops educational seminar scripts, workshop resources, and outreach materials to communicate complex scientific concepts effectively.",
    specialRole: "Bioethics & Consent Communicator",
    specialDescription:
      "Bridges scientific research and public understanding by translating bioethical principles and informed consent requirements into accessible language.",
    domain: "Bioethics & Regulatory Frameworks",
    domainDescription:
      "Contributes to ethical governance, informed consent protocols, and regulatory compliance for experimental torpor and long-duration spaceflight research.",
    image: "/images/team/KARINA.png",
    category: "research",
  },

  {
    name: "Nevin N. Shah",
    education: "Biomedical Researcher | Aerospace Consultant | Texas",
    majorRole: "Senior Research Observer",
    majorDescription:
      "Oversees biological data integrity and monitors physiological responses throughout research trials.",
    specialRole: "Seminar Scripter",
    specialDescription:
      "Develops educational webinar content and science communication materials.",
    domain: "Torpor Physiology & Metabolic Suppression",
    domainDescription:
      "Studies heart-rate reduction mechanisms, metabolic inhibition pathways, and physiological adaptation.",
    image: "/images/team/NEVIN.png",
    category: "research",
  },

  {
    name: "Nishita Khadilkar",
    education: "B.Tech Aerospace Engineering | VIT Bhopal",
    majorRole: "Research Investigator",
    majorDescription:
      "Conducts experiments, classifies field data, and documents research anomalies.",
    specialRole: "Citizen Science Coordinator",
    specialDescription:
      "Organizes community-based data collection initiatives and NASA-style tracking workflows.",
    domain: "Radiation Protection via Metabolic Suppression",
    domainDescription:
      "Investigates DNA protection strategies against galactic cosmic radiation during torpor states.",
    image: "/images/team/NISHITA.png",
    category: "research",
  },

  {
    name: "Prayag Soni",
    education: "B.Tech Mechanical Engineering | SCET Surat",
    majorRole: "Team Handler",
    majorDescription:
      "Coordinates sub-team activities, tracks project progress, and manages operational schedules.",
    specialRole: "Drone & IoT Field Contributor",
    specialDescription:
      "Deploys sensor networks and UAV-based monitoring systems for field experiments.",
    domain: "Synthetic & Induced Torpor Induction",
    domainDescription:
      "Explores non-pharmacological methods for replicating hibernative physiological states.",
    image: "/images/team/PRAYAG.png",
    category: "engineering",
  },
];

export const neuroscienceMembers: TeamMember[] = [

  {
    name: "Phillip “Fury” Wainwright",
    education: "Founder & Principal Engineer, Human Inertia Inc. | Torpor Neuroscience Instrumentation",
    majorRole: "Neural Telemetry Systems Lead",
    majorDescription:
      "Owns the overall architecture for multi-modal biosignal fusion (EEG, fascial impedance, HRV, respiration, passive cognitive load) and the unified crew Resonance Score that will sit at the core of the sub-team's neural monitoring stack.",
    specialRole: "Standards & Evidence-Tiering Officer",
    specialDescription:
      "Maintains the evidence-tiered posture (Deployed / Built / Complete / Planned) across every subsystem and owns spaceflight-standards mapping (NASA-STD-3001, ISO 13485, IEC 60601-1) so claims stay defensible.",
    domain: "Multi-modal Biosignal Fusion & Telemetry",
    domainDescription:
      "EFS/Torpor biosignal fusion, depth-of-state EEG telemetry, and spaceflight-standards compliance.",
    image: "/images/team/NEVIN.png",
    category: "leadership",
  },
  {
    name: "Preeya Negi",
    education: "DST-INSPIRE JRF, Ph.D. (Tech.) Pharmaceutics | ICT Mumbai",
    majorRole: "Neuropharmacology & Induction-Agent Lead",
    majorDescription:
      "Leads the pharmacological side of synthetic torpor induction — receptor-level mechanisms, cocrystal/formulation strategy, and dosing safety envelopes that the neural monitoring system will need to track against.",
    specialRole: "Publications & Literature Review Coordinator",
    specialDescription:
      "Coordinates manuscript development and keeps the team's induction-agent claims grounded in peer-reviewed literature.",
    domain: "Receptor Pharmacology & Induction Formulation",
    domainDescription:
      "Neurodegenerative-drug cocrystal formulation, receptor pharmacology (oxytocin receptor, PARP-1, DMT), and drug delivery.",
    image: "/images/team/LAKSHMI.png",
    category: "research",
  },
  {
    name: "Nainshi Mangal",
    education: "B.Sc. (Hons.) Biochemistry | Daulat Ram College, University of Delhi",
    majorRole: "Model-Organism Biomarker Research Associate",
    majorDescription:
      "Runs Drosophila/zebrafish assays to validate candidate torpor-inducing compounds and stress/recovery biomarkers before they reach the human-relevant physiology track.",
    specialRole: "Laboratory Techniques Lead",
    specialDescription:
      "Owns the wet-lab methods bench — chromatography, spectroscopy, gel electrophoresis — supporting biomarker verification for both pharmacology and physiology sub-tracks.",
    domain: "Model-Organism Biomarker Validation",
    domainDescription:
      "Hands-on husbandry, toxicology assays, and TLC-based pathway analysis in Drosophila and zebrafish model systems.",
    image: "/images/team/NISHITA.png",
    category: "research",
  },
  {
    name: "Kesav",
    education: "MBBS Final Year | Aerospace Medicine & Human Physiology",
    majorRole: "Human Physiology & Clinical Liaison",
    majorDescription:
      "Brings the clinical-medicine lens to torpor protocol design — sanity-checking neural/physiological thresholds against real patient-examination experience and human adaptation to spaceflight stressors.",
    specialRole: "Medical Documentation & Conference Coordinator",
    specialDescription:
      "Prepares clinical-facing documentation of the protocol and represents the team at academic/medical seminars and conferences.",
    domain: "Aerospace Medicine & Clinical Thresholds",
    domainDescription:
      "Clinical examination experience, physiology/anatomy distinctions, space medicine, and radiation physiology.",
    image: "/images/team/KRUSHANG.png",
    category: "research",
  },
  {
    name: "Mudra Patil",
    education: "B.Tech Mechanical Engineering | VIIT Pune | FEA/CAE & Analog Missions",
    majorRole: "Biomechanical Instrumentation Engineer",
    majorDescription:
      "Applies FEA/CAE and additive-manufacturing experience to design physical housings and wearable mounts for neural/biosignal sensors, building on her biomimetic-splint work.",
    specialRole: "Materials & Additive Manufacturing Lead",
    specialDescription:
      "Owns material selection and thermal/fatigue validation (drawing on PLA recyclability research) for 3D-printed sensor enclosures used in torpor-monitoring hardware.",
    domain: "Biomechanical Sensor Housings & Materials",
    domainDescription:
      "FEA/CAE validation, additive manufacturing of biomimetic hardware, and composite material mechanics.",
    image: "/images/team/MANSI.png",
    category: "engineering",
  },
  {
    name: "Giri Patil",
    education: "B.E. Mechanical Engineering, Honors in Aerospace | K.J. Somaiya",
    majorRole: "Aerospace Structural Integration Engineer",
    majorDescription:
      "Integrates neural-telemetry hardware into the broader airframe/habitat structural envelope, ensuring sensor mounts and wiring runs meet stiffness/strength requirements.",
    specialRole: "Aerodynamics & Environmental Stress Analyst",
    specialDescription:
      "Uses XFLR5/hand-calculation experience to assess how flight loads and environmental stress affect telemetry housing integrity.",
    domain: "Aerospace Structural & Telemetry Integration",
    domainDescription:
      "Airframe structural analysis (HAL), UAV wing integration, and aerodynamic optimization.",
    image: "/images/team/PRAYAG.png",
    category: "engineering",
  },
  {
    name: "Tanishka Anwekar",
    education: "B.Tech Computer Science & Engineering | DBATU | CV, RAG & Data Pipelines",
    majorRole: "Data Pipeline & Literature-Ingestion Engineer",
    majorDescription:
      "Builds the RAG-based ingestion pipeline that keeps the team current on torpor/neuroscience literature and structures raw sensor datasets for downstream model use.",
    specialRole: "Computer Vision Support Engineer",
    specialDescription:
      "Assists the AI track with image/signal-classification components, reusing her satellite-image classifier experience for camera-based passive monitoring.",
    domain: "RAG Data Pipelines & Computer Vision",
    domainDescription:
      "Space-tech literature RAG pipelines, satellite image classification, and PID control-loop simulation.",
    image: "/images/team/MANSI.png",
    category: "engineering",
  },
  {
    name: "Gabriella Pimenta Costa Martins",
    education: "Civil & Environmental Engineering Student | UNIVALE, Brazil",
    majorRole: "Environmental & Habitat Integration Researcher",
    majorDescription:
      "Studies how habitat environmental conditions (thermal, atmospheric) interact with induced-torpor viability, connecting neural monitoring work to life-support system design.",
    specialRole: "NASA Citizen-Science Data Liaison",
    specialDescription:
      "Applies her NASA citizen-science data-classification background to help structure and QA incoming observational/telemetry datasets.",
    domain: "Habitat Environmental Viability & Data QA",
    domainDescription:
      "Thermal and atmospheric habitat viability, ShakthiSAT satellite research, and NASA citizen science dataset classification.",
    image: "/images/team/LAKSHMI.png",
    category: "research",
  },


];

export const astronautCandidates: TeamMember[] = [
  {
    name: "Antriksh",
    education: "Nirma University",
    image: "/images/Astronaut.png",

    majorRole: "Director of Reserves",

    majorDescription:
      "Leads the scientific vision, research strategy, and technological development of synthetic torpor systems for future human spaceflight. Responsible for coordinating interdisciplinary research, defining long-term objectives, and translating innovative concepts into practical solutions for deep-space exploration.",

    specialRole: "Targeted Temperature Management (TTM) Lead",

    specialDescription:
      "Develops the Targeted Temperature Management (TTM) methodology, oversees research across multiple technical divisions, designs experimental frameworks, supervises scientific publications, and integrates neuroscience, biomedical engineering, and aerospace sciences into a unified synthetic torpor platform.",

    domain:
      "Synthetic Torpor & Targeted Temperature Management",

    domainDescription:
      "Research interests include Synthetic Torpor, Targeted Temperature Management (TTM), Neuroscience, Hypometabolism, Metabolic Engineering, Thermoregulation, Cryobiology, Space Medicine, Aerospace Physiology, Human Factors Engineering, Biomedical Systems, and Long-Duration Deep Space Mission Technologies.",

    category: "leadership",
  },
];