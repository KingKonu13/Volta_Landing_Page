export const cta = {
  primary: { label: "Schedule a call", href: "#sponsors" },
  secondary: { label: "Join network", href: "#experts" },
} as const;

export const nav = [
  { label: "Workflow", href: "#volta-workflow" },
  { label: "Outputs", href: "#outputs" },
  { label: "Trust", href: "#trust" },
  { label: "Experts", href: "#expert-network" },
] as const;

export const trustLine = "**AI drafts from your documents. Experts review.** Claims stay linked to evidence.";

export const hero = {
  eyebrow: "AI-native Pre-IND prep",
  headline: "You do the science. Volta handles the filing.",
  sub: "Turn **source documents** into **Pre-IND briefing packages**. AI drafts, experts review, you approve before FDA use.",
  badges: ["Fixed scope", "Expert-reviewed", "Evidence-linked", "Secure intake"],
  bullets: ["Secure data-room intake", "Expert review", "Evidence-linked record"],
} as const;

export const workflow = [
  { step: "01", title: "Data room", desc: "Securely ingest program documents" },
  { step: "02", title: "Draft", desc: "Generate cited Pre-IND sections" },
  { step: "03", title: "Review", desc: "Experts review material claims" },
  { step: "04", title: "Package", desc: "Export the briefing book" },
] as const;

export const voltaWorkflow = {
  heading: "The Volta Workflow",
  intro: "From program documents to a reviewed Pre-IND briefing package in four steps.",
  cards: [
    {
      step: "01",
      title: "Secure Data Room",
      desc: "Upload **nonclinical, CMC, clinical, and program documents** to a structured workspace.",
      tags: ["Encrypted intake", "Version control", "Access logs"],
    },
    {
      step: "02",
      title: "Agent-Assisted Drafting",
      desc: "Volta drafts **Pre-IND sections** from source material and links claims to supporting documents.",
      tags: ["Draft sections", "Citation links", "Evidence linkage"],
    },
    {
      step: "03",
      title: "Expert Review",
      desc: "**Regulatory, CMC, nonclinical, and clinical experts** review for accuracy, logic, and gaps.",
      tags: ["Domain experts", "Structured review", "Gap review"],
    },
    {
      step: "04",
      title: "Meeting-Ready Package",
      desc: "Receive a **Pre-IND briefing package** with source links, expert notes, and review history.",
      tags: ["Briefing package", "Review history", "Evidence links"],
    },
  ],
} as const;

export const problem = {
  heading: "Regulatory work slows science.",
  intro:
    "Pre-IND preparation is **manual, expensive, and delayed**. Volta streamlines the path from source documents to meeting materials.",
  diagnosis: {
    label: "The hidden cost",
    title: "The bottleneck isn't science. It's the handoff between evidence, narrative, and review.",
    desc: "Momentum stalls when source documents, regulatory language, expert edits, and sponsor approval live in separate workstreams.",
  },
  points: [
    {
      title: "Manual assembly",
      desc: "Program teams manually transform **source documents** into regulatory narratives.",
    },
    {
      title: "Scope creep",
      desc: "Work expands beyond the original **timeline, budget, and scope**.",
    },
    {
      title: "Evidence gaps",
      desc: "Unsupported claims cause review friction and late-cycle rework.",
    },
  ],
  resolution: {
    label: "What Volta changes",
    title: "One path from source documents to reviewed meeting materials.",
    steps: [
      {
        title: "Source documents organized",
        desc: "Program files enter a structured workspace, not another folder chain.",
      },
      {
        title: "Drafting from evidence",
        desc: "AI assembles sections with sources attached to every claim.",
      },
      {
        title: "Experts review judgment",
        desc: "Domain reviewers flag gaps, refine language, and approve revisions.",
      },
      {
        title: "Sponsors approve handoff",
        desc: "Your team receives briefing materials, source links, and review notes.",
      },
    ],
    note: "We don't remove regulatory judgment. We remove the coordination drag around it.",
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
  intro: "A complete, reviewed **Pre-IND meeting package** ready for sponsor review.",
  summary: {
    label: "Complete package",
    title: "Briefing materials, domain summaries, and traceability in one handoff.",
    desc: "Volta transforms source documents into a **Pre-IND briefing package** with cited narratives, prioritized questions, and expert review notes.",
    checks: ["Core briefing narrative", "Domain-specific summaries", "Source links and review notes"],
  },
  items: [
    {
      category: "Briefing package",
      title: "Pre-IND briefing book",
      desc: "A **meeting-ready draft** with program context, development rationale, sponsor questions, and evidence links.",
      tags: ["Meeting package", "Sponsor review", "Evidence links"],
    },
    {
      category: "Evidence summaries",
      title: "Nonclinical study summary",
      desc: "**Pharmacology, PK, and toxicology** synthesized from source studies, with assumptions and gaps called out.",
      tags: ["Pharmacology", "PK", "Toxicology"],
    },
    {
      category: "Evidence summaries",
      title: "CMC narrative",
      desc: "Manufacturing and controls narrative covering **drug substance, process, analytical controls, and open CMC questions**.",
      tags: ["Manufacturing", "Controls", "Source records"],
    },
    {
      category: "Development plan",
      title: "Clinical development plan",
      desc: "**First-in-human trial rationale**, design considerations, endpoints, and discussion points for FDA meeting prep.",
      tags: ["FIH rationale", "Study design", "Endpoints"],
    },
    {
      category: "Meeting prep",
      title: "Anticipated FDA questions",
      desc: "Prioritized questions organized by **domain, risk, and decision need** for Pre-IND discussion.",
      tags: ["Agency questions", "Priorities", "Risk areas"],
    },
    {
      category: "Traceability",
      title: "Review record",
      desc: "Source links, reviewer notes, and revision history so **claims, gaps, and decisions** stay auditable.",
      tags: ["Source links", "Review notes", "Revision history"],
    },
  ],
  completion: {
    title: "Built for sponsor approval before agency use.",
    desc: "Delivered with source links and expert notes; sponsors resolve gaps and retain final responsibility for FDA material.",
  },
} as const;

export const trust = {
  heading: "Built for regulation.",
  sub: trustLine,
  body: "Volta anchors work to source documents, domain review, and sponsor approval. AI assists, never decides.",
  pillars: [
    { title: "Evidence-linked", desc: "Claims stay connected to **supporting source documents** for sponsor review." },
    { title: "Expert review", desc: "Experts validate **scientific accuracy, regulatory logic, and gaps** before delivery." },
    { title: "Fixed scope", desc: "**Fixed scope. Fixed milestone.** Boundaries defined upfront." },
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
  heading: "Experts where you need them.",
  intro:
    "Volta routes sections to reviewers with **direct domain experience**. Experts review drafts, flag gaps, and deliver sponsor-ready revisions.",
  domains: ["Regulatory", "Nonclinical", "CMC", "Clinical", "Pharmacology / PK", "Biostatistics"],
  stats: [
    { value: "Regulatory", label: "strategy" },
    { value: "CMC", label: "manufacturing" },
    { value: "Clinical", label: "development" },
  ],
} as const;

export const finalCta = {
  heading: "Start your next filing.",
  sub: "**Fixed scope.** Domain review. **Evidence-linked delivery.** A scoping call delivers clear next steps.",
} as const;
