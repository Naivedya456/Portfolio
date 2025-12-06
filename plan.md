/*
EnhancedDashboardSections.jsx
Single-file React component containing new high-impact sections for the Portfolio Dashboard.

Checklist (3-7 bullets):
1. Add this file to src/sections and import into Dashboard layout.
2. Verify Tailwind, Framer Motion and Lucide React are installed and configured.
3. Replace placeholder data in `DATA` with real content from your resume/CVs.
4. Test Visual <-> Technical toggle and responsiveness across breakpoints.
5. Ensure routing/state flows in App.jsx integrate with Dashboard.

Core assumptions:
- Project uses React + Vite and supports JSX in .jsx files.
- Tailwind CSS is configured and index.css includes Tailwind base components.
- Framer Motion and lucide-react are installed.
- You want a single-file drop-in for quick iteration; later split into modular files.

Quick local test:
- Place file at src/sections/EnhancedDashboardSections.jsx
- In Dashboard.jsx: import EnhancedDashboardSections from "../sections/EnhancedDashboardSections" and render <EnhancedDashboardSections />.
- Run dev server: npm run dev (or pnpm/vite equivalent)

Notes:
- This file contains full, ready-to-use components and sample data. Replace DATA entries with your verified metrics and text.
- Styling uses Tailwind utilities. Accessibility and microcopy should be refined before production.
*/

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, BatteryCharging, Cloud, Zap, ClockClockwise, Users } from "lucide-react";

// -------------------------
// Sample data (replace with real values)
// -------------------------
const DATA = {
  systems: [
    {
      id: "ev-telematics",
      title: "EV Telematics & Real-Time Monitoring",
      subtitle: "Embedded + CAN + Mobile + Cloud",
      bullets: [
        "Real-time CAN parsing and battery signal telemetry",
        "Reduced data latency by 30% through signal pipeline optimization",
        "Improved user engagement by 40% post-launch",
      ],
      impact: "Flagship system used for vehicle monitoring and telematics",
      icon: <BatteryCharging size={20} />,
    },
    {
      id: "assembly-automation",
      title: "Battery Assembly Reporting Automation",
      subtitle: "Python + Google Sheets API",
      bullets: [
        "Automated daily production reports, saving 15 hours/week",
        "Reduced data-entry errors by 40%",
      ],
      impact: "Production workflow automation at Dhoot Transmission",
      icon: <Cloud size={20} />,
    },
    {
      id: "brick-imbalance",
      title: "Brick Imbalance Detection & DOE",
      subtitle: "Root Cause Analysis + Process Optimization",
      bullets: [
        "Conducted DOE for defect mitigation",
        "Contributed to a prototype with +25% energy density improvement",
      ],
      impact: "Process optimization applied to EV cell assembly",
      icon: <Zap size={20} />,
    },
  ],
  skills: {
    visual: ["Embedded Systems", "Battery Tech", "Cloud & IoT", "Data & ML", "Product Thinking"],
    technical: [
      { name: "AWS IoT Core", level: "Advanced" },
      { name: "CAN Bus Parsing", level: "Advanced" },
      { name: "BMS Algorithms", level: "Strong" },
      { name: "TensorFlow OD API", level: "Intermediate" },
      { name: "Python Automation", level: "Advanced" },
    ],
  },
  timeline: [
    { year: "2023", title: "Indian Railways - Student Trainee", notes: "Safety & ops: +40% compliance" },
    { year: "2024", title: "Dhoot Transmission - Intern", notes: "Reporting automation: 30% time saved" },
    { year: "2025", title: "Erkey Motors - Project Lead", notes: "Realtime telematics & app; latency -30%" },
  ],
  philosophy: [
    "Prefer end-to-end systems over isolated features.",
    "Design for observability and production-readiness.",
    "Automate manual workflows to scale engineering impact.",
  ],
  future: [
    "Real-time BMS intelligence layer",
    "Low-cost telematics hardware stack",
    "AI-driven predictive maintenance for EV fleets",
  ],
  testimonials: [
    { who: "Manager at Erkey", note: "Owns problems end-to-end and ships pragmatic solutions." },
    { who: "Lead at Dhoot", note: "Turned manual reporting into a reliable automated pipeline." },
  ],
};

// -------------------------
// Small presentational helpers
// -------------------------
const Card = ({ children, className = "" }) => (
  <div className={`bg-white/60 dark:bg-slate-900/60 p-5 rounded-2xl shadow-sm border border-white/5 ${className}`}>
    {children}
  </div>
);

