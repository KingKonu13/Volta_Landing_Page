export const cta = {
  primary: { label: "Schedule a scope call", href: "#sponsors" },
  secondary: { label: "Join expert network", href: "#experts" },
} as const;

export const nav = [
  { label: "Workflow", href: "#volta-workflow" },
  { label: "Outputs", href: "#outputs" },
  { label: "Trust", href: "#trust" },
  { label: "Experts", href: "#expert-network" },
] as const;

export const trustLine = "**AI drafts from your documents. Experts review.** Claims stay linked to supporting material.";

export const hero = {
  eyebrow: "AI-native Pre-IND meeting prep",
  headline: "You do the science. Volta handles the filing work.",
  sub: "Turn **source documents** into a **well-organized Pre-IND briefing package**. AI assembles the draft, domain experts review for accuracy, and your team keeps final approval before FDA use.",
  badges: ["Fixed milestone scope", "Expert-reviewed", "Evidence-linked", "Secure intake"],
  bullets: ["Secure data-room intake", "Domain expert review", "Evidence-linked review record"],
} as const;

export const workflow = [
  { step: "01", title: "Data room", desc: "Securely ingest program documents" },
  { step: "02", title: "Draft", desc: "Generate cited Pre-IND sections" },
  { step: "03", title: "Review", desc: "Experts review material claims" },
  { step: "04", title: "Package", desc: "Export the briefing book" },
] as const;

export const voltaWorkflow = {
  heading: "The Volta Workflow",
  intro: "A four-step path from program documents to a reviewed Pre-IND briefing package.",
  cards: [
    {
      step: "01",
      title: "Secure Data Room",
      desc: "Upload **nonclinical, CMC, clinical, and program documents** into a structured workspace.",
      tags: ["Encrypted intake", "Version control", "Access logs"],
    },
    {
      step: "02",
      title: "Agent-Assisted Drafting",
      desc: "Volta drafts **Pre-IND sections** from your source material and links material claims to supporting documents.",
      tags: ["Draft sections", "Citation links", "Evidence linkage"],
    },
    {
      step: "03",
      title: "Expert Review",
      desc: "**Regulatory, CMC, nonclinical, and clinical experts** review for scientific accuracy, regulatory logic, and open gaps before delivery.",
      tags: ["Domain experts", "Structured review", "Gap review"],
    },
    {
      step: "04",
      title: "Meeting-Ready Package",
      desc: "Receive a **Pre-IND briefing package** with source links, expert notes, and review history for sponsor approval.",
      tags: ["Briefing package", "Review history", "Evidence links"],
    },
  ],
} as const;

export const problem = {
  heading: "Regulatory work slows the science down.",
  intro:
    "Pre-IND preparation is **manual, expensive, and easy to delay**. Volta gives sponsors a clearer path from source documents to meeting-prep materials.",
  diagnosis: {
    label: "The hidden cost",
    title: "The bottleneck is rarely the science alone. It is the handoff between evidence, narrative, and review.",
    desc: "Teams lose momentum when source documents, regulatory language, expert edits, and sponsor approval all live in separate workstreams.",
  },
  points: [
    {
      title: "Manual assembly",
      desc: "Program teams turn **source documents** into organized regulatory narratives by hand.",
    },
    {
      title: "Scope creep",
      desc: "Support can expand beyond the original **timeline, budget, and review scope**.",
    },
    {
      title: "Evidence gaps",
      desc: "Unsupported claims create avoidable review friction and late-cycle rework.",
    },
  ],
  resolution: {
    label: "What Volta changes",
    title: "One connected path from source documents to reviewed meeting materials.",
    steps: [
      {
        title: "Source documents stay organized",
        desc: "Program files enter a structured workspace instead of another loose folder chain.",
      },
      {
        title: "Drafting starts from evidence",
        desc: "AI assembles sections with supporting sources attached to material claims.",
      },
      {
        title: "Experts review the judgment",
        desc: "Domain reviewers flag gaps, refine language, and support sponsor-ready revisions.",
      },
      {
        title: "Sponsors approve the handoff",
        desc: "Your team receives briefing materials, source links, and review notes for internal approval.",
      },
    ],
    note: "The point is not to remove regulatory judgment. It is to remove the coordination drag around it.",
  },
} as const;

export const howItWorks = {
  heading: "How Volta works",
  intro:
    "AI accelerates assembly. Experts review for accuracy. Sponsors retain final regulatory responsibility and approval.",
  steps: [
    {
      title: "Scope the milestone",
      desc: "We define the filing deliverable, source documents, review needs, and fixed milestone price before work starts.",
    },
    {
      title: "Build from your data room",
      desc: "Volta indexes your materials and drafts sections from the documents you provide, with supporting sources attached.",
    },
    {
      title: "Route to experts",
      desc: "Domain reviewers check claims, flag gaps, edit sections, and support revisions before delivery.",
    },
    {
      title: "Deliver the package",
      desc: "You receive the briefing package, source links, and review record for internal sponsor approval.",
    },
  ],
} as const;

