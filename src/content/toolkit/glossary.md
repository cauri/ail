---
title: "ACE Glossary"
description: "Key terms used throughout the ACE framework, in alphabetical order."
section: "reference"
order: 5
---
Key terms used throughout the ACE framework, in alphabetical order. For full context on any term, follow the cross-references to the relevant zone or concept document.

---

## A

**AGENTS.md / CLAUDE.md**
A shared AI configuration file committed to source control. Contains project context, coding standards, architectural constraints, workflow instructions, and team conventions. The primary Zone 2 infrastructure artifact — the team's "AI constitution." See [Zone 2: Integrating](/toolkit/zone-2-integrating).

**AI Engineer**
The evolved role identity for software engineers operating at Zone 3. Distinct from a senior developer who uses AI tools: the AI Engineer designs, maintains, and improves the AI-driven production process rather than writing application code directly. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**AI-assisted coding**
The most rigorous of the three Zone 1 engagement modes. Structured, human-reviewed AI-augmented development for production code. Contrast with vibe-coding and CHOP. See [Technique Catalog](/toolkit/technique-catalog).

---

## B

**Bimodal distribution**
A score pattern where responses cluster at two distinct levels (e.g., half the team scores 4-5, half scores 1-2) rather than forming a single cluster. Indicates a split in adoption — by role, tenure, or context — that the average score obscures. A bimodal team is not competent regardless of the average. See [Scoring Thresholds](/toolkit/scoring-thresholds).

---

## C

**CAT (Continuous Alignment Testing)**
The AI analog of test-driven development. Automated pipelines that verify AI outputs remain consistent, accurate, and aligned with behavioral expectations. No AI-produced feature ships without passing its eval criteria. A Zone 3 core practice. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**CHOP (Chat-Oriented Programming)**
Interactive, chat-based AI collaboration for coding tasks. One of three Zone 1 engagement modes. More structured than vibe-coding but less formal than AI-assisted coding. See [Technique Catalog](/toolkit/technique-catalog).

**Conditioning (Level 1)**
The first level of the "separate generation from decisioning" framework. Defines what agents work within: the constraints, boundaries, and context that define the agent's operating environment. See [Technique Catalog](/toolkit/technique-catalog).

**Context engineering**
The discipline of deliberately deciding what information goes into AI context windows, how it is structured, and when it is refreshed. Distinct from prompt engineering: context engineering operates at the project or system level, not at the individual-prompt level. Practiced at Zone 2 (session/project level) and Zone 3 (system level). See [Proficiency Catalog](/toolkit/proficiency-catalog).

**Core metric**
The single most important behavioral question for a zone, marked with a star in the diagnostic questionnaire. All team members must individually rate the core metric 5/Always for the team to achieve Exemplary status in that zone. See [Scoring Thresholds](/toolkit/scoring-thresholds).

---

## D

**Dual reporting structure**
The design feature that separates diagnostic results into two reports with different audiences: the team report (shared with the team, contains specific scores and improvement recommendations) and the management report (shared with organizational leadership, contains systemic patterns and investment themes — never individual team scores or attribution). This separation is what makes honest participation possible. See [Workshop Script](/toolkit/workshop-script).

---

## E

**Eval harness**
A test suite for AI outputs. Defines what "correct" looks like for a given AI pipeline — the test cases, the scoring rubrics, the acceptable thresholds. Engineers treat eval harness design as a core Zone 3 engineering competency. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**Externalized plan**
A feature plan or implementation design written to a markdown file in the repository rather than held in the AI's context window. Serves as both human documentation and agent context for multi-step implementations. A Zone 2 practice. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## F

**Competency**
Habitual behavior under stress. What a team does reliably when conditions are unfavorable — tight deadlines, production incidents, unfamiliar codebases, organizational pressure. Not knowledge about best practices. Not peak performance on a team's best day. See [Competency vs. Knowledge](/toolkit/competency-vs-knowledge).

**Competency stages**
The four stages within each zone: Emerging, Developing, Established, Exemplary. These stages describe progression toward full competency within a given zone. See [Scoring Thresholds](/toolkit/scoring-thresholds).

**Fresh session**
Starting a new agent session with no prior context about an implementation before performing code review. Ensures the review is independent of the implementation decisions rather than anchored to them. A Zone 2 practice. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## M

**Exemplary**
The highest of the four competency stages within a zone. A team has achieved Exemplary when all three threshold criteria are met simultaneously: zone composite average ≥ 4.7, standard deviation across all individual responses ≤ 0.5, and no single question composite below 4.0. Teams at Exemplary can coach others, innovate within the zone, and sustain practices under pressure. See [Scoring Thresholds](/toolkit/scoring-thresholds).

---

## M

**Management report**
The report delivered to organizational leadership following a diagnostic engagement. Contains systemic patterns across teams and investment recommendations. Never contains individual team scores or attribution. See [Management Report Template](/toolkit/management-report-template).

**Mandatory feedback loops**
Pre-commit hooks or equivalent CI/CD gates that require AI-generated code to pass compiler checks, linter rules, and automated tests before commit. Non-negotiable Zone 2 infrastructure — not optional or aspirational, but enforced. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

---

## O

**Observability**
Instrumentation of AI interactions to capture traces of tool calls, inputs, retrieved documents, intermediate outputs, timing, and costs. Enables engineers to diagnose pipeline behavior by examining traces rather than guessing, and supports drift monitoring. A Zone 3 practice. See [Zone 3: Accelerating](/toolkit/zone-3-accelerating).

**One Team, One Setup**
The Zone 2 organizational principle that all team members use a shared AI configuration rather than individual personal setups. Personal configurations may be more effective individually, but a shared setup enables team-level quality, consistency, and evolution. See [Zone 2: Integrating](/toolkit/zone-2-integrating).

**Organizational investment**
Structural changes, policy changes, resource allocation, and management behavior changes required for a zone transition to succeed. Contrasts with individual training, which is necessary but insufficient. Each zone transition requires specific organizational investments, not just team-level skills development. See [Organizational Investments](/toolkit/organizational-investments).

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

---

## S

**"Separate generation from decisioning"**
A Zone 3 framework for structuring AI involvement in decisions at four levels: Conditioning (define what agents work within), Authority (define who or what can approve AI-generated actions), Workflows (orchestrated multi-agent pipelines), and Evals (systematic quality evaluation at scale). See [Technique Catalog](/toolkit/technique-catalog).

**Shadow IT**
AI tools used by team members that are not officially sanctioned by the organization. A key gap to identify during discovery — the difference between official policy and actual usage patterns. See [Context Analysis Template](/toolkit/discovery/context-analysis-template).

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
