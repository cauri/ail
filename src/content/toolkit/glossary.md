---
title: "ACE Glossary"
description: "Key terms used throughout the ACE framework, in alphabetical order."
section: "reference"
type: "catalog"
audience: "facilitator"
order: 5
---
Key terms used throughout the ACE framework, in alphabetical order. For full context on any term, follow the cross-references to the relevant zone or concept document.

---

## A

**Artisan**
A practitioner -- typically an engineer, but may also be a PM, designer, or QA specialist -- who is embedded with a client team to model target-zone behaviors through daily work. Artisans must operate at Zone 2 or above in their own practice. Since most client teams begin at Zone 0 or Zone 1, this means Artisans are already practicing the foundational disciplines (TDD, pair programming, continuous integration, small iterations) that make AI-augmented development reliable. Without the humans on the team understanding these engineering basics, they will struggle to master AI-assisted development regardless of tooling. The Artisan demonstrates these practices through pair programming and collaborative delivery rather than through instruction. See [Training Program Overview](/training/program-overview).

**AGENTS.md / CLAUDE.md**
A shared AI configuration file committed to source control. Contains project context, coding standards, architectural constraints, workflow instructions, and team conventions. The primary Zone 2 infrastructure artifact — the team's "AI constitution." See [Zone 2: Integrating](/toolkit/zone-2-integrating).

**AI Engineer**
The evolved role identity for software engineers operating at Zone 3. Distinct from a senior developer who uses AI tools: the AI Engineer designs, maintains, and improves the AI-driven production process rather than writing application code directly. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**AI-assisted coding**
The most rigorous of the three Zone 1 engagement modes. Structured, human-reviewed AI-augmented development for production code. Contrast with vibe-coding and CHOP. See [Technique Catalog](/toolkit/technique-catalog).

---

## B

**Baseline screening**
The quick pre-assessment (3 yes/no questions) used to determine whether a team has sufficient AI tool adoption to warrant a full Zone 1 diagnostic. If all three answers are "no," the organization is at Zone 0 and should begin with foundational investments before proceeding. The screening takes less than 5 minutes and can be answered by an engineering manager or team lead with broad visibility into team practices. See [Baseline Screening](/toolkit/baseline-screening).

**Bimodal distribution**
A score pattern where responses cluster at two distinct levels (e.g., half the team scores 4-5, half scores 1-2) rather than forming a single cluster. Indicates a split in adoption — by role, tenure, or context — that the average score obscures. A bimodal team is not competent regardless of the average. See [Scoring Thresholds](/toolkit/scoring-thresholds).

---

## C

**Collaborative Delivery**
The delivery track of the ACE engagement model, running concurrently with the assessment track from the start. Experienced Artisans embed with the client team as full members — not as advisors sitting in on meetings — to deliver real software together while mentoring through the shared work. Learning happens through the work itself: pair programming on real stories, collaborative design sessions, shared PR reviews, and real-time coaching on practices as they arise naturally in delivery. Distinct from advisory-only or staff-augmentation models: the work is shared, and both delivery and capability transfer are explicit objectives. See [Engagement Model](/toolkit/engagement-model).

**CAT (Continuous Alignment Testing)**
The AI analog of test-driven development. Automated pipelines that verify AI outputs remain consistent, accurate, and aligned with behavioral expectations. No AI-produced feature ships without passing its eval criteria. A Zone 3 core practice. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**Change Capacity**
The finite pool of human adaptability available for organizational change at any given time. Every zone transition competes with the organization's other change initiatives for this capacity. High change saturation does not mean AI adoption should be abandoned -- it means the pace, scope, and ambition of the engagement should be calibrated to what the organization can actually absorb. Change capacity is assessed during discovery through stakeholder interviews and shapes zone target selection, diagnostic scope, and roadmap design. See [Engagement Model](/toolkit/engagement-model) and [How to Choose a Target Zone](/toolkit/choose-target-zone).

**CHOP (Chat-Oriented Programming)**
Interactive, chat-based AI collaboration for coding tasks. One of three Zone 1 engagement modes. More structured than vibe-coding but less formal than AI-assisted coding. See [Technique Catalog](/toolkit/technique-catalog).

**Conditioning (Level 1)**
The first level of the "separate generation from decisioning" framework. Defines what agents work within: the constraints, boundaries, and context that define the agent's operating environment. See [Technique Catalog](/toolkit/technique-catalog).

