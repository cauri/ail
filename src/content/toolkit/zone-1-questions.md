---
title: "Zone 1 (Augmenting) Diagnostic Questions"
description: "These questions assess whether individual team members have adopted AI tools as a habitual part of their daily work."
type: "diagnostic"
audience: "facilitator"
section: "diagnostic"
order: 1
---
## Purpose

These questions assess whether individual team members have adopted AI tools as a habitual part of their daily work. Zone 1 competency is demonstrated when AI tool usage persists under pressure --- tight deadlines, production incidents, unfamiliar codebases --- rather than being the first thing dropped when conditions deteriorate. The questions cover engineering, product management, design, QA, and communication activities to ensure assessment spans the full range of roles involved in software production.

## Questions

All questions are answered individually by each team member using the scale below. Every question includes a "This behavior is not part of my role on this team" option for participants whose role does not involve the behavior described. Questions measure observable behavior --- what you actually do, not what you intend to do or believe you should do.

**Core Metric**

1. When working under deadline pressure or in an unfamiliar domain, I use AI tools as part of my workflow rather than reverting to fully manual approaches.

**Additional Questions**

2. I use AI-assisted code completion or generation (GitHub Copilot, Cursor, Claude Code, or equivalent) as a routine part of writing code each working day.

3. When encountering something unfamiliar or unexpected in my work --- unfamiliar code, confusing error messages, unclear domain concepts, ambiguous data, or novel design challenges --- I query an AI assistant as a standard diagnostic step alongside traditional approaches like reading documentation or searching the web.

4. I consciously select my mode of AI engagement based on the task context. *This question is scored as a composite of three sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **4a.** I use different AI approaches for exploratory prototyping than for production work --- treating early-stage exploration as an occasion for rapid iteration with AI, not production-quality output.
    - **4b.** I apply rigorous review to AI-generated code destined for production, treating it as a draft requiring verification rather than finished output.
    - **4c.** I consciously choose my mode of AI engagement based on the task context rather than using the same approach for all tasks.

5. I review and assess AI-generated code before accepting it. *This question is scored as a composite of two sub-items. Sub-items are scored individually and averaged to produce the question composite. This approach provides finer-grained diagnostic information for facilitators while maintaining scoring continuity.*

    - **5a.** I review AI-generated code for correctness and security before accepting it, rather than accepting or rejecting output without examination.
    - **5b.** I verify that AI-generated code aligns with the project's conventions and architectural patterns before accepting it.

6. I use AI tools for my role-specific work: drafting user stories, synthesizing research, preparing stakeholder communications, or summarizing meetings.

7. I use AI to assist with writing and improving tests, documentation, commit messages, or other development artifacts that are frequently skipped or rushed under time pressure.

8. I use AI tools in my production design workflow --- generating design alternatives, creating prototypes, exploring visual variations, or producing wireframes and specifications --- as a regular part of my practice rather than an occasional experiment.

9. I use AI to assist with test case generation, exploratory testing strategies, bug triage, or test data creation as a habitual part of my quality assurance work.

10. I use AI to support product discovery activities --- synthesizing customer research, analyzing market data, generating product hypotheses, or evaluating strategic options --- as a regular part of my product thinking work, not just for producing delivery artifacts like stories and updates.

11. I use AI to support design analysis and evaluation --- synthesizing user research findings, identifying accessibility issues, analyzing information architecture alternatives, or evaluating design patterns --- as a regular part of my design thinking work, not just for generating visual artifacts.

12. When onboarding to a new project, codebase, or domain, I use AI tools to accelerate my ramp-up --- generating summaries of unfamiliar material, querying AI about architecture or domain concepts, or using AI to understand domain-specific terminology and context.

## Scale

| Response | Meaning |
|----------|---------|
| N/A | This behavior is not part of my role on this team |
| 1 | Never |
| 2 | Rarely |
| 3 | Sometimes |
| 4 | Often |
| 5 | Always |

The "N/A" option is visually separated from the frequency scale to make clear that it is not a score --- it indicates that the question does not apply to the respondent's role. See "Interpreting N/A Responses" below for facilitator guidance.

## Notes for Facilitator

### Introducing the Scale and N/A Option

Before participants begin scoring, orient them to the N/A option:

"For each question, score yourself on the 1 to 5 scale based on the past 2-4 weeks. If a question describes work that is not part of your role on this team, select 'N/A --- does not apply to my role.' This is a legitimate response, not a skip. For example, if you do not write code, you would mark N/A on questions about code review. If you do write code, even occasionally, score based on how often you actually do the behavior described."

### What to Watch For

- **Pressure resilience is the key signal.** Many people use AI tools when things are calm and abandon them when deadlines hit. Probe specifically: "When you had that production incident last month, did you use AI tools to help diagnose it? When the deadline was tight on the last release, did your AI tool usage increase, decrease, or stay the same?"

