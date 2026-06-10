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
    name: "Karina Fuentes Chiu",
    education: "Mechatronics Engineer | Robotics Educator | Mexico",
    majorRole: "Seminar Scripter",
    majorDescription:
      "Writes educational seminar scripts, workshop material, and outreach presentations.",
    specialRole: "Ethics & Consent Communicator",
    specialDescription:
      "Translates complex bioethical issues into accessible language for audiences.",
    domain: "Bioethics & Regulatory Frameworks",
    domainDescription:
      "Informed consent and governance for experimental sedation in space.",
    image: "/images/team/KARINA_FUENTES.png",
    category: "communications",
  },

  {
    name: "Kayla Maher",
    education: "Strategic Communications | BA Speech Communication | Pennsylvania",
    majorRole: "Public Relations Lead",
    majorDescription:
      "Manages press relations, stakeholder communications, crisis messaging, and project image.",
    specialRole: "Regulatory Documentation Handler",
    specialDescription:
      "Drafts compliance documents, institutional contracts, and consent frameworks.",
    domain: "Bioethics & Regulatory Frameworks",
    domainDescription:
      "Governance, risk thresholds, and public communication of torpor research.",
    image: "/images/team/KAYLA.png",
    category: "communications",
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
    name: "Mansi Singh",
    education: "B.Tech Aerospace Engineering | ADYPU Pune",
    majorRole: "Research Investigator",
    majorDescription:
      "Supports CFD simulations, propulsion experiments, and laboratory trial activities.",
    specialRole: "Simulation & Flow Analyst",
    specialDescription:
      "Uses fluid dynamics modelling to evaluate rewarming procedures and arousal protocols.",
    domain: "Rewarming & Safe Arousal Protocols",
    domainDescription:
      "Researches methods for preventing cardiac arrhythmias and metabolic rebound during awakening.",
    image: "/images/team/MANSI.png",
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

  {
    name: "Pushti Shah",
    education: "B.Tech ECE | MIT Manipal | CGPA 9.13",
    majorRole: "Software Handler",
    majorDescription:
      "Builds machine learning pipelines, manages research datasets, and develops classification systems.",
    specialRole: "Neural Signal Analyst",
    specialDescription:
      "Applies AI and computer vision techniques to analyze EEG and brain-activity datasets.",
    domain: "Brain Activity Monitoring in Torpor",
    domainDescription:
      "Researches EEG monitoring, neural suppression patterns, and cortical activity during torpor.",
    image: "/images/team/PUSHTI.png",
    category: "engineering",
  },
];