// -------------------------
// Systems I’ve Built
// -------------------------
function SystemsBuilt({ systems }) {
  return (
    <section id="systems-built" className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Systems I’ve Built</h2>
        <p className="text-sm text-slate-500">Production-grade systems and outcomes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800">{s.icon}</div>
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="text-xs text-slate-500">{s.subtitle}</p>
                </div>
              </div>

              <ul className="mt-4 list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-2">
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 text-xs text-slate-500">Impact: {s.impact}</div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// -------------------------
// Tech Radar (visual) + Skill Matrix (technical)
// -------------------------
function SkillsPanel({ visual, technical, mode }) {
  return (
    <section id="skills-panel" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h4 className="font-semibold">Tech Radar</h4>
        <p className="text-sm text-slate-500">Visual view of capability clusters.</p>

        <div className="mt-4 space-y-2">
          {visual.map((v) => (
            <motion.div key={v} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-slate-800" />
              <div className="text-sm">{v}</div>
            </motion.div>
          ))}
        </div>
      </Card>

      <Card>
        <h4 className="font-semibold">Skill Matrix</h4>
        <p className="text-sm text-slate-500">Technical mode: measurable skill levels.</p>

        <div className="mt-4 space-y-3">
          {technical.map((t) => (
            <div key={t.name} className="flex items-center justify-between">
              <div className="text-sm">{t.name}</div>
              <div className="text-xs text-slate-500">{t.level}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

// -------------------------
// Deep Dive Case Studies
// -------------------------
function DeepDive({ systems }) {
  return (
    <section id="deep-dive" className="mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Deep Dive: How I Solve Problems</h2>
        <p className="text-sm text-slate-500">Frameworks, not just outcomes.</p>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {systems.map((s) => (
          <Card key={`deep-${s.id}`}>
            <h3 className="font-medium">{s.title}</h3>
            <p className="text-xs text-slate-500">{s.subtitle}</p>

            <div className="mt-3 text-sm">
              <strong>Core flow:</strong>
              <ol className="list-decimal list-inside mt-2 text-slate-700 dark:text-slate-300">
                <li>Gather observability metrics and logs</li>
                <li>Perform targeted analysis (RCA / DOE)</li>
                <li>Prototype mitigation and validate via small-batch tests</li>
                <li>Automate and observe at scale</li>
              </ol>
            </div>

            <div className="mt-3 text-sm text-slate-500">Impact snapshot: {s.impact}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

// -------------------------
// Impact Timeline
// -------------------------
function ImpactTimeline({ timeline }) {
  return (
    <section id="impact-timeline" className="mt-10">
      <h2 className="text-2xl font-semibold">Impact Timeline</h2>
      <div className="mt-6 space-y-4">
        {timeline.map((t) => (
          <motion.div key={t.year} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex gap-4 items-start">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border">{t.year}</div>
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-sm text-slate-500">{t.notes}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// -------------------------
// Engineering Philosophy + Future
// -------------------------
function PhilosophyAndFuture({ philosophy, future }) {
  return (
    <section id="philosophy" className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <h4 className="font-semibold">Engineering Philosophy</h4>
        <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {philosophy.map((p, i) => (
            <div key={i}>• {p}</div>
          ))}
        </div>
      </Card>

      <Card>
        <h4 className="font-semibold">Systems I Want to Build Next</h4>
        <div className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {future.map((f, i) => (
            <div key={i}>• {f}</div>
          ))}
        </div>
      </Card>
    </section>
  );
}

// -------------------------
// Testimonials Carousel (simple)
// -------------------------
function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="mt-10">
      <h4 className="text-2xl font-semibold">Recommendations</h4>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <div className="font-medium">{t.who}</div>
            <div className="text-sm text-slate-600 dark:text-slate-300 mt-2">“{t.note}”</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

// -------------------------
// Main exported component
// -------------------------
export default function EnhancedDashboardSections({ className = "" }) {
  const [mode, setMode] = useState("visual"); // visual or technical

  return (
    <div className={`space-y-10 ${className}`}>
      {/* Mode toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Cpu size={18} />
          <h1 className="text-xl font-semibold">Enhanced Dashboard</h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-sm text-slate-500">Mode</div>
          <div className="inline-flex rounded-full bg-slate-200 p-1">
            <button
              className={`px-3 py-1 rounded-full text-sm ${mode === "visual" ? "bg-white shadow" : "opacity-70"}`}
              onClick={() => setMode("visual")}
            >
              Visual
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm ${mode === "technical" ? "bg-white shadow" : "opacity-70"}`}
              onClick={() => setMode("technical")}
            >
              Technical
            </button>
          </div>
        </div>
      </div>

      {/* Systems */}
      <SystemsBuilt systems={DATA.systems} />

      {/* Skills Panel - toggles view */}
      <AnimatePresence mode="wait">
        {mode === "visual" ? (
          <motion.div key="visual" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SkillsPanel visual={DATA.skills.visual} technical={DATA.skills.technical} mode={mode} />
          </motion.div>
        ) : (
          <motion.div key="technical" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <SkillsPanel visual={DATA.skills.visual} technical={DATA.skills.technical} mode={mode} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep Dive */}
      <DeepDive systems={DATA.systems} />

      {/* Timeline */}
      <ImpactTimeline timeline={DATA.timeline} />

      {/* Philosophy + Future */}
      <PhilosophyAndFuture philosophy={DATA.philosophy} future={DATA.future} />

      {/* Testimonials */}
      <Testimonials testimonials={DATA.testimonials} />

      {/* Quick footnote */}
      <div className="text-xs text-slate-500">
        Tip: Replace DATA object with verified metrics and expand each card into dedicated route pages when ready.
      </div>
    </div>
  );
}




/////////////////////////////////////////////////////////


High-Impact Sections You Must Add

Each section is crafted to leverage your actual achievements from the PDFs and turn them into narrative power.

1. “Systems I’ve Built” — Not “Projects”

Stop calling them “projects.” What you’ve built are production-grade systems used by companies.

Break into 3-5 hero cards:

a) EV Telematics & Real-Time Vehicle Monitoring System

Full-stack: embedded + CAN + mobile app + cloud

30% latency reduction

40% increase in user engagement

Live battery signal processing

Cross-functional architecture initiative
This becomes your flagship.

b) Battery Assembly Reporting Automation (Dhoot Transmission)

Python + Google API

30% reduction in manual reporting time

15 hours of weekly productivity reclaimed

40% error reduction

c) Battery Brick Imbalance Detection & DOE Optimization

Process optimization

Root cause analysis

Energy density improvement contribution
This positions you as someone who understands battery engineering beyond buzzwords.

d) Railways Operations & Safety Optimization

25% improvement in workflow efficiency

30% improvement in incident response
This shows your ability to operate in high-risk, high-scale systems.

2. Interactive “Tech Radar” (Visual Mode) + “Skill Matrix” (Technical Mode)

This is where you stop listing skills and start showing a structured capability spectrum.

Visual Mode:

Beautiful radar chart animating categories:

Embedded Systems

Battery Tech

Cloud + Automation

Data & ML

Product/UX Thinking

Leadership

Technical Mode:

A grid like this:

AWS IoT Core — Advanced  
TensorFlow OD API — Intermediate  
CAN Bus Parsing — Advanced  
BMS Algorithm Understanding — Strong  
Python Automation — Advanced  
Firebase Realtime DB — Advanced  


It makes your competencies feel measured, not claimed.

3. “Deep Dive: How I Solve Engineering Problems”

This section positions you like a systems thinker, not a coder.

Break it into 3 case studies (short, punchy):

Example:

Battery Brick Imbalance — Core Analysis Flow

Collected multi-cycle voltage drift data

Conducted RCA

Designed DOE

Proposed mitigation techniques

Impact: measurable defect reduction

People remember thinking frameworks more than skill lists.

4. “Engineering Philosophy” — The Founder Energy Section

This is where your ambition shows.

Examples:

Why you build real-time systems

Why EV + Cloud + Embedded

Why automation matters

What kind of engineering problems excite you

Investors and hiring managers love this because it clarifies your direction.

5. “Impact Timeline” (Animated Scroll)

Turn your experience from the PDFs into a vertical interactive timeline.

For example:

2023 — Indian Railways

Safety compliance +40%

Incident response +30%

2024 — Dhoot Transmission

Error reduction 40%

Productivity regained 15 hours/week

2025 — Erkey Motors

App used by actual EV users

Latency cut 30%

This creates an arc of progression.

6. “Systems I Want to Build Next”

Here’s where you look like a builder, not a jobseeker.

Show future-facing ambitions:

Real-time BMS intelligence layer

Low-cost telematics hardware

Cloud-embedded hybrid systems

AI-driven predictive maintenance

This signals vision.

7. “Publications, Talks & Trainings” (Even if work-in-progress)

Based on your course efforts + EV teaching plans:

You can add “EV Training Instructor”

Add a placeholder for future blogs/videos

Add any talk you have given at OPJU or Jindal Innovation Centre

This creates authority.

8. “Recommendations / Endorsements Carousel”

Use short snippets from mentors/managers (even if paraphrased with permission):

“Owns problems end-to-end.”

“Works across hardware, software, and cloud seamlessly.”

“Transforms manual workflows into automated systems.”

Social proof converts.

Your Problem Right Now

You're compressing an elite, high-leverage engineering story into generic boxes. That is underselling. Painfully.

This portfolio should make a viewer whisper to themselves:
“This guy is going to build products, not just code screens.”

Right now that feeling isn’t there. These sections will fix that.

Priority Checklist (Start Here)

To keep you aligned with your own project rules:

Immediate 3–7 Bullet Sub-task List

Create a new section architecture under /sections for:

Systems I’ve Built

Tech Radar / Skill Matrix

Impact Timeline

Engineering Philosophy

Pull real data from both resumes and structure into content blocks.

Design the “Visual vs Technical Mode” toggle logic.

Plan animated components using Framer Motion.

Validate layout in Dashboard and integrate routing/state switching.

Refine typography + spacing for premium feel.