**Context engineering**
The discipline of deliberately deciding what information goes into AI context windows, how it is structured, and when it is refreshed. Distinct from prompt engineering: context engineering operates at the project or system level, not at the individual-prompt level. Practiced at Zone 2 (session/project level) and Zone 3 (system level). See [Proficiency Catalog](/toolkit/proficiency-catalog).

**Competency**
Habitual behavior under stress. What a team does reliably when conditions are unfavorable -- tight deadlines, production incidents, unfamiliar codebases, organizational pressure. Not knowledge about best practices. Not peak performance on a team's best day. See [Competency vs. Knowledge](/toolkit/competency-vs-knowledge).

**Competency stages**
The four stages within each zone: Emerging, Developing, Established, Exemplary. These stages describe progression toward full competency within a given zone. See [Scoring Thresholds](/toolkit/scoring-thresholds).

**Core metric**
The single most important behavioral question for a zone, marked with a star in the diagnostic questionnaire. The core metric captures the defining behavior of the zone -- the single question that, if answered negatively, means the team has not achieved competency regardless of other scores. See [Scoring Thresholds](/toolkit/scoring-thresholds).

---

## D

**Developing**
The second of the four competency stages within each zone. The team performs the zone's behaviors mostly consistently. Lapses are recognized and self-corrected. Practices are becoming habitual but have not yet been tested by sustained pressure. See [Scoring Thresholds](/toolkit/scoring-thresholds) and [Competency vs. Knowledge](/toolkit/competency-vs-knowledge).

**Discovery**
The process of identifying an organization's current AI adoption state, strategic goals, team readiness, and potential blockers before designing an ACE engagement. Discovery typically includes stakeholder interviews, team surveys, and context analysis. See [Context Analysis Template](/toolkit/context-analysis-template) and [Stakeholder Interview Guide](/toolkit/stakeholder-interview-guide).

**Dual reporting structure**
The design feature that separates diagnostic results into two reports with different audiences: the team report (shared with the team, contains specific scores and improvement recommendations) and the management report (shared with organizational leadership, contains systemic patterns and investment themes — never individual team scores or attribution). This separation is what makes honest participation possible. See [Workshop Script](/toolkit/workshop-script).

**Dual-scoring procedure**
The practice in which the facilitator completes an independent evidence-based rating alongside the team's self-assessment. The facilitator uses the same zone questions and the same 1-5 scale, rating the team based on behavioral evidence that surfaced during the workshop discussion -- specific examples produced, pressure-resilience stories, quality of responses to evidence verification probes, and discrepancies between scores and evidence. Both score sets appear in the team report with transparent reasoning where they diverge. The facilitator's rating does not replace the team's self-assessment; both are reported to allow the reader to form their own view. See [Facilitator Guide](/toolkit/facilitator-guide).

---

## E

**Emerging**
The first of the four competency stages within each zone. The team is actively practicing the zone's behaviors but practice is inconsistent and fragile -- behaviors tend to appear when conditions are favorable and disappear under pressure. See [Scoring Thresholds](/toolkit/scoring-thresholds) and [Competency vs. Knowledge](/toolkit/competency-vs-knowledge).

**Established**
The third of the four competency stages within each zone. The zone's behaviors are habitual for most team members in most situations, including under moderate pressure. Some inconsistency may remain across the team or under sustained stress. This is the practical sustainability threshold for each zone -- the point at which the team can reliably maintain its practices and begin investing in the next zone. See [Scoring Thresholds](/toolkit/scoring-thresholds) and [Competency vs. Knowledge](/toolkit/competency-vs-knowledge).

**Eval harness**
A test suite for AI outputs. Defines what "correct" looks like for a given AI pipeline — the test cases, the scoring rubrics, the acceptable thresholds. Engineers treat eval harness design as a core Zone 3 engineering competency. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**Exemplary**
The highest of the four competency stages within a zone. A team has achieved Exemplary when all three threshold criteria are met simultaneously: zone composite average ≥ 4.7, standard deviation across all individual responses ≤ 0.5, and no single question composite below 4.0. Teams at Exemplary can coach others, innovate within the zone, and sustain practices under pressure. See [Scoring Thresholds](/toolkit/scoring-thresholds).

**Evidence verification probe**
A facilitation technique used to test whether a high self-reported score (4 or 5) is supported by specific, recent behavioral evidence. Distinct from discussion prompts, which explore score patterns: evidence verification probes directly ask the team to produce a concrete example. If the team cannot recall a specific instance, the inability itself is evidence that the score may reflect aspiration rather than habitual behavior. The facilitator records the discrepancy and includes both the team's score and the evidence-based assessment in the team report. Each zone has role-specific verification probes. See [Facilitator Guide](/toolkit/facilitator-guide).