- **Role coverage matters.** If only developers score high but PMs and designers score low, the team has partial adoption. Zone 1 requires broad adoption across roles, not deep adoption in one role. The pattern of N/A responses tells you which roles are represented in the data --- use this to assess whether the team's composite reflects all roles or primarily engineering.

- **Beware of social desirability bias.** Participants may rate themselves higher because they feel they *should* be using AI tools. Anchor responses in specific recent examples: "Think about this past week. On which days did you actually use an AI tool? What did you use it for?"

- **Distinguish habitual from experimental.** Someone who tried Copilot last week scores differently from someone who has used it daily for three months. Ask about consistency over time, not just recent usage.

### Interpreting N/A Responses

N/A responses are valid data, not missing data. They tell the facilitator which questions are relevant to which participants and enable cleaner composite scores.

- **Expected N/A patterns.** Questions 2, 4, and 5 describe code-writing behaviors --- non-engineering participants will typically mark these N/A. Questions 6 and 10 describe product management behaviors; Questions 8 and 11 describe design behaviors; Question 9 describes QA behaviors. Participants whose roles do not include these activities should mark N/A. Questions 1, 3, 7, and 12 describe behaviors applicable across roles and should rarely receive N/A responses.

- **Unexpected N/A responses.** If a participant marks N/A on a question that clearly applies to their role based on what you learned in Discovery, this is a signal worth exploring in discussion --- with curiosity, not correction. Example: "I noticed that some people marked 'does not apply' on Question 7, which is about using AI for tests, documentation, and commit messages. I want to understand that --- is there something about the question that did not fit your work, or is this work that is not part of your current responsibilities?" The goal is to determine whether the N/A reflects a genuine role boundary or is being used to avoid a low score.

- **Composite score calculation.** Exclude N/A responses from the composite calculation for each question. Adjust the denominator accordingly. If more than half of the team marks N/A on a question, the composite for that question has reduced reliability and should be flagged in the report. See [Scoring Thresholds](/toolkit/scoring-thresholds) for detailed guidance on handling N/A responses in composite calculations.

### Common Traps

- **Confusing tool availability with tool usage.** Having a Copilot license is not the same as using Copilot. Having ChatGPT bookmarked is not the same as consulting it regularly.

- **Counting AI usage only as code generation.** AI-assisted work includes using AI for debugging, explaining code, writing tests, reviewing, synthesizing research, and generating design alternatives --- not just generating new code. Ensure participants consider the full range of AI interactions relevant to their role.

- **Overlooking the review question (Question 5).** Participants who accept AI output without review are not demonstrating competency --- they are demonstrating a different problem. Zone 1 competency includes the judgment to evaluate AI output, not just the habit of generating it.

- **Underrepresentation of non-engineering roles.** If non-engineering roles are not present in the diagnostic session, their perspectives will be missing. Ensure these roles participate or are explicitly represented. The N/A option does not compensate for absent roles --- it only handles the case where a role is present but a specific question does not apply.

- **Treating N/A as equivalent to a low score.** N/A means "this is not my work." A score of 1 means "this is my work and I never use AI for it." These are fundamentally different responses. Do not interpret N/A as indicating a competency gap --- it indicates a role boundary.

- **Question 4 sub-items capture distinct behaviors.** Question 4 is split into three sub-items to separate the behavioral components: using different approaches for prototyping vs. production (4a), applying rigorous review to production code (4b), and making conscious mode-selection decisions (4c). Some participants may use AI effectively without using specific terminology like "vibe-coding" or "CHOP." Focus on whether the participant demonstrates the underlying behaviors --- choosing different approaches for exploration vs. production work --- rather than requiring familiarity with these specific terms. Score each sub-item independently; the average produces the Q4 composite.

---

## Related Documentation

- [Baseline Screening](/toolkit/baseline-screening) -- Zone 0 screener administered before these questions
- [Zone 2 Questions](/toolkit/zone-2-questions) -- The next zone questionnaire; administer when Zone 1 scores suggest Zone 2 competency
- [Scoring Thresholds](/toolkit/scoring-thresholds) -- How to calculate composite scores and determine competency stage from these responses
- [Zone 1 Reference](/toolkit/zone-1-augmenting) -- Full Zone 1 definition; provides context for interpreting responses
- [Technique Catalog](/toolkit/technique-catalog) -- Detailed descriptions of vibe-coding, CHOP, and AI-assisted coding referenced in Question 4
- [Workshop Script](/toolkit/workshop-script) -- The facilitation script that administers these questions in the workshop context
- [Discussion Prompts](/toolkit/discussion-prompts) -- Zone 1-specific facilitation prompts for the discussion phase