export const outputs = {
  heading: "What Volta delivers",
  intro: "A complete, reviewed deliverable set for a **well-organized Pre-IND meeting package**.",
  summary: {
    label: "Complete package",
    title: "Briefing materials, domain summaries, and traceability in one handoff.",
    desc: "Volta turns your source documents into a **Pre-IND briefing package** with cited narratives, prioritized discussion questions, and expert review notes so your team can move into internal review with less ambiguity.",
    checks: ["Core briefing narrative", "Domain-specific summaries", "Source links and review notes"],
  },
  items: [
    {
      category: "Briefing package",
      title: "Pre-IND briefing book",
      desc: "A **meeting-ready draft package** with program context, development rationale, sponsor questions, and evidence links for sponsor review.",
      tags: ["Meeting package", "Sponsor review", "Evidence links"],
    },
    {
      category: "Evidence summaries",
      title: "Nonclinical study summary",
      desc: "**Pharmacology, PK, and toxicology** synthesized from provided source studies, with assumptions and gaps called out for review.",
      tags: ["Pharmacology", "PK", "Toxicology"],
    },
    {
      category: "Evidence summaries",
      title: "CMC narrative",
      desc: "Manufacturing and controls narrative addressing **drug substance, process, analytical controls, and open CMC questions** from available records.",
      tags: ["Manufacturing", "Controls", "Source records"],
    },
    {
      category: "Development plan",
      title: "Clinical development plan",
      desc: "**First-in-human trial rationale**, key design considerations, endpoints, and discussion points for FDA meeting preparation.",
      tags: ["FIH rationale", "Study design", "Endpoints"],
    },
    {
      category: "Meeting prep",
      title: "Anticipated FDA questions",
      desc: "Prioritized questions and background context organized by **domain, risk, and decision need** for the Pre-IND discussion.",
      tags: ["Agency questions", "Priorities", "Risk areas"],
    },
    {
      category: "Traceability",
      title: "Review record",
      desc: "Source links, reviewer notes, and revision history captured so **claims, gaps, and decisions** remain easy to audit.",
      tags: ["Source links", "Review notes", "Revision history"],
    },
  ],
  completion: {
    title: "Built for sponsor approval before agency use.",
    desc: "The package is delivered with source links and expert notes; sponsors resolve open gaps and retain final responsibility for any material shared with FDA.",
  },
} as const;

export const trust = {
  heading: "Built for regulated work.",
  sub: trustLine,
  body: "Volta keeps the package anchored to source documents, domain review, and sponsor approval — so AI speeds up assembly without becoming the decision-maker.",
  pillars: [
    { title: "Evidence-linked claims", desc: "Material statements stay connected to **supporting source documents** for sponsor review." },
    { title: "Domain review", desc: "Experts review for **scientific accuracy, regulatory logic, and open gaps** before delivery." },
    { title: "Milestone scope", desc: "**Fixed scope. Fixed milestone.** Review needs and boundaries are defined upfront." },
  ],
} as const;

export const audiences = {
  sponsors: {
    eyebrow: "For biotech sponsors",
    heading: "Move toward the FDA meeting with less drag.",
    desc: "Volta helps teams move from **data room** to **Pre-IND briefing package** without open-ended consulting cycles.",
    bullets: [
      "Fixed pricing **by milestone**",
      "Domain-reviewed **deliverables**",
      "Evidence-linked **claims**",
    ],
  },
  experts: {
    eyebrow: "For experts",
    heading: "Review work matched to your domain.",
    desc: "Join a network of regulatory, nonclinical, CMC, and clinical experts reviewing **AI-assembled drafts** in paid, scoped engagements.",
    bullets: [
      "Assignments matched to **your expertise**",
      "AI handles **assembly and citation**",
      "Clear **scope and turnaround**",
    ],
  },
} as const;

export const expertNetwork = {
  heading: "Experts where the package needs them.",
  intro:
    "Volta routes sections to reviewers with **direct regulatory or technical experience** in the relevant domain. The system assembles and cites; experts review the draft, flag gaps, and support sponsor-ready revisions.",
  domains: ["Regulatory affairs", "Nonclinical & toxicology", "CMC / manufacturing", "Clinical development", "Pharmacology / PK", "Biostatistics"],
  stats: [
    { value: "Regulatory", label: "strategy" },
    { value: "CMC", label: "manufacturing" },
    { value: "Clinical", label: "development" },
  ],
} as const;

export const finalCta = {
  heading: "Start with your next filing milestone.",
  sub: "**Fixed scope.** Domain review. **Evidence-linked delivery.** Start with a short scoping conversation and leave with clearer next steps.",
} as const;
