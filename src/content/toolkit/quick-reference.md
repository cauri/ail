---
title: "AIL Quick Reference"
description: "A one-page reference for use during workshops."
section: "reference"
type: "diagnostic"
audience: "facilitator"
order: 6
---
A one-page reference for use during workshops. Print or keep open alongside the [Workshop Script](/toolkit/workshop-script).

---

![VA-1: Zone Progression Diagram](/images/zone-progression-diagram.svg)

![VA-2: Scoring Threshold Decision Tree](/images/scoring-threshold-decision-tree.svg)

## The Four Zones

| Zone | Name | Shift Type | One-Line Definition |
|---|---|---|---|
| 1 | **Augmenting** | Tool adoption | Every team member uses AI tools habitually, even under pressure |
| 2 | **Integrating** | Workflow integration | The team ships code through a shared, evolving agentic workflow |
| 3 | **Accelerating** | Engineering identity | AI implements; humans specify, review, and orchestrate |
| 4 | **Industrializing** | Production model | The multi-role team maintains the AI factory; AI produces the software |

**Progression:** Zones form a single path: 1 → 2 → 3 → 4. Each builds on the previous. Organizations choose their stopping point based on strategy and investment capacity.

---

## Core Metrics

| Zone | Core Metric |
|---|---|
| Zone 1 ★ | All team members (developers, PMs, designers, QA) habitually use AI tools in their daily work, including under deadline pressure |
| Zone 2 ★ | The team ships AI-verified, production-ready code using a shared agentic workflow that all members contribute to and evolve |
| Zone 3 ★ | Engineers operate as process designers, PMs as behavioral specifiers, designers as design systems architects, and QA as evaluation pipeline specialists; the AI pipeline produces software that meets all role-defined criteria habitually |
| Zone 4 ★ | The organization reliably specifies, produces, evaluates, and deploys AI-generated software at scale, with all production roles operating in factory functions |

---

## Competency Stages

| Stage | What It Means | Average Score |
|---|---|---|
| **Emerging** | Inconsistent; behaviors drop under pressure | 2.0–2.9 |
| **Developing** | Mostly consistent; occasional lapses; self-corrects | 3.0–3.9 |
| **Established** | Largely habitual; reliable competency; some individual variation remains | 4.0–4.9 (threshold not met) |
| **Consistent** | Meets all 3 quantitative threshold criteria uniformly | Meets all 3 threshold criteria |
| **Exemplary** | Consistent + coaching capability, contextual adaptation, practice innovation | Consistent + facilitator qualitative assessment |

---

## Consistent and Exemplary: Three-Criterion Threshold

All three must be met **simultaneously** for Consistent:

1. **High composite average:** Zone composite average ≥ **4.7**
2. **Response consistency:** Standard deviation across all individual responses ≤ **0.5**
3. **No weak links:** Every question composite ≥ **4.0**

**Exemplary** requires meeting all three Consistent criteria **plus** facilitator-assessed qualitative depth: coaching capability, contextual adaptation, and practice innovation within the zone. Consistent is a positive, legitimate classification -- not "almost Exemplary."

---

## Frequency Scale

| Score | Label | Meaning |
|---|---|---|
| 1 | Never | The behavior does not occur |
| 2 | Rarely | Occurs occasionally; not regular practice |
| 3 | Sometimes | Moderate frequency; inconsistent |
| 4 | Often | Regular practice; occasional lapses |
| 5 | **Always** | Habitual; persists even under pressure |

**Probe for 5:** "Can you describe a time last week when you did this? And a time when you didn't?"

---

## Key Vocabulary

| Term | Zone | Definition |
|---|---|---|
| Vibe-coding | 1 | Exploratory AI generation for prototypes; AI-driven, low review |
| CHOP | 1 | Chat-Oriented Programming; interactive AI collaboration |
| AI-assisted coding | 1 | Rigorous, human-reviewed AI-augmented development |
| Plan/Code/Verify | 2 | Three-phase agentic workflow: plan → agent implements → verify |
| AGENTS.md / CLAUDE.md | 2 | Shared AI configuration committed to source control |
| Mandatory feedback loops | 2 | Pre-commit hooks or CI gates: compiler + linter + tests |
| VTDD | 2 | Vibe TDD: agent stubs tests from requirements, human reviews intent |
| One Team, One Setup | 2 | All team members use the shared configuration |
| The Prime Directive | 3 | "You are no longer writing the code. You are designing the process by which code is produced." |
| CAT | 3 | Continuous Alignment Testing: automated eval pipeline for AI outputs |
| Eval harness | 3 | Test suite for an AI pipeline; defines what "correct" looks like |
| Context engineering | 2, 3 | Designing what goes into AI context windows; starts with shared configuration (Zone 2), extends to system-level pipeline design (Zone 3) |
| Observability | 3 | Tracing AI interactions for diagnostics and drift monitoring |

---

## Dual Reporting: What Goes Where

| Report | Audience | Contains | Does NOT Contain |
|---|---|---|---|
| **Team Report** | The assessed team | Zone assessment, scores, strengths, investments | — |
| **Management Report** | Organizational leadership | Systemic patterns, investment themes | Individual team scores or attribution |

---

## Common Facilitation Probes

- **Pressure probe:** "Think about the last sprint with a hard deadline. Did this practice hold?"
- **Typical Tuesday:** "What does this look like on a normal Tuesday — not your best day, not a crisis?"
- **Evidence request:** "Can you walk me through the last time this actually happened?"
- **Low-scorer first:** "I see a range of scores. Let me start with the lower end — what are you seeing?"
- **Role check (Zone 1):** "Let me check in with each of you individually. [Name], what does your AI usage look like when you're in a complex debugging session?"
- **Zone 2 shared vs. individual:** "Does your whole team use the same AGENTS.md, or does each person have their own setup?"
- **Zone 2 mandatory vs. aspirational:** "What happens if someone commits code that fails the linter?"
- **Zone 3 specification default:** "Do team members define specifications rather than write implementations as their default mode? When time pressure hits, do they reach for the specification or the keyboard?"
- **PM discovery probe (Zone 1):** "When you were preparing for that last product decision, did you use AI to help synthesize the customer data? What did that look like?"
- **Design analysis probe (Zone 1):** "When you were exploring design options for the last feature, did you use AI to help evaluate alternatives or analyze user research? Walk me through it."
- **QA strategy probe (Zone 1):** "When you were planning test coverage for the last release, did you use AI to help identify edge cases or design your test strategy?"

---

*Full scoring methodology: [Scoring Thresholds](/toolkit/scoring-thresholds)*
*Full facilitation guidance: [Workshop Script](/toolkit/workshop-script)*

---

## Related Documentation

- [Workshop Script](/toolkit/workshop-script) -- Full facilitation script; this quick reference is the companion for use during the workshop itself
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- Full competency stage definitions and threshold criteria summarized in the Competency Stages table above
- [Glossary](/toolkit/glossary) -- Expanded definitions for all terms abbreviated in this reference
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Full Zone 1 definition with complete proficiency descriptions and investment detail
- [Zone 2 Reference](/toolkit/zone-2-integrating) -- Full Zone 2 definition with complete proficiency descriptions and investment detail
- [Zone 3 Reference](/toolkit/zone-3-accelerating) -- Full Zone 3 definition with complete proficiency descriptions and investment detail
- [Zone 4 Reference](/toolkit/zone-4-industrializing) -- Full Zone 4 definition with complete proficiency descriptions and investment detail
- [What Is AIL?](/toolkit/what-is-ail) -- Conceptual overview of the framework for context on items in this reference
