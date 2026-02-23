---
title: "Zone 1 (Augmenting) Diagnostic Questions"
description: "These questions assess whether individual team members have adopted AI tools as a habitual part of their daily work."
section: "diagnostic"
order: 1
---
## Purpose

These questions assess whether individual team members have adopted AI tools as a habitual part of their daily work. Zone 1 competency is demonstrated when AI tool usage persists under pressure --- tight deadlines, production incidents, unfamiliar codebases --- rather than being the first thing dropped when conditions deteriorate. The questions cover engineering, product management, design, QA, and communication activities to ensure assessment spans the full range of roles involved in software production.

## Questions

All questions are answered on a 1-5 frequency scale (see Scale below). Each team member answers individually. Questions measure observable behavior --- what people actually do, not what they intend to do or believe they should do.

**Core Metric**

1. When working under deadline pressure or in an unfamiliar codebase, team members use AI coding tools (copilot, chat assistants, code generation) as part of their workflow rather than reverting to fully manual approaches.

**Additional Questions**

2. Developers use AI-assisted code completion or generation (GitHub Copilot, Cursor, Claude Code, or equivalent) as a routine part of writing code each working day.

3. When encountering unfamiliar code, error messages, or unexpected behavior, team members query an AI assistant as a standard diagnostic step alongside traditional approaches like reading documentation or searching the web.

4. Developers select the appropriate mode of AI engagement for the task at hand --- distinguishing between vibe-coding for exploratory prototyping, CHOP (Chat-Oriented Programming) for interactive coding tasks, and AI-assisted coding with rigorous review for production work.

5. Developers review and assess AI-generated code for correctness, security, and alignment with project conventions before accepting it, rather than accepting or rejecting output without examination.

6. Product managers and other non-engineering team members use AI tools for their role-specific work: drafting user stories, synthesizing research, preparing stakeholder communications, or summarizing meetings.

7. Team members use AI to assist with writing and improving tests, documentation, commit messages, or other development artifacts that are frequently skipped or rushed under time pressure.

8. Designers and UX practitioners use AI tools in their workflow --- generating design alternatives, synthesizing user research, creating prototypes, or analyzing usability data --- as a regular part of their practice rather than an occasional experiment.

9. QA team members use AI to assist with test case generation, exploratory testing strategies, bug triage, or test data creation as a habitual part of their quality assurance work.

10. When onboarding to a new project, codebase, or domain, team members across all roles use AI tools to accelerate their ramp-up --- querying AI about architecture decisions, generating summaries of unfamiliar code, or using AI to understand domain-specific terminology.

## Scale

1 = Never | 2 = Rarely | 3 = Sometimes | 4 = Often | 5 = Always

## Notes for Facilitator

### What to Watch For

- **Pressure resilience is the key signal.** Many teams use AI tools when things are calm and abandon them when deadlines hit. Probe specifically: "When you had that production incident last month, did you use AI tools to help diagnose it? When the deadline was tight on the last release, did your AI tool usage increase, decrease, or stay the same?"

- **Role coverage matters.** If only developers score high but PMs and designers score low, the team has partial adoption. Zone 1 requires broad adoption across roles, not deep adoption in one role.

- **Beware of social desirability bias.** Team members may rate themselves higher because they feel they *should* be using AI tools. Anchor responses in specific recent examples: "Think about this past week. On which days did you actually use an AI tool? What did you use it for?"

- **Distinguish habitual from experimental.** A developer who tried Copilot last week scores differently from one who has used it daily for three months. Ask about consistency over time, not just recent usage.

### Common Traps

- **Confusing tool availability with tool usage.** Having a Copilot license is not the same as using Copilot. Having ChatGPT bookmarked is not the same as consulting it regularly.

- **Counting AI usage only as code generation.** AI-assisted coding includes using AI for debugging, explaining code, writing tests, and reviewing --- not just generating new code. Ensure team members consider the full range of AI interactions.

- **Overlooking the review question (Question 5).** Teams that accept AI output without review are not demonstrating competency --- they are demonstrating a different problem. Zone 1 competency includes the judgment to evaluate AI output, not just the habit of generating it.

- **PM and design underrepresentation.** If non-engineering roles are not present in the diagnostic session, their perspectives will be missing. Ensure these roles participate or are explicitly represented.

---

## Related Documentation

- [Baseline Screening](/toolkit/baseline-screening) -- Zone 0 screener administered before these questions
- [Zone 2 Questions](/toolkit/zone-2-questions) -- The next zone questionnaire; administer when Zone 1 scores suggest Zone 2 competency
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to calculate composite scores and determine competency stage from these responses
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Full Zone 1 definition; provides context for interpreting responses
- [Technique Catalog](/toolkit/technique-catalog) -- Detailed descriptions of vibe-coding, CHOP, and AI-assisted coding referenced in Question 4
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that administers these questions in the workshop context
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone 1-specific facilitation prompts for the discussion phase