**Externalized plan**
A feature plan or implementation design written to a markdown file in the repository rather than held in the AI's context window. Serves as both human documentation and agent context for multi-step implementations. A Zone 2 practice. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## F

**Facilitator**
The person who conducts an ACE diagnostic workshop with a team. The facilitator guides the team through the self-assessment process, probes for behavioral evidence, manages group dynamics, ensures honest reflection, and produces the team report. Facilitators must be trained in the ACE diagnostic methodology and the mutual learning facilitation approach. See [Workshop Script](/toolkit/workshop-script) and [Training Program Overview](/training/program-overview).

**Fresh session**
Starting a new agent session with no prior context about an implementation before performing code review. Ensures the review is independent of the implementation decisions rather than anchored to them. A Zone 2 practice. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## L

**Leading indicator**
A metric that predicts future competency outcomes rather than measuring current competency directly. Leading indicators change before the competency state changes, making them useful for early detection of progress or regression. Examples include shared configuration adoption rate (predicts Zone 2 competency) and mandatory feedback loop coverage (predicts code quality outcomes). Contrast with lagging indicators, which confirm outcomes after they occur. See [Zone-Specific Metrics](/toolkit/zone-specific-metrics) and [Metrics Tree](/toolkit/metrics-tree).

---

## M

**Management report**
The report delivered to organizational leadership following a diagnostic engagement. Contains systemic patterns across teams and investment recommendations. Never contains individual team scores or attribution. See [Management Report Template](/toolkit/management-report-template).

**Mandatory feedback loops**
Pre-commit hooks or equivalent CI/CD gates that require AI-generated code to pass compiler checks, linter rules, and automated tests before commit. Non-negotiable Zone 2 infrastructure — not optional or aspirational, but enforced. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## N

**North Star Metric**
The single metric that best captures the core capability being measured across the ACE framework: AI-Augmented Development Throughput — the rate at which teams deliver validated, production-ready software per unit of human effort, enabled by AI augmentation. "Validated" is critical: raw output volume without quality is not throughput. The metrics tree decomposes this North Star Metric into zone-level leading indicators, lagging indicators, and counter-metrics. See [Metrics Tree](/toolkit/metrics-tree).

---

## O

**Observability**
Instrumentation of AI interactions to capture traces of tool calls, inputs, retrieved documents, intermediate outputs, timing, and costs. Enables engineers to diagnose pipeline behavior by examining traces rather than guessing, and supports drift monitoring. A Zone 3 practice. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**One Team, One Setup**
The Zone 2 organizational principle that all team members use a shared AI configuration rather than individual personal setups. Personal configurations may be more effective individually, but a shared setup enables team-level quality, consistency, and evolution. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

**Organizational investment**
The structural changes, policy changes, resource allocation, and management behavior changes that are prerequisites for a zone transition to succeed — not optional additions but necessary conditions that the organization must put in place to enable and sustain practice change at each zone. Individual training creates the capability; organizational investment creates the environment where that capability can be practiced and maintained. The most common failure mode in AI adoption is investing in individuals while leaving the organizational system unchanged: restrictive policies, unsupportive processes, and management indifference cause new practices to wither regardless of how well individuals are trained. Each zone transition requires specific, identified organizational investments. See [Organizational Investments](/toolkit/organizational-investments).

---

## P

**Plan/Code/Verify**
The three-phase agentic coding workflow that is the core Zone 2 practice. Plan: gather context, construct a plan, externalize it. Code: guide the agent through plan-driven implementation with incremental progress. Verify: check correctness, quality, and safety. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

**The Prime Directive**
The defining statement of the Zone 3 identity shift: *"You are no longer writing the code. You are designing the process by which code is produced."* See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**Proficiency**
A specific, observable behavior practiced habitually — not occasionally or only when convenient. Competency at each zone is demonstrated when proficiencies persist under pressure. See [Proficiency Catalog](/toolkit/proficiency-catalog).

**Progressive competency model**
The design principle that all four zones form a single linear progression (Zone 1 → Zone 2 → Zone 3 → Zone 4), with each zone building on the previous. Organizations choose their stopping point based on strategic context, investment capacity, and risk appetite. Higher zones are not universally better -- they represent deeper organizational commitment justified only in certain contexts. See [Progressive Competency Model](/toolkit/progressive-competency-model).

