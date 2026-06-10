

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
    title: "PROJECT ATLAS",
    subtitle: "Spaceflight Applications",
    description:
      "Adapting torpor protocols for spaceflight hardware. Engineering environmental control systems and life support integration matrices.",
    labCode: "LAB_01",
    heroDescription:
      "Project Atlas is the spaceflight integration arm of Project Torpor, responsible for translating laboratory hibernation research into flight-ready hardware and mission architecture.",
    sections: [
      {
        heading: "Research Overview",
        body: "Project Atlas is engineering the bridge between laboratory torpor protocols and operational spaceflight systems. Our team designs environmental control systems, life support integration matrices, and mission architectures that support crew hibernation during long-duration transit. We work directly with aerospace contractors to prototype flight-grade hibernation pods capable of maintaining biological stasis while withstanding the thermal, vibration, and radiation environments of deep space.",
      },
      {
        heading: "Mission Architecture",
        body: "Our mission profiles include Mars transit (6-9 month hibernation windows), lunar gateway staging (intermittent torpor cycles), and deep-space exploration (multi-year continuous stasis). Each profile demands distinct environmental parameters, pharmacological delivery schedules, and autonomous monitoring systems. Atlas has developed three generation prototypes, with the third currently undergoing thermal vacuum qualification testing.",
      },
    ],
    features: [
      { title: "Pod Environmental Control", description: "Maintaining precise temperature, humidity, and atmospheric composition within hibernation pods during transit." },
      { title: "Autonomous Medical Monitoring", description: "AI-driven systems that continuously assess crew vitals and intervene if anomalies are detected during stasis." },
      { title: "Life Support Integration", description: "Reducing crew life support consumables by 85% through metabolic suppression, enabling lighter and longer missions." },
      { title: "Emergency Revival Protocol", description: "A 4-hour rapid-rewarming sequence that restores full cognitive and motor function in case of mission emergency." },
    ],
    futureDirection:
      "The next phase of Project Atlas will focus on fully autonomous multi-crew hibernation systems capable of managing 6+ astronauts simultaneously during a 14-month Mars transfer orbit. We are also developing modular pod designs for integration with both NASA's Orion and commercial crew vehicles.",
  },
  {
    slug: "neural-systems-lab",
    title: "NEURAL SYSTEMS LAB",
    subtitle: "Brain & Torpor Research",
    description:
      "Mapping specific neural receptors in the hypothalamus that initiate hibernation. Assuring continuous cognitive integrity and memory retention.",
    labCode: "LAB_02",
    heroDescription:
      "The Neural Systems Lab investigates the brain's role in initiating and maintaining torpor, focusing on hypothalamic circuits, neuroprotection, and cognitive preservation during metabolic suppression.",
    sections: [
      {
        heading: "Research Overview",
        body: "The Neural Systems Lab maps the precise neural circuitry that governs mammalian hibernation. By targeting specific receptors in the preoptic area of the hypothalamus, we can pharmacologically trigger the body's natural thermoregulatory downshift. Our work goes beyond simply inducing unconsciousness — we ensure that neural pathways remain protected and that synaptic plasticity is preserved throughout the torpor cycle.",
      },
      {
        heading: "Cognitive Preservation",
        body: "One of the greatest challenges in human torpor is ensuring zero cognitive degradation. Our lab has developed neuroprotective cocktails that maintain cerebral blood flow at reduced metabolic rates, preventing hypoxic damage. In preclinical trials, subjects emerging from 72-hour torpor cycles show complete memory retention and unimpaired executive function, a breakthrough that distinguishes synthetic torpor from simple hypothermia.",
      },
    ],
    features: [
      { title: "Hypothalamic Circuit Mapping", description: "Identifying the exact neural pathways that trigger thermoregulatory downshift in mammalian hibernators." },
      { title: "Neuroprotective Pharmacology", description: "Developing drug cocktails that maintain cerebral perfusion during metabolic suppression." },
      { title: "EEG Monitoring During Stasis", description: "Continuous electroencephalographic monitoring to ensure brain activity remains within safe parameters." },
      { title: "Memory Integrity Testing", description: "Post-torpor cognitive assessments confirming zero degradation in memory, attention, and executive function." },
    ],
    futureDirection:
      "Future research will explore optogenetic control of torpor-initiating neurons, allowing for non-pharmacological induction of hibernation states. We are also investigating the role of sleep-wake circuit integration in designing more natural torpor entry and exit transitions.",
  },
  {
    slug: "metabolic-engineering",
    title: "METABOLIC ENGINEERING",
    subtitle: "Cellular Suppression Studies",
    description:
      "Unlocking cellular-level metabolic suppression. Analyzing mitochondrial transitions to assure stable cell stasis without tissue ischemia.",
    labCode: "LAB_03",
    heroDescription:
      "The Metabolic Engineering division studies how to safely reduce cellular energy consumption to near-zero without causing tissue damage or ischemic injury.",
    sections: [
      {
        heading: "Research Overview",
        body: "Metabolic Engineering operates at the cellular and molecular level, investigating the mechanisms by which natural hibernators suppress mitochondrial respiration without triggering apoptosis. Our research has identified key regulatory enzymes that gate the transition between normal and suppressed metabolic states, and we are developing synthetic analogs that can safely induce these transitions in human cells.",
      },
      {
        heading: "Methodology",
        body: "We employ a combination of metabolomics profiling, mitochondrial respirometry, and single-cell RNA sequencing to map the complete metabolic landscape during torpor. Our in vitro human organoid models allow us to test suppression protocols on living human tissue before progressing to whole-organism studies. This systematic approach has enabled us to achieve 95% metabolic reduction in human cardiac organoids with complete functional recovery.",
      },
    ],
    features: [
      { title: "Mitochondrial Gating", description: "Controlling the molecular switches that transition cells between active and suppressed metabolic states." },
      { title: "Organoid Testing Platform", description: "Human tissue organoids for safe pre-clinical testing of metabolic suppression protocols." },
      { title: "Ischemia Prevention", description: "Ensuring adequate cellular oxygenation at dramatically reduced blood flow rates." },
      { title: "Metabolomics Profiling", description: "Comprehensive molecular mapping of all metabolic pathways during torpor entry and exit." },
    ],
    futureDirection:
      "Our roadmap includes developing gene-therapy approaches that could temporarily upregulate hibernation-associated genes in human cells, creating a more robust and physiologically natural suppression pathway. We are also exploring the therapeutic potential of metabolic suppression for organ preservation in transplant medicine.",
  },
  {
    slug: "radiation-resilience",
    title: "RADIATION RESILIENCE",
    subtitle: "Deep-Space Protection Research",
    description:
      "Investigating the biological defense enhancements of hibernating cells. Testing protection factors against solar particles and cosmic rays.",
    labCode: "LAB_04",
    heroDescription:
      "The Radiation Resilience program investigates how metabolic suppression enhances cellular resistance to ionizing radiation, addressing one of the most critical barriers to deep-space exploration.",
    sections: [
      {
        heading: "Research Overview",
        body: "Cosmic radiation represents one of the greatest threats to deep-space travelers. Our research has demonstrated that cells in metabolic suppression exhibit dramatically enhanced radiation resistance — up to 10x improvement in DNA repair efficiency compared to metabolically active cells. This discovery transforms torpor from a resource-saving measure into an active radiation countermeasure.",
      },
      {
        heading: "Challenges",
        body: "The deep-space radiation environment is qualitatively different from terrestrial radiation: high-energy galactic cosmic rays and solar particle events deliver doses that cannot be fully shielded by spacecraft materials alone. Our challenge is to quantify exactly how much protection torpor provides across the full spectrum of space radiation types, and to develop combined approaches that integrate passive shielding, active magnetic deflection, and biological resilience through torpor.",
      },
    ],
    features: [
      { title: "DNA Repair Enhancement", description: "Documenting the 10x improvement in double-strand break repair efficiency during metabolic suppression." },
      { title: "Radiation Dosimetry", description: "Precise measurement of radiation dose-response relationships in torpid versus active biological systems." },
      { title: "Combined Protection Strategy", description: "Integrating passive shielding, magnetic deflection, and biological torpor into a unified protection architecture." },
      { title: "Long-Duration Exposure Testing", description: "Simulating multi-month deep-space radiation environments to validate torpor protection factors." },
    ],
    futureDirection:
      "Next-generation experiments will use heavy-ion accelerator facilities to simulate galactic cosmic rays at full biological fidelity. We are also developing real-time radiation damage sensors that could be integrated into hibernation pods to provide continuous protection assessment during transit.",
  },
  {
    slug: "torpor-systems",
    title: "TORPOR SYSTEMS",
    subtitle: "Future Human Hibernation Technologies",
    description:
      "Prototyping commercial, space-grade cryo-hibernation pod hardware with integrated metabolic monitoring and automatic life-cycle controls.",
    labCode: "LAB_05",
    heroDescription:
      "Torpor Systems designs and engineers the physical hardware for human hibernation — from pod enclosures and thermal management to integrated pharmacological delivery and autonomous life-cycle controls.",
    sections: [
      {
        heading: "Technology Overview",
        body: "Torpor Systems is responsible for translating biological research into engineered hardware. We design hibernation pod enclosures, thermal management systems, pharmacological delivery mechanisms, and the autonomous control software that manages the complete hibernation lifecycle. Our third-generation prototype features a fully enclosed, temperature-regulated capsule with integrated IV delivery, continuous vitals monitoring, and emergency auto-revival capabilities.",
      },
      {
        heading: "Research Roadmap",
        body: "Our development roadmap spans four phases: (1) benchtop prototyping and component validation, (2) integrated system testing with biological simulants, (3) preclinical trials with large animal models, and (4) human clinical qualification. We are currently in Phase 2, with full integrated system tests scheduled for completion by 2028. Each phase includes rigorous safety and reliability testing exceeding NASA human-rating standards.",
      },
    ],
    features: [
      { title: "Pod Thermal Management", description: "Precision temperature control maintaining ±0.1°C stability throughout multi-month torpor cycles." },
      { title: "Pharmacological Delivery", description: "Automated IV systems that deliver torpor-inducing and maintenance drugs on precisely timed schedules." },
      { title: "Autonomous Life-Cycle Control", description: "AI-driven software managing the complete torpor cycle from induction through maintenance to rewarming." },
      { title: "Emergency Revival System", description: "Rapid-response auto-revival triggered by vital sign anomalies, completing in under 4 hours." },
    ],
    futureDirection:
      "The next generation of Torpor Systems hardware will feature modular, stackable pod designs for crew-6 and crew-12 configurations, compatible with both commercial crew vehicles and deep-space habitats. We are also exploring closed-loop nutritional support systems that maintain muscle mass and bone density during extended torpor periods.",
  },
  {
    slug: "research-archive",
    title: "RESEARCH ARCHIVE",
    subtitle: "Publications & Past Work",
    description:
      "A public, decentralized repository containing all peer-reviewed research papers, clinical data reports, and legacy aerospace logs.",
    labCode: "LAB_06",
    heroDescription:
      "The Research Archive is Project Torpor's public knowledge repository, housing all peer-reviewed publications, technical reports, clinical data, and historical aerospace hibernation research.",
    sections: [
      {
        heading: "Publication Repository",
        body: "The Research Archive contains the complete corpus of Project Torpor's scientific output. All peer-reviewed papers, conference proceedings, technical memoranda, and clinical trial reports are maintained in an open-access format. Our commitment to open science ensures that the global research community can build upon our findings, accelerating the collective progress toward human hibernation technology.",
      },
      {
        heading: "Research History",
        body: "The archive also preserves the historical record of hibernation research, from early 20th-century hypothermia experiments through the pioneering NASA torpor studies of the 2010s. This curated collection provides essential context for current researchers and serves as a reminder of the decades of scientific work that underpin our current capabilities. Key holdings include the original Bradford-SpaceWorks feasibility studies and the first successful large-animal torpor induction protocols.",
      },
    ],
    features: [
      { title: "Open Access Repository", description: "All publications freely available to the global research community." },
      { title: "Clinical Trial Data", description: "De-identified datasets from all preclinical and clinical torpor studies." },
      { title: "Historical Collection", description: "Curated archive of hibernation research spanning over a century." },
      { title: "Technical Standards Library", description: "Engineering specifications and safety standards for hibernation hardware development." },
    ],
    futureDirection:
      "We are developing an AI-powered literature review system that will automatically identify and catalog new hibernation-related publications from global databases. The archive will also expand to include multimedia content — video recordings of experimental procedures, 3D models of hardware prototypes, and interactive data visualizations.",
  },
];

export function getWorkDomain(slug: string): WorkDomain | undefined {
  return workDomains.find((d) => d.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return workDomains.map((d) => d.slug);
}
