---
title: "ACE Quick Reference"
description: "A one-page reference for use during workshops."
section: "reference"
order: 6
---
A one-page reference for use during workshops. Print or keep open alongside the [Workshop Script](/toolkit/workshop-script).

---

## The Four Zones

| Zone | Name | Shift Type | One-Line Definition |
|---|---|---|---|
| 1 | **Augmenting** | Individual skills | Every developer uses AI tools habitually, even under pressure |
| 2 | **Integrating** | Team skills | The team ships code through a shared, evolving agentic workflow |
| 3 | **Accelerating** | Org structure | AI implements; humans specify, review, and orchestrate |
| 4 | **Industrializing** | Org culture | Engineers maintain the AI factory; AI produces the software |

**Progression:** Zones form a single path: 1 → 2 → 3 → 4. Each builds on the previous. Organizations choose their stopping point based on strategy and investment capacity.

---

## Core Metrics

| Zone | Core Metric |
|---|---|
| Zone 1 ★ | Developers habitually use AI coding tools in daily work, including under deadline pressure and in unfamiliar codebases |
| Zone 2 ★ | The team ships AI-verified, production-ready code using a shared agentic workflow that all members contribute to and evolve |
| Zone 3 ★ | Engineers operate as process designers who define specifications, constraints, and verification criteria, and the AI pipeline produces working software that meets those criteria habitually |
| Zone 4 ★ | The organization can reliably specify, produce, evaluate, and deploy AI-generated software at scale, with engineers operating as factory designers |

---

## Competency Stages

| Stage | Average Score | What It Means |
|---|---|---|
| **Learning** | 2.0–2.9 | Inconsistent; behaviors drop under pressure |
| **Proficient** | 3.0–3.9 | Mostly consistent; occasional lapses; self-corrects |
| **Competent** | 4.0–4.9 (threshold not met) | Largely habitual; approaching full competency |
| **Independently Competent** | Meets all 3 threshold criteria | Habitual under stress; can coach others |

---

## Independently Competent: Three-Criterion Threshold

All three must be met **simultaneously**:

1. **Core metric unanimity:** Every team member scores the ★ question **5/Always**
2. **Response distribution:** ≥75% of all individual responses (team × questions) are **5/Always**
3. **Question-level composites:** ≥6 of 7 questions have a composite average of **exactly 5.0**
   *(All zones use 7 questions)*

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
| Context engineering | 3 | Designing what goes into AI context windows at system level |
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
- [What Is ACE?](/toolkit/what-is-ace) -- Conceptual overview of the framework for context on items in this reference