**Prompt versioning**
Treating prompts that drive production-relevant AI behavior with the same discipline as application code: versioned, reviewed, and deployed through a formal change process. A Zone 3 practice. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**Re-diagnostic**
A follow-up diagnostic assessment conducted after an initial diagnostic and a period of investment and practice. Re-diagnostics measure whether the team has progressed, regressed, or maintained its competency stage. The recommended interval between diagnostics is 90 days for teams actively investing in zone transition, or 6-12 months for maintenance assessments. See [Sample Team Report](/toolkit/sample-team-report).

---

## S

**"Separate generation from decisioning"**
A Zone 3 framework for structuring AI involvement in decisions at four levels: Conditioning (define what agents work within), Authority (define who or what can approve AI-generated actions), Workflows (orchestrated multi-agent pipelines), and Evals (systematic quality evaluation at scale). See [Technique Catalog](/toolkit/technique-catalog).

**Shadow IT**
AI tools used by team members that are not officially sanctioned by the organization. A key gap to identify during discovery — the difference between official policy and actual usage patterns. See [Context Analysis Template](/toolkit/context-analysis-template).

**Stopping point (choose your stopping point)**
The zone an organization deliberately selects as its destination based on strategic analysis, investment capacity, and organizational context. Not every organization should target the highest zone — higher zones represent deeper organizational commitment justified only in certain contexts. A deeply competent Zone 2 organization that chose its destination through careful analysis is in a stronger position than a Zone 4 organization that overextended. Zone 2 is the typical near-term target for most organizations; Zones 3 and 4 require progressively larger investments justified by strategic context. See [Progressive Competency Model](/toolkit/progressive-competency-model) and [How to Choose a Target Zone](/toolkit/choose-target-zone).

**Skills / commands / subagents**
Reusable AI tools built by the team for repetitive workflows. For example: a `/commit` command that follows team conventions, a `/review` skill that applies team review criteria. A Zone 2 practice. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## T

**Team report**
The report delivered directly to the diagnostic team following a diagnostic engagement. Contains specific zone and competency stage assessment, score distributions, discussion highlights, individual proficiency analysis, and investment recommendations. Confidential to the team — not passed to organizational leadership. See [Team Report Template](/toolkit/team-report-template).

---

## V

**Vibe-coding**
The most exploratory Zone 1 engagement mode: AI-driven generation for prototypes and experiments where the developer accepts or rejects generated code with minimal review. Appropriate for low-stakes exploration; inappropriate for production code. Contrast with CHOP and AI-assisted coding. See [Technique Catalog](/toolkit/technique-catalog).

**VTDD (Vibe TDD)**
A Zone 2 testing practice in which the agent stubs tests based on requirements, the human reviews the stubs for intent misunderstandings, and then tests are collaboratively completed. Catches specification errors before implementation rather than after. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## Z

**Zone**
A defined stage of AI-augmented software development capability, characterized by a specific set of proficiencies (observable behaviors), organizational investments (what the organization must provide), and benefits (what the organization receives). Zones are destinations, not levels — higher is not universally better. See [What Is ACE?](/toolkit/what-is-ace).

**Zone 0 (Baseline)**
The starting state before any AI tool adoption. Teams in Zone 0 rely entirely on traditional development workflows. Some individuals may have experimented with AI tools, but usage is sporadic, unsupported by the organization, and not integrated into daily work. Zone 0 is the starting point for all ACE assessments. See [Zone 1: Augmenting](/toolkit/zone-1-augmenting) for the transition out of Zone 0 and [Baseline-to-Zone-1 Roadmap](/toolkit/baseline-to-zone-1) for the progression plan.

---

## Related Documentation

- [What Is ACE?](/toolkit/what-is-ace) -- Conceptual overview of the framework; context for all terms defined here
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Full definition of Zone 1 proficiencies, investments, and benefits
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Full definition of Zone 2 proficiencies, investments, and benefits
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Full definition of Zone 3 proficiencies, investments, and benefits
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Full definition of Zone 4 proficiencies, investments, and benefits
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- Definitions of competency stages, thresholds, and the frequency scale referenced by terms like "competency" and "Exemplary"
- [Proficiency Catalog](/toolkit/proficiency-catalog) -- Complete catalog of all proficiencies across all zones; most proficiency terms defined here have entries there
- [Technique Catalog](/toolkit/technique-catalog) -- Complete catalog of techniques; vibe-coding, CHOP, Plan/Code/Verify, and other technique terms defined here have entries there
- [Quick Reference](/toolkit/quick-reference) -- One-page summary of zones, competency stages, and key terms for use during workshops